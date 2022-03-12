---
title: 'Rust로 web assembly 만들어보기 (1) - Web Assembly란 무엇인가?'
tags:
  - web
  - javascript
  - html
  - rust
published: true
date: 2022-03-07 19:27:19
description: '인생은 실전이다'
---

## Table of Contents

## Web Assembly란 무엇인가?

웹 어셈블리는 최신 웹 브라우저에서 자바스크립트 코드 외에 실행할 수 있는 새로운 유형의 코드를 의미한다. 웹에서 실행될 수 있는 코드는 자바스크립트 밖에 없지만, 웹 어셈블리를 활용하면 자바스크립트 외의 다른 언어, 특히 처리가 빠른 저수준 컴파일언어 (c, c++, rust 등) 를 사용할 수 있게 도와준다. 이를 활용하면 자바스크립트와 서로 상호 보완하여 동작이 가능해지고, 나아가 자바스크립트 수준에서 처리하기 어려운 일들도 처리할 수 있게 된다.

웹은 모바일, PC 등 다양한 플랫폼에서 동작하지만, 기본적으로 다른 언어에 비해 성능이 느린 자바스크립트 밖에 사용할 수 없다는 한계를 가지고 있었다. 그러나 웹 어셈블리를 사용하면 이전까지는 웹에서 돌릴 수 없던 다양한 클라이언트 앱을 네이티브에 가까운 성능과 속도로 실행할 수 있게 된다.

### Web Assembly가 달성하고자 하는 목표

> https://www.w3.org/community/webassembly/

- 빠르고, 효과적이고, 이식성이 좋을 것
- 읽기 쉽고 디버깅이 가능한 구조일 것
- 안전할 것
- 웹 환경을 망가뜨리지 않을 것

### Web Assembly의 동작 구조

웹 플랫폼은 크게 두 가지로 나눠서 생각할 수 있다.

- 자바스크립트와 같은, 앱을 구성하는 코드를 실행하는 가상머신
- 웹브라우저나 하드웨어 기능을 호출해서 애플리케이션이 무언가를 할 수 있도록 만드는 Web API (DOM, CSSOM, WebGL....)

첫 번째로 언급한 이 가상머신에서는, 오직 자바스크립트만 실행이 가능했다. 태초에 웹이 탄생했을 무렵, 자바스크립트의 비중은 거의 없었다. 그러나 기기의 성능 발전, 웹 표준화, ajax 등으로 인해 자바스크립트가 웹 애플리케이션에서 차지하는 비중은 점차 늘기 시작했다. 그리고 사람들은 점차 더 많은 것들을 웹에서 구현하길 원했다. 3D 게임, 가상현실, 영상처리, 이미지 편집 등 네이티브 성능을 필요로 하는 작업은 자바스크립트라는 한계에 부딪혔다. 오늘날의 웹 애플리케이션은 사이즈에 따라 다르지만, 아주 큰 자바스크립트를 받고 컴파일하고 파싱하는데에만 감당하기 어려운 비용을 처리하는 경우도 있다. 특히 모바일과 같은 경우에는 이러한 성능 병목 현상이 두드러진다.

WebAssembly는 자바스크립트와 다른 언어지만, 자바스크립트를 대체하기 위해 만들어진 것은 아니다. Web Assembly와 자바스크립트는 서로 부족한 점을 보완하여, 웹 개발자가 다양한 작업을 처리할 수 있게 끔 도와준다.

- 자바스크립트는 웹 애플리케이션을 작성하기에 좋은 고수준의 언어다. 동적타입 언어로서 컴파일 과정이 필요없고, 다양한 프레임워크, 라이브러리, 도구를 제공하는 아주 거대한 생태계를 가지고 있다.
- WebAssembly는 어셈블리와 같이 컴팩트한 바이너리 포맷을 가지고 있는 저수준 언어로, 네이티브에 가까운 성능을 제공하고, C++, Rust와 같은 저수준 메모리 모델을 가진 언어로 작성된 프로그램을 웹에서 실행할 수 있게 해준다.

필요하다면 다른 형식의 이 두 코드가 서로를 호출할 수 있다.

### Web Assembly의 핵심 컨셉

- 모듈: 실행가능한 컴퓨터 코드로, 브라우저에서 컴파일된 바이너리를 의미한다. 모듈은 stateless 이고, 윈도우와 워커 간에 `postMessage()`를 통해 공유가 가능하다.
- 메모리: Web Assembly의 저수준 메모리 접근 명령어에 의해 읽고 쓰여지는 바이트를 의미하며, 사이즈 조절이 가능한 Array Buffer다.
- 테이블: raw 바이트로 메모리에 저장될 수 없는 레퍼런스를 의미한다.
- 인스턴스: 모듈, 그리고 그 모듈이 사용하는 모든 상태를 의미한다. 여기서 말하는 상태란 메모리, 테이블, import 된 값의 집합 등이 있다.

### 사용 가능한 언어

- C/C++
- Rust
- [AssemblyScript](https://assemblyscript.org/introduction.html) (타입스크립트와 비슷)
- C#
- F#
- Go
- Kotlin
- Swift
- D
- Pascal
- Zig
- Grain

> https://webassembly.org/getting-started/developers-guide/

## 왜 러스트인가?

### .wasm 사이즈가 작다

`.wasm`은 네트워크를 통해 받아야하는 바이너리 파일로, 이 코드 크기는 성능에 있어 매우 중요하다. 러스트는 가비지 컬렉터와 같은 추가적인 bloat이 포함되어 있지 않아 작은 크기의 `.wasm`을 사용할 수 있다. 즉, 실제로 사용하는 함수와 기능에 대해서만 값을 치루면 된다.

예를 들어 Go와 같이 상대적으로 작은 런타임 언어도, hello world 수준의 프로그램을 컴파일 하면 2MB가 넘는 바이너리 크리를 갖는다. 반면 rust는 1.46kb에 불과하다. 또한 `.wasm`으로 컴파일 시에 네이티브에 애플리케이션에 비례하는 실행 속도를 누릴 수 있으므로, 속도와 성능 모두를 잡을 수 있게 된다.

### 자바스크립트와 비슷한 생태계

[이전에도 언급했던 것](https://yceffort.kr/2022/02/rust-for-javascript-developer-chapter1) 처럼 자바스크립트와 러스트는 비교적 비슷한 생태계를 가지고 있다.

### Web Assembly를 위한 다양한 도구

WEb Assembly로서의 rust를 사용하기 용이하게 하기 위한 다양한 도구들이 존재한다.

- [wasm-pack](https://github.com/rustwasm/wasm-pack)
- [wasm-opt](https://github.com/MrRefactoring/wasm-opt)
- [wasm2js](https://github.com/thlorenz/wasm2js)
- [twiggy](https://github.com/rustwasm/twiggy)

특히 이 중에 첫 번째 라이브러리는 오직 rust 를 위해서 만들어져있는데, 이도구가 정말 강력하여 다른 언어에서는 여러 프로세스나 도구를 거쳐야하는 번거로움을 한번에 해결 할 수 있다.