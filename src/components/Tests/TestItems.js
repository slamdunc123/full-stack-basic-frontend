const TestItems = ({
	title,
	tests,
	isEditing,
	handleDeleteOnClick,
	handleEditOnClick,
}) => {
	return (
		<div>
			<h3>{title}</h3>
			{tests.length > 0 ? (
				<ul style={{ listStyleType: 'none' }}>
					{tests.map((item) => (
						<div key={item._id} style={{ display: 'flex' }}>
							<li>{item.name}</li>
							<button
								onClick={() => handleDeleteOnClick(item._id)}
								disabled={isEditing}
							>
								delete
							</button>
							<button
								onClick={() => handleEditOnClick(item)}
								disabled={isEditing}
							>
								edit
							</button>
						</div>
					))}
				</ul>
			) : (
				'Loading...'
			)}
		</div>
	);
};

export default TestItems;
