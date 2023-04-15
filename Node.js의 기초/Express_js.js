// Express.js의 이해

// 1. Express.js란?
// - Express.js는 Node.js로 서버를 빠르고 간편하게 만들 수 있게 도와주는 웹 프레임워크이다.
// - 최근 각광받는 Node.js의 웹 프레임워크로는 Nest.js도 있다.

// 2. 웹 서버와 Express.js의 차이점
// - 웹 서버와 Express.js는 동일하지 않다.
// - Express.js는 웹서버 자체가 아닌 Node.js를 위한 웹 프레임워크로 웹 서버를 구현하기 위해 사용 되는 것이 Express.js 프레임 워크이다.

// Express.js로 웹 서버 구현해보기

// 1. `app.js` 파일 생성
// 2. 새 터미널에서 `npm init -y` 입력 -> `npm init`명령 실행시 프로젝트명이나 버전등을 물어보는데 모두 기본값으로 알아서 설정해준다.
// 3. 터미널에서 `npm i express` 명령어 입력으로 Express.js 프레임워크 설치

// ![](https://velog.velcdn.com/images/rkdwnstjr16/post/357b10cd-ddc2-459d-bde8-674051273ed0/image.png)

// - `package.json` 파일을 다시 열어봤을때 express 관련된 내용이 들어있으면 정상적으로 설치가 됨.
// - `package-lock.json`은 어떤 패키지들이 어떤 버전으로 설치되었는지 기록해놓은 파일. 나중에 이 파일이 있으면 다른 동료들과 협업할때 같은 환경으로 개발할 수 있게 도와준다.
// - `node_modules` 폴더는 npm을 통해 설치된 패키지들에 대한 파일이 있는 폴더.
// 개발을 하면서 다양한 라이브러리를 사용하게 될텐데 이에 대한 모든 파일이 여기에 설치된다.

// 브라우저로 `localhost:3000`경로로 들어가서 "Hello World"라는 문구를 확인 할 수 있다.



// API Client

// API Client란 개발단계에서 작성한 API의 요청을 확인하거나 테스팅 할 때 도움을 주는 틀
// - `Postman`, `Insomnia`,`Thunder Client`등이 있다.
// - `Thunder Client`는 VS Code 안에서 사용할 수 있으면서, 기능이 부족하지 않기 때문에 비교적 쉽게 사용 할 수 있으므로 사용하겠음.

    
// 지금까지 HTTP Method 중 GET Method에 대응하는 API만 만들고 브라우저로 확인했다.
    
// 아직까진 API Client가 필요 없어보였지만 POST, PATCH, PUT, DELETE, HEAD 등의 다양한 Method에 대한 API를 개발하고 테스트하기 위해서는 반드시 필요한 도구이라 할 수 있다.



// Routing 이해 및 Router

// 1. Routing란?
// 클라이언트의 요청 조건(메서드, 주소 등)에 대응해 응답하는 방식을 말한다.

// 2. Router란?
// 클라이언트의 요청을 쉽게 처리 할 수 있게 도와주는 `Express.js` 기본 기능중 하나.


// Router의 구조
// js
// router.METHOD(PATH, HANDLER);

// - `router`: express의 라우터를 정의하기 위해 사용한다.
// - `METHOD`: HTTP Method를 나타낸다. (ex: get, post, put, delete …)
// - `PATH`: 실제 서버에서 API를 사용하기 위한 경로를 나타낸다.
// - `HANDLER`: 라우트가 일치할 때 실행되는 함수.


// Router 사용해보기
// - `routes` 폴더를 생성해 `goods.js`라는 파일을 생성.
// - `express`에서 제공되는 Router 함수를 사용해 Router를 생성.


// routes/goods.js

const express = require('express');
const router = express.Router();


// - 예시로 엔드포인트를 작성


// routes/goods.js

// localhost:3000/api/ GET
router.get("/", (req, res) => {
  res.send("default url for goods.js GET Method");
});

// localhost:3000/api/about GET
router.get("/about", (req, res) => {
  res.send("goods.js about PATH");
});

// - 작성한 Router를 app.js에서 사용하기 위해 하단에 내보내주는 코드를 추가한다.
    
    
    // routes/goods.js
    
    module.exports = router;
    
    
// - Router 미들웨어를 사용하겠다고 작성한다.
    
    
    // app.js
    
    const goodsRouter = require("./routes/goods");
    
    // localhost:3000/api -> goodsRouter
    app.use("/api", [goodsRouter]);
    
    
- [http://localhost:3000/](http://localhost:3000/) 뒤에 `/api` 로 시작되는 주소는 `routes/goods.js` 에 있는 Router 미들웨어를 통해 처리.

// 미들웨어(Middleware)??

// > 웹 서버에서 요청을 받을때 가끔 모든 요청에 대해 공통적인 처리를 하고싶은 경우가 생길 수 있다. 그럴때 미들웨어를 이용하여 웹 서버의 요청/응답에 대해 공통적으로 관리가 가능하다.

