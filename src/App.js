import React from 'react';
import './App.css';
import myImage from './2.jpg'

function App() {
  let name="Bilel Abdellaoui"
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

          <h1 className="title red" >My name : {name}</h1>

          <br/>
          <div className="pic">
          <img src={myImage} alt="mypicture" />
          
          <img src="./1.jpg" alt="mypicture" style={{width:'25%',height:'10%'}}/>
          </div>

          </div>

          <video width="320" height="240" controls>

          <source src="https://www.youtube.com/watch?v=O0HPiDmnTBg" type="video/mp4"/>

          </video>
          
    </div>
  );
}

export default App;
