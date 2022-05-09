# ReactJS_begin
How to use ReactJS with Nomad

## 아주 간단한 핵심정리

### 1. const [something, setSomething] = React.useState(init);
#####  - -상태가 변경 되는 something을 init으로 초기화 시킬 수 있다.
#####  - -상태변경시에 setSomething으로 상태변경 함수를 명시하고 자동으로 rerender 해줄 수 있다.
 
### 2. custom 한 컴포넌트사용
##### - -디자인한 컴포넌트를 반복적으로 사용할 수 있도록 나만의 컴포넌트 함수를 만든다.
##### - -인자로 받아지는 props는 Object형태로 string, bool, function등 다양한 형태를 인자로 받아 올 수 있다.
##### - -위 인자로 받아지는 것의 이름은 사용자가 지정할 수 있고, 위치를 조정하는 것도 사용자의 몫이다.
##### - -Ex) function Btn(props) ();

### 3. const MemorizedBtn = React.memo(Btn);
##### - -본인이 디자인한 컴포넌트가 부모에 의해 상태변경될 때 모든 것이 rerender 될 수 있다.
##### - -이때, memerize를 통해 상태가 변경된 컴포넌트만 rerender될 수 있도록 사용할 수 있다.
##### - -위와 같이 선언하고 컴포넌트 이름은 MemerizedBtn으로 사용하면 된다.

### 4. props의 type checking;
##### - -<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script> 사용
##### - -잘못된 props의 타입이 들어오는 것을 체크하기 위함
##### - -isRequired를 이용해 반드시 필요한 props인 것도 명시 가능.

### 4. Create ReactApp
##### - -Node.js 설치 : node -v 로 설치확인 npm install npx -g 명령어 사용하여 npx 설치하여 npx -v 확인
##### - -npx create-react-app "폴더이름" 으로 시작
##### - -package.json 에서 scripts에 start, bulid, test, eject 등 확인
##### - -npm start로 실행, 디폴트 생성 파일들 정리
