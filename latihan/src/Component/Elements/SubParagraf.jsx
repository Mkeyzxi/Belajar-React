import PropTypes from 'prop-types'

const SubParagraf = (props) => {
	return (
		<p className="text-center text-sm">{props.keyword}</p>

	)
}

SubParagraf.propTypes = {
	keyword: PropTypes.string
}

export default SubParagraf
