# React?

React는 JavaScript 라이브러리로, 웹 애플리케이션을 구성하는 요소인 HTML과 JavaScript를 결합한 **JSX** 문법을 사용하여, 쉽고 효율적으로 단일 페이지 애플리케이션(**SPA**, Single Page Application)을 구현할 수 있도록 도와줍니다.  

React의 주요 철학은 다음과 같습니다.

- 컴포넌트 기반 아키텍처
  - 재사용 가능한 작은 **컴포넌트 단위**로 나누어 UI를 구성합니다.
- 단방향 데이터 흐름
  - 데이터는 **부모에서 자식 컴포넌트로** 전달됩니다.
- 선언적 프로그래밍
  - UI의 상태를 기반으로 화면을 업데이트하는 대신, React는 **상태가 변할 때마다** 화면을 다시 그립니다.

## 단일 페이지 어플리케이션(SPA)?

SPA는 **하나의 HTML 페이지**로 구성된 웹 애플리케이션입니다.  
SPA는 전통적인 멀티 페이지 애플리케이션(MPA)과 달리 페이지를 전환할 때마다 전체 페이지를 다시 로드하지 않고, 현재 페이지를 동적으로 업데이트하여 사용자 경험을 개선합니다.  
React 외에도, Vue, Angular 등의 SPA 라이브러리가 존재합니다.

## 컴포넌트 (Component)

UI를 구성하는 기본 단위입니다.  
React에서는 컴포넌트를 작성할 수 있는 방식이 클래스형, 함수형으로 두가지가 있지만, 최근에는 거의 함수형만 사용되기에 클래스형은 이름정도만 알아도 괜찮습니다.

컴포넌트는 서로 조합이 가능하며 조합된 컴포넌트를 통해 페이지를 구성합니다.

함수형 컴포넌트는 두가지 방식으로 작성 가능합니다.  
두가지 방식에 큰 차이는 없으며 주로 프로젝트 내의 다른 컴포넌트를 참고하시어 같은 형태로 만들기를 추천드립니다.

```jsx
import React from 'react';

// 함수 선언식
const Component = () => {
  return <div>Hi</div>;
}

// 화살표 함수
function Component2() {
  return <div>Bye</div>;
}
```

## 상태(State)

React는 **상태**를 기반으로 UI를 그려냅니다.  
상태는 컴포넌트가 렌더링되고 상호작용하는 동안 동적으로 변할 수 있으며, **상태가 변경됨에 따라서 컴포넌트는 자동적으로 다시 렌더링**됩니다.

```jsx
import React, { useState } from 'react';

const Component = () => {
  const [state, setState] = useState(0);

  return <div>{state}</div>;
}
```

`{}` 구문을 통해 jsx의 html 부분에 변수를 삽입할 수 있으며 이를 통해 동적인 대상을 표현할 수 있습니다.

## 속성(Props)

React에서 데이터는 부모에서 자식 컴포넌트로 단방향성을 가집니다. 이 때 자식 컴포넌트로 전달되는 데이터를 props라고 합니다.  

props는 자식 컴포넌트에게는 **읽기 전용**으로, 자식 컴포넌트에서 해당 데이터를 수정하지 않는 것을 원칙으로 합니다.

state와 다르게 전달되는 props가 수정된다고 컴포넌트가 렌더링되지 않습니다.

```jsx
import React from 'react';

const Parent = () => {
  return <Child text="hi" />;
}

const Child = (prop) => {
  const { text } = prop;

  return <div>{text}</div>;
}
```

## 이벤트 활용하기

props를 통해 컴포넌트, dom에 이벤트를 전달할 수 있습니다.

```jsx
import React from 'react';

const Component = () => {
  const handleClick = () => {
    console.log('click');
  };

  return <button onClick={handleClick}>클릭하세요</button>;
};
```

기존 html에서 `onclick`과 같이 모두 소문자로 작성하던 것과는 다르게 `onClick`과 같이 대소문자를 구분해주어야합니다.

이벤트 전달을 활용하여 앞서 배웠던 state를 조작하고 다채로운 앱을 구성할 수 있습니다.

## 조건부 렌더링

js에 존재하는 boolean 값의 true, false에 따라 렌더링 대상을 변경시킬 수 있습니다.

```jsx

const Component = (prop) => {
  const { value } = prop;

  return (<>
    {value ? <div>안녕하세요</div> : <span>안녕히가세요</span>}
    </>)
};

const Component2 = (prop) => {
  const { value } = prop;

  if (value) {
    return <div>안녕하세요</div>
  }
  return <span>안녕히가세요</div>
}
```

boolean값을 통해서 분기문을 설정할 수 있다면 어떤 형식으로든 표현할 수 있습니다.

렌더링할 대상을 결정할 수도 있고, props로 전달할 값을 결정할 수도 있습니다.

```jsx
const Component = (prop) => {
  const { value } = prop;

  return <div style={{
    color: value ? "black" : "red",
  }}>false면 빨간색</div>
}
```

## 반복 렌더링

반복되는 대상에 대해 하나하나 직접 컴포넌트를 작성하는 것이 아닌, 한번의 코드로 반복되는 대상을 간편하게 렌더링할 수 있습니다.

```jsx
const Compnent = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  )  
}

// 아래와 같이 편하게!

const arr = [1,2,3,4,5];

const LoopCompnent = () => {
  return (
    <ul>{arr.map(v => <li key={v}>v</li>)}</ul>
  )  
}
```

반복 렌더링을 사용하기 위해서는 각 요소에 요소별로 고유한 key 값을 입력해주어야합니다.

입력하지 않더라도 코드는 실행되지만, 고유한 값을 입력했을 때 React 에서 자동적으로 렌더링을 최적화해 컴포넌트가 리렌더링될 때 변경된 대상만 다시 렌더링할 수 있도록 해줍니다.
