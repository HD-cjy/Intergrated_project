# 데이터베이스
한 조직에 필요한 정보를 여러 응용 시스템에서 공용할 수 있도록 논리적으로 연관된 데이터를 모으고 중복되는 데이터를 최소화하여 구조적으로 통합/저장해놓은 것

1. 공용 데이터(Shared Data) 공동으로 사용되는 데이터 
2. 통합 데이터(Integrated Data) 중복 최소화로 중복으로 인한 데이터 불일치 현상 제거
3. 저장 데이터(Stored Data) 컴퓨터 저장장치에 저장된 데이터
4. 운영 데이터(Operational Data) 조직의 목적을 위해 사용되는 데이터
## DBMS
DataBaseManegementSystem

## DBMS 이점
1. 데이터 독립화 
   데이터와 응용프로그램
2. 데이터 중복 최소화, 데이터 무결성 보장
   중복되는 데이터를 최소화 시키면 데이터 무결성이 손상될 가능성이 줄어듦 중복되는 데이터를 최소화 시키면 필요한 저장공간의 낭비를 줄일 수 있음
3. 데이터 보안 향상
   응용프로그램은 DBMS를 통해 DBMS가 허용하는 데이터에만 접근 가능 권한에 맞게 데이터 접근을 제한하거나 데이터를 암호화시켜 저장 가능
4. 관리 편의성 향상
   다양한 방법으로 데이터 백업 가능 장애 발생 시 데이터 복구 가능


# 개발 환경 구축 

설치 완료후, 기본 인코딩 utf-8로 변경
도구>환경 인코딩
	코드편집기 - 주석색이나 글꼴 등 개인 커스터마이징 글꼴 및 크기 조정 
	표시에서 오른쪽ㅇ 여백 표시 제거 
	![[Pasted image 20250325111850.png]]
	![[Pasted image 20250325105339.png]]
한줄실행 컨트롤 + enter // 
전체 실행 F5 (스크립트 실행)


데이터 조작, SELECT(DQL) , INSERT,UPDATE, DELETE
데이터 정의, CREATE,ALTER,DROP
트랜잭션 제어 ,COWIT, ROLLBACK
권 한 부여 , GRANT , REVOKE
<SELECT>
데이터를 조회하거나 검색말때 사용하는 명령이
-RESULT SET : SELECT 구문을 통해 조회된 데이터의 결과물을 의미
조회된 행들의 집합이다.
[표현법1
SELECT 조회하고자 하는 컬럼명,걸럼명2
EROM 해당 걸림이 있는 테이블명;


|분류|설명|주요 명령어|
|---|---|---|
|**DML** (Data Manipulation Language, 데이터 조작어)|테이블의 데이터를 조회, 추가, 수정, 삭제하는 명령어|`SELECT` (DQL), `INSERT`, `UPDATE`, `DELETE`|
|**DDL** (Data Definition Language, 데이터 정의어)|데이터베이스 및 테이블의 구조(스키마)를 정의하는 명령어|`CREATE`, `ALTER`, `DROP`, `TRUNCATE`|
|**TCL** (Transaction Control Language, 트랜잭션 제어어)|트랜잭션의 실행 및 변경 사항을 제어하는 명령어|`COMMIT`, `ROLLBACK`, `SAVEPOINT`|
|**DCL** (Data Control Language, 데이터 제어어)|데이터베이스에 대한 접근 권한을 부여하거나 회수하는 명령어|`GRANT`, `REVOKE`|

각 명령어의 주요 기능을 간략히 설명하면 다음과 같습니다.

### 1. **DML (데이터 조작어)**

- `SELECT` : 데이터 조회 (DQL, Data Query Language)
    
- `INSERT` : 데이터 삽입
    
- `UPDATE` : 데이터 수정
    
- `DELETE` : 데이터 삭제
    

### 2. **DDL (데이터 정의어)**

- `CREATE` : 데이터베이스, 테이블, 인덱스 등을 생성
    
- `ALTER` : 기존 테이블의 구조 변경 (컬럼 추가, 수정, 삭제 등)
    
- `DROP` : 데이터베이스, 테이블, 뷰 등을 삭제
    
- `TRUNCATE` : 테이블의 모든 데이터를 삭제 (구조는 유지)
    

### 3. **TCL (트랜잭션 제어어)**

- `COMMIT` : 변경 내용을 영구적으로 저장
    
- `ROLLBACK` : 변경 내용을 취소하고 이전 상태로 복구
    
- `SAVEPOINT` : 트랜잭션 내에서 특정 지점을 저장하고, 해당 지점으로 롤백 가능
    

### 4. **DCL (데이터 제어어)**

- `GRANT` : 사용자에게 특정 권한을 부여
    
- `REVOKE` : 부여한 권한을 회수

월요일 시험준비 