import { useEffect, useState } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const [arr, setarr] = useState([]);
  const [shake, setShake] = useState(false);

 const state = useSelector(state => state.apple)
 const basket = useSelector(state => state.basket)
 const dispatch = useDispatch()

 console.log("state",state);
  console.log("basket",basket);

  useEffect(() => {  
    var arr = [];
    while(arr.length < 20){
    var r = Math.floor(Math.random() * 20) + 1;
    if(arr.indexOf(r) === -1)  arr.push(r) ;
    }
    setarr(arr)
  }, [])

  
  const handleProsses = () =>{
    const randomId= arr.shift()
    console.log(arr);
  setShake(false);

  dispatch({type:"ADD_DROP",payload:randomId})

  setTimeout(() => {
    dispatch({type:"FILTER_APPLE",payload:randomId})
  }, 2100);

  setTimeout(() => {
    dispatch({type:"ADD_BASKET",payload:randomId})
  }, 2000);
 
  }

  const handleShake = () => {
    setShake(true);   
    setTimeout(() => {

    handleProsses()
    setTimeout(() => {
      handleProsses()
    }, 3000);

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
