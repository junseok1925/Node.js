# 객체 리터럴

### 객체란?
JavaScript의 데이터 타비은 크게 **원시타입**과 **객체 타입**으로 분류된다
*	**원시타입**은 단하나의 값만을 나타내고, 원시 타입의 값은 **변경이 불가능 한 값**이다.
* **객체 타입**은 다양한 타입의 값을 **하나의 단위**로 구성한 **복합적인 자료 구조**이고, **객체 타입의 값을 변경 가능한 값이다.**

JavaScript는 객체(Object)기반의 프로그래밍 언어, 구성하는 거의 모든 것은 객체로 구성,객체(Object) 는 **0개 이상의 프로퍼티로 구성된 집합**이며, 하나의 프로퍼티는 **Key**와 **Value**로 구성

### 객체 리터럴 이란?

리터럴(literal)은 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법 즉,
**객체 리터럴은 객체를 생성하기 위한 표기법**

1. 객체 리터럴로 객체 생성하기
	* 객체 리터럴은 `중괄호{}` 내에 0개 이상의 프로퍼티를 정의해서 선언한다
```js
let objectLiteral = {
    key: 'Value',
    helloWorld: function () {
        return "Hello world";
    }
};
```
---
### 프로퍼티(Property)란? 
객체 상태를 나타내는 값(Data)이다. 프로퍼티는 키(Key)와 값(Value)으로 구성된다.
```js
const human = {
  // 프로퍼티 키: 'name', 프로퍼티 값: '이용우' 
  name: '이용우',
  // 프로퍼티 키: 'human age', 프로퍼티 값: 28 
  'human age': 28
}
```

### 메서드(Method)란?
프로퍼티를 참조하고 조작할 수 있는 동작을 나타낸다.
객체의 프로퍼티 값이 함수로 구성되어 있을 경우 메서드(Method)라고 부른다.

```js
let objectLiteral = {
    key: 'Value', // 프로퍼티
    helloWorld: function () { // 메서드
        return "Hello world";
    }
};

console.log(objectLiteral.helloWorld()); // Hello world
````
### 객체 리터럴 활용 연습
객체 리터럴을 활용 사칙연산을 하는 객체 생성하기

```js
const calculator = {
  add: function (a, b) { return a + b; },
  sub: function (a, b) { return a - b; },
  mul: function (a, b) { return a * b; },
  div: function (a, b) { return a / b; },
}

console.log(calculator.add(3,2)); // 5
console.log(calculator.sub(3,2)); // 1
console.log(calculator.mul(3,2)); // 6
console.log(calculator.div(3,2)); // 1.5
```






