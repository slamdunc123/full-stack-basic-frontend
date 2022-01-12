const TestItems = ({ tests, handleDeleteTestItem, handleEditTestItem }) => {
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
									delete
								</button>
								<button
									onClick={() =>
										handleEditTestItem(item)
									}
								>
								edit
								</button>
							</div>
					  ))
					: 'Loading'}
			</ul>
		</div>
	);
};

export default TestItems;
