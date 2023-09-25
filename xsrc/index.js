import "normalize.css";
import "./styles/style.css";
import "./styles/unhide.css";

const app = (() => {
  const init = () => {
    initBGColorChange();
    setContent();
  };

  const setContent = () => {
    const copyEle = document.getElementById('copyright-place');
    copyEle.innerHTML = `No copyright issues (© ${new Date().getFullYear()})`;
  }
  const initBGColorChange = () => {
    const appEle = document.getElementById("bg");
    const OPACITY_RANGE = {
      MIN: 2000,
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
      const stepSize = 130;
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
