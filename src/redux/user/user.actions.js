import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});






/**
    action object just consist in type and payload

    {
        type: string    it will be an string value
        payload: any    it could be any value that will change or update our initial state
    }

*/