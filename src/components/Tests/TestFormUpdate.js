import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateIsEditing } from '../../redux/actions/testActions';

const TestFormUpdate = ({
	title,
	editedItem,
	handleUpdateTest,
	handleResetEditedItem,
}) => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		name: '',
	});

	const handleChange = (e) => {
		setFormData({ [e.target.name]: e.target.value });
	};

	const handleUpdateOnClick = (e) => {
		e.preventDefault();
		handleUpdateTest(formData);
		setFormData({ name: '' });
	};

	const handleResetOnClick = (e) => {
		e.preventDefault();
		dispatch(updateIsEditing(false));
		setFormData({ name: '' });
		handleResetEditedItem();
	};

	useEffect(() => {
		setFormData({ name: editedItem.name });
	}, [editedItem.name]);
	return (
		<div>
            <h3>{title}</h3>
			<form>
				<input
					type='text'
					name='name'
					value={formData.name}
					onChange={handleChange}
				/>
				<button type='submit' onClick={handleUpdateOnClick}>
					Update
				</button>
				<button type='button' onClick={handleResetOnClick}>
					Cancel
				</button>
			</form>
		</div>
	);
};

export default TestFormUpdate;
