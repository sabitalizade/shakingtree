import { useEffect, useState } from "react";
import "./App.scss";

const initialValue = [
  {
    id: 1,
    top: Math.floor(Math.random() * 300) +1,
    left: Math.floor(Math.random() * 300) +1,
  },
  {
    id: 2,
    top: Math.floor(Math.random() * 300) +1,
    left: Math.floor(Math.random() * 300) +1,
  },
  {
    id: 3,
    top: Math.floor(Math.random() * 300) +1,
    left: Math.floor(Math.random() * 300) +1,
  },
  {
    id: 4,
    top: Math.floor(Math.random() * 300) +1,
    left: Math.floor(Math.random() * 300) +1,
  },
  {
    id: 5,
    top: Math.floor(Math.random() * 300) +1,
    left: Math.floor(Math.random() * 300) +1,
  },
  {
    id: 6,
    top: Math.floor(Math.random() * 300) +1,
    left: Math.floor(Math.random() * 300) +1,
  },
  {
    id: 7,
    top: Math.floor(Math.random() * 300) +1,
    left: Math.floor(Math.random() * 300) +1,
  },
  {
    id: 8,
    top: Math.floor(Math.random() * 300) +1,
    left: Math.floor(Math.random() * 300) +1,
  },
  {
    id: 9,
    top: Math.floor(Math.random() * 300) +1,
    left: Math.floor(Math.random() * 300) +1,
  },
  {
    id: 10,
    top: Math.floor(Math.random() * 300) +1,
    left: Math.floor(Math.random() * 300) +1,
  },
  {
    id: 11,
    top: Math.floor(Math.random() * 300) +1,
    left: Math.floor(Math.random() * 300) +1,
  },
  {
    id: 12,
    top: Math.floor(Math.random() * 300) +1,
    left: Math.floor(Math.random() * 300) +1,
  },
  {
    id: 13,
    top: Math.floor(Math.random() * 300) +1,
    left: Math.floor(Math.random() * 300) +1,
  },
];

function App() {
  const [state, setState] = useState(initialValue);
  const [shake, setShake] = useState(false);
  const [basket, setBasket] = useState([]);
  const [arr, setarr] = useState([]);
  console.log(basket);
  console.log(state);
useEffect(() => {
  
  var arr = [];
  while(arr.length < 13){
  var r = Math.floor(Math.random() * 13) + 1;
  if(arr.indexOf(r) === -1)  arr.push(r) ;
  }
  setarr(arr)
}, [])

  const randomAppleCount= Math.floor(Math.random() * 5) + 1
  const handleShake = () => {
    setShake(true);

   
    setTimeout(() => {
 const randomAppleDrop = setInterval(() => {
        const randomId= arr.shift()
        console.log(arr);
      setShake(false);
      setTimeout(() => {
        state.find((item) =>
        item.id === randomId ? setBasket([...basket, item]) : null
      );
      }, 2000);

      setState(
        state.map((item) =>
          item.id === randomId ? { ...item, drop: true } : item
        )
      );
     
      setTimeout(() => {
        setState(
          state.filter((item) =>
            item.id !== randomId 
          )
        );
      }, 1900);

    }, 2000/1);

    setTimeout(() => {
      clearInterval(randomAppleDrop)      
    },randomAppleCount * 1000 );

    }, 3000);


  };

  return (
    <div className="app">
      <div className={shake ? "shakeTree container" : "container"}>
        <div className="apples">
          {state.map((item,id) => (
            <div
              style={{ top: item.top}}
              key={item.id}
              className={
                item.drop ? "animation appleContainer" : "appleContainer"
              }
            >
              <img
                style={{ left: item.left }}
                className="apple"
                src="./images/apple01.svg"
                alt={id}
              />
            </div>
          ))}
        </div>
        <img className="tree" src="./images/treee.png" alt="" />
      </div>
      <div className="leftSide">
        <button disabled={shake?true :false} className="btn" onClick={handleShake}>
          Shake Tree
        </button>
        <div className="basketContainer">
          <img className="basket" src="./images/basket.svg" alt="" />
           <div className="basketDiv">
              {basket.map((basketItem, id) => (
                <img
                  key={id}
                  style={{
                    left:basketItem.left/2.3
                  }}
                  className="apple"
                  src="./images/apple01.svg"
                  alt={id}
                />
              ))}
          </div>           
        </div>
      </div>
    </div>
  );
}

export default App;


//           <img
//             style={{
//               left: "calc(37px + 25px + 25px + 25px + 35px )",
//               bottom: "calc(9px + 25px)",
//             }}
//             className="apple"
//             src="./images/apple.svg"
//             alt=""
//           />
