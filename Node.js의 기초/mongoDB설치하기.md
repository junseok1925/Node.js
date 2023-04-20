# 기본 설치

1. 터미널에 복붙 ㄱㄱ


	/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    
2. 패스워드 입력칸이 나오면 맥북 패스워드를 입력

3. mongoDB 설치하기 한 줄씩 입력하기


	brew tap mongodb/brew
    
    brew install mongodb-community
  
  
4. mongoDB 실행해보기


	brew services start mongodb-community
    
- 아무 반응 없으면 성공!

# 코드에서 MongoDB사용하기(mongoose)

1. 프로젝트 터미널에 입력


	npm install mongoose
    

- 3) `mongoose`의 문서(Document)란?
    - MongoDB에서 가지고 있는 각 데이터 하나하나를 **문서(Document)**라고 정의합니다.
    - 1개 이상의 **Key**-**Value**의 쌍으로 이루어져있습니다.
    
    ```jsx
    {
        "_id": ObjectId("6682192a1c155bd2f27881"),
        "name": "lyw",
    }
    ```
    
- 4) `mongoose`의 컬렉션(Collection)이란?
    - **JSON** 형식의 여러가지 **문서(Document)**를 보유할 수 있다.
    - 이후에 설명할 **관계형 데이터베이스(RDB)**의 **Table**과 동일한 역할.
- 5) `mongoose`의 스키마(Schema)란?
    - 스키마는 **컬렉션(Collection)**에 들어가는 **문서(Document)**에 어떤 종류의 **값**이 들어가는지를 정의.
    - 데이터를 모델링할 때 사용.
    - **대표적인 스키마의 타입**
        - `null` : null 값과 존재하지 않는 필드
            - ex: `null`
        - `String` : 문자열
            - ex: `“mongoDB”`
        - `Number` : 숫자
            - ex: `3.14`
        - `Date` : 날짜
            - ex: `new Date()`
        - `Buffer` : 파일을 담을 수 있는 버퍼, UTF-8이 아닌 문자열을 저장
            - ex: `0x65`
        - `Boolean` : `true` or `false`
            - ex: `true`
        - `ObjectId`(Schema.Types.ObjectId) : 객체 ID, 주로 다른 객체를 참조할 때 넣음
            - ex: `ObjectId()`
        - `Array` : 배열 형태의 값
            - ex: `["a", "b", "c"]`
        
- 6) `mongoose`의 모델(Model)이란?
    - 데이터베이스에 데이터를 **저장**해줄때 데이터의 구조를 담당.
    - 스키마를 사용하여 만들고, MongoDB에서 실제 작업을 처리할 수 있는 함수들을 가지고있다.
    - **문서(Document)**를 생성할 때 사용.
    
    