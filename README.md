
<!-- 각 주차마다 새로운 수업 시작할때는 h2파일로 -->
<h2>최진용 5주차 3.30 </h2>
리액트 5주차
DOM엘리먼트의 정의
엘리먼트는 리액트 앱을 구성하는 요소를 의미 
	ㄴ 엘리먼트는 리액트 앱의 가장 작은 블록들 
DOM엘리먼트이며 html요소를 뜻함

Virtual DOM의 엘리먼트 특징
리액트는 Virtual DOM의 형태를 가지고있으므
DOM 엘리먼트는 웹의 모든 정보를 들고 있어 무거움 ( 동기식에 유리 ) 



DOM 장 단점 
DOM은 트리 구조로 되어 있어서 이해하기 쉽지만, 
노드의 수가 많아질 수록 속도가 느려지고, 
DOM 업데이트에 잦은 오류를 발생시킬 수 있다.

| DOM vs VirtualDom| DOM 	| Virtual DOM   | 
| ------------- | ------------- | ------------- | 
| 업데이트	| 느리다	| 빠르다	|
|새로운 element 업데이트 방식|새로운 element가 업데이트된 경우 새로운 DOM 생성	 | 
| 메모리	| 메모리 낭비가 심함| 메모리 낭비가 덜함| 

#props의 특징.
>- 프로퍼티, props(properties의 줄임말) 라고 한다.
 >- 상위 컴포넌트가 하위 컴포넌트에 값을 전달할때 사용한다.
 >(단방향데이터흐름갖는다.)
 >- 프로퍼티는 수정할 수 없다는 특징이 있다.(자식입장에선 읽기 전용데이터이다.)
#pure 함수와 impure함수
>순수 함수(pure function)이란 함수형 프로그래밍에서 사용되는 언어로 함수가  
>수행하는 기능 외에 다른 효과가 나타나지 않는 것을 의미(부작용이 없다)합니다.  
>순수 함수가 아니고 기능 외에 다른 효과가 나타나는 함수를 불순 함수(impure  
>function)이라고 부릅니다.


<p>
<h2>최진용 4주차 3.23 </h2>
<p>
깃 레파지토리 재설정
<ol>
<li>README.md 백업</li>
<li>local에 있는 저장소 이름 바꾸기/삭제</li>
<li>새 프로젝트 생성(23-React1)</li>
<li>README.md 덮어쓰기</li>
<li>GitHub 저장소 삭제</li>
<li>로컬에서 23-React1 push</li>
<li>GitHub 저장소 확인</li>
</ol>

<br>명령어 정리 모음<br>
<ol>

<li>git init</li>
<li>git remote add origin https://github.com/HD-cjy/23-react1.git</li>
<li>git add .</li>
<li>git commit -m "test(코멘트 내용)"</li>
<li>git branch -M main </li>
<li>git push origin main</li>
----- 깃허브 초기화 후 폴더 연결.</li>
React 변수 선언 및 기초 문법</li>
	<!-- const element = <h1>hello,world</h1>    -->
		\{
		장단점:for문을 사용가능하여 작성 가능<br>
		React 는 UI를 구현하는 라이브러리<br>
		세계적으로 가장 관심도가 높고 웹 앱, <br>
		네이티브 모바일 앱 , 데스크톱 앱 등 <br>
		다양한 플랫폼에서 앱을 제작하는 공통 된<br>
		핵심 개발 방법을 제공합니다.<br>
		\}<br>
		xml에서단일태그 문법 사용시  \[<img>,<br>\] 등의 문법은 <img/> 라고 작성 해줘야 함.
</p>


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


# 1주차 리액트 수업 03/09
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
