# Class
- **현실과 비슷한 개념(객체)을 나타내기 위한 도구**를 **클래스(Class)**라고 한다.
- 클래스는 미리 정의해놓으면 필요할 때마다 해당 클래스로 동일한 틀을 가진 객체를 만들 수 있습니다.
    - 여기서 동일한 클래스를 이용해 생성한 객체를 **인스턴스(Instance)**라고 부른다.
    
```js
class User { 
}

const user = new User();
//인스턴스	   class
user.name = "이용우";
user.age = 28;
user.tech = "Node.js";

console.log(user.name); // 이용우
console.log(user.age); // 28
console.log(user.tech); // Node.js

// 변수 user는 실제 빵, User클래스는 빵틀이라고 생각하면 쉽다.
```
---

# 생성자(Constructor)
클래스 내부에서 `constructor()`로 정의한 메서드를 "생성자"라고 부른다.
미리 정의한 클래스를 기반으로 인스턴스를 생성할 때 JavaScript내부에서 호출되는 메서드.

```js
class User {
  constructor(name, age, tech) { // User 클래스의 생성자
    this.name = name;
    this.age = age;
    this.tech = tech;
  }
}

const user = new User("이용우", 28, "Node.js"); // user 인스턴스 생성

console.log(user.name); // 이용우
console.log(user.age); // 28
console.log(user.tech); // Node.js
```
---

# this와 Propety(프로퍼티)

아까 위의 예제에서 클래스 User와 변수user을 예시로 본다면, `this`를 사용함으로써, User 전체의 값을 바꾸는게 아니라 user하나의 값만 바꾸는 것.

생성자의 바디에서 사용. `this`는 클래스를 사용해 만들어 질 객체 자신을 의미하고 `this`뒤에 붙는 name,age,tech는 클래스를 이용해서 만들어질 객체의 속성(Propety)이다.

```js
class User {
  constructor(name, age, tech) { // User 클래스의 생성자
    this.name = name;
    this.age = age;
    this.tech = tech;
  }
}

const user = new User("이용우", "28", "Node.js"); // user 인스턴스 생성
console.log(user.name); // 이용우
console.log(user.age); // 28
console.log(user.tech); // Node.js
```

* 생성자를 이용해 `name, age, tech` 인자값을 입력받아 class 내부변수에 저장한다.

---

# 메서드(Method)

JavaScript에서 사용할 수 있는 모든 값은 프로퍼티 값으로 사용할 수 있는데, **프로퍼티 값이 함수일 경우**에는 일반 함수와 구분하기 위해 메서드(Method)라고 부른다.
즉, 메서드는 객체(Object)에 묶여 있는 함수를 의미한다.

```js
class User {
  constructor(name, age, tech) { // User 클래스의 생성자
    this.name = name;
    this.age = age;
    this.tech = tech;
  }

  getName() { return this.name; } // getName 메서드
  getAge() { return this.age; }.  // getAge 메서드
  getTech() { return this.tech; } // getTech 메서드
}

const user = new User("이용우", "28", "Node.js"); // user 인스턴스 생성
console.log(user.getName()); // 이용우
console.log(user.getAge()); // 28
console.log(user.getTech()); // Node.js
```

---

# 상속
일반적으로 클래스의 인스턴스는 선언한 클래스의 기능을 모두 **상속**한다.
상속으로 **부모 클래스와 자식 클래스**로 나뉜다
부모 클래스는 메서드,내부변수와 같은 정보를 자식클래스에게 할당해줄 수 있다.

```js
class User { // User 부모 클래스
  constructor(name, age, tech) { // 부모 클래스 생성자
    this.name = name;
    this.age = age;
    this.tech = tech;
  }
 ---------------------------------------------------------
  getTech(){ return this.tech; } // 부모 클래스 getTech 메서드
}
 ---------------------------------------------------------
class Employee extends User{ // Employee 자식 클래스
  constructor(name, age, tech) { // 자식 클래스 생성자
    super(name, age, tech);
  }
}
 ---------------------------------------------------------
const employee = new Employee("이용우", "28", "Node.js");
console.log(employee.name); // 이용우
console.log(employee.age); // 28
console.log(employee.getTech()); // 부모 클래스의 getTech 메서드 호출: Node.js
```

아래의 예제는 우선 `User` 클래스를 정의하고, `Employee`라는 이름의 새로운 클래스가 `User`를 상속한다. 생성자 내부의 `super()`는 생성자 내에서만, 그리고 `this` 키워드를 사용하기 전에만 쓸 수 있습니다.
- **Employee**를 **User**의 서브 클래스로 정의합니다.
- **User**의 자식 클래스인 **Employee**에서 `User.getTech()` 메서드를 호출합니다.

### super()
`super()`은 자식 클래스에서 부모 클래스의 생성자를 호출하기 위해 사용되는 함수.
`super()`를 사용 함으로써 부모 클래스에서 정의한 속성이나 메서드를 자식 클래스에서도 사용할 수 있게된다.

따라서 위의 예제에 `employee.name`, `employee.age`와 같이 `User` 클래스에서 정의한 속성을 `Employee` 클래스에서도 사용할 수 있게 됩니다.