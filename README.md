<h1>3주차 (3.16)강의 내용</h1>
<!-- 각 주차마다 새로운 수업 시작할때는 h2파일로 -->
<p>
<h2>최진용 3주차 3.16 </h2> 
<br>
리액트란?<br> 
사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리<br>
<br>
리액트의 장점<br>
-동기식과 비동기식<br>
-DOM과 가상 DOM<br>
-컴포넌트 기반 구조<br>
-재사용성<br>

리액트의 단점<br>
-방대한 학습량<br>
-높은 상태 관리 복잡도<br>


1. 구글에 node 검색 후 https://nodejs.org 에 들어가 LTS버전 설치
2. cmd에 node -v 혹은 node --version으로 설치가 완료되었는지 확인<br>
(내 노트북에서의 유효명령어는 node -v ) 이다 . <br>
타 프로그램에서도 버전 확인 명령어 -v --version 를 사용하여 확인가능<br>
NPM의 정의<br>
Node Package Manager의 줄임말<br>
노드js에서 사용하는 패키지를 다운받을 수 있도록 해주는 프로그램<br>
( nodejs설치시 자동설치 )<br>
NPX의 정의<br>
Node Package Runner의 줄임말<br>
npm 5.2.0 버전부터 자동설치 프로그램,<br>
패키지를 설치하지않고 1회성 테스트로 실행 할 수 있게 해준다.<br> 
npm , yarn 등 글로벌 패키지를 설치하지 않고 사용가능.<br>
</P>


# 23-React1
0309 edit.
edit after class > Can I svae this ment?//

깃허브 쉘 명령어 정리
i)git -v
ii)git --version
iii)깃허브 레파지토리 클론하기: git clone <깃허브주소>

JS문법(js특이한 문법)
let a = 1   <정수 1
let b ='1'  <캐릭터 1 ( 문자1 ) 
a == b : TRUE가 나옴 
but 
a===b : false ( 자료형까지 판별하는 식별자 "===" 가 존재)
consol.log는 개발단계에서 확인용으로 자주 사용함.
개발 완료후 확인은 웹페이지 f12>consol창에서 확인.

commit comment는 50byte가 원칙( 통상적,한글 약 25자.) 
JAVA SCRIPT OBJECT NOTION의 줄임말 > JSON 
스크립트에서 KEY값과 KEY VALUE있는 스타일의 자료형을 가장 많이 사용하고 대중적임

패키지 메니저의 중요성> 어떤 프로그램을 깔았는지, 앱에 적용 되어야 할 부분이 어떤 부분인지 확인하기 위해서

commit의 이유 > 지금까지 했었던 작업을 잊지 않기 위해 ( 개발자 기준으로는 이것이 버전.)  
				 어떤시점에서 어느 파일을 adding했는가를 확인 하기 위해서 commit함.
commit작성 예시(나중에 찾아보세요... (커밋에 자주쓰는 뭐, 커밋작성법 )
간단한 요약으로 정리(엔터)
엔터 이후에는 글자수 제한없이 쭉 작성해줘도 괜찮다. ( 자주 커밋하는게 좋다) 

git저장소 :: remote<원격에있는 저장소 
로컬저장소 :: local<내 컴에 있는 저장소 
패키지 설치법 (2가지 있음., 하나는 통상적)
