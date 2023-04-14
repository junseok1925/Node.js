# Error handling
에러 핸들링은 에러를 관리하는 방법이고, 예상치 못한 상황에 대처하는 방식이다.
에러는 `예상할 수 있는 에러`와 `예상치 못한 에러`로 구분가능,
일반적인 설계를 할때는 `예상치 못한 에러 상황`이 더욱 많이 일어날 것으로 가정해야 함.

프로그래머가 작성한 코드에서 예상치 못한 에러가 일어날 가능성은 언제나 존재하고, 에러 상황을 대비해 언제든지 처리할 수 있어야 한다.

### try / catch
**서버에서 에러가 발생하지 않게 하기 위해서 예외 처리를 진행**
**예외 처리**는 일반적으로 `try … catch` 문을 사용합니다.

`users`에 들어있는 이름들을 `String.toUpperCase()`를 이용하여 대문자로 변경하려할 때 **문자열(String)**이 아닌 데이터가 들어온다면 에러가 발생한다.

이렇게 예상치 못한 에러에 대처하기 위해선 `try … catch`문으로 코드 전체를 감쌀 수 있다.

에러가 발생하더라도 **프로그램이 멈추지 않고 에러를 기록**할 수 있다.

```js
const users = ["Lee", "Kim", "Park", 2];

try {
  for (const user of users) {
    console.log(user.toUpperCase()); // 값 2에 대해 오류발생
  }
} catch (err) {
  console.error(`Error: ${err.message}`);
}

// try/catch로 이미 예외처리를 해서
// 시스템오류가 뜨지않고 정상적으로 코드는 실행되고 오류메세지를 출력
// LEE
// KIM
// PARK
// Error: user.toUpperCase is not a function
```

---

### throw

프로그래머의 입장에서 에러는 고의로 에러를 발생시키도 해야한다.

예를 들어 은행 어플리케이션의 현금 인출 서비스를 만든다고 할 때, 계좌의 잔고가 요청받은 금액보다 적다면 현금 인출을 막고 예외를 발생시켜야한다. 이럴때 사용하는 것이 `thorw`이다.
`thorw`를 호출하면 **그 즉시 현재 실행되고 있는 함수는 실행을 멈춘다.**
```js
function withdraw(amount, account) {
  if (amount > account.balance)	// 요청금액이 계좌잔고보다 많으면
    throw new Error("잔고가 부족합니다."); // 현금인출을 막기 위해 예외를 발생
  account.balance -= amount;	// thorw 예외발생시 즉시 현재 함수는 실행을 멈추기때문에 실행되지않는다.
	console.log(`현재 잔고가 ${account.balance}남았습니다.`); // 출력되지 않음
}

const account = { balance: 1000 };
withdraw(2000, account); // amount : 2000이고, 함수를 실행한다.

// Error: 잔고가 부족합니다.
```

---

### finally

`try` 에서는 HTTP연결이 되고 있거나 파일과 같은 특정한 ‘**자원**’을 가지고 처리할 때가 있다. 하지만 해당 ‘**자원**'을 계속 가지고 있으면, 무의미한 메모리를 차지하게 될 것 이므로 에러 여부와 상관없이 일정 시점에서는 해당 ‘**자원**'을 삭제 시켜야한다.

그렇다면 이 ‘**자원**'을 삭제하는 시점은 언제가 되어야 할까? 에러가 언제든지 발생할 수 있는 `try`? 아니면 에러가 일어났을 때 실행되는 `catch`? 이런 상황에서는 `finally`가 필요하다.

`finally`는 에러가 발생했는지 여부와 상관없이 언제든지 실행된다.

```js
function errorException(isThrow) {
  try {
    console.log('자원을 할당하였습니다.');
    if (isThrow) throw new Error();
    // 본 함수의 매개변수(isThrow)가 값이 존재한다면(true)면 thorw, 오류를 발생시켜라
  } catch (error) {
    console.log('에러가 발생했습니다.');
  } finally {
    console.log('자원을 제거하였습니다.');
  }
}

errorException(false);	// 조건식에 의해 오류 미발생
// 자원을 할당하였습니다.
// 자원을 제거하였습니다.
errorException(true);	// 조건식에 의해 오류 발생
// 자원을 할당하였습니다.
// 에러가 발생했습니다.
// 자원을 제거하였습니다.

// 오류가 발생하든 안하든 finally는 실행됨
```

