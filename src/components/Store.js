const DEFAULT_PRICE = 'DEFAULT_PRICE';
const CURRENT_PRICE = 'CURRENT_PRICE';

function BidReducer (state, action) {
    switch (action.type) {
        case DEFAULT_PRICE:
            return state;
            break;
        case CURRENT_PRICE:
            return action
        default:
            break;
    }
}

const store = Redux.createStore(BidReducer);

function getDefaultPrice(val) {
    return {
        type: DEFAULT_PRICE
    }
}

function currentPrice(val) {
    return {
        type: CURRENT_PRICE
    }
}