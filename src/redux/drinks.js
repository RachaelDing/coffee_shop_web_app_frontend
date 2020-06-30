import * as ActionTypes from './ActionTypes';

export const Drinks = (state = { isLoading: true,
    errMess: null,
    drinks:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DRINKS:
            return {...state, isLoading: false, errMess: null, drinks: action.drinks};

        case ActionTypes.ADD_NEW_DRINK:
            return { ...state, drinks: state.drinks.concat(action.drink)};

        case ActionTypes.DRINKS_LOADING:
            return {...state, isLoading: true, errMess: null, drinks: []}

        case ActionTypes.DRINKS_FAILURE:
            return {...state, isLoading: false, errMess: action.errMess};

        default:
            return state;
    }
};