const TestItems = ({ tests, isEditing, handleDeleteOnClick, handleEditOnClick }) => {
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
										handleDeleteOnClick(item._id)
									}
                                    disabled = {isEditing}
								>
									delete
								</button>
								<button
									onClick={() =>
										handleEditOnClick(item)
									}
                                    disabled = {isEditing}
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
