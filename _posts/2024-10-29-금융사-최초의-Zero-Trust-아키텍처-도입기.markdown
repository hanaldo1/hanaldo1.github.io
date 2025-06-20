---
layout: post
title: "[영상 보기] 금융사 최초의 Zero Trust 아키텍처 도입기"
date: 2024-10-29 14:55:00 +0900
categories: [conference]
---

**기존 로그인 방식 및 네트워크 접근 방식**

- 각기 다른 아이디/패스워드, 패스워드 분실로 인한 업무 지연, 매번 찾아서 입력하는 OTP
- SSL-VPN 접속 시 매번 입력해야 하는 아이디 패스워드 + OTP
- 사내망/원격 접속 등 환경 관리포인트 이원화 (ex. 각 환경의 방화벽 환경 허용 필요)

→ 여러 이유로 인하여 업무의 불편함 생겼고, 보안을 향상시키면서 업무 향상성 높이고자 니즈 생김

→ 새로운 보안 패러다임 필요 → 제로트러스트 도입

**제로트러스트 각 영역별 주요 역할**

- IAM: 적합한 사람과 디바이스가 필요할 때 원하는 애플리케이션과 리소스 및 시스템에 접근할 수 있도록 허용하는 프레임워크
- SASE: 사용자, 시스템, 엔드포인트 및 원격 네트워크 앱을 안전하게 연결하는 클라우드 전달 플랫폼
- ZTNA: 명확하게 정의된 액세스 제어 정책을 기반으로 조직의 애플리케이션, 데이터 및 서비스에 대한 보안 원격 액세스 제공
- UEM: PC 와 모바일 디바이스를 중앙에서 통합 관리하는 솔루션
- EPP: PC 와 모바일 디바이스에서 발생할 수 있는 다양한 보안 위협을 탐지, 차단하기 위한 통합 보안 솔루션

**토스에서 제로트러스트로의 전환 절차**

1. IAM 모든 팀원 계성 생성 → 온보딩
2. AD 제거 - UEM 적용
3. SASE / STNA - IAM 통해 로그인

**변화된 것**

1. 지문 인증으로 원하는 시스템에 접근 가능 (+ 보안 검증)
2. 접근 환경과 관계 없이 동일한 보안 환경으로 업무 시스템 접근 (+ 디바이스 보안 검증)

**도입 후 생긴 효과**

1. 접근 환경 이원화(오피스, 원격) 제거
2. 로그인 편의성 향상, 보안 향상
3. 자동화를 통한 보안 관리 효율성 향상 (ex) 인사 이동 시의 비활성화)

<br/>

---

<br/>

단순히 서비스 운영 측면이 아니라 조직 레벨 에서의 제로 트러스트를 도입한 사례를 알 수 있었음