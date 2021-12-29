import { GET_TESTS } from './types';
import uri from '../../domain'

//get tests

export const getTests = () => (dispatch) => {
	fetch(`${uri}/api/tests`)
		.then((res) => res.json())
		.then((data) => {
			dispatch({
				type: GET_TESTS,
				payload: data,
			});
		});
};
