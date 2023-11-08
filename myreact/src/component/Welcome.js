// [1] function 컴포넌트명(props) {return 결과;}

/* function Welcome() {
  return <p>안녕하세요? 일본 IT과 여러분!</p>;
}

export default Welcome;
 */
/* [2]const 컴포넌트명 = function (props) {return 결과;};
const Welcome = function () {
  return <p>Welcome to Korea</p>;
};

export default Welcome;
 */

// [3] const 컴포넌트명 = (props) => {return 결과;};
const Welcome = (props) => {
  /* 부모 컴포넌트로부터 전달받은 재료
   JSX에서 {} 내부는 JS 소스코드를 의미 */

  return (
    <p>
      Welcome to {props.city} 인구수 : {props.population}만명
    </p>
  );
};

export default Welcome;

// export default const Welcome= (props) => {return;}; // 에러발생
// [1] 방식으로 맨 마지막 코드를 통합해서 정의
// [4] export default function 컴포넌트명(props){ return 결과;}
