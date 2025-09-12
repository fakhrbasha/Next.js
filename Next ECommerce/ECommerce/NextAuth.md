# next-auth

- Next Full-stack web application not only font

### create api using next

#### Let's Start

1. in app create folder names `api`
2. in `api` folder create another folder named `users`
3. in `users` cerate file named `route.ts`

- now api endpoint `localhost:3000/api/users`
- `localhost:3000` : base url

4. in `route.ts`

- create method `export async function GET(){}`

```ts
export async function GET() {
  return {
    name: 'ahmed',
    email: 'ahmed@gmail.com',
  };
}
```

- has error
- api return json data
- use `NextResponse.json()`

```ts
export async function GET() {
  return NextResponse.json({
    name: 'ahmed',
    email: 'ahmed@gmail.com',
  });
}
```
