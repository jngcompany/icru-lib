[**@jngcompany/icru-lib**](../README.md)

***

[@jngcompany/icru-lib](../globals.md) / useListQuery

# Function: useListQuery()

> **useListQuery**\<`T`\>(`params`, `firestore`): [`UseListQueryResult`](../interfaces/UseListQueryResult.md)\<`T`\>

Firestore 컬렉션에서 페이지네이션된 데이터를 조회하는 React 훅

## Type Parameters

• **T** *extends* [`Doc`](../interfaces/Doc.md)\<`T`\>

문서 타입 (Doc 인터페이스를 확장해야 함)

## Parameters

### params

[`UseListQueryParams`](../interfaces/UseListQueryParams.md)

쿼리 파라미터

### firestore

`Firestore`

Firestore 인스턴스

## Returns

[`UseListQueryResult`](../interfaces/UseListQueryResult.md)\<`T`\>

UseListQueryResult 객체
- items: 현재 페이지의 문서 목록
- page: 현재 페이지 번호
- pages: 전체 페이지 수
- total: 전체 문서 수
- error: 에러 객체 (있는 경우)
- fetch: 데이터를 다시 불러오는 함수

## Example

```typescript
// 사용자 인터페이스 정의
interface User extends Doc<User> {
  name: string;
  email: string;
  status: 'active' | 'inactive';
}

// 훅 사용 예시
function UserList() {
  const { items, page, pages, total, error, fetch } = useListQuery<User>({
    name: 'users',
    size: 10,
    fields: ['name', 'email', 'status'],
    where: [
      { field: 'status', operator: '==', value: 'active' }
    ],
    deleted: false,
    enabled: true
  }, firestore);

  // 에러 처리
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // 데이터 렌더링
  return (
    <div>
      <h2>Users ({total})</h2>
      <ul>
        {items.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
      <div>
        Page {page + 1} of {pages}
        <button onClick={() => fetch({ page: page - 1 })} disabled={page === 0}>
          Previous
        </button>
        <button onClick={() => fetch({ page: page + 1 })} disabled={page >= pages - 1}>
          Next
        </button>
      </div>
    </div>
  );
}
```

## Defined in

[hooks/useListQuery.tsx:150](https://github.com/jngcompany/icru-lib/blob/d5809ceca7cec295ab2df61cd05dc96c0f11bd66/src/hooks/useListQuery.tsx#L150)
