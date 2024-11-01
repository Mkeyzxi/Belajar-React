import { useRouteError } from "react-router-dom";

const Error = () => {
	const error = useRouteError();

	return (
		<>
			<div>oppps error</div>
			<div>terjadi error : {error.statusText || error.message}</div>
		</>
		
	)
}

export default Error;