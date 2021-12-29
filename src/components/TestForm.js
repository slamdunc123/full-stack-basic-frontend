import { useState } from 'react';
import uri from '../domain'

const TestForm = () => {
	const [formData, setFormData] = useState(null);

	const handleChange = (e) => {
		setFormData({ [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
        fetch(`${uri}/api/tests`, 
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData),
        })
	};
	return (
		<div>
			TestForm
			<form>
				<input type='text' name='name' onChange={handleChange} />
				<button onClick={handleSubmit}>Submit</button>
			</form>
		</div>
	);
};

export default TestForm;
