// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './component/App_propsValidation';
// // import PropTypes from 'prop-types';
// // // import App from './App';

// // const root = ReactDOM.createRoot(document.querySelector('#root'));
// // root.render(
// //   <>
// //     {/* <App /> */}
// //     {/*<h1>일본반 화이팅</h1>*/}
// //     <App></App>
  
  
// //   </>
// // );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import PropTypes from 'prop-types';


// const SomeComponent = (props) => {
//   // return (<>{props.data[2]}</>);
//   return (
//     <div>
//       {/* <input 
//       type='text' 
//       // value={props.searchText}(X) HTML문법  JSX문법을 사용하지 않으면 에러 발생
//       defaultValue={props.searchText}/> */}

//       <input 
//         type='text'
//         defaultValue={props.data[2]} 
//         style={{
//           marginTop:'50px',
//           marginBottom:'10px',
//           marginLeft:'50px',
//           marginRight:'10px',
//           padding:'25px',
//           borderRadius:'4px',
//           border:'1px solid #f75211',
//         }}
//       />
//       <span>{typeof(props.data[2])}</span>
//     </div>
//   )
// };
// SomeComponent.protTypes = {
//   data:PropTypes.arrayOf(
//     PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
//     ),
//   // data:PropTypes.oneOf(['male', 'female'])
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//     {/* <h1>Hello</h1>   */}
//     {/* <SomeComponent data={[1,2,'3',4,5]} /> */}
//     {/* props로 배열전달시 {배열명} */}
//   {/*   <SomeComponent searchText='female' />
//     <SomeComponent searchText='abc' /> */}
//     {/* <SomeComponent data={[1,2,3,4,5]} /> */}
//     <SomeComponent data={['korea', 'usa', 1, '1', 2, 3, true]} />

//   </>
// );
