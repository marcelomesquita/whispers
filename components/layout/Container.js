import Footer from './Footer';

export default function Container({ children }) {
	return (
		<div className='container'>
			<div className='row justify-content-center'>
				<div className='col col-lg-8'>
					{children}

					<Footer />
				</div>
			</div>
		</div>
	);
}
