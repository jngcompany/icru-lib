/*
 * SPDX-FileCopyrightText: © 2024, 주식회사 지음과깃듬 <jngcompany.co.kr | asanobm@outlook.com>
 * SPDX-License-Identifier: UNLICENSED
 */

import {useQuery, UseQueryResult} from '@tanstack/react-query'
import {doc, Firestore, getDoc, onSnapshot} from 'firebase/firestore'
import {Doc} from '../interfaces/Doc'
import {UseDocParams} from '../interfaces/UseDocParams'
import {useEffect, useState} from 'react'

/**
 * 단일 문서 조회를 위한 커스텀 훅 (실시간 업데이트 지원)
 *
 * @param params - 컬렉션 이름과 문서 ID를 포함한 파라미터
 * @param firestore - Firestore 인스턴스
 * @returns UseQueryResult - 문서 조회 쿼리 결과
 */
export function useDoc<T>(params: UseDocParams, firestore: Firestore): UseQueryResult<Doc<T> | null, Error> {
  const [realtimeData, setRealtimeData] = useState<Doc<T> | null>(null);

  useEffect(() => {
    if (!params.id || params.enabled === false || !params.subscribe) return;

    // 실시간 구독 설정
    const docRef = doc(firestore, params.name, params.id);
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      if (!snapshot.exists()) {
        setRealtimeData(null);
        return;
      }
      setRealtimeData({
        id: snapshot.id,
        ...snapshot.data()
      } as Doc<T>);
    }, (error) => {
      console.error('Realtime subscription error:', error);
    });

    // 컴포넌트 언마운트 시 구독 해제
    return () => unsubscribe();
  }, [params.id, params.name, firestore, params.enabled, params.subscribe]);

  return useQuery<Doc<T> | null, Error>({
    queryKey: [params.name, params.id],
    queryFn: async () => {
      const docRef = doc(firestore, params.name, params.id)
      const docSnap = await getDoc(docRef)
      if (!docSnap.exists()) {
        return null
      }
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as Doc<T>
    },
    enabled: !!params.id,
    retry: 0,
    initialData: realtimeData // 실시간 데이터를 초기 데이터로 사용
  })
}
