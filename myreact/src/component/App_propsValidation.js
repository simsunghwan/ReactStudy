import TestProps from "./exam1/TestProps";


const App = (props)=> {
  return(
    <>
      {/* <TestProps first='한글' second='ヾ(≧▽≦*)o' third='テスト' />
      <TestProps first='dr.hong' second='홍박사' third='100' />
      <TestProps first='dr.hong' second='홍박사' third={100} />
      숫자를 프롭스로 전달시에는 주의 필요; {110} 
      bool을 프롭스로 전달시에는 주의 필요; {true} 
      <TestProps first='dr.hong' second='홍박사' third={true} /> */}
      {/* <TestProps /> 
      <TestProps first='dr.hong' />
      <TestProps first='dr.hong' second='홍박사' />     
      <TestProps first='dr.hong' second='홍박사' third='❤️❤️❤️' /> */}

      <TestProps first='dr.hong' second='홍박사' third='❤️❤️❤️' fourth='남' />
      <TestProps first='dr.hong' second='홍박사' third='❤️❤️❤️' fourth='' />
      <TestProps first='dr.hong' second='홍박사' third='❤️❤️❤️' fourth='여' />
      <TestProps first='dr.hong' second='홍박사' third='❤️❤️❤️' fourth='남' />
    </>
  );  

}

export default App;