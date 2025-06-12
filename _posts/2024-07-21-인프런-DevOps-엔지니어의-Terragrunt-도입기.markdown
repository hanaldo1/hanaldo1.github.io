---
layout: post
title: "[영상 보기] 인프런 DevOps 엔지니어의 Terragrunt 도입기"
date: 2024-07-21 22:34:00 +0900
categories: [conference]
---

다른 서비스 간 동일한 인프라 구조를 가져가기 위해 IaC 를 사용

→ 기존에는 AWS CDK 를 사용 했었으나 CloudFormation 이 중간에 존재함에 따라 콘솔에서의 수동 변경 사항을 CDK 에서 인식이 되지 않는 문제점 존재

→ Terraform 을 사용하게 됨

→ 팀원이 계속해서 늘어나고 코드 수 또한 늘어남에 따라 일관성 있게 안정적으로 사용하는 방법이 필요해짐

→ Terragrunt 도입

**Terragrunt 을 선택한 이유**

- include 문을 통해 provider 등의 중복 코드 제거 가능
- read_terragrunt_config 함수를 통해 다른 파일의 config 등 간단히 참조 가능
- run-all 명령어를 통해 상위 디렉토리에서 의존되는 모든 모듈들을 모두 실행 가능

⇒ 체계적인 컨벤션을 잡아서 사용 하게 되면서, 이전보다 terraform 코드를 일관적으로 중복 코드를 제거하면서 작성할 수 있게 됨

<br/>

---

<br/>

terraform 까지는 알고 있었고 써 보았으나 terragrunt 는 이번 영상을 통해 처음 알게 되었다.

사실 해당 발표 영상만 봐서는 설명하는 terragrunt 의 장점이 크게 와 닿지는 않아, 나중에 개인적으로 terraform 작성 시에 직접 사용 해보면서 비교 해보는게 좋을 것 같다는 생각이 들었다.