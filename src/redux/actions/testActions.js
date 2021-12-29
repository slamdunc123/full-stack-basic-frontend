import { GET_TESTS } from './types';
import axios from 'axios';
import uri from '../../domain'

//get tests

// export const getTests = () => (dispatch) => {
// 	fetch(`${uri}/api/tests`)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			dispatch({
// 				type: GET_TESTS,
// 				payload: data,
// 			});
// 		});
// };

export const getTests = () => async (dispatch) => {
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
