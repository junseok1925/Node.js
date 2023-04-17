# Request, Response

1. Request : 클라이언트가 서버에게 전달하려는 정보나 메시지를 담는 객체
2. Response : 서버에서 클라이언트로 응답 메시지를 전송시켜주는 객체

# 서버 모듈
- Node.js의 서버 모듈에는 대표적으로 http, Express 모듈이 존재
- Express 모듈은 htpp 모듈을 확장하여 제공
- Express 모듈은 http 모듈의 메서드도 사용할 수도 있지만, Express가 추가 제공하는 메서드나 속성들을 사용할 수 있다
- Express의 메서드가 더 편리해서 기존 http모듈의 메서드는 잘 사용안함

# Express 모듈의 req, res 객체

**req 객체**
>
- req.app : req 객체를 통해 app 객체에 접근할 수 있습니다.
- req.ip: 요청한 Client의 ip 주소가 담겨 있습니다.
- **req.body**: Request를 호출할 때 body로 전달된 정보가 담긴 객체입니다.
    - `express.json()` Middleware를 이용하여야 해당 객체를 사용할 수 있습니다.
- **req.params**: 라우터 매개 변수에 대한 정보가 담긴 객체입니다.
- **req.query**: Request를 호출할 때 쿼리 스트링으로 전달된 정보가 담긴 객체입니다.
- req.cookies: Request를 호출할 때 Cookie 정보가 담긴 객체입니다.
    - cookie-parser Middleware를 이용하여야 해당 객체를 사용할 수 있습니다.
- req.get(*Header*): 헤더에 저장된 값을 가져오고 싶을 때 사용합니다.

**res 객체**
>
- res.app : res 객체를 통해 app 객체에 접근할 수 있습니다.
- **res.status(*코드*)** : Response에 HTTP 상태 코드를 지정합니다.
    → [Http 상태 코드에 대해](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)
- **res.send(*데이터*)** : 데이터를 포함하여 Response를 전달합니다.
- **res.json(*JSON*)** : JSON 형식으로 Response를 전달합니다.
- res.end() : 데이터 없이 Response를 전달합니다.
- res.direct(*주소*) : 리다이렉트할 주소와 함께 Response를 전달합니다.
- res.cookie(*Key, Value, Option*) : 쿠키를 설정할 때 사용합니다.
- res.clearCookie(*Key, Value, Option*) : 쿠키를 제거할 때 사용합니다.

## 사용해보기(req.body / req.params / req.query)

### 1. 먼저 Request객체 안의 req.body를 사용하기 위해서 코드 추가
```jsx
app.use(express.json()) //body-parser Middleware를 쓰기 위한 문법이다, 전역 middleware를 적용하겠다
                        // 모든 코드에서 body-parse를 등록해서 Request안에 있는 body데이터를 쓰겠다
```
### 2. **req.query**
```jsx
app.use(express.json()) //body-parser Middleware를 쓰기 위한 문법이다, 전역 middleware를 적용하겠다
                        // 모든 코드에서 body-parse를 등록해서 Request안에 있는 body데이터를 쓰겠다
                        
app.get("/",(req, res)=>{
  console.log(req.query); 
  res.send('req.query 정상적으로 반환되었다.');
});  
```
![](https://velog.velcdn.com/images/rkdwnstjr16/post/ee693c27-986c-4ba4-a689-72b951c125e3/image.png)


### 3. ** req.params**
```jsx
app.use(express.json()) //body-parser Middleware를 쓰기 위한 문법이다, 전역 middleware를 적용하겠다
                        // 모든 코드에서 body-parse를 등록해서 Request안에 있는 body데이터를 쓰겠다

app.get("/:id",(req,res)=>{ //:id -> 기본 URI뒤에 오는 모든 정보 값은 id에 들어온다.
  console.log(req.params);
  res.send(":id URI에 정상적으로 반환되었습니다.");
});
```
![](https://velog.velcdn.com/images/rkdwnstjr16/post/aed0b079-a3df-4555-a4de-3df8dac24599/image.png)-> 기본 URL뒤에 붙은 'helloworld'가 반환됨을 확인 -> :id의 값이 `req.params`에 할당

### 4. **req.body**

- POST메서드를 사용할 때 가장 많이 사용됨
```jsx
 app.use(express.json()) //body-parser Middleware를 쓰기 위한 문법이다, 전역 middleware를 적용하겠다
                        // 모든 코드에서 body-parse를 등록해서 Request안에 있는 body데이터를 쓰겠다

//req.params
app.post("/",(req,res)=>{
  console.log(req.body);
  res.send("기본 URI에 POST 메서드가 정상적으로 실행됨");
});
```
![](https://velog.velcdn.com/images/rkdwnstjr16/post/3ee89e21-af9a-4d9a-bb58-7e3d964d27a6/image.png)

### 5. res.json으로 반환하기

```js
//req.json()
app.get("/",(req,res)=>{
  console.log(req.query );

  // 객체 형태로 바로 넣어두됨
  const obj = {
    "keykey" : "value 입니다",
    "이름입니다" : "이름일까요?"
  }
  res.json(obj);
});
```
![](https://velog.velcdn.com/images/rkdwnstjr16/post/eeb30b4b-4f65-496c-820b-5620c165a528/image.png)
- 바로 json안에 객체를 넣어두됨.
```jsx
//req.json()
app.get("/",(req,res)=>{
  console.log(req.query );
  // 바로 json안에 객체를 넣어두됨
  res.json({
    "keykey" : "value 입니다",
    "이름입니다" : "이름일까요?"
  });
});
```
