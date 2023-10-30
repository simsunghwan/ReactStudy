import React from 'react';
import ReactDOM from 'react-dom/client';


/* 
// // 옛날방식 
// const name = 'dr.hong';
// const element = <h1>안녕하세요?{name}</h1>

// ReactDOM.render(
//   element, // 컴포넌트
//   document.querySelector('#root')
// )

// 최신방식

// const name = 'dr.hong';
// const element = <h1>안녕하세요?{name}</h1>;
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>{element}</>
// );


const person = {
  name:'홍박사',
  address:'대구시',
  age:25
}

const name = 'dr.hong';
const element = <h1>안녕하세요?{printPerson(person)}</h1>

function printPerson(person){
  const {name, address, age} = person;
  return (`${name} 입니다.${address}에서 살고, 나이는 ${age}살 입니다.`)
}

const App = (props)=> {
  <>
    name
    <hr />
    {name}
    <hr />
    {element}
  </>

}



ReactDOM.createRoot(document.querySelector('#root')).render(
  // <App/>  
  // person.age+10
  element
); */


// const person = {
//   name:'홍박사',
//   address:'대구시',
//   age:25
// }

// const element = (
//   <h1>
//     안녕하세요?{printPerson(person)}
//   </h1>
// );



// function printPerson(person){
//   const {name, address, age} = person;
//   return (`${name} 입니다.${address}에서 살고, 나이는 ${age}살 입니다.`)
// }

// const photoUrl = 'https://cdn.pixabay.com/photo/2023/09/07/14/26/cat-8239223_1280.png';

// const element1 = <a href='https://google.com'>클릭</a>
// const element2 = <img src={photoUrl} />

const MyObj = {
  ColorPicker: function ColorPicker(props){
    return (
    <div style={{backgroundColor:props.color}}>
      선택한 색상은: <b>{props.color}</b>
    </div>);
  }
}

function BlueColorPicker(){
  return <MyObj.ColorPicker color='skyBlue'></MyObj.ColorPicker>
}

function RedColorPicker(){
  return <MyObj.ColorPicker color='red'></MyObj.ColorPicker>
}

ReactDOM.createRoot(document.querySelector('#root')).render(
/*   <>
    {element1}
    <hr/>
    {element2}
  </> */
  <>  
    <BlueColorPicker/>
    <RedColorPicker/>
  </>
);