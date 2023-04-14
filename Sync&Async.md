# 동기(Sync) & 비동기(Async)

동기(Sync) : 실행된 코드의 결과가 나올때까지 **대기**하는것을 말한다.
비동기(Async) : **실행된 순서와 관계 없이** 결과가 나오는것을 말한다.

---


# Blocing Model & Non-Blocking Modle,프로미스(Promise), 
1. Blocking Model : 코드의 실행이 끝나기 전까지 실행 제어권을 다른곳에 넘기지 않아 다른 작업을 하지 못하고 대기하는 것을 말합니다.
2. Non-Blocking Model : 코드의 실행이 끝나지 않아도 **실행 제어권을 다른곳에 넘겨 다음 코드가 실행**될 수 있는것을 말한다.

* 자바 스크립트는  **Async + Non-Blocking Model**을 채용하여 현재 실행중인 코드의 실행이 끝나지 않아도 다음 코드를 호출한다.

ex)
```js
function first() {
  console.log('First');
}

setTimeout(first, 1000); // 1000ms(1초) 뒤에 first 함수를 실행해준다.

console.log('Middle');
console.log('Last');

// Print:
// Middle
// Last
// First
// 순서를 기다리지않고 먼저 middle, last가 실행됨
```
* 만약 자바스크립트가 Blocking Model이었다면 1초를 기다린 후에 순서대로 출력되었을것.

---

# 프로미스(Promise)
* 자바스크립트에서 **비동기 처리를 동기로** 처리할 수 있게 돕는 **Built-in**(미리 내부에서 정의된)객체 유형이다.

### 왜 프로미스를 사용하는가?
1. 비동기적 진행의 선택은 개발자의 의도에 따라 결정
2. 데이터베이스의 데이터를 먼저 가져온 후, 그 데이터를 가공하여 반환하는 함수가 존재한다고 가정. 
데이터베이스와의 소통은 I/O이고, Javascript 에서 거의 모든 I/O는 비동기적이므로 아마도 데이터를 가져오기도 전에 데이터 가공 명령이 실행되버리고 말 것이다 ( 오류발생 )
3. 프로미스를 사용, 데이터를 가져온 이후 데이터를 처리하는 명령어들을 작성하면 데이터를 가져오지도 않았는데 처리가 시작되는 오류상황을 회피할 수 있다.

### Promise 생성자 인터페이스

```excutor``` (생성자) 에는 함수만 올 수 있으며 인자로 ```resolve```, ```reject```	가 주입된다.
 첫 번째 함수```resolve```는 비동기 작업을 성공적으로 완료해 결과를 값으로 반환할 때 호출해야 하고, 두 번째 함수```reject```는 작업이 실패하여 오류의 원인을 반환할 때 호출하면 됩니다. 두 번째 함수는 주로 오류 객체를 받는다.
 
```js
new Promise(executor);

// 예제
new Promise((resolve, reject) => {
	// 명령문
});
```
일반적으로 객체```Object```를 생성하는 함수를 생성자```Constructor``` 함수라고 부르게 되는데, ```Promise``` 또한 객체로 구성되어 있기 때문에 생성자 함수를 이용해 ```Promise```를 선언하게 된다.

```js
function printFunc(data){
  console.log(data);
}

// 생성자 함수
const obj = new Object();
const promise = new Promise(printFunc);

obj
// Print : {}
```
* ```Promise``` 는 반드시 3가시 상태를 지니며, ***대기(Pending)*** 상태가 아니면 프로미스의 연산이 이미 끝난 상태로 볼 수 있다.

### Promise의 상태
1. 대기 (Pending) : 이행하거나 거부되지 않은 초기 상태.
2. 이행 (Fulfuilled) : 연산이 성공적으로 완료됨.
3. 거부( Rejected ) : 연산이 실패함.

* ```Promise``` 가 만들어 질 때 `executor`가 실행되며, `executor`에서 `resolve` 함수가 호출되기 전까지 `firstPromise.then(...)` 안에 있는 코드를 실행하지 않는다.
이렇게 `executor` 가 실행되어 `resovle`된 프로미스를 **Fulfilled Promise**라고도 부릅니다.

```js
const timerPromise = new Promise((resolve, reject) => { // 이곳에 정의된 함수가 executor
  setTimeout(() => {
	  console.log('First');
		resolve();
	}, 1000);
});

// 이 시점에서 timerPromise는 Fulfilled Promise라고 부를 수 있다.

timerPromise.then(() => {
	console.log('Middle');
	console.log('Last');
});

// Print: First
// Middle
// Last
```

---

