import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTests } from '../redux/actions/testActions';
import uri from '../domain'

const TestItems = () => {
    const dispatch = useDispatch()
	// const [testItemsData, setTestItemsData] = useState(null);
    const tests = useSelector((state) => state.testReducer.tests)

	const handleDeleteTestItem = (id) => {
		fetch(`${uri}/api/tests/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			// body: JSON.stringify(YOUR_ADDITIONAL_DATA)  //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
		});
	};
	useEffect(() => {
		dispatch(getTests());
	}, [dispatch]);

	
	return (
		<div>
			TestItems
			<ul style={{ listStyleType: 'none' }}>
				{!tests || tests.length < 1
					? 'Loading...'
					: tests.map((item) => (
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
					  ))}
			</ul>
		</div>
	);
};

export default TestItems;
