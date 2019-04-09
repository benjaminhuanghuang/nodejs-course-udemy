## Features
- Mongoose, Validation, Bcrypt, Schema middleware
- API CRUD user and task
- Auth, Express middleware, JWT 


## Postman testing for user
- Create user: POST /users
```
{
	"age":99,
	"name":"Benjamin",
	"email":"ben@gmail.com",
	"password":"abcd1234"
}
```

- List users: GET /users GET

- Get user: GET /users/5caccf35bb4d596822ccf02b

- Update user: PATCH /users/5caccf35bb4d596822ccf02b
```
{
	"age":44,
	"name":"Benjamin",
	"email":"ben@gmail.com",
	"password":"abcd1234"
}
```
- Delete user: DELETE /users/5caccf35bb4d596822ccf02b

- Log-in user: POST /users/login
```
{
	"email":"ben@gmail.com",
	"password":"abcd1234"
}
```
- Log-out user: DELETE /users/logout

## Postman testing for task
- Create task: POST /tasks
```
{
	"age":99,
	"name":"Benjamin",
	"email":"ben@gmail.com",
	"password":"abcd1234"
}
```

- List task: GET /tasks GET

- Get tasks: GET /tasks/5caccf35bb4d596822ccf02b

- Update task: PATCH /tasks/5caccf35bb4d596822ccf02b
```
{
	"age":44,
	"name":"Benjamin",
	"email":"ben@gmail.com",
	"password":"abcd1234"
}
```
- Delete task: DELETE /tasks/5caccf35bb4d596822ccf02b
