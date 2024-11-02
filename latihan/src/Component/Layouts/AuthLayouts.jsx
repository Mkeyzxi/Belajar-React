import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const AuthLayouts = (props) => {
	const { type, login, children} = props;

	return (
		<>
			<div className="flex justify-center items-center  w-[350px] m-auto flex-col h-screen font-extralight">
			{children}
			
			<Button keyword={ type === 'login' ? 'Masuk' : 'Buat Akun'} onClick={login} />
			<p>{type === 'login' ? "belum punya akun? " : "sudah pynya akun? "} 

				{/* {type === 'login' ? <Link to="/register" className="font-bold">Register</Link> : <Link to="/login" className="font-bold">Login</Link>} */}
				{type === 'login' && (<Link to="/register" className="font-bold">Register</Link>)}
				{type === 'register' && (<Link to="/login" className="font-bold" >Login</Link>)}
			</p>
			</div>
		</>
	)
}

AuthLayouts.propTypes = {
    type: PropTypes.string.isRequired,
    login: PropTypes.func,
    children: PropTypes.node, 
};

export default AuthLayouts;