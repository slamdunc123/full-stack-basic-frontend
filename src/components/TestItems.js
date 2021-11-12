import { useState, useEffect } from 'react';
const TestItems = ({uri}) => {
	const [testItemsData, setTestItemsData] = useState(null);

    const handleDeleteTestItem = (id) => {
        fetch(`${uri}/api/tests/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            // body: JSON.stringify(YOUR_ADDITIONAL_DATA)  //if you do not want to send any addional data,  replace the complete JSON.stringify(YOUR_ADDITIONAL_DATA) with null
          })

    }
	useEffect(() => {
		fetch(`${uri}/api/tests`)
			.then((res) => res.json())
			.then((data) => setTestItemsData(data))
	}, []);
	return (
		<div>
			TestItems
			<ul style={{listStyleType: 'none'}}>
				{!testItemsData
					? 'Loading...'
					: testItemsData.map((item) => (
							<div  key={item._id} style={{display: 'flex'}}>
								<li>{item.name}</li>
								<button onClick={() => handleDeleteTestItem(item._id)}>x</button>
							</div>
					  ))}
			</ul>
		</div>
	);
};

export default TestItems;
