import React, { ChangeEvent, MouseEvent, useState } from 'react';

interface TestFormAddProps {
	title: string;
	handleCreateTest: (formData: object) => void;
	handleResetEditedItem: () => void;
}

const TestFormAdd = ({
	title,
	handleCreateTest,
	handleResetEditedItem,
}: TestFormAddProps) => {
	const [formData, setFormData] = useState({
		name: '',
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({ [e.target.name]: e.target.value } as any);
	};

	const handleAddOnClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		handleCreateTest(formData);
		setFormData({ name: '' });
	};

	const handleResetOnClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setFormData({ name: '' });
		handleResetEditedItem();
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
