import "normalize.css";
import "./style.css";

const app = (() => {
  const init = () => {
    initBGColorChange();
  };

  const initBGColorChange = () => {
    const appEle = document.getElementById("bg");
    const OPACITY_RANGE = {
      MIN: 3000,
      MAX: 8000
    };
    const COUNTER_ACTIONS = {
      INCREMENT: "increment",
      DECREMENT: "decrement"
    };
    let floatNum = OPACITY_RANGE.MIN;
    let counterAction = COUNTER_ACTIONS.INCREMENT;
    
    
    const bgSetInterval = () => {
      setInterval(() => {
        if (floatNum > OPACITY_RANGE.MAX || floatNum < OPACITY_RANGE.MIN) {
          toggleCounterAction();
        }
        const value = getValue(counterAction);
        const opacityValue = getOpacityValue(value);
        appEle.style.opacity = `${opacityValue}`;
      }, 100);
    };

    const getValue = counterAction => {
      const stepSize = 100;
      if (counterAction === COUNTER_ACTIONS.INCREMENT) {
        floatNum += stepSize;
      } else {
        floatNum -= stepSize;
      }
      return floatNum;
    };

    const getOpacityValue = value => {
      return value / 10000;
    };

    const toggleCounterAction = () => {
      counterAction =
        counterAction === COUNTER_ACTIONS.INCREMENT
          ? COUNTER_ACTIONS.DECREMENT
          : COUNTER_ACTIONS.INCREMENT;
    };

    bgSetInterval();

  };

  return {
    init: init
  };
})();

app.init();
