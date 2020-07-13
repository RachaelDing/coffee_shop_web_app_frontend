import * as ActionTypes from './ActionTypes';

export const Members = (state = { loading: true,
    errMess: null,
    members:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MEMBERS:
            return {...state, loading: false, errMess: null, members: action.payload};

        case ActionTypes.ADD_NEW_MEMBER:
            var member = action.payload;
            return { ...state, members: state.members.concat(member)};

        case ActionTypes.MEMBERS_LOADING:
            return {...state, loading: true, errMess: null, members: []}

        case ActionTypes.MEMBERS_FAILED:
            return {...state, loading: false, errMess: action.payload};

        default:
            return state;
    }
};