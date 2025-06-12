---
layout: post
title: "[영상 보기] 모든 것이 kubernetes 인 세상에서 안전하게 배포하기"
date: 2024-07-21 22:40:00 +0900
categories: [conference]
---

**kubernetes yaml 관리 방법**

- kustomize: kubernetes-native
- helm: template 기반의 복잡한 형태 관리 가능

> bespoke application
-  회사에서 자체 개발되는 어플리케이션
- 보통 개발된 코드의 업데이트로 이미지 교체가 잦음
> 

> common off-the-shelf component
- 외부에서 가지고 와서 사용 되는 component (ex. DB, reverse proxy)
- infrastructure 에 가까울수록 복잡한 쿠버네티스 설정 동반
> 

**kubernetes yaml 을 배포하기 위한 일반적인 방법**

- script → configuration management (ex. ansible) → IaC → **GitOps (ex. ArgoCD)**

⇒ bespoke 어플리케이션도 helm + ArgoCD 조합 사용

**안전하게 사용하기 위해서는?**
- 변경 난이도
    - target: 신규 설치
    - value: 변경되어도 쉽게 예측 가능
    - template: value 와의 연관성을 같이 보면서 변경 사항 예측 필요

⇒ 즉, 배포 되기 전에 어떻게 변경 될지 / 배포 될지 알 필요가 생김

⇒ astrolabe 도구 개발

**astrolabe**
- 변경사항 설명, 변경사항에 영향을 받는 클러스터 등 확인 가능

=> 변경 사항 배포 전, 변경사항으로 발생되는 영향도 파악 가능 (테스트 자동화, 발생 가능한 문제 예측 가능)

<br/>

---

<br/>

카카오에서는 문제를 해결하기 위해서 이미 만들어진 도구를 단순히 사용하는게 아니라 정말로 필요하다면 직접 개발해서 사용한다는 점이 되게 멋지고 대단하게 다가왔고, DevOps 엔지니어로서 이러한 마인드를 본받아야겠다는 생각이 들었다.