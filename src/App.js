import { useState } from 'react';
import './App.scss';

const initialValue = [
  {
    id:1,
    top:Math.floor(Math.random() * 300) + 70,
    left:Math.floor(Math.random() * 300) + 30
  },
  {
    id:2,
    top:Math.floor(Math.random() * 300) + 70,
    left:Math.floor(Math.random() * 300) + 30
  },
  {
    id:3,
    top:Math.floor(Math.random() * 300) + 70,
    left:Math.floor(Math.random() * 300) + 30
  },
  {
    id:4,
    top:Math.floor(Math.random() * 300) + 70,
    left:Math.floor(Math.random() * 300) + 30
  },
  {
    id:5,
    top:Math.floor(Math.random() * 300) + 70,
    left:Math.floor(Math.random() * 300) + 30
  },
  {
    id:6,
    top:Math.floor(Math.random() * 300) + 70,
    left:Math.floor(Math.random() * 300) + 30
  },
  {
    id:7,
    top:Math.floor(Math.random() * 300) + 70,
    left:Math.floor(Math.random() * 300) + 30
  },
  {
    id:8,
    top:Math.floor(Math.random() * 300) + 70,
    left:Math.floor(Math.random() * 300) + 30
  },
  {
    id:9,
    top:Math.floor(Math.random() * 300) + 70,
    left:Math.floor(Math.random() * 300) + 30
  },
  {
    id:10,
    top:Math.floor(Math.random() * 300) + 70,
    left:Math.floor(Math.random() * 300) + 30
  },
  {
    id:11,
    top:Math.floor(Math.random() * 300) + 70,
    left:Math.floor(Math.random() * 300) + 30
  },
  {
    id:12,
    top:Math.floor(Math.random() * 300) + 70,
    left:Math.floor(Math.random() * 300) + 30
  },
  {
    id:13,
    top:Math.floor(Math.random() * 300) + 70,
    left:Math.floor(Math.random() * 300) + 30
  },
]
function App() {
const [state, setstate] = useState(initialValue)

const handleShake = ()=>{
  setstate([])
}
  return (
    <div className="app">
      <div  onClick={handleShake} className="container">
        <div className="apples">  
        {
          state.map(item=>(
            <div style={{top:item.top}} key={item.id} className="appleContainer">
            <img style={{left:item.left}} className="apple" src="./images/apple.svg" alt="" /> 
          </div>
          ))
        }  
         
        </div>
        <img  className="tree" src="./images/tree1.png" alt="" />    
      </div>
    </div>
  );
}

export default App;

// <div style={{top:"200px"}} className="appleContainer">
// <img className="apple" src="./images/apple.svg" alt="" /> 
// </div>
// <div style={{top:"250px"}} className="appleContainer">
// <img style={{left:"90px"}} className="apple" src="./images/apple.svg" alt="" /> 
// </div>
// <div style={{top:"100px"}} className="appleContainer">
// <img style={{left:"150px"}} className="apple" src="./images/apple.svg" alt="" /> 
// </div>
// <div style={{top:"100px"}} className="appleContainer">
// <img style={{left:"250px"}} className="apple" src="./images/apple.svg" alt="" /> 
// </div>
// <div style={{top:"180px"}} className="appleContainer">
// <img style={{left:"260px"}} className="apple" src="./images/apple.svg" alt="" /> 
// </div>
// <div style={{top:"170px"}} className="appleContainer">
// <img style={{left:"290px"}} className="apple" src="./images/apple.svg" alt="" /> 
// </div>
// <div style={{top:"190px"}} className="appleContainer">
// <img style={{left:"350px"}} className="apple" src="./images/apple.svg" alt="" /> 
// </div>