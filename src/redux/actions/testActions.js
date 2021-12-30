import { DELETE_TEST, GET_TESTS } from './types';
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


