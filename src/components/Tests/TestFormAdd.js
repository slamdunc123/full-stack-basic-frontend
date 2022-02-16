import { useState } from 'react';

const TestFormAdd = ({ title, handleCreateTest, handleResetEditedItem }) => {
	const [formData, setFormData] = useState({
		name: '',
	});

	const handleChange = (e) => {
		setFormData({ [e.target.name]: e.target.value });
	};

    const handleAddOnClick = (e) => {
        e.preventDefault();
        handleCreateTest(formData)
        setFormData({ name: '' })
    }

	const handleResetOnClick = (e) => {
		e.preventDefault();
		setFormData({ name: '' });
        handleResetEditedItem()
	};
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
				<button
					type='submit'
					onClick={handleAddOnClick}
					disabled={formData.name === ''}
				>
					Add
				</button>
				<button
					type='button'
					onClick={handleResetOnClick}
					disabled={formData.name === ''}
				>
					Cancel
				</button>
			</form>
		</div>
	);
};

export default TestFormAdd;
