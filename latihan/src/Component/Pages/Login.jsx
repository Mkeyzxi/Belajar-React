
// import Input from "../Elements/Input"
// import Heading from "../Elements/Heading";
// import Button from "../Elements/Button"
// import SubParagraf from "../Elements/SubParagraf";
// const Login = () => {
// 	return (
// 		<>

// 		<div className="flex justify-center items-center flex-col h-screen font-extralight">
// 			<Heading keyword="Masuk" />
// 			<SubParagraf keyword="Masuk dan Nikmati Pengalamanannya" />
// 			<form action="">
				
// 				<Input title="Email" type="text"/>
// 				<Input title="Password" type="password"/>
// 				<Button keyword="Masuk" />
// 			</form>
// 		</div>	
		
			
// 		</>
// 	)
// }

// export default Login;

import Input from "../Elements/Input";
import Heading from "../Elements/Heading";
import SubParagraf from "../Elements/SubParagraf";
import AuthLayouts from "../Layouts/AuthLayouts";

const Login = () => {
	const handleClick = () => {
		console.log("masuk");
	}
	return (
		<AuthLayouts type="login" login={handleClick}>
			<Heading keyword="Masuk" />
			<SubParagraf keyword="Masuk dan Nikmati Pengalamanannya" />
			<form>
				<Input title="Email" type="text" />
				<Input title="Password" type="password" />
			</form>
		</AuthLayouts>	
	);
}

export default Login;
