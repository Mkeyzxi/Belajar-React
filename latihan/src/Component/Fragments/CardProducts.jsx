import { useState } from "react";

const CardProducts = (props) => {
	const {children} = props;
	return (
		<div className="w-[300px] bg-gray-700 p-2 flex justify-between flex-col">
			{children}			
		</div>
	)
}

const Image = (props) => {
	const { url } = props;
	return (
		<img src={url} alt="img1" width="100%" height="100%"  />
	)
}

const Judul = (props) => {
	const {judul, children} = props
	return (
		<div className="">
			<h2 className="font-bold text-white text-lg">{judul}</h2>
			<p>{children}</p>
		</div>
	)
}


const CardFooter = (props) => {
	const {harga} = props;
	const [count, setCount] = useState(0);
	const IncrementCount = () => {
        setCount(count + 1)
    }
	return (
		<div className="flex justify-between">
				<p className="text-slate-400">{ harga }</p>
				<button className="bg-white rounded-md p-1" onClick={IncrementCount}>add card {count || ''}</button>
		</div>
	)
}

CardProducts.Judul = Judul;
CardProducts.Image = Image;
CardProducts.CardFooter = CardFooter;
export default CardProducts;