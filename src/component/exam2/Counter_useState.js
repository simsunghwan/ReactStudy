import React, { useState } from "react";


/* const Counter = (props) => {
  let num = props.count;
  const inCrease = () => {
    // props.count++; // props는 읽기전용
    num = num++; // 후위연산자 할당 먼저 실행 후 증가
    // num = ++num; // 전위연산자 사용
    console.log(typeof(num), num);
    const h1Tag = document.querySelector('h1');
    h1Tag.innerText=num;
  }
  return(
    <>
      <h1>{num}</h1>
      <button onClick={inCrease}>클릭</button>
    </>
  )
} */

const Counter = (props) => {
  // useState 사용
  const [num, setNum] = useState(props.count);
  // num: 상태관리용 변수
  // setNum: num의 Setter함수
  // num은 setNum으로만 값 변경 가능
  // const [변수명, set변수명(camelCase)]=useState(초기값)
  console.log(num);
  const inCrease = () => {
    // num += 1 // 에러
    setNum(num+1); // setter함수 이용
  }
  const deCrease = () => {
    if (num === 0) {
      console.log('0 이하로는 감소 불가');
      return;
    }
    setNum(num-1);
  }

  return(
    <>
      <h1>{num}</h1>
      <button onClick={inCrease}>1증가</button> &nbsp; &nbsp;
      <button onClick={deCrease}>1감소</button> 
    </>
  );
}




export default Counter;

