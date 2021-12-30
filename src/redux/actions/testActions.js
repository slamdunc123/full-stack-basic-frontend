import { GET_TESTS, CREATE_TEST, DELETE_TEST } from './types';
import axios from 'axios';
import uri from '../../domain'

//get tests

export const getTests = () => async (dispatch) => {
    console.log('getTests action fired');
	try {
		const res = await axios.get(`${uri}/api/tests`);

		dispatch({
			type: GET_TESTS,
			payload: res.data,
		});
	} catch (err) {
		console.error(err.error);
	}
};

//create test

export const createTest = (formData) => async (dispatch) => {
    console.log('createTest action fired');
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = {...formData}
    console.log(body);

    try {
        const res = await axios.post(`${uri}/api/tests`, body, config)
        console.log(res.data.test);

        dispatch({
            type: CREATE_TEST,
            payload: res.data.test
        })
    } catch (err) {
        console.log(err.error);
        
    }
}

//delete test by id

export const deleteTest = (id) => async (dispatch) => {
    console.log('deleteTest action fired', id);
    try {
        const res = await axios.delete(`${uri}/api/tests/${id}`)
        console.log(res);

        dispatch({
            type: DELETE_TEST,
            payload: id
        })
    } catch (err) {
        console.log(err.error);
    }
}


