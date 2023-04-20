# Express.js 웹 서버 구현

### npm 다운로드 및 초기 설정 코드

1. `app.js` 파일을 생성

2. 터미널에 해당 명령어를 실행시켜 `package.json`을 생성


	npm init -y
    
3. Express.js 프레임워크를 설치


	npm i express
    
4. 이렇게 node_modules폴더와 package-lock, package json 파일이 만들어지면 성공!
![](https://velog.velcdn.com/images/rkdwnstjr16/post/9af31f7e-7fd4-4fbb-9492-6042c49a4f5b/image.png)

5. Express.js를 사용하고 서버를 열어주는 기본 틀 코드를 작성해 줍니다

```jsx
const express = require('express');
const app = express();
const port = 3000;	// 서버 포트 : 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});
```
---

### Routing 이해 및 Router 학습 

1. Routing이란?
	Routing은 클라이언트의 요청 조건(메서드,주소)에 대응해 응답하는 방식을 말한다
    
2. Router란?
	클라이언트의 요청을 쉽게 처리 할 수 있게 도와주는 `Express.js`기본 기능중 하나
  

**routes/goods.js**
 ```jsx
const express = require('express');
// Express.js프레임워크를 사용하기 위해 필요한 모듈인 express를 가져오는 코드
const router = express.Router();
//Express의 라우터를 생성합니다. 라우터는 HTTP 요청과 URL 경로를 기반으로 클라이언트의 요청을 처리하는 데 사용된다

// localhost:3000/api/ GET
router.get("/", (req, res) => {
    res.send("이 함수는 클라이언트가 요청한 경로가 '/'일 때 실행");
  });
//HTTP GET 요청을 처리하기 위해 '/' 경로에 대한 핸들러 함수를 등록. 이 함수는 클라이언트가 요청한 경로가 '/'일 때 실행
  
  // localhost:3000/api/about GET
  router.get("/about", (req, res) => {
    res.send("이 함수는 클라이언트가 요청한 경로가 '/about'일 때 실행");
  });
  // HTTP GET 요청을 처리하기 위해 '/about' 경로에 대한 핸들러 함수를 등록


module.exports = router;
// 작성한 Router를 app.js에서 사용하기 위해 보내주는 코드
```

**app.js**
```jsx
const goodsRouter = require("./routes/goods");

// localhost:3000/api -> goodsRouter
app.use("/api", [goodsRouter]);
// Router 미들웨어를 사용하겠다고 작성
```
* 이제부터 http://localhost:3000/ 뒤에 /api 로 시작되는 주소는 routes/goods.js 에 있는 Router 미들웨어를 통해 처리

* 미들워어란? 


	모든 요청에 대해 공통적인 처리를 하고싶은 경우 미들웨어를 이용해 웹서버의 요청/응답에 대해 공통적으로 관리가 가능
	




