import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTest } from '../redux/actions/testActions';

const TestFormAdd = () => {
    const dispatch =  useDispatch()
	const [formData, setFormData] = useState({
        name: ''
    });

	const handleChange = (e) => {
		setFormData({ [e.target.name]: e.target.value });
	};

	const handleAddTest = (e) => {
		e.preventDefault();
        dispatch(createTest(formData))
        setFormData({name: ''})
	};
	return (
		<div>
			TestForm
			<form>
				<input type='text' name='name' value={formData.name} onChange={handleChange} />
				<button onClick={handleAddTest}>Add</button>
			</form>
		</div>
	);
};

export default TestFormAdd;
