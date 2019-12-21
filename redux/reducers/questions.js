import { CREATE_QUESTION } from '../actions/types';

const initialState = []

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_QUESTION:
            return [...state, payload];
        default:
            return state;
    }
}