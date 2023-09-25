export const OPACITY_RANGE = {
    MIN: 2000,
    MAX: 8000
};
export const COUNTER_ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
};
export const getOpacityValue = value => {
    return value / 10000;
};
const STEP_SIZE = 130;
export const toggleCounterAction = (counterAction) => {
    return counterAction === COUNTER_ACTIONS.INCREMENT
        ? COUNTER_ACTIONS.DECREMENT
        : COUNTER_ACTIONS.INCREMENT;
};

export const getValue = (counterAction, floatNum) => {
    return counterAction === COUNTER_ACTIONS.INCREMENT ? floatNum += STEP_SIZE : floatNum -= STEP_SIZE;
};