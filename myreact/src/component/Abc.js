import Welcome from './Welcome';
import Box from './Box';
import Box1 from './Box1';
import Box2 from './Box2';

function Abc() {
  return (
    /* <div className="App">
      <h2 ='border : 1px solid'>도망가</h2> 적용불가
      <h2>도망가</h2>
    </div> */
    <>
      <Welcome city="Seoul" population="940" />
      <Welcome city="Daegu" population="230"></Welcome>
      <Box name="붉은상자" color="red" />
      <Box name="녹색상자" color="green" />
      <Box name="푸른상자" color="#0000FF" />
      <Box name="??상자" color="rgba(200,140,45,0.7)" />
      <Box name="??상자" color="rgba(255,0,0,0.2)" />
      <Box></Box>
      <hr />
      <Box1 name="무명상자" color="rgba(111,111,111,0.8)">
        어떤게 나타나냐?
        <p>잘 보일까요</p>
      </Box1>
      <hr />
      <Box2></Box2>
    </>
  );
}

export default Abc;
