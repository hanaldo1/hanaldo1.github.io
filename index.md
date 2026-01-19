---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---

## 📌 자기소개

<!-- <div class="about-me-section">
  <h4>“끊임없이 성장하는 개발자”</h4>
  <p>저는 재직 중에도 학업에 성실히 임해, 교내 성적 우수 장학생 및 IBK 기업은행 장학생으로 선정된 바 있습니다.</p>
  <p>단지 학위 취득이 목적이 아니라 꾸준히 배우고 성장하는 과정 자체를 중요하게 생각해왔고, 이를 위해 Terraform 스터디 참여, 기술 밋업 참여 및 IT 컨퍼런스 영상 시청 등 자발적인 학습을 지속해왔습니다.</p>
  <p>빠르게 변화하는 기술 환경 속에서, 새로운 도구와 트렌드를 따라가며 실무에 반영하고자 노력하고 있습니다.</p>
</div> -->

<div class="about-me-section">
  <h4>“개발 환경은 편하게, 배포는 빠르게”</h4>
  <p>DevOps/SRE 엔지니어로써, <strong>개발 생산성을 높이고 안정적인 배포 환경을 제공</strong>하는 것이 핵심 역할이라고 생각합니다.</p>
  <p>실제로 개발환경 접근 주소 조회 UI, 서버 버전 확인 Slack 슬래시 커맨드 등 <strong>운영 편의성을 높이는 도구</strong>를 직접 개발했고, Docker 이미지 사이즈 최적화, 빌드/배포 파이프라인 분리, API 라우팅 규칙 등록 자동화 CLI 개발 등을 통해 <strong>배포 속도 개선과 반복 작업의 자동화</strong>에도 힘써왔습니다.</p>
  <p>앞으로도 개발과 운영 모두가 더욱 빠르고 안정적으로 움직일 수 있도록, 기술적으로 팀을 뒷받침하는 엔지니어로 성장해 나가고자 합니다.</p>
</div>

<div class="about-me-section">
  <h4>“문제는 빠르게, 가능하면 발생 전에”</h4>
  <p>운영 환경에서는 장애 대응도 중요하지만, 장애를 사전에 방지하는 구조를 갖추는 것 또한 중요하다고 생각합니다.</p>
  <p>온콜 메시지에 상세 정보를 포함해 <strong>원인 탐색 시간</strong>을 <strong>단축</strong>하고, 다양한 장애 발생 지점에 온콜을 적용해 빠른 인지 체계를 구축했습니다. 또한, 서비스 데일리 리포트를 통해 <strong>이상 징후</strong>를 <strong>조기에 감지</strong>하고 <strong>대응</strong>할 수 있도록 하는 시스템을 마련했습니다.</p>
  <p>이 외에도 클라우드 비용 최적화 등을 통해, 운영 안정성 확보에도 기여하고 있습니다.</p>
</div>

<br/>

---

<br/>

## 🔧 스킬

#### ⚙️ Infra-as-Code
`Terraform` `Pulumi` `Helm`

#### 🚀 CI/CD
`Jenkins`

#### 📈 Monitoring
`Datadog` `Prometheus` `Grafana`

#### ☁️ Cloud & Container
`AWS` `EKS` `Docker` `Kubernetes` `Ingress` `Istio`

#### ✍️ Work Tools & Laguage
`Slack` `Jira` `Confluence` `Bitbucket` `Golang`

<br/>

---

<br/>

## 🛠️ 핵심 기여

