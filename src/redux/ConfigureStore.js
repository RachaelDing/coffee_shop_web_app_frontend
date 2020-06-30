import {createStore, combineReducers,applyMiddleware} from 'redux';
import { Drinks } from './drinks';
import { Comments } from './comments';
import { Members } from './members';
import { Authentication } from './authentication';
import { Users } from './users';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            drinks: Drinks,
            comments: Comments,
            members: Members,
            user: Authentication,
            users: Users,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}