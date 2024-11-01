import PropTypes from 'prop-types';

const Button = (props) => {
	return (
		<button type="submit" name="masuk" className="h-11 rounded-md w-full bg-[#2C3E50] text-white font-bold mt-8 ">{props.keyword}</button>
	)
}

Button.propTypes = {
	keyword: PropTypes.string
}

export default Button;