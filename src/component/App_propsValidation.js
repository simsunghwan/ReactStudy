import TestProps from "./component/exam1/TestProps";

const App = (props)=> {
  return(
    <>
      <TestProps first='한글' second='ヾ(≧▽≦*)o' third='テスト' />
      <TestProps first='dr.hong' second='홍박사' third={100} />
      {/* 숫자를 프롭스로 전달시에는 주의 필요; {110} */}
    </>
  );  

}

export default App;