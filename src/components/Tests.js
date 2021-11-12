import TestForm from './TestForm';
import TestItems from './TestItems';

const Tests = ({uri}) => {
	return (
		<div>
			<TestForm uri={uri}/>
			<TestItems uri={uri}/>
		</div>
	);
};

export default Tests;
