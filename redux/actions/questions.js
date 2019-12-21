import axios from 'axios';
import { CREATE_QUESTION } from './types';


export const createQuestion = (question, options) => async dispatch => {
    await axios.post('/api/question/create_question', { question, options });
    dispatch({
        type: CREATE_QUESTION,
        payload: { question, options }
    })
}