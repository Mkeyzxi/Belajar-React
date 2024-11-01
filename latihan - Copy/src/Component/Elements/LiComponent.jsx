import InputKu from "./Input";
import 'ionicons';
import Button from './Button';

function kita(props){
	return (
		<>
			<p>paragrapf {props.kamu}</p>
			<InputKu hello={<ion-icon className="text-black bg-black" ios="heart-outline" md="heart-sharp" size="large"></ion-icon>} />
			<Button />
		</>
	)

}
export default kita;

