import React from 'react';
import ReactDOM from 'react-dom/client';


const SideMenu = (props) => {
  console.log(props.showMenu);
  return(
    <>
      <div
      style={{
        border:'1px solid rgba(244,67,54,1.0)',
        width:'200px',
        height:'100vh',
        textAlign:props.direction,
        textTransform:'uppercase',
        
        
      }}>
        {props.direction}

        <ul style={{listStyle:'none', paddingLeft:'0px', lineHeight:'2.6rem'}}>
          <li>Lorem.</li>
          <li>Reiciendis.</li>
          <li>At.</li>
          <li>Perspiciatis!</li>
          <li>Commodi?</li>
          <li>Soluta.</li>
          <li>Totam.</li>
          <li>Pariatur.</li>
          <li>Praesentium.</li>
          <li>Quasi!</li>
          <li>Consectetur?</li>
          <li>Voluptatem.</li>
          <li>Mollitia!</li>
          <li>Modi!</li>
          <li>Laudantium.</li>
        </ul> 

      </div>
    </>
  );
}

const App = (props) => {
  const {showMenu} = props;
  return( 
    <>
      {showMenu && <SideMenu  direction='left'/>}
    </>
  );
}

ReactDOM.createRoot(document.querySelector('#root')).render(
  <>
    <App showMenu={true}/>
  </>
);