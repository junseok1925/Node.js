- AWS 배포하기
    - EC2 instance 생성 [AWS console 페이지](https://console.aws.amazon.com/console/home)
    - AWS EC2 접속하기
    1. 방금 받은 내 Keypair의 접근 권한을 바꿔주기
        
        ```bash
        sudo chmod 400 받은키페어를끌어다놓기 
        ```
        
    2. SSH로 접속하기
        
        ```bash
        ssh -i 받은키페어를끌어다놓기 ubuntu@AWS에적힌내아이피
        ```
        
- Node.js 및 MongoDB EC2에 설치하기
    1. **Node.js 설치 명령어**
    
    ```bash
    curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    
    sudo apt-get install -y nodejs
    
    ```
    
    1. 설치 및 설치 확인
    - 설치: EC2 Instance에 접속이 된 상태라면 위에서 복사한 명령어를 붙여넣고 엔터를 누르고 기다리면 된다.
    - 설치 확인:
        
        이전에 아래와 같은 명령어로 확인했던것처럼 확인할 수 있습니다!
        
        ```jsx
        node -v
        npm -v
        ```
        
    1. **MongoDB 설치 명령어**
        
        ```bash
        wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
        
        echo "deb [ arh=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
        
        sudo apt-get update
        
        sudo apt-get install -y mongodb-org
        
        ```
        
        - **MongoDB 실행 명령어**
        - 아래 명령어를 실행하고 아무 반응이 없다면 잘 된것
        
        ```bash
        sudo service mongod start
        
        ```
        

1. EC2 instance에서 서버 실행
    - 깃 레포 주소 복사
    
    ```bash
    git clone 깃 주소 복사해서 넣기
    ```
    
    - 프로젝트 서버 실행하가
    1. `cd nodejs_spa_mall`
    2. `npm install`
    3. `node app.js`