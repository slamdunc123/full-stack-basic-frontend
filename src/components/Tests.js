import { useState, useEffect } from 'react';
import TestFormAdd from './TestFormAdd';
import TestItems from './TestItems';
import { getTests, deleteTest, updateIsEditing } from '../redux/actions/testActions';
import { useDispatch, useSelector } from 'react-redux';
import TestFormUpdate from './TestFormUpdate';

const Tests = () => {
	const dispatch = useDispatch();
	const tests = useSelector((state) => state.testReducer.tests);
	const isEditing = useSelector((state) => state.testReducer.isEditing);
	const [editedItem, setEditedItem] = useState({
        id: '',
        name: ''
    });

	const handleDeleteTestItem = (id) => {
		dispatch(deleteTest(id));
	};
	const handleEditTestItem = (item) => {
		dispatch(updateIsEditing(true));
		setEditedItem({id:item._id, name: item.name});
	};

	useEffect(() => {
		dispatch(getTests());
	}, [dispatch]);

	return (
		<div>
			{!isEditing ? (
				<TestFormAdd />
			) : (
				<TestFormUpdate editedItem={editedItem} />
			)}
			<TestItems
				tests={tests}
				handleDeleteTestItem={handleDeleteTestItem}
				handleEditTestItem={handleEditTestItem}
			/>
		</div>
	);
};

export default Tests;
