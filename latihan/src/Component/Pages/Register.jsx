import Input from "../Elements/Input";
import Heading from "../Elements/Heading";
import SubParagraf from "../Elements/SubParagraf";
import Checkbox from "../Elements/InputCheckbox";
import AuthLayouts from "../Layouts/AuthLayouts";

const Register = () => {
	return (
		<AuthLayouts type="register">
			<Heading keyword="Buat Akun" />
			<SubParagraf keyword="Mulai Perjalanan dan Semoga Nyaman" />
			<form>
				<Input title="Email" type="text" />
				<Input title="Nama Pengguna" type="text" />
				<Input title="Nomor Telepon" type="number" />
				<Input title="Kata Sandi" type="password" />
				<Checkbox />
				
			</form>
		</AuthLayouts>
	)
}

export default Register