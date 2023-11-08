import React, {useState} from "react";

const Info = (props) => {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  // useState는 primitive type만 사용하여야 하나?
  // array, object형 사용 가능한가? Yex
  // 주의사항
  // array, object의 사용시 setter 함수의 사용 주의
  
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




export default Info;