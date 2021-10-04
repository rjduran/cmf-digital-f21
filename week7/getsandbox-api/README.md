# getsandbox-api

This example consumes an API provided by [getsandbox.com](https://getsandbox.com/). To use it you will need to create a basic (free) API with getsandbox.com and populate it with user data. Below you will find an example of the data structure in JSON. This can be sent as a **POST** request with Postman to the **/users** endpoint. For example, `https://wispy-smoke-7226.getsandbox.com/users`.

```
{
  "username":"foogoo",
  "realname": "Foo Goo",
  "age":100,
  "gender":"male",
  "height":177.8,
  "eyecolor":"red",
  "haircolor": "blue"
}
```


