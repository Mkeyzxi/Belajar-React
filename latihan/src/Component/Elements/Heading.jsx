// import { Input } from 'postcss';
import PropTypes from 'prop-types';


const Heading = (props) => {
	const { keyword } = props;
	return (
		<h1 className="text-center text-3xl font-bold font-mono">{ keyword }</h1>
	)
}

Heading.propTypes = {
	keyword: PropTypes.string
}

export default Heading;