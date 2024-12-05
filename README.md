# node-simdb

A file database simulation using NodeJS and VanillaJS with a CUD operation for `USERS` table.

## API Endpoints

This API provides endpoints for managing users.

> Base URL: http://localhost:3333

### `GET /users`

Description: Retrieves a list of users.

Optional Query Parameter: search - Filter users by name or email.

Example:
`curl http://localhost:3333/users`
`curl http://localhost:3333/users?search=john`

### `POST /users`

Description: Creates a new user.

Request Body:

```JSON
{
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

Example:
`curl -X POST http://localhost:3333/users -H "Content-Type: application/json" -d '{ "name": "John Doe", "email": "johndoe@example.com" }'`

#### `DELETE /users/:id`

Description: Deletes a user by ID.

Example:
`curl -X DELETE http://localhost:3333/users/12345`

### `PUT /users/:id`

Description: Updates a user by ID.

Request Body:

```JSON
{
  "name": "Jane Doe",
  "email": "janedoe@example.com"
}
```

Example:
`curl -X PUT http://localhost:3333/users/12345 -H "Content-Type: application/json" -d '{ "name": "Jane Doe", "email": "janedoe@example.com" }'`

Note: Replace 12345 with the actual user ID in the DELETE and PUT requests.
