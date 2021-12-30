import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTest } from '../redux/actions/testActions';

const TestForm = () => {
    const dispatch =  useDispatch()
	const [formData, setFormData] = useState({
        name: ''
    });

	const handleChange = (e) => {
		setFormData({ [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
        dispatch(createTest(formData))
        setFormData({name: ''})
	};
	return (
		<div>
			TestForm
            {console.log(formData)}
			<form>
				<input type='text' name='name' value={ formData.name} onChange={handleChange} />
				<button onClick={handleSubmit}>Submit</button>
			</form>
		</div>
	);
};

export default TestForm;
