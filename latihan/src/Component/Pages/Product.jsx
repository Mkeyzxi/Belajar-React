import CardProducts from '../Fragments/CardProducts';

const Data = [
	{
		url: '/public/image/img1.png',
		judul: 'judul 1',
		deskripsi: 'deskripsi 1',
		harga: '12.000',
	},
	{
		url: '/public/image/img1.png',
		judul: 'judul 1',
		deskripsi: 'deskripsi 2',
		harga: '12.000',
	},
];

const Product = () => {
	return (
		<div className="p-5 flex justify-center gap-5 flex-wrap">
			{Data.map((card, index) => (
				<CardProducts key={index}>
					<CardProducts.Image url={card.url} />
					<CardProducts.Judul judul={card.judul}>
						{card.deskripsi}
					</CardProducts.Judul>
					<CardProducts.CardFooter harga={card.harga} />
				</CardProducts>
			))}
		</div>
	);
};

export default Product;
