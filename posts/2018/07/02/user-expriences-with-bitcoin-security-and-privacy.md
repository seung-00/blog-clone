---
title: 암호화폐의 다른면 - 비트코인의 보안 및 개인정보 보호를 통한 사용자 경험
date: 2018-07-03 12:00:00
published: true
tags:
  - blockchain
  - bitcoin
description: "The Other Side of the Coin: User Experiences with Bitcoin Security
  and Privacy [원문](http://fc16.ifca.ai/preproceedings/33_Krombholz.pdf)  > 2016년
  발표된 논문입니다. 그 때 당시 데이터 기준이라 작성하는 현재 (2018년) 과는 많은 차이가 ..."
category: blockchain
slug: /2018/07/02/user-expriences-with-bitcoin-security-and-privacy/
template: post
---
The Other Side of the Coin: User Experiences with Bitcoin Security and Privacy

[원문](http://fc16.ifca.ai/preproceedings/33_Krombholz.pdf)

> 2016년 발표된 논문입니다. 그 때 당시 데이터 기준이라 작성하는 현재 (2018년) 과는 많은 차이가 있을 수 있습니다. 그럼에도 불구하고, 비트코인 생태계와 관련된 첫번째 대규모 설문이라는 점에서 의미가 있습니다.

현재 시가 총액이 35억달러인 비트코인은 암호화폐 중에서 가장 성공적인 모습을 보인다. (2018년 현재는 \$109,351,638,467이다. [참고](https://coinmarketcap.com/currencies/bitcoin/)) 하루에 약 130,000 건의 거래가 이루어지고 있으며, 상당한 언론 조명도 받고 있다.

암호화폐의 인기가 증가하고 있지만, 아직은 큰 현상이라고 보기엔 이르다. 그 이유 중 하나는 사용자들에게 공개 키를 암호화 처리하도록 강요하는 것이다. 또한 비트코인은 중앙 집중식 통화 시스템에 비해 대부분의 보안조치를 최종 사용자에게 이전한다. 비트코인을 관리할 수 있는 다양한 소프트웨어가 있지만, 기술적인 기본 사항을 처리하고 백업을 수행해야 하는 필요성은 여전히 존재한다. 따라서 이러한 시스템은 인간의 오류에 유연하게 대처하지 못한다. 온라인 포럼과 메일링 리스트의 보고서에 따르면, 많은 수의 비트코인의 사용자가 낮은 키관리의 유용성과, 악성 거래, 지갑과 같은 모안 침해로 인해 자신의 자산을 잃어버린 것으로 나타났다. 이는 비트코인 생태계와 인간의 상호작용에 대한 연구에 동기를 부여한다.

비트코인 사용자는 가상의 자산을 관리하는데 사용할 수 있는 다양한 툴을 가지고 있다. 이러한 도구들은 흔히 지갑(wallet)이라 불린다. 지갑은 원래 여러개의 private key를 모아둔 것으로 정의 되었다. ([비트코인 wallet](https://en.bitcoin.it/wiki/Wallet)) 따라서, 이러한 이러한 private key를 적어둔 종이나, 머리속에 기억해 둔 것도 일종의 지갑이라고 불리울 수 있다. 그러나 이러한 도구의 대부분은 트랜잭션의 수행과 같은 저장 이상의 기능을 제공하지는 못한다. 다른 public key 암호화 시스템과는 다르게 (PGP/GPG) 비트코인은 완전한 독립적인 통신채널을 가지고 있지 않다. 비트코인의 경우, 분산 시스템을 운영하기 위해서는 비트코인 네트워크와 반드시 상호작용 해야 한다. 비트코인 툴은 다른 서명 시스템과는 달리, 수행된 트랜잭선, 계정 잔액에 대한 상태 정보를 각각 유지해 주어야 한다.

이 연구의 목표는 비트코인과 유저의 상호작용 방법과 가상의 자산을 관리하는 방법을 이해하는 것이다. 비트코인 네트워크에서 보안, 프라이버시 및 익명성과 관련한 경험과 인식도 연구되었다. 사용자 보고서를 수집하기 위해, 990명의 참가자를 대상으로 포괄적인 온라인 인터뷰를 실시하고, 그 중 10명을 대상으로는 정성적인 인터뷰도 진행되었다.

가장 많이 사용되는 CMT(Coin Management Tool)인 CoinBase, Xapo는 보안 책임을 제3자에게 넘기는 웹기반 도구 이다. 그러나 사용자의 1/3이 이 데이터가 암호화되어 있는지, 백업되어 있는지 알지 못하는 것으로 나타났다. 이 솔루션을 사용하는 사용자중 50%는 이 솔루션 만을 사용한다고 하였고, 나머지는 관리를 위해 다른 제품도 사용하는 것으로 나타났다. 위험 시나리오와 관련하여, 두번째로 큰 위험은 이런 CMT의 취약성으로 인해 나타났다.

또한 익명으로 남는 다는 것에 대한 오해가 생각보다 많은 사용자에게 나타나는 것도 발견되었다. 또한 사용자의 25%가 보안으로 취약한 '토르 위에서 비트코인을 사용'하는 것으로 나타났다. 참고([Bitcoin over Tor isn't a good idea](https://arxiv.org/abs/1410.6079)). 그리고 이미 사용자의 22.5%가 보안 침해로 인해 비트코인을 잃어버렸다고 이야기 했다. 이 중 절반 가량은 이 손실을 자신들의 잘못으로 여기고 있고, 대다수는 그 잃어버린 자산을 영원히 되찾지 못했다.

<iframe width="640px" height="360px" src="https://www.youtube.com/embed/gd5NZvsyAfw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

이 연구에서 이뤄진 조사

- [https://www.soscisurvey.de/](https://www.soscisurvey.de)에서 오로지 비트코인 사용자만을 대상으로 조사를 실시.
- 참가자들에게 비트코인을 보상으로 제공 (0.0042비트코인, 그 때 당시 약 1.22 달러. 현재는 27달러 ^^)
- 참가자들이 다른 참가자를 모집해오면, 보상으로 0.001 비트코인을 제공.

---

## 결과 요약

### 참가자들의 국적

![bitcoin-survey1](../images/bitcoin-survey1.png)

### 가장 많은 참가자를 모집해온 Top5 참가자

![bitcoin-survey2](../images/bitcoin-survey2.png)

### 비트코인을 어떻게 사용하나요?

1. 팁과 도네이션 (38.0%)
2. 가상 물건을 구매하기위해 (웹 호스팅, 온라인 뉴스 등) (33.3%)
3. 온라인 쇼핑 (27.5%)
4. 알트코인 (26.5%)
5. 도박 (26.5%)
6. 비트코인 기프트 카드 (19.9%)

기타. 마약 (..... 약 5%)

### 얼마나 자주 사용하나요?

1. 주 1회 (30.2%)
2. 월 1회 (25%)
3. 일 1회 (19%)
4. 그 외는 연 1회 혹은 그 이하

### 비트코인을 언제 시작했나요?

1. 2013~2015년 (70%)
2. 2011~2012년 (17%)

### 다른 암호화폐는 무엇을 사용하나요? (전체 응답자 중 58%가 알트코인을 사용한다고 하였음.)

- 도지코인, 라이트코인이 가장 많았음.

### 주 거래소는 무엇인가요?

1. BTCE (20.9%)
2. Bittrex (14.0%)
3. Bitstamp (13.0%)

### 11.4%가 현재 마이닝 중이라고 하였으며, 대부분이 2014년 이후 마이닝을 시작함

- 이전에 마이닝을 한 사람들은, 현재는 그것이 불가능하다고 생각하기 때문에 (수익성을 내기 어렵다) 중단하였다고 응답.

### 19.7% 는 현재 비트코인 서버를 운영 중이라고 응답. (bitcoin Node)

이러한 서버를 운영하는 이유는

1. 비트코인 네트워크에 기여하기 위해 (60.5%)
2. 빠르게 트랜잭션 전파를 뒤따르기 위해 (46.6%)
3. 네트워크 분석 (30.3%)
4. 이중 지불 방지 (26.1%)

### 비트코인을 시작한 이유?

1. 비트코인의 분산화된 성격 때문에
2. 호기심

비트코인 시작에 대한 흥미로운 사례 중 하나는, 우크라이나 - 러시아 분쟁이 시작된 당시 크림반도에 살았던 참가자가 언급한 사회적치적인 이유였다. 그는 당시 미국 회사에서 일하고 있었으며, 크림반도에서 봉급을 받을 수 있는 안전하고 저렴한 옵션을 찾고 있었다. 그 중 비트코인이 가장 좋은 선택이었다고 한다. 당시 크림반도에서 많은 사람들이 비트코인을 사용중이라고 하였다. 일부 참가자들은 개인적으로 채굴을 했었는데, 이는 소규모 수익성이 있었다.

### 참가자들이 사용한 월렛 (CMT)

![bitcoin-survey3](../images/bitcoin-survey3.png)

참가자들은 자신이 이용하는 월렛이

![bitcoin-survey4](../images/bitcoin-survey4.png)

### 비트코인을 사용하면서 느끼는 위협

참가자들에게 비트코인에서 발생할 수 있는 11가지 위험 시나리오를 제공하였다. 각 시나리오에 대해 설명을 제공하고, 이러한 위험이 발생할 가능성이 있는지 없는지 물어보았다. 그 결과

![bitcoin-survey5](../images/bitcoin-survey5.png)

### 보안 침해

22.5%는 비트코인이나 개인키를 잃어버린 적이 있다고 응답했다. 이 중 43.2%는 자신에게 책임이 있다고 하였다. 이러한 일이 발생한 원인은

1. 하드웨어 (하드를 포맷하거나, 담아두었던 드라이브를 분실하는 등) (26.5%)
2. 소프트웨어 (keyfile corruption) (24.4%)
3. 보안 침해 (멀웨어, 해킹) (18%)

비트코인 분실자들 중 대다수는 (77.6%)는 키를 복구 할 수 있는지 여부를 밝히려 하지 않았다. 그 중 65%는 키를 복구하지 못했다. 이들이 잃어버린 비트코인의 총합은 660.6873개 (현재 가치 418만 달러 ㅠㅠ). 그러나 언제 분실되었는지 묻지 않았으므로 분실된 비트코인의 가치를 정확하게 계산하기란 어렵다. 전체 가자중 13.1% 가 [HYIPS](https://en.wikipedia.org/wiki/High-yield_investment_program)(고수익을 보장하는 일종의 사기) 나 피라미드 사기로 인해 잃어버린 것으로 나타났다. 7.9%는 마운트곡스에서 잃어버린 것으로 알려졌다.

그리고 이러한 사건에 어떻게 대응했는지 물어보았다. 그러나 대다수는 잃어버린 키를 회수 하기 위해 어떠한 조치도 취하지 않고 단순히 이러한 손실을 겸허히 받아드린 것으로 나타났다. 어떤 이들은 재정적 손실이 더이상 조치를 취할 가치가 없으며, 무엇을 해야할지 모르기 때문에 무력감을 느낀다고 하였다. 실제로 행동을 취한 소수는 온라인 월렛 제공자나 거래 당사자에게 항의를 한것으로 나타났다. 그리고 온라인에서 악의적인 공격으로 잃어버린 사람들은 다른 월렛으로 갈아탔다고 이야기 했다. HYIPS에서 돈을 잃은 사람들은 이제 덜 위험한 투자를 사용하며, 이전 실수에서 배운 것이 있다고 말했다. 그리고 그들의 주옥같은 명언들 (...)

- 나는 이제 '잃을 각오가 된 이상으로 투자하지말라' 라는 규칙을 따르기로 했다.
- 나는 내 돈이 털린 것을 받아드리기로 했다.. 그리고 절대로 거래 할때 월렛을 사용하지 않기로 했다. 모든 것을 내손에 쥐고 있기로 했다.
- 많은 것을 배웠다. 나는 굉장히 어리석었다.

심층 인터뷰를 한 8명은, 의도적이거나 실수로 비트코인이나 private key를 잃어버린 적이 있다고 이야기 했다. 참가자들 중 3명이 마운트 곡스 사건에 연루되어 있었고, 그 중 두명은 [크라켄](https://www.kraken.com/)을 고소한 것으로 나타났다. ([사건 참고](https://coinone.co.kr/talk/clip/detail/379)). 참가자중 한명은 [Casascius Coin](https://en.bitcoin.it/wiki/Casascius_physical_bitcoins)을 잃어버렸지만, 그 당시 가치가 9달러 밖에 안되서 굳이 찾지 않았다고 한다.

### 사용성에 대한 인식

심층 인터뷰에 참가한 대부분은 비트코인의 관리측면에서 사생활과 보안에 대해서 매우 우려하고 있지만, 비기술적인 비트코인 사용자들에게 온라인 지갑을 추천할 것이라고 했다. 주요 이점으로는 편의성과 사용 용이성을 꼽았다. 한 참가자는 복구를 쉽게하고, 포괄적인 백업 뿐만 아니라, 니모닉에 도움이 되도록 개인키가 중앙서버에 저장되는 월렛을 추천할 것이라고 말했다. 6명 참가자는 [MyCelium](https://mycelium.com/)을 가장 유용한 월렛으로 추천하였다. 이미 이 월렛을 사용하는 사람들은 종이 백업 절차를 가장 유용하고 안전한 방법으로 이야기 했다.

대부분의 사람들은 비트코인을 처음이용하기 위해서는 기초적인 공부가 필요하다는 것을 강조했고, 비트코인은 본질적으로 복잡하며, 공개키 암호화의 기본 아이디어는 학교에서 가르쳐야 하고 통화시스템은 문화의 문제라고 언급했다.

## 결론

많은 수의 사용자들이 암호화와 백업 같은 충분한 조치를 취하지 않기 때문에, 비트코인의 관리가 여전히 많은 사용자들에게 주요한 과제임이 드러났다. 그리고 대부분이 CMT에서 어떠한 보안기능을 제공하는지도 알지 못하고 있었다. 그리고 가장 널리 사용되는 CMT는 웹 호스팅 솔루션이다. 이 중 절반은 이러한 웹 호스팅 솔루션 만을 사용하며, 나머지는 로컬 클라이언트도 병행해서 사용하고 있었다. 웹 클라이언트는 유용하고 편리한 솔루션이어야 하지만, 일정 수준의 신뢰를 필요로 하며, 암호화와 백업 관리에 대한 책임을 제 3자에게 이전해야하는 리스크가 있다. 그리고 22.5%가 이미 비트코인을 통해 손실을 경험했고, 그 중 절반이 자신의 실수로 인한 것이라고 언급했는데 이는 여전히 사용자가 비트코인을 관리하기 어렵다는 것을 보여준다.

비트코인 생태계와의 상호작용을 전문가와 비전문가인 유저 모두에게 보장하기 위해, 단순히 비밀키 관리를 넘어서 비트코인의 관리개념을 다시 생각할 필요가 있다. 비트코인은 peer간 상호작용과 메시지와 데이터 전파 및 검증이 중요한 검증 시스템이다. 이 측면을 무시한다면, 비트코인은 단치 가치 가없는 숫자들의 집합일 뿐이다.

> 전체 질문은 원문에서 확인하세요.