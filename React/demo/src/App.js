import './App.css';
import myStyle from '../src/myStyle.module.css'

function App() {

  const h1style = {fontSize:'70px', color:'green', backgroundColor:'yellow'}

  const subject = 'REACT'
  const username = 'MAX WELL'

  return (
    <div>
    
      <h1 style={h1style}>My first React Application.....</h1>
      <h1 className={myStyle.reactStyle}>using module style eg1</h1>
      <h2 className={myStyle.style2}>using module style eg2</h2>
      <h1 className={[myStyle.style2,myStyle.style3].join(' ')}>join style2 and 3</h1>

      <h1>My subject is:{subject}</h1>
      <h2>My user name is: {username}</h2>

    </div>
  );
}

export default App;
