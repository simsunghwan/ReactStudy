import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App_useState'


// useState, useEffect 예시


const Info = (props) => {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');

  useEffect(
    () => {
      console.log('렌더링 완료됨');
      console.log(
        {name, pwd}
        // {name: name, pwd: pwd}
      );
      return( // cleanup
        ()=>{
          console.log('뒷처리');
        }
      );
    }
    // ,[]
    ,[name ]
  );
  
  const changeName = (e) => {
    setName(e.target.value);
  };
  
  const changePwd = (e) => {
    setPwd(e.target.value);
  };

  const [user, setUser] = useState({name:'',pwd:''});

  const changeUser = (e) => {
    e.preventDefault()

    const data = {
      name,
      pwd
    }
    
    setUser(data)

    console.log(user);
  };

  return(
    <>
      <form onSubmit={changeUser}>
        <input value={name} onChange={changeName} type="text" />
        <input value={pwd} onChange={changePwd} type="text" />
        <hr />
        <div>
          <div><b>이름:</b>{user.name}</div>
        </div>
        <div>
          <div><b>패스워드:</b>{user.pwd}</div>
        </div>
        <button type="submit">등록</button>
      </form>
    </>
  );
}



const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div 
        onClick={
          ()=>{
            setVisible(!visible)
          }}>
        <button>{visible?'숨기기':'보이기'}</button>
      </div>
      <hr />
      {visible && <Info />}
    </>
  );
}


ReactDOM.createRoot(document.querySelector('#root')).render(
  <>
    <App></App>
  </>
)