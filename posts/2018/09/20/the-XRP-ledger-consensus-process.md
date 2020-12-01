---
title: 리플 컨센서스 알고리즘
date: 2018-09-20 03:45:40
published: true
tags:
  - blockchain
  - cryptocurrency
  - ripple
description: "The XRP Ledger Consensus Process
  [원문](https://ripple.com/build/xrp-ledger-consensus-process/#consensus)  ##
  소개  P2P XRP 원장 네트워크는 응용프로그램에 콘텐츠의 상태에 대한 정보를 저장하고 있는 공유 원장을 전세계적으로 저장한다. 이러한
  상태 정보에는 아래와 같은..."
category: blockchain
slug: /2018/09/20/the-XRP-ledger-consensus-process/
template: post
---
The XRP Ledger Consensus Process

[원문](https://ripple.com/build/xrp-ledger-consensus-process/#consensus)

## 소개

P2P XRP 원장 네트워크는 응용프로그램에 콘텐츠의 상태에 대한 정보를 저장하고 있는 공유 원장을 전세계적으로 저장한다. 이러한 상태 정보에는 아래와 같은 정보가 포함되어 있다.

- 각 [계정](https://ripple.com/build/accounts/)의 설정정보
- 계정 간 잔고
- 분산 거래
- 네트워크 설정. 예) [거래 비용](https://ripple.com/build/transaction-cost/), [유보 금액](https://ripple.com/build/reserves/) 등
- 타임스탬프

원장에 대한 전체적인 기술 설명은 [여기](https://ripple.com/build/ledger-format/)에서 확인할 수 있다.

![XRP Ledger Elements](https://ripple.com/wp-content/themes/ripple-beta/assets/img/ledger-components.png)

XRP 원장은 몇 초마다 새로운 버전을 갖게 된다. 그 이전의 원장버전은 원장의 기록으로 남게된다. 가장 최근에 검증된 원장 조차도 짧은 시간전의 네트워크 상태를 나타내기 때문에 이력의 일부로 남게 된다. 현재 네트워크는 다음 원장버전에서 적영되고 완료 될 수 있는 일부 거래를 검증하게 된다.

![XRP Ledger Sequence and History](https://cdn.ripple.com/wp-content/uploads/2014/12/Overview-of-Ripple-Ledger-Consensus-and-Validation-12_12-02.png)

원장 인스턴스는, 원장 인덱스라고도 불리는 시퀀스 번호로 (원장 인스턴스는 컨텐츠의 디지털 지문인 해시에 의해 고유하게 식별될 수 있다.) 식별될 수 있다. 원장은 번호 순으로 증가하게 된다. 마지막으로 유효한 원장이 N이면, 이전은 N-1, 그 다음은 N+1이다. N+1원장은 원장 N에 일련의 트랜잭션을 적용하여 생성된다.

원장이 사용자 수준에서 변경된다는 것은 트랜잭션의 결과로 이루어진다. 이 트랜잭션의 예로는 지불, 계정 설정, 거래 제안 등이 있다. 각 트랜잭션은 원장 변경을 승인하고, 계정 소유자가 암호화하여 서명한다. 트랜잭션은 계정 변경을 승인하는 유일한 방법이다. 

또한 원장 인스턴스에는 해당 트랜잭션에 대한 일련의 트랜잭션 및 메타 데이터가 포함되어 있다. 트랜잭션은 이전 원장에 적용되어 새 인스턴스를 만든 트랜잭션이다. 메타데이터는 트랜잭션이 원장에 미치는 영향을 정확하게 기록한다.

![Transactions Applied to Ledger Version](https://cdn.ripple.com/wp-content/uploads/2014/12/Overview-of-Ripple-Ledger-Consensus-and-Validation-12_12-03.png)

원장 인스턴스에 포함된 트랜잭션 세트 (위 그림에서 여러개의 네모, 트랜잭션)는 해당 원장에 기록되며, XRP Ledger 이력에서 확인 될 수 있다.

검증된 원장에 나타나는 트랜잭션이 원장을 변경하는데 성공했거나, 요청된 작업을 수행하지 않고 처리되었을 수도 있다. 성공적인 트랜잭션에는 요청된 변경사항이 원장에 적용되고, 수수료가 청구되었음을 나타내는 tesSUCCESS [결과 코드](https://ripple.com/build/transactions/#transaction-results)를 가지고 있다. 원장의 다른 트랜잭션에는 tec 클래스 결과 코드가 있다. 이 코드는 수수료를 청구하고, 다른 변경사항을 수행하지 않는 트랜잭션을 나타낸다.

tec 클래스의 트랜잭션은 수수료를 청구할때, 계정잔액을 변경하기 때문에 원장에 포함된다.

tes 및 tec 클래스 결과 코드 외에도, ter, tef, tem 클래스 코드가 있다. 후자 3가지는 API에 호출에 의해 반환되는 잠정적인 실패를 나타난다. 원장에는 test와 tec 코드만 남게 된다.

리플 API로 작업할때, 애플리케이션은 반드시 원장에 포함되도록 제안된 후보 트랜잭션과 검증된 원장에 포함된 검증된 트랜잭션을 구분해야 한다. 검증된 원장에서 발견된 트랜잭션 결과만 변경이 불가능하다. 후보 트랜잭션은 검증된 원장에 포함될 수 있거나, 포함되지 않을 수도 있다.

중요: 일부 리플 API는 후보 트랜잭션을 기반으로 잠정적인 결과를 제공한다. 애플리케이션은 트랜잭션의 최종결과를 결정하기 위해 이러한 잠정적인 결과에 의존해서는 안된다. 트랜잭션이 마침내 완전하게 성공했다는 것을 확실하게 알 수 있는 유일한 방법은 유효성있는 원장에 포함될때까지 트랜잭션 상태를 확인하고 결과코드 tesSUCCESS를 갖는 것이다. 트랜잭션이 다른 결과 코드가 있는 유효한 원장에 있으면, 해당 트랜잭션은 실패한 것이다. 트랜잭션의 마지막 원장 시퀀스에 지정된 원장이 유효성 검증을 받았지만, 거래가 원장 또는 그 원장 이전에 나타나지 않는다면, 해당 트랜잭션은 실패하여 어떠한 원장에도 나타나지 않을 것이다. 검증된 원장에 나타나거나 나중에 라스트 원장 시퀀스 제한으로 인해 표시될 수 없는 트랜잭션에서만 최종결과로 볼수 있다. (하단 참조)

## XRP 원장 프로토콜의 컨센서스와 검증

P2P XRP 원장 네트워크는 트랜잭션을 수용하고 처리하는 '노드'라고 불리우는 많은 분산 서버로 구성된다. 클라이언트 애플리케이션은 트랜잭션에 서명하고 전송하는 처리를 위해, 네트워크 전체에서 이러한 서명된 후보 트랜잭션을 릴레이한다. 클라이언트 애플리케이션의 예로는 모바일/웹 지갑, 금융기관의 게이트웨이 및 전자 거래 플랫폼이 있다.

![Participants in the XRP Ledger Protocol](https://cdn.ripple.com/wp-content/uploads/2014/12/Overview-of-Ripple-Ledger-Consensus-and-Validation-12_12-04.png)

트랜잭션을 수신, 릴레이 및 처리하는 노드는 노드를 추적하거나 노드를 검증할 수 있다. 노드의 주요기능을 추적하는 것에는 클라이언트로부터 트랜잭션을 배포하고, 원장에 대한 쿼리에 응답하는 것도 포함된다. 검증 노드는 노드 추적과 동일한 기능을 수행하고, 원장 시퀀스를 발전시키는 데 추가로 기여하게 된다.

클라이언트 애플리케이션에서 제출한 트랜잭션을 수락하는 동안, 각 추적노드는 마지막으로 검사된 원장을 시발점으로 사용한다. 승인된 거래는 각각 후보로 남게 된다. 노드는 이러한 후보 트랜잭션을 피어에게 릴레이하여, 후보 트랜잭션이 모든 네트워크 전체에 전파되도록 한다. 이상적으로 각 후보 트랜잭션은 모든 노드에게 전파되며, 각 노드는 동일한 트랜잭션 세트가 마지막으로 검사된 원장에 적용될 수 있다고 간주할 수 있다. 그러나 트랜잭션이 전파되는데에는 시간이 꽤 소모되기 때문에 노드는 항상 동일한 후보트랜잭션 세트로 작동하지 않는다. 이를 설명하기 위해 XRP 원장은 컨센서스라고 하는 프로세스를 활용, 동일하나 트랜잭션이 처리되고 검증된 원장이 P2P XRP 원장 네트워크에서 일관성을 유지하도록 한다.

## Consensus

네트워크 노드는 후보 트랜잭션에 대한 정보를 공유한다. 합의 프로세스를 통해, 검증 노드는 후보거래의 특정 합위 집합에 대해 다음 원장에 대해 고려하도록 동의 한다. 이러한 합의는 노드가 제안 또는 후보 트랜잭션 세트를 중계하는 반복적인 프로세스다. 노드는 대다수의 피어가 동일한 후보 트랜잭션 세트에 동의할때까지 계속해서 업데이트 한다.

컨센서스 과정에서 각 노드는 선택된 검증자라고 불리는 특정 피어세트의 컨센서스 제안을 평가한다. 선택된 검증자들은 이러한 컨센서스 제안 들에 대해 사기를 방지하고, 신뢰를 얻기 위해 평가하게 된다. 여기서 말하는 '신뢰'의 의미는 각 개별 검증자를 신뢰할 필요가 없다는 것이다. 오히려, 검증자는 네트워크에 중계된 데이터를 위조하기 위한 노력을 하지 않을 것이라는 기대에 따라 선택된다.

|![Validators Propose Transaction Sets](https://cdn.ripple.com/wp-content/uploads/2014/12/Overview-of-Ripple-Ledger-Consensus-and-Validation-12_12-05.png)|
|:-|
|합의가 시작될때 노드는 서로 다른 트랜잭션 세트로 작동한다. 수많은 제안이 원장에 적용할 거래와 향후 컨센서스를 기다려야 할 거래를 결정한다.|

합의된 제안에 포함되지 못한 후보들은 후보로 남게 된다. 이들은 다음 합의에서 고려 될 수 있다.

|![Through Consensus, Nodes Agree On Transaction Set](https://cdn.ripple.com/wp-content/uploads/2014/12/Overview-of-Ripple-Ledger-Consensus-and-Validation-12_12-06.png)|
|:-|
|노드는 합의된 트랜잭션 세트 (녹색)를 마지막으로 유효성있는 원장에 적용한다. 세트에 없는 거래 (빨간색) 은 다음 라운드에서 합의 될 수 있다.|

일반적으로, 컨센서스를 통과하지 못한 거래는 다음 라운드에서 성공한다. 그러나 어떤 상황에서는 거래가 무기한 컨센서스를 통과하지 못할 수도 있다. 이러한 상황은, 네트워크가 기본수수료를 트랜잭션이 제공하는 것보다 높은 값으로 증가시키는 경우다. 향후 수수료가 낮아지면 거래가 성공할 수 있다.

[마지막 원장 시퀀스(LastLedgerSequence)](https://ripple.com/build/transactions/#lastledgersequence) 트랜잭션 필드는 합리적인 시간내에 실행되지 않으면, 이러한 트랜잭션을 만료시키는 매커니즘이다. 애플리케이션은 각 트랜잭션에 이 매개변수를 포함시켜야 한다. 이렇게 하면 트랜잭션이 지정된 원장 시퀀스 번호, 또는 그 이전에 성공하거나 실패하게 되므로 최종 트랜잭션 결과를 얻기 전에 응용 프로그램이 기다려야 하는 시간이 제한된다. 자세한 내용은 [여기](Reliable Transaction Submission)를 참조.

## 검증

합의 라운드가 완료 되면 각 노드는 최종 유효성있는 원장에 합의된 트랜잭션 세트에, 후보 트랜잭션을 적용하여 새로운 원장을 만들어 낸다.

|![A Network Node Calculates a Ledger Validation](https://cdn.ripple.com/wp-content/uploads/2014/12/Overview-of-Ripple-Ledger-Consensus-and-Validation-12_12-07.png)|
|:-|
|각 추적 노드는 마지막으로 유효한 원장에 동의한 트랜잭션을 적용한다. 노드를 확인하면 전체 네트워크에 결과를 보낸다.|

검증 노드는 원장의 새버전을 만들어내고, 그 결과를 네트워크에 릴레이하며, 각 합의 중에 제안된 후보 트랜잭션을 기반으로 계산된 원장의 서명된 해시를 보낸다. 검증이라고 하는 이러한 서명 된 해시는 각 노드가 계산한 원장을 피어 원장과 비교할 수 있도록 한다.

|![Ledger is Validated When Supermajority of Peers Calculate the Same Result](https://cdn.ripple.com/wp-content/uploads/2014/12/Overview-of-Ripple-Ledger-Consensus-and-Validation-12_12-08.png)|
|:-|
|노드는 계산된 원장을, 선택한 검증 노드에서 수신한 해시와 비교한다. 동의하지 않으면 노드가 올바른 원장을 다시 계산하거나 검색해야 한다.|

네트워크의 노드는 피어의 대다수가 동일한 검증 해시에 서명하고 브로드 캐스트 될때, 유효성이 확인 된 것으로 잉ㄴ식한다. 앞으로 트랜잭션은 시퀀스 번호 N+1이 업데이트되고 현재 유요한 원장에 적용된다.

소수에 속하는 노드가 피어와 다른 원장을 계산한 경우에는, 노드는 계산된 원장을 무시한다. 올바른 원장을 다시 계산하거나, 필요에 따라서는 올바른 원장을 검색한다.

네트워크가 유효성 검사에 대한 초 대다수 합의를 달성하지 못한다는 것은, 거래량이 너무 많거나 컨센서스 프로세스가 일관된 제안을 하기에는 네트워크 대기 시간이 너무 컸다는 것을 의미한다. 이 경우 노드는 컨센서스 프로토콜을 반복한다. 컨센서스가 시작된 이래로 시간이 지남에 따라, 각 컨센서스 라운드가 의견차이를 줄임에 따라 대다수의 노드가 동일한 후보트랜잭션을 받을 가능성이 커진다. XRP 원장은 이러한 조건에 대한 응답으로 거래비용과 컨센서스를 기다리는 시간을 동적으로 조정한다.

|![Network Recognises the New Validated Ledger Version](https://cdn.ripple.com/wp-content/uploads/2014/12/Overview-of-Ripple-Ledger-Consensus-and-Validation-12_12-09.png)|
|:-|
|결국 컨센서스 프로세스의 마지막라운드에는, 노드가 검증된 노드로 업데이트 하게 된다.|

검증에 대한 초 대다수 합의에 도달하게 되면, 노드는 새로운 검증된 원장인 시퀀스 번호 N+1과 동작하게 된다. 컨센서스 및 검증 프로세스는 지난 라운드에 포함 되지 않은 후보 트랜잭션과, 그동안 제출된 새로운 거래를 고려하여 반복한다.

## 요약

XRP 원장에 제출된 트랜잭션은 즉시 처리되지 않는다. 일정기간 각 거래는 후보로 남아있게 된다.

단일 트랜잭션의 라이프 사이클은 아래와 같다.

1. 계정 소유자가 트랜잭션을 작성하고 서명한다.
2. 트랜잭션이 네트워크에 제출된다.
- 잘못 생성된 거래는 즉시 거부 될 수 있다.
- 올바르게 생성된 거래는 임시적으로 성공할 수도 있고, 나중에 실패할 수 있다.
- 올바르게 생성된 거래는 임시적으로 실패할 수도 있고, 나중에 성공할 수 있다.
3. 컨센서스 과정 중에, 각 거래는 원장에 포함된다.
- 성공적인 컨센서스 라운드의 결과로 검증된 원장이 나오게 된다.
- 컨센서스 라운드가 실패하게 되면 컨센서스 프로세스가 성공할 때까지 반복한다.
4. 검증된 원장에는 트랜잭션과 원장 상태에 미치는 것들이 포함된다.

애플리케이션은 잠정 결과가 아닌 유효성 있는 원장의 정보에만 의존해야 한다. 일부 리플 API는 잠정적인 (임시) 결과를 반환한다. 이 트랜잭션의 결과는 해당 트랜잭션이 검증된 원장에 포함되거나, 트랜잭션에 마지막 원장 시퀀스 (Last Ledger Sequence)가 포함되며, 해당 시퀀스 번호 이하에서 검증된 원장에 나타나지 않을때만 변경할 수 없게 된다. 

트랜잭션을 제출하는 애플리케이션의 모범사례는 아래와 같다.

- LastLedgerSequnce 매개변수를 활용하여 트랜잭션이 결정적이고, 신속한 방식으로 검증 또는 실패하는지 확인한다.
- 검증된 원장에서 트랜잭션 결과를 확인한다.
    - 트랜잭션을 포함하는 원장이 검증되거나, LastLedgerSequnce에 통과되기 전까지의 결과는 잠정적 (임시) 이다.
    - 결과코드 tesSUCCESS 및 `validated: true` 외의 결과는 모두 영구적으로 실패를 의미한다.
    - 트랜잭션 LastLedgerSequence에서 확인한 검증된 원장까지, 검증된 원장에서 나타나지 않는 트랜잭션은 영구적으로 실패를 의미한다.
        - 이 경우를 탐지하기 위해 연속성있는 원장 이력을 보유한 노드를 활용해야 한다. 
    -  LastLedgerSequence에서 확인한 원장이 유효성을 검사할 때까지 반복적으로 트랜잭션 상태를 확인해야할 수도 있다.