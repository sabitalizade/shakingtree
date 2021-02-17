import { useEffect, useState } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { addBasket, addDrop, filterApple } from "./actions";

function App() {
  const [arr, setarr] = useState([]);
  const [shake, setShake] = useState(false);
  const [disableButtom, setDisable] = useState(false);


  // Pull data from redux store
  const state = useSelector((state) => state.apple);
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

// create an array generated with random number
  useEffect(() => {
    var arr = [];
    while (arr.length < 20) {
      var r = Math.floor(Math.random() * 20) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    setarr(arr);
  }, []);

  // handle apple drop and add to basket  
  const handleProsses = () => {
    // shift a number for falling an apple 
    const randomId = arr.shift();
    // set shake false for shaking stop
    setShake(false);
    // dispatch apple id to addDrop action 
    dispatch(addDrop(randomId));
    // wait 2 second end shaking to add apple to basket
    setTimeout(() => {
      dispatch(addBasket(randomId));
    }, 2000);
    // apple adding to basket dispatch the same apple for removing 
    setTimeout(() => {
      dispatch(filterApple(randomId));
    }, 2001);

  };
 
  // handle when click the button shake tree and do handleProsses
  const handleShake = () => {
    //set disable true for wait shaning end
    setDisable(true);
    // set shaking true to shake the tree 
    setShake(true);
    // check if all apple is over 
    if (state.length === 0) return;
    // wait 3 secont tree shake finishing
    setTimeout(() => {
      // drop first apple 
      handleProsses();
      // create random number for how many apple fall one shakeing
      const randomLoopCount = Math.floor(Math.random() * 3) + 1;
      // check if apple count is less than random falling count  
      if (state.length < randomLoopCount) {
        return
      }else{
        // loop apple falling for how many apple drop
        for (let i = 0; i < randomLoopCount; i++) {
          const randomDelayCount = Math.floor(Math.random() * 3) + 1;
          setTimeout(() => {
            handleProsses();
          }, (randomDelayCount / 2) * 1000);
        }
      }
      setDisable(false);

    }, 3000);
  };

  return (
    <div className="app">
      <div className={shake ? "shakeTree container" : "container"}>
        <div className="apples">
          {state.map((item, id) => (
            <div
              style={{ top: `${item.top}vh` }}
              key={item.id}
              className={
                item.drop ? "animation appleContainer " : "appleContainer"
              }
            >
              <img
                style={{ left: `${item.left}vw` }}
                className={
                  shake ? " animate__animated animate__swing apple" : "apple"
                }
                src="./images/apple01.svg"
                alt={id}
              />
            </div>
          ))}
        </div>
        <img className="tree" src="./images/treee.png" alt="" />
      </div>
      <div className="leftSide">
        <button
          disabled={disableButtom ? true : false}
          className="btn"
          onClick={handleShake}
        >
          Shake Tree
        </button>
        <div className="basketContainer">
          <img className="basket" src="./images/basket.svg" alt="" />
          <div className="basketDiv">
            {basket.map((basketItem, id) => (
              <img
                key={id}
                style={{
                  left: basketItem.left * 3,
                }}
                className="apple animate__animated animate__zoomInDown"
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
