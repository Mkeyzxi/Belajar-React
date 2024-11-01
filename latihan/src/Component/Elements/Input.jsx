import PropTypes from 'prop-types';
Input.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string,
};

function Input(props) {
    const { type, title } = props;
    const id = `input-${type}`;

    return (
        <>
            <label htmlFor={id}>
                <span className="block my-3 text-[12px]">{title}</span>
                <input
                    type={type}
                    name={type}
                    id={id} // Pastikan id sesuai
                    className="ring-1 ring-[#979696] h-11 rounded-md w-full mb-1.5 p-2 invalid:border-red-900 invalid:ring-red-900 hover:border-secondary hover:ring-secondary"
                />
            </label>
        </>
    );
}

export default Input;
