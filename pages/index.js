import Image from 'next/image';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import profile from '../assets/images/fernandaessenciais.jpg';
import oQue from '../assets/images/features/o-que.jpg';
import porQue from '../assets/images/features/por-que.jpg';
import compromisso from '../assets/images/features/compromisso.jpg';

export default function Home() {
	const [showWhy, setShowWhy] = useState(false);
	const [showWhat, setShowWhat] = useState(false);
	const [showCompromise, setShowCompromise] = useState(false);

	const handleToggleWhy = () => setShowWhy(() => !showWhy);
  const handleToggleWhat = () => setShowWhat(() => !showWhat);
	const handleToggleCompromise = () => setShowCompromise(() => !showCompromise);

	return (
		<>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col col-lg-8'>
						<header className='d-flex flex-column gap-3 my-3'>
							<div className='text-center'>
								<Image src={profile} alt='fernandaessenciais' width='200' height='200' className='avatar rounded-circle' />
							</div>
							<h1 className='h3 text-primary text-center'>
								@fernandaessenciais
								<br />
								@lariessenciais
							</h1>
							<p className='lead text-center'>Sou consultora dōTERRA, empresa líder de óleos essenciais, uma alternativa natural para seu equilíbrio mental.</p>
							<p className='lead text-center'>Óleos essenciais dão suporte para ansiedade, insônia, estresse, cabelos, imunidade, afrodisíacos e outros. Encontre o kit de óleos essenciais doTerra perfeito para você.</p>
						</header>

						<main className='d-flex flex-column gap-3 my-3'>
							<section className='d-flex flex-column gap-2 my-3'>
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
								<a href='https://go.hotmart.com/V593021740?src=site' target='_blank' className='btn btn-lg btn-primary text-white'>
									<strong>Curso de aromaterapia online</strong>
									<br />
									<span>com certificado na ABRATH</span>
								</a>
								<a href='https://wa.me/5561995833000?text=Tenho%20d%C3%BAvidas%2C%20pode%20me%20ajudar%3F' target='_blank' className='btn btn-lg btn-primary text-white'>
									<strong>Dúvidas</strong>
									<br />
									<span>fale comigo no whatsapp</span>
								</a>
							</section>

							<section className='row justify-content-center my-3'>
								<div className='col-sm-4 text-center'>
								<button className='btn btn-link text-decoration-none' onClick={handleToggleWhy}>
										<Image src={porQue} alt='por que doTerra?' width='429' height='286' className='rounded' />
										<h2 className='fs-6'>Por que doTerra?</h2>
									</button>
								</div>
								<div className='col-sm-4 text-center'>
								<button className='btn btn-link text-decoration-none' onClick={handleToggleWhat}>
										<Image src={oQue} alt='o que é um óleo essencial?' width='429' height='286' className='rounded' />
										<h2 className='fs-6'>O que é um óleo essencial?</h2>
									</button>
								</div>
								<div className='col-sm-4 text-center'>
									<button className='btn btn-link text-decoration-none' onClick={handleToggleCompromise}>
										<Image src={compromisso} alt='compromisso com a pureza' width='429' height='286' className='rounded' />
										<h2 className='fs-6'>Compromisso com a pureza</h2>
									</button>
								</div>
							</section>

							<section className='my-3'>
								<p className='lead text-center'>Uma gota é o que você precisa para seu bem-estar físico e emocional.</p>
							</section>
						</main>

						<footer className='my-3 py-3 border-top d-flex flex-row justify-content-center'>
							<a href='https://www.facebook.com/profile.php?id=100069260531782' target='_blank' className='mx-3'><AiOutlineFacebook size={36} /></a>
							<a href='https://instagram.com/fernandaessenciais' target='_blank' className='mx-3'><AiOutlineInstagram size={36} /></a>
							<a href='https://wa.me/5561995833000' target='_blank' className='mx-3'><AiOutlineWhatsApp size={36} /></a>
							<a href='mailto:nandartavares@hotmail.com' target='_blank' className='mx-3'><AiOutlineMail size={36} /></a>
						</footer>
					</div>
				</div>
			</div>

			<Modal show={showWhy} onHide={handleToggleWhy} size="lg" centered>
				<iframe width="800" height="450" src="https://www.youtube.com/embed/iL1L2lYztKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</Modal>

			<Modal show={showWhat} onHide={handleToggleWhat} size="lg" centered>
				<iframe width="800" height="450" src="https://www.youtube.com/embed/YoIk18xWxZ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</Modal>

			<Modal show={showCompromise} onHide={handleToggleCompromise} centered>
				<iframe width="800" height="450" src="https://www.youtube.com/embed/dMXQV8Y6RAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</Modal>
		</>
	);
}
