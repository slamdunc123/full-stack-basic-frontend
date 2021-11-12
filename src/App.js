import './App.css';
import Tests from './components/Tests';

function App() {
	const prodEnv = true;
	const uri = !prodEnv
		? process.env.REACT_APP_DEV_URI
		: process.env.REACT_APP_PROD_URI;
	return (
		<div className='App'>
			<header className='App-header'>
				<Tests uri={uri} />
			</header>
		</div>
	);
}

export default App;
