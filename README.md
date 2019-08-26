# GraphQL Example To write Blog

- Author : [Seolhun](https://github.com/Seolhun)
- Date : 2017.04.04

## How to run

### Server Dev

```bash
cd server && yarn dev

## Running localhost:5000/graphql
```

### Client Dev

```bash
cd client && yarn dev

## Running localhost:3000
```

### Graphiql

> [Access Graphiql](http://localhost:7000/graphql)

```gql
query {
  users {
    id
    email
    name
    birth
  }
}
```