<div class="architecture-slider">
  <div class="slide active">
    <img src="/assets/images/portfolio/데일리 비용 리포트 아키텍처.png" alt="데일리 비용 리포트 아키텍처" class="zoomable">
    <h3>🔎 데일리 비용 리포트</h3>
    <p>Jenkins 파이프라인 내에서 Go 애플리케이션을 실행하여 AWS Cost Explorer 및 Datadog으로부터 비용 데이터를 조회하고, 가공된 리포트를 Slack 채널로 전송합니다.</p>
    <p>예기치 않은 비용 증가를 조기에 감지하고, 담당자가 빠르게 대응할 수 있도록 했습니다.</p>
  </div>
  <div class="slide">
    <img src="/assets/images/portfolio/서비스 데일리 리포트 아키텍처.png" alt="서비스 데일리 리포트 아키텍처" class="zoomable">
    <h3>📊 서비스 데일리 리포트</h3>
    <p>Kubernetes CronJob으로 Python 애플리케이션을 주기적으로 실행하여 Datadog으로부터 메트릭과 로그를 수집하고, 가공된 리포트를 Slack 채널로 전송합니다.</p>
    <p>전일 에러, API 응답시간, 주요 메트릭 등을 자동으로 공유하여 개발자들이 운영 이슈를 놓치지 않도록 도왔습니다.</p>
  </div>
  <div class="slide">
    <img src="/assets/images/portfolio/API 라우팅 규칙 등록 자동화 아키텍처.png" alt="API 라우팅 규칙 등록 자동화 아키텍처" class="zoomable">
    <h3>⚙️ API 라우팅 규칙 등록 자동화</h3>
    <p>서버 빌드 파이프라인 실행 시 Swagger 문서(JSON)를 파싱해 Ingress 리소스 및 Istio VirtualService YAML 파일을 생성하고, 자동으로 쿠버네티스 클러스터에 등록합니다.</p> 
    <p>수동 등록 과정에서 발생하던 누락/오류를 제거하고 배포 의존도를 줄일 수 있었습니다.</p>
  </div>
  <div class="slide">
    <img src="/assets/images/portfolio/원클릭 환경 생성 시스템 아키텍처.png" alt="원클릭 환경 생성 시스템 아키텍처" class="zoomable">
    <h3>🚀 원클릭 환경 생성 시스템</h3>
    <p>Jenkins 파이프라인에서 Helm을 이용해 네임스페이스 등 환경 구축을 위한 리소스를 자동으로 생성하고, Slack 채널로 생성된 환경 정보를 전송합니다.</p>
    <p>테스트 환경 생성 시간을 단축하고, 인프라 팀이 아니어도 테스트 환경을 구축할 수 있는 시스템을 제공할 수 있었습니다.</p>
  </div>
  <div class="slide">
    <img src="/assets/images/portfolio/온콜 시스템 아키텍처.png" alt="온콜 시스템 아키텍처" class="zoomable">
    <h3>🚨 온콜 시스템 아키텍처</h3>
    <p>서버, 크론잡 모니터링 컨트롤러에서 온콜 메시지를 발행하여, 해당 메시지를 수신한 온콜 서버가 슬랙으로 알림 전송 및 AWS Incident 를 트리거합니다.</p>
    <p>즉각적으로 인지가 필요한 장애를 빠르게 대응을 할 수 있었고, 상세 정보를 통해 원인 탐색까지의 소요 시간을 단축할 수 있었습니다.</p>
  </div>
  <div class="slide">
    <img src="/assets/images/portfolio/파이프라인 분리.png" alt="파이프라인 분리" class="zoomable">
    <h3>🔄 빌드/배포 파이프라인 분리</h3>
    <p>기존에 하나의 파이프라인에서 이뤄졌던 빌드 및 배포 과정을 각각의 파이프라인으로 분리하였습니다.</p>
    <p>필요에 맞는 버전 배포가 가능해졌으며, 배포 시간을 단축할 수 있었습니다. (약 5분 → 1분)</p>
  </div>
  <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
  <button class="next" onclick="moveSlide(1)">&#10095;</button>
</div>

<script>
let currentSlide = 0;
const slides = document.querySelectorAll('.architecture-slider .slide');

function showSlide(index) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}
</script>

<br/>

----

<br/>

## 🪪 자격증 취득 목표

|  기간  |  자격증   | 상태 |
|-----|-----|-----|-----|
|  ~ 25년도 3분기  |  JLPT N2  | 취득 완료 (2025.08.12) | 
|  ~ 25년도 3분기  |  Terraform Associate  | 취득 완료 (2025.09.23) |
|  ~ 26년도 2분기  |  Certified Kubernetes Administrator (CKA) | 시험 결제 완료 (2026.01.19) |
|  ~ 26년도       |  JLPT N1  |  시험 접수 대기 중  |

<br/>

---

<br/>

## 📬 Contact
<ul>
  <li><i class="fas fa-envelope"></i> <a href="mailto:jiwoo@hanaldo.dev">jiwoo@hanaldo.dev</a></li>
  <li><i class="fab fa-github"></i> <a href="https://github.com/hanaldo1" target="_blank">github.com/hanaldo1</a></li>
  <li><i class="fab fa-linkedin"></i> <a href="https://linkedin.com/in/hanaldo" target="_blank">linkedin.com/in/hanaldo</a></li>
</ul>

<script src="{{ '/assets/js/zoom.js' | relative_url }}"></script>