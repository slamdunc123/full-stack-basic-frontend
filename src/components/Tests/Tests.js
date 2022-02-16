import React, { useState, useEffect } from 'react';
import TestFormAdd from './TestFormAdd';
import TestItems from './TestItems';
import {
	getTests,
	createTest,
	deleteTest,
	updateTest,
	updateIsEditing,
} from '../../redux/actions/testActions';
import { useDispatch, useSelector } from 'react-redux';
import TestFormUpdate from './TestFormUpdate';

const Tests = () => {
	const dispatch = useDispatch();
	const tests = useSelector((state) => state.testReducer.tests);
	const isEditing = useSelector((state) => state.testReducer.isEditing);
	const [editedItem, setEditedItem] = useState({
		id: '',
		name: '',
	});
	const [activeEditButton, setActiveEditButton] = useState(null);

	const handleCreateTest = (formData) => {
		dispatch(createTest(formData));
		dispatch(updateIsEditing(false));
	};

	const handleDeleteOnClick = (id) => {
		dispatch(deleteTest(id));
	};
	const handleEditOnClick = (item) => {
		dispatch(updateIsEditing(true));
		setEditedItem({ id: item._id, name: item.name });
		setActiveEditButton(item._id);
	};

	const handleUpdateTest = (formData) => {
		dispatch(updateTest(editedItem.id, formData));
		dispatch(updateIsEditing(false));
		setEditedItem({ id: '', name: '' });
	};

	const handleResetEditedItem = () => {
		setEditedItem({ id: '', name: '' });
	};

	useEffect(() => {
		dispatch(getTests());
	}, [dispatch]);

	return (
		<div style={{display: 'flex'}}>
			{!isEditing ? (
				<TestFormAdd
					title={'Add Test'}
					handleCreateTest={handleCreateTest}
					handleResetEditedItem={handleResetEditedItem}
				/>
			) : (
				<TestFormUpdate
					title={'Update Test'}
					editedItem={editedItem}
					handleUpdateTest={handleUpdateTest}
					handleResetEditedItem={handleResetEditedItem}
				/>
			)}
			<TestItems
				title={'Test Items'}
				isEditing={isEditing}
				tests={tests}
				activeEditButton={activeEditButton}
				handleDeleteOnClick={handleDeleteOnClick}
				handleEditOnClick={handleEditOnClick}
			/>
		</div>
	);
};

export default Tests;
