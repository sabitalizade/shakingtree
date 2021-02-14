import { useState } from "react";
import "./App.scss";

const initialValue = [
  {
    id: 1,
    top: Math.floor(Math.random() * 300) + 70,
    left: Math.floor(Math.random() * 300) + 30,
  },
  {
    id: 2,
    top: Math.floor(Math.random() * 300) + 70,
    left: Math.floor(Math.random() * 300) + 30,
  },
  {
    id: 3,
    top: Math.floor(Math.random() * 300) + 70,
    left: Math.floor(Math.random() * 300) + 30,
  },
  {
    id: 4,
    top: Math.floor(Math.random() * 300) + 70,
    left: Math.floor(Math.random() * 300) + 30,
  },
  {
    id: 5,
    top: Math.floor(Math.random() * 300) + 70,
    left: Math.floor(Math.random() * 300) + 30,
  },
  {
    id: 6,
    top: Math.floor(Math.random() * 300) + 70,
    left: Math.floor(Math.random() * 300) + 30,
  },
  {
    id: 7,
    top: Math.floor(Math.random() * 300) + 70,
    left: Math.floor(Math.random() * 300) + 30,
  },
  {
    id: 8,
    top: Math.floor(Math.random() * 300) + 70,
    left: Math.floor(Math.random() * 300) + 30,
  },
  {
    id: 9,
    top: Math.floor(Math.random() * 300) + 70,
    left: Math.floor(Math.random() * 300) + 30,
  },
  {
    id: 10,
    top: Math.floor(Math.random() * 300) + 70,
    left: Math.floor(Math.random() * 300) + 30,
  },
  {
    id: 11,
    top: Math.floor(Math.random() * 300) + 70,
    left: Math.floor(Math.random() * 300) + 30,
  },
  {
    id: 12,
    top: Math.floor(Math.random() * 300) + 70,
    left: Math.floor(Math.random() * 300) + 30,
  },
  {
    id: 13,
    top: Math.floor(Math.random() * 300) + 70,
    left: Math.floor(Math.random() * 300) + 30,
  },
];

// const basket = [
//   {
//     id:2,
//     top:Math.floor(Math.random() * 300) + 70,
//     left:Math.floor(Math.random() * 300) + 30
//   },
// ]
function App() {
  const [state, setState] = useState(initialValue);
  const [shake, setShake] = useState(false)
  const [basket, setBasket] = useState([])
  console.log(basket);
  console.log(state);
  const handleShake = () => {
    setShake(true)
    setTimeout(() => {
      const randomId = Math.floor(Math.random() * state.length) + 1;
      // console.log(randomId)
      state.find((item) => item.id === randomId ? setBasket([...basket,item])  : null)
      setState( 
         state.map((item) => item.id === randomId ? {...item,drop:true}  : item)
      );
      setShake(false)
      setTimeout(() => {
        setState( 
          state.map((item) => item.id === randomId ? {...item,dNone:true}  : item)
       );
      }, 1900);
    }, 3000);



  };

  return (
    <div className="app">
      <div className={shake?"shakeTree container":"container"}>
        <div className="apples">
          {state.map((item) => (
            <div
              style={{ top: item.top,display:item.dNone?"none":null }}
              key={item.id}
              className={item.drop?"animation appleContainer":"appleContainer"}
            >
              <img
                style={{ left: item.left }}
                className="apple"
                src="./images/apple.svg"
                alt=""
              />
            </div>
          ))}
        </div>
        <img className="tree" src="./images/tree1.png" alt="" />
      </div>
      <div className="leftSide">
        <button className="btn" onClick={handleShake}>
          Shake Tree
        </button>
        <div className="basketContainer">
          <img className="basket" src="./images/basket.png" alt="" />

          {
            basket.map((basketItem,id)=>(
              <img
              key={id}
            style={{ left: `calc(37px + ${(id)*25}px  )` }}
            className="apple"
            src="./images/apple.svg"
            alt=""
          />
            ))
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;




// <img
//             style={{ left: "calc(37px + 25px  )" }}
//             className="apple"
//             src="./images/apple.svg"
//             alt=""
//           />
//           <img
//             style={{ left: "calc(37px + 25px + 25px)" }}
//             className="apple"
//             src="./images/apple.svg"
//             alt=""
//           />
//           <img
//             style={{ left: "calc(37px + 25px + 25px + )" }}
//             className="apple"
//             src="./images/apple.svg"
//             alt=""
//           />
//           <img
//             style={{ left: "calc(37px + 25px + 25px + 25px )" }}
//             className="apple"
//             src="./images/apple.svg"
//             alt=""
//           />
//           <img
//             style={{ left: "calc(37px + 25px + 25px + 25px + 25px )" }}
//             className="apple"
//             src="./images/apple.svg"
//             alt=""
//           />
//           <img
//             style={{ left: "calc(37px + 25px + 25px + 25px + 25px )" }}
//             className="apple"
//             src="./images/apple.svg"
//             alt=""
//           />
//           <img
//             style={{
//               left: "calc(37px + 25px + 25px + 25px + 35px )",
//               bottom: "calc(9px + 25px)",
//             }}
//             className="apple"
//             src="./images/apple.svg"
//             alt=""
//           />