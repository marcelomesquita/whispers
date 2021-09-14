import Head from 'next/head';
import Container from '../../components/layout/Container';

export default function Home() {
	return (
		<Container>
			<Head>
				<title>Cursos de Aromaterapia | Whispers</title>
				<meta property='description' content='' key='description' />
			</Head>

			<main className='d-flex flex-column gap-3 my-3'>
				<section className='my-3 text-center'>
					<h2>Curso de Atomaterapia Online</h2>
					<p className='lead'>Já pensou em aprender um pouco mais sobre aromaterapia e óleos essenciais? 🌱💧</p>
					<p className='lead'>O curso de aromaterapia online é reconhecido pela ABRATH, acesso vitalício, garantia, suporte, material didático, acesso a um grupo fechado de alunos e muito mais!</p>
					<p className='lead'>O curso é 100% online. Tudo sobre mais de 30 óleos essenciais, inclusive: uso seguro, diluição correta, sinergias, receitinhas e ainda aborda temas como medicina tradicional chinesa, psicossomática, aplicação em pets, aplicação na maternidade e muito mais.</p>
					<video width='800' height='450' controls>
						<source src='/assets/videos/aromaterapia.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
					<a href='https://go.hotmart.com/V593021740?src=site' target='_blank' className='btn btn-lg btn-success text-white'>
						Clique aqui e saiba mais sobre o curso de aromaterapia
					</a>
				</section>

				<section className='my-3 text-center'>
				<h2>Curso de Atomaterapia na Maternidade</h2>
					<p className='lead'>No Curso de Aromaterapia na Maternidade você aprenderá tudo o que precisa para aplicar a aromaterapia para melhorar a qualidade de vida e o bem-estar antes, durante e após a gestação e, claro, no parto.</p>
					<p className='lead'>O curso ensina sobre a aplicação segura de aromaterapia e dos óleos para fertilidade, gestação, trabalho de parto, pós parto, recém nascidos e para emoções dos papais e mamães nesse momento tão especial.</p>
					<p className='lead'>O curso está com desconto super especial, aproveita!</p>
					<video width='800' height='450' controls>
						<source src='/assets/videos/aromaterapia-na-maternidade.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
					<a href='https://go.hotmart.com/E59302175C?src=site' target='_blank' className='btn btn-lg btn-success text-white'>
					Clique aqui e saiba mais sobre o curso de aromaterapia na maternidade
					</a>
				</section>
			</main>
		</Container>
	);
}
