import Image from 'next/image';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import profile from '../assets/images/fernandaessenciais.jpg';

export default function Home() {
	return (
		<>
			<header className='d-flex flex-column text-center p-3'>
				<a href='#' className='mt-5 mb-3'>
					<Image src={profile} alt='fernandaessenciais' width='200' height='200' className='avatar rounded-circle' />
				</a>
				<a href='#' className=' text-decoration-none'>
					<h1 className='fs-3'>@fernandaessenciais</h1>
				</a>
				<p>Sou consultora dōTERRA, empresa líder de óleos essenciais, uma alternativa natural para seu equilíbrio mental.</p>
        <p>Uma gota é o que você precisa para seu bem-estar físico e emocional.</p>
			</header>

			<main className='container'>
				<div className='row justify-content-md-center'>
					<div className='col col-lg-8'>
						<div className='d-grid gap-2'>
							<a href='https://www.mydoterra.com/lariessenciais/#/joinAndSave' target='_blank' className='btn btn-lg btn-primary text-white'>
								<strong>Cadastre-se na dōTerra</strong>
								<br />
								<span>compre com desconto e entre para nossa equipe</span>
							</a>
							<a href='https://wa.me/5561995833000?text=Ol%C3%A1%21+Quero+comprar+%C3%B3leos+essenciais%2C+pode+me+ajudar%3F+' target='_blank' className='btn btn-lg btn-primary text-white'>
								<strong>Compra de Óleos Essenciais</strong>
								<br />
								<span>compre óleos essenciais e receba uma consultoria</span>
							</a>
							<a href='https://wa.me/5561995833000?text=Tenho%20d%C3%BAvidas%2C%20pode%20me%20ajudar%3F' target='_blank' className='btn btn-lg btn-primary text-white'>
								<strong>Dúvidas</strong>
								<br />
								<span>fale comigo no whatsapp</span>
							</a>
						</div>

						<div className='text-center fs-1 mt-5'>
							<a href='https://www.facebook.com/fernanda.lustosa.50' target='_blank' className='mx-3'><AiOutlineFacebook /></a>
							<a href='https://instagram.com/fernandaessenciais' target='_blank' className='mx-3'><AiOutlineInstagram /></a>
							<a href='https://wa.me/5561995833000' target='_blank' className='mx-3'><AiOutlineWhatsApp /></a>
							<a href='mailto:nandartavares@hotmail.com' target='_blank' className='mx-3'><AiOutlineMail /></a>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