### Promise.then
* `Promise` 안에서 `resolve`가 실행 된 경우 `then` 메서드에 작성된 함수가 실행됩니다.

```js
const resolvePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('First');
    resolve('Resolve!'); // resolve를 실행할 때, 안에 데이터를 넣어줄 수 있습니다.
  }, 1000);
});

resolvePromise.then((data) => {
  console.log('Middle');
  console.log('Last');
  console.log(data); // resolve안에 담긴 data를 출력
})

// Print: First -> 1초 뒤에 출력됩니다.
// Middle
// Last
// Resolve!
```
### Promise.then 더 알아보기
1. `Promise`에서 `resolve` 된 값 이용하는 방법
```js
const firstPromise = new Promise((resolve, reject) => {
  resolve('First');
});

firstPromise.then((value) => {
	console.log(value);
});

// Print: 'First'
```

2. `Promise.resolve` 함수 이용

프로미스가 값을 반환하는 경우 반환되는 값은 항상 프로미스로 감싸져 있다.
```js
const firstPromise = Promise.resolve('First');

firstPromise.then((value) => {
	console.log(value);
});

// Print: 'First'
```

3. `Promise.then`으로 함수형 프로그래밍 체험하기
    
    이것이 가능한 이유는 `console.log`라는 함수 뒤에 괄호를 사용해서 함수를 호출하지 않고, 함수를 그대로 then에 넘겼기 때문입니다.
```js
const firstPromise = Promise.resolve('First');

firstPromise.then(console.log);

// Print: 'First'
```
4. `Promise.then`으로 함수형 프로그래밍 체험하기 2

```js
const countPromise = Promise.resolve(0);

function increment(value) {
	return value + 1;
}

const resultPromise = countPromise.then(increment).then(increment).then(increment);
resultPromise.then(console.log);

// Print: 3
```


    

---
### Promise.catch

* `Promise` 안에서 에러가 `throw` 되거나 `reject`가 실행되면 `catch` 메서드에 작성한 함수가 실행됩니다.

```js
const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
	  console.log('First');
		reject('Error!!'); // 직접 reject를 실행하면 프로미스에서 에러가 발생한것으로 간주됩니다.
	}, 1000);
});

errorPromise.then(() => {
	console.log('Middle');
	console.log('Last');
}).catch((error) => {	// 위에서 프로미스를 에러로 지정함
	console.log('에러 발생!', error);
});

// Print: '에러 발생! Error!!'
```
---

# 비동기 함수 (Async Function)
* 특징 : 비동기 함수는 일반 함수나 화살표 함수와 비슷하지만 두가지만 다르다.

* 자바스크립트는 비동기함수인게 아니라 비동기 함수를 사용할 수 있는것!!

1. **비동기 함수**의 **결과 값**은 **항상 Promise** 객체로 `resolve`된다.
2. **비동기 함수** **안에서만** `await` 연산자를 사용할 수 있다. (바로 아래에서 배웁니다!)

이 두가지 특징을 제외하면 기존처럼 일반 함수나, 화살표 함수처럼 사용할 수 있다.
아래 세가지 함수 모두 결과 값은 **Promise**로 받는다.

```js
// 비동기 + 일반 함수
async function 함수이름() {
	// 명령문
}

// 비동기 + 익명 함수
async function() {
  // 명령문
}

// 비동기 + 화살표 함수
async () => {
	// 명령문
}
```
* 이러한 특징은 마치 아래처럼 작성하는것과 굉장히 비슷하다.
```js
function 함수이름() {
	return Promise.resolve('값');
}

// 위와 아래의 함수는 같은 동작을 보여준다.

async function 함수이름2() {
	return '값';
}

함수이름();
// Print: Promise { '값' }

함수이름2();
// Print: Promise { '값' }
```
### 비동기 함수를 쓰는 이유?
1. `await` 연산자를 비동기 함수 안에서만 사용할 수 있는데, 이를 활용하면 문법이 훨씬 간결해질 수 있기때문
2. `new Promise(executor)` 코드로 `Promise`를 직접 생성하면 `executor`가 바로 실행되는것과 달리, 비동기 함수는 함수가 실행되기 전까지 `Promise`를 생성하지 되지않는다.

* `async`함수의 반환 값은?
 `async` 함수의 결과값은 항상 `Promise` 객체로 `resolve` 되기 때문에 값은 동일.
 * `async` 함수 안에서 `Promise` 객체를 반환하면 어떤 결과가 나올까?
 `async` 함수 안 어딘가에서 에러가 발생하지 않았다면 `async` 함수의 반환 값은 무조건 `Promise` 객체이다.
 
 




