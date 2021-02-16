import { useEffect, useState } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { addBasket, addDrop, filterApple } from "./actions";

function App() {
  const [arr, setarr] = useState([]);
  const [shake, setShake] = useState(false);
  const [disableButtom, setDisable] = useState(false);

  const state = useSelector((state) => state.apple);
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  //  console.log("state",state);
  //   console.log("basket",basket);

  useEffect(() => {
    var arr = [];
    while (arr.length < 20) {
      var r = Math.floor(Math.random() * 20) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    setarr(arr);
  }, []);

  const handleProsses = () => {
    const randomId = arr.shift();
    // console.log(arr);
    setShake(false);

    dispatch(addDrop(randomId));

    setTimeout(() => {
      dispatch(filterApple(randomId));
    }, 2001);

    setTimeout(() => {
      dispatch(addBasket(randomId));
    }, 2000);
  };

  const handleShake = () => {
    setDisable(true);
    setShake(true);
    setTimeout(() => {
      if (state.length === 0) return;
      console.log("1");
      handleProsses();
      const randomLoopCount = Math.floor(Math.random() * 3) + 1;
      if (state.length < randomLoopCount) {
        return
      }else{
        for (let i = 0; i < randomLoopCount; i++) {
          console.log("2");
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
