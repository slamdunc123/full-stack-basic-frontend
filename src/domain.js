const prodEnv = true;
const uri = !prodEnv
	? process.env.REACT_APP_DEV_URI
	: process.env.REACT_APP_PROD_URI;

export default uri;
