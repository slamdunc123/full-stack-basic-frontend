import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateIsEditing, updateTest } from '../redux/actions/testActions';

const TestFormUpdate = ({ editedItem }) => {
	// console.log(
	// 	'slamdunc ~ file: TestFormUpdate.js ~ line 6 ~ TestFormUpdate ~ editedItemId',
	// 	editedItem
	// );
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		name: editedItem.name,
	});

	const handleChange = (e) => {
		setFormData({ [e.target.name]: e.target.value });
	};

	const handleUpdateTest = (e) => {
		e.preventDefault();
		dispatch(updateTest(editedItem.id, formData));
        dispatch(updateIsEditing(false))
		setFormData({ name: '' });
	};
	return (
		<div>
			TestForm
			<form>
				<input
					type='text'
					name='name'
					value={formData.name}
					onChange={handleChange}
				/>
				<button onClick={handleUpdateTest}>Update</button>
			</form>
		</div>
	);
};

export default TestFormUpdate;
