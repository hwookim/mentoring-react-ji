# React에서 style을 적용하는 방법

## Component style props

```jsx
const Component = () => {
  return <div style={{
    position: 'absolute',
    display: 'flex',
    backgroundColor: 'black',
  }} />
}
```

## style file import

```css
.my-class {
  /* ... */
}
```
```jsx
import 'style.css';

const Component = () => {
  return <div className="my-class" />
}
```
만들어둔 css(혹은 scss, sass 등)파일을 직접 import합니다.

import된 스타일은 특정 컴포넌트에만 적용되는 것이 아닌 **프로젝트 전체에 적용**됩니다.  
전체에 적용되기 때문에 주로 파일을 `index.js`나 `App.js`에서 import합니다.  
이 특성으로 인해 주로 `reset.css` 같은 파일이 이 방법으로 사용되곤 합니다.

## moduled css

```css
.myClass {
  /* ... */
}
```
```jsx
import styles from './style.module.css';

const Component = () => {
  return <div className={styles.myClass} />
}
```

기본 css 파일 import를 통한 스타일 적용이 클래스명 중복 등의 문제로 관리가 힘들어짐에 따라, 적용 범위를 제한하기 위해 나타난 기술입니다.

*.module.css 파일은 내부의 클래스를 네임스페이스화하여 자동적으로 고유화합니다.  
(Button.module.css의 .button -> Button_button_3dHK9)

일반적인 css 작성 방식과 크게 차이가 없어 쉽게 적용할 수 있으며 네이밍에 대한 고민을 줄여줄 수 있는 장점이 있습니다.

## Component-Based CSS Frameworks

```jsx
import React from 'react';
import { Button } from 'react-bootstrap';

const Component = () => {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
    </div>
  );
};
```

프레임워크 내에서 선언되어있는 컴포넌트를 활용 및 조합하여 원하는 페이지를 구성합니다.

웹페이지를 개발하는데 필요한 기초적인 스타일과 컴포넌트가 정의되어있으므로, **일관된 UI를 빠르고 효율적**으로 구축할 수 있게 도와줍니다.

다만 미리 선언되어있는 만큼 기능적, 디자인적인 세부 **커스터마이징이 어려운 경우**가 발생할 수 있습니다. 또한 사용하지 않는 컴포넌트와 스타일까지 미리 정의되어있기 때문에 불필요한 파일을 로드해야하는 성능적 이슈에 부딪힐 수 있습니다.

컴포넌트 기반 CSS 프레임워크로는 [Bootstrap](https://react-bootstrap.netlify.app/), [Material UI](https://mui.com/material-ui/), [AntDesign Component](https://ant.design/components/overview/) 등이 있습니다.

## Utility-First CSS Frameworks & Functional CSS Frameworks

```jsx
// ex tailwind
const Component = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello</h1>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Click Me</button>
    </div>
  );
};
```

미리 선언되어있는 스타일들을 조합하여 원하는 스타일을 구성할 수 있도록 합니다.

컴포넌트 기반 프레임워크보다는 자유로우면서도 재사용성이 높은 스타일을 통해 빠르게 스타일링할 수 있다는 장점이 있습니다.

모든 스타일을 유틸화하여 대상에게 명시하기 때문에 스타일 코드가 jsx에 섞이고 복잡해집니다. 여러 클래스의 우선 순위를 잘 파악해야하며 일부 프레임워크의 경우에는 확장성이 부족할 수 있습니다.

많은 라이브러리들이 유틸리티 우선 CSS 프레임워크를 기반으로 함수형 CSS 프레임워크 기능을 제공합니다.

Tailwind, Basscss, Tachyons 등의 라이브러리가 있습니다.

## CSS-in-JS

```jsx
const StyleComponent = styled.div`
  position: absolute;
  background-color: black;
`

const Component = () => {
  return <StyleComponent />;
}
```

js 파일 내에서 객체 형태로 css를 정의합니다.

스타일 컴포넌트를 생성하는 형태이기 때문에 컴포넌트와 스타일의 결합도와 가독성을 높이고 스타일의 유지보수를 용이하게 합니다.  
컴포넌트이기 때문에 props를 통해 동적인 스타일 변경이 가능합니다.

스타일 컴포넌트마다 자동으로 고유한 클래스 이름을 생성하여 충돌 문제를 방지합니다.

스타일을 js코드 내에서 동적으로 생성하므로, 성능에 영향을 줄 수 있으며 디버깅이 어려울 수 있습니다. 또한 라이브러리마다 표준 css의 기능에 대한 지원이 미흡할 수 있습니다.

styled-components, emotion 등의 라이브러리가 있습니다.