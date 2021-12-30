import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTests, deleteTest } from '../redux/actions/testActions';

const TestItems = () => {
	const dispatch = useDispatch();
	const tests = useSelector((state) => state.testReducer.tests);

	const handleDeleteTestItem = (id) => {
		dispatch(deleteTest(id));
	};

	useEffect(() => {
		dispatch(getTests());
	}, [dispatch]);

	return (
		<div>
			TestItems
			<ul style={{ listStyleType: 'none' }}>
				{tests !== undefined
					? tests.map((item) => (
							<div key={item._id} style={{ display: 'flex' }}>
								<li>{item.name}</li>
								<button
									onClick={() =>
										handleDeleteTestItem(item._id)
									}
								>
									x
								</button>
							</div>
					  ))
					: 'Loading'}
			</ul>
		</div>
	);
};

export default TestItems;
