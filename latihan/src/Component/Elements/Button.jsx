import PropTypes from 'prop-types';

const Button = (props) => {
	const {  keyword, type ="button", onClick } = props;
	return (
		<button
			type={type}
			name="masuk"
			className="h-11 rounded-md w-full bg-[#2C3E50] text-white font-bold mt-8 "
			onClick={onClick}
		>
			{keyword}
		</button>
	);
};

Button.propTypes = {
    keyword: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
