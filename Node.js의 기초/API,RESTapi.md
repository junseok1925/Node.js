# API
API는 애플리케이션끼리 연결해주는 매개체이자 약속
ex) 키보드로 글자입력 -> 키보드는 우리가 작성한 글자를 컴퓨터에 전달
- 키보드의 키를 누르는 행위가 API를 호출하는 것이라 보면된다

### API를 작성한다는 의미
- 웹 어플리케이션(프론트)에서 원하는 기능을 수행하는 URL과 인터페이스를 제공한다는 의미
- 작성할 API에서 원하는 데이터를 받아 데이터베이스에 데이터를 저장하고, 저장되어 있는 데이터를 읽어 웹 어플리케이션( 프론트 )에 데이터를 제공하는 행위를 통해 사용자가 원하는 목적을 이룰수 있게 해야한다.

---
# REST API의 의미
- REST는 “**Representational State Transfer**”의 줄임 말로, [위키](https://ko.wikipedia.org/wiki/REST)를 따르면 다음과 같다.
    
    > **REST**(Representational State Transfer)는 [월드 와이드 웹](https://ko.wikipedia.org/wiki/%EC%9B%94%EB%93%9C_%EC%99%80%EC%9D%B4%EB%93%9C_%EC%9B%B9)과 같은 분산 [하이퍼미디어](https://ko.wikipedia.org/wiki/%ED%95%98%EC%9D%B4%ED%8D%BC%EB%AF%B8%EB%94%94%EC%96%B4) 시스템을 위한 [소프트웨어 아키텍처](https://ko.wikipedia.org/wiki/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98)의 한 형식이다.
    > 
- 최대한 간단하게 설명하자면 **URL**, **Headers, Method** 등 네트워크 표현 수단을 사람이 봐도 이해하기 쉬운 표현으로 정의한다고 이해하면 된다.
또한 이 “REST 아키텍쳐”는 사람이 봐도 쉽게 이해할 수 있도록 “자원”을 정의하고 이 “자원”을 중심으로 표현을 구성하는 원칙을 제시한다.

![](https://velog.velcdn.com/images/rkdwnstjr16/post/f34ea85c-1967-4e14-be86-39150caff519/image.png)
- REST API는 "REST 아키텍쳐"라는 규칙을 따르는 API라고 생각하면 됨
- REST API의 구성은 크게 3가지로 이루어짐

1. **자원(Resource) - URL**
    - 우리가 만들 소프트웨어가 관리하는 모든 것을 자원으로 표현할 수 있습니다. 쇼핑몰이라면 상품(Goods)에 대해서 정보를 관리할것이고 또는 장바구니(Carts)에 담긴 상품들도 관리.
2. **행위 - HTTP method**
    - 이전에 배웠던 HTTP method  `GET`, `POST` 등등이 있다고 했었는데. 이것으로 해당 자원에 대한 행위를 표현할 수 있다. 예를 들어 GET 메소드는 해당 자원의 조회, POST 메소드는 해당 자원의 생성 이런 식.
    - 이렇게 나누어진 것을 보통 CRUD 라고 한다. 자원에 대한 생성/조회/수정/삭제를 각각의 method 로 나누어놓은 것.
        
        ```jsx
        Create : 생성(POST)
        Read : 조회(GET)
        Update : 수정(PUT),(PATCH)
        Delete : 삭제(DELETE)
        ```
        
    - 위 이미지의 예시처럼 쓰이는 것이 일반적인 method 사용방식이다. 하지만 이것은 필수인 부분이 아니고 모든 곳에서 다 이렇게 지켜서 사용하지는 않는다. 상황에 따라 저것을 완벽하게 지키기 어려운 부분들도 있으니 이 부분 참고 해야한다.
3. **표현**
    - 해당 자원을 어떻게 표현할지에 대한 설명이다. 보통 **JSON**, **XML** 같은 형식을 이용해서 자원을 표현한다.
    - HTTP에서는 `Content-Type` 이라는 헤더를 통해 표현 방법을 서술한다 .