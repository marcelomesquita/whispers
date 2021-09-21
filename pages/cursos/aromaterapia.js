import Head from 'next/head';
import Image from 'next/image';
import { FaBookOpen, FaChalkboard, FaDesktop, FaGraduationCap, FaHeadset, FaMoneyBillAlt, FaRegCalendarCheck, FaSyncAlt, FaTelegramPlane, FaWifi } from 'react-icons/fa';
import Container from '/components/layout/Container';
import abnt02947bn from '/assets/images/certified/02947BN.jpg';
import abrathcjah from '/assets/images/certified/ABRATH-CJAH.png';
import abrathcrth from '/assets/images/certified/ABRATH-CRTH.png';

export default function CursoAromaterapia() {
	//const checkout = 'https://go.hotmart.com/V593021740?src=site'; // página de venda
	const checkout = 'https://go.hotmart.com/E59302175C?ap=c9d5&src=site'; // página de checkout

	return (
		<Container>
			<Head>
				<title>Curso de Aromaterapia Online | Whispers</title>
				<meta property='description' content='Tudo sobre mais de 30 óleos essenciais, inclusive: uso seguro, diluição correta, sinergias, receitinhas e ainda aborda temas como medicina tradicional chinesa, psicossomática, aplicação em pets, aplicação na maternidade e muito mais.' key='description' />
			</Head>

			<div className='sumary text-muted'>
				<strong className='d-block h6 my-2 pb-2 border-bottom'>Índice</strong>
				<nav id='TableOfContents'>
					<ul className='nav flex-column'>
						<li><a href='#inicio'>Início</a></li>
						<li><a href='#vantagens'>Vantagens</a></li>
						<li><a href='#oferece'>O que o curso oferece?</a></li>
						<li><a href='#reconhecimento'>Curso reconhecido</a></li>
						<li><a href='#depoimentos'>Depoimentos</a></li>
						<li><a href='#sobre'>Sobre o curso</a></li>
						<li><a href='#conteudo'>Conteúdo programático</a></li>
						<li><a href='#duvidas'>Dúvidas frequentes</a></li>
						<li><a href='#investimento'>Investimento</a></li>
					</ul>
				</nav>
			</div>

			<section id='inicio' className='cover d-flex justify-content-center align-items-center'>
				<div className='container text-center'>
					<div className='row justify-content-center'>
						<div className='col col-lg-8'>
							<h1 className='display-4'>Curso de Aromaterapia Online</h1>
							<p className='lead'>Conheça o método que já ajudou mais de 10.000 pessoas a cuidarem melhor da saúde, estética e bem estar de forma 100% natural.</p>
							<p className='lead'>Qualifique-se como profissional com amplo conhecimento na aplicação segura e responsável dos óleos essenciais com o curso de aromaterapia mais vendido da internet</p>
							<iframe width='100%' height='450' src='https://www.youtube.com/embed/H8lSWZ2evZE' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
							<a href={checkout} target='_blank' className='btn btn-lg btn-primary'>
								Quero me inscrever
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id='vantagens' className='cover d-flex justify-content-center align-items-center'>
				<div className='container text-center'>
					<div className='row'>
						<div className='col'>
							<h2 className='display-5'>Vantagens do curso</h2>
							<div className='row g-3 py-5 row-cols-1 row-cols-lg-5'>
								<div className='feature col'>
									<FaGraduationCap size={100} className='text-secondary my-3' />
									<h3>Certificado</h3>
									<p>O curso possui um lindo certificado de 200 horas reconhecido pela ABRATH e registrado na biblioteca nacional RDA que você receberá ao concluir todos os módulos.</p>
								</div>
								<div className='feature col'>
									<FaWifi size={100} className='text-secondary my-3' />
									<h3>100% Online</h3>
									<p>Aulas 100% online. Todas as aulas já estão disponíveis e estão hospedadas na plataforma HOTMART, a maior plataforma de cursos online do Brasil. Adquirindo o curso agora você recebe imediatamente o acesso ao curso por e-mail e SMS.</p>
								</div>
								<div className='feature col'>
									<FaSyncAlt size={100} className='text-secondary my-3' />
									<h3>Aulas novas</h3>
									<p>Todos os meses o curso conta com novas aulas que são ao vivo onde você tirar dúvidas comigo e a reprise dessas aulas ficam disponíveis para as alunas.</p>
								</div>
								<div className='feature col'>
									<FaRegCalendarCheck size={100} className='text-secondary my-3' />
									<h3>Acesso vitalício</h3>
									<p>O curso ficará disponível para você por tempo indeterminado. Você pode assistir quantas vezes quiser e fazer consultas depois. Faça o curso no seu tempo.</p>
								</div>
								<div className='feature col'>
									<FaMoneyBillAlt size={100} className='text-secondary my-3' />
									<h3>Garantia</h3>
									<p>O curso conta com a garantia INCONDICIONAL de 7 dias. Satisfação garantida ou seu dinheiro de volta.</p>
								</div>
							</div>
							<a href={checkout} target='_blank' className='btn btn-lg btn-primary'>
								Quero me inscrever
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id='oferece' className='cover d-flex justify-content-center align-items-center'>
				<div className='container text-center'>
					<div className='row'>
						<div className='col'>
							<h2 className='display-5'>O que curso oferece?</h2>
							<div className='row g-3 py-5 row-cols-1 row-cols-lg-5'>
								<div className='feature col'>
									<FaHeadset size={100} className='text-secondary my-3' />
									<h3>Suporte completo</h3>
									<p>Atendimento individual da equipe de suporte para tirar dúvidas relacionadas as aulas.</p>
								</div>
								<div className='feature col'>
									<FaBookOpen size={100} className='text-secondary my-3' />
									<h3>Material didático</h3>
									<p>Download de diversos materiais didáticos para auxiliá-la(o) no seu aprendizado e para consultar a qualquer momento, apostila do curso, manual de receitas, estudos científicos, tabelas de diluição, ebooks e muito mais.</p>
								</div>
								<div className='feature col'>
									<FaDesktop size={100} className='text-secondary my-3' />
									<h3>47 vídeoaulas</h3>
									<p>Aulas completas e detalhadas. todas elas ficarão disponíveis imediatamente após a compra.</p>
								</div>
								<div className='feature col'>
									<FaTelegramPlane size={100} className='text-secondary my-3' />
									<h3>Grupo no telegram</h3>
									<p>Faça parte da maior  e melhor comunidade fechada de aromaterapia do Brasil, o grupo exclusivo de Telegram da(o)s aluna(o)s para compartilhar experiências.</p>
								</div>
								<div className='feature col'>
									<FaChalkboard size={100} className='text-secondary my-3' />
									<h3>Novas aulas</h3>
									<p>Novas aulas gratuitas todos os meses abordando novos assuntos e as novidades relacionadas a aromaterapia.</p>
								</div>
							</div>
							<a href={checkout} target='_blank' className='btn btn-lg btn-primary'>
								Quero me inscrever
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id='reconhecimento' className='cover d-flex justify-content-center align-items-center'>
				<div className='container text-center'>
					<div className='row'>
						<div className='col'>
							<h2 className='display-6'>Curso reconhecido pela ABRATH e registrado na Biblioteca Nacional</h2>
							<div className='row g-3 py-5 row-cols-1 row-cols-lg-3'>
								<div className='feature col'>
									<Image src={abrathcjah} alt='selo ABRATH CJAH' width='249' height='240' />
								</div>
								<div className='feature col'>
									<Image src={abrathcrth} alt='selo ABRATH CRTH' width='249' height='240' />
								</div>
								<div className='feature col d-flex justify-content-center align-items-center'>
									<Image src={abnt02947bn} alt='selo Biblioteca Nacional' width='210' height='130' />
								</div>
							</div>
							<a href={checkout} target='_blank' className='btn btn-lg btn-primary'>
								Quero me inscrever
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id='depoimentos' className='cover d-flex justify-content-center align-items-center'>
				<div className='container text-center'>
					<div className='row'>
						<div className='col'>
							<h2 className='display-5'>Depoimentos</h2>
							<div className='row g-3 py-5 row-cols-1 row-cols-lg-3'>
								<div className='feature col'>
									<iframe width='100%' height='300' src='https://www.youtube.com/embed/rRZ5GLVkab4' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
								</div>
								<div className='feature col'>
									<iframe width='100%' height='300' src='https://www.youtube.com/embed/Irhsku-o03U' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
								</div>
								<div className='feature col'>
									<iframe width='100%' height='300' src='https://www.youtube.com/embed/e3o8SLn61Lc' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
								</div>
							</div>
							<a href={checkout} target='_blank' className='btn btn-lg btn-primary'>
								Quero fazer parte dessa família
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id='sobre' className='cover d-flex justify-content-center align-items-center'>
				<div className='container text-center'>
					<div className='row justify-content-center'>
						<div className='col col-lg-8'>
							<h2 className='display-5'>Sobre o curso de aromaterapia online</h2>
							<h3 className='display-6'>O que é o curso?</h3>
							<p className='lead'>No curso de aromaterapia online você aprenderá um método cientificamente comprovado de prevenir, tratar diversas questões e proporcionar bem-estar com a utilização dos óleos essenciais.</p>
							<p className='lead'>Você aprenderá como usá-los de forma segura em gestantes, bebês, crianças, adultos, idosos e pets.</p>

							<h3 className='display-6'>Pra quem é esse curso?</h3>
							<p className='lead'>O curso é destinado a qualquer pessoa que queira aprender a utilizar os óleos essenciais como ferramenta para prevenir diversas questões, melhorar a saúde, estética e bem-estar próprio, dos seus familiares, bebês, crianças, pets, etc.</p>
							<p className='lead'>Também se destina as pessoas que desejam trabalhar com aromaterapia.</p>
							
							<h3 className='display-6'>O que vou aprender?</h3>
							<p className='lead'>Nesse curso de 200 horas com direito a certificado de conclusão, você aprenderá:</p>
							<ul className='mx-5 text-start'>
								<li className='p-1'>A história da aromaterapia;</li>
								<li className='p-1'>Aplicação dos óleos essenciais para prevenção e tratamento complementar de diversas questões;</li>
								<li className='p-1'>Química dos óleos essenciais;</li>
								<li className='p-1'>Uso seguro e aplicação de 31 óleos essenciais;</li>
								<li className='p-1'>Uso seguro e aplicação de 13 óleos vegetais;</li>
								<li className='p-1'>Uso de óleos essenciais em gestantes, crianças, bebês, cães e gatos;</li>
								<li className='p-1'>Psicossomática;</li>
								<li className='p-1'>Medicina tradicional chinesa e a aromaterapia.</li>
							</ul>
							<p className='lead'>E muitos mais!</p>
							
							<a href={checkout} target='_blank' className='btn btn-lg btn-primary'>
								Quero me inscrever
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id='conteudo' className='cover d-flex justify-content-center align-items-center'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col col-lg-8'>
							<h2 className='display-5 text-center'>Conteúdo Programático</h2>
							<div className='accordion my-5' id='accordionConteudo'>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingApresentacao'>
										<button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseApresentacao' aria-expanded='true' aria-controls='collapseApresentacao'>
											<strong>Apresentação</strong>
										</button>
									</h2>
									<div id='collapseApresentacao' className='accordion-collapse collapse show' aria-labelledby='headingApresentacao' data-bs-parent='#accordionConteudo'>
										<div className='accordion-body'>
											<ul>
												<li>Apresentação do Curso e da Idealizadora</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingModulo01'>
										<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseModulo01' aria-expanded='false' aria-controls='collapseModulo01'>
											<strong>Módulo 01</strong>
										</button>
									</h2>
									<div id='collapseModulo01' className='accordion-collapse collapse' aria-labelledby='headingModulo01' data-bs-parent='#accordionConteudo'>
										<div className='accordion-body'>
											<ul>
												<li>O que é aromaterapia</li>
												<li>Lavanda, Limão Siciliano e Hortelã-Pimenta</li>
												<li>Eucalipto, Cedro e Cravo</li>
												<li>Óleos Vegetais</li>
												<li>Pinho Siberiano, Cipreste e Melaleuca</li>
												<li>Primeiro teste</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingModulo02'>
										<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseModulo02' aria-expanded='false' aria-controls='collapseModulo02'>
											<strong>Módulo 02</strong>
										</button>
									</h2>
									<div id='collapseModulo02' className='accordion-collapse collapse' aria-labelledby='headingModulo02' data-bs-parent='#accordionConteudo'>
										<div className='accordion-body'>
											<ul>
												<li>Copaíba, Manjerona e Tangerina</li>
												<li>Medicina Tradicional Chinesa e Óleos Essenciais</li>
												<li>Olíbano, Camomila Romana e Vetiver</li>
												<li>Psicossomática e Óleos Essenciais</li>
												<li>Alecrim, Bergamota e Gerânio</li>
												<li>Segundo teste</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingModulo03'>
										<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseModulo03' aria-expanded='true' aria-controls='collapseModulo03'>
											<strong>Módulo 03</strong>
										</button>
									</h2>
									<div id='collapseModulo03' className='accordion-collapse collapse' aria-labelledby='headingModulo03' data-bs-parent='#accordionConteudo'>
										<div className='accordion-body'>
											<ul>
												<li>Manjericão e Cardamomo</li>
												<li>Lemongrass, Patchouli e Pimenta Negra</li>
												<li>Introdução ao uso em Gestantes</li>
												<li>Uso em Cães e Gatos</li>
												<li>Canela,Laranja e Grapefruit</li>
												<li>Salvia Esclareia, Ylang Ylang e Sândalo</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingExtra'>
										<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseExtra' aria-expanded='false' aria-controls='collapseExtra'>
											<strong>Conetúdo Extra</strong>
										</button>
									</h2>
									<div id='collapseExtra' className='accordion-collapse collapse' aria-labelledby='headingExtra' data-bs-parent='#accordionConteudo'>
										<div className='accordion-body'>
											<ul>
												<li>Faxina Natural</li>
												<li>Como Diluir os Óleos Essenciais</li>
												<li>Gengibre</li>
												<li>Óleos Essenciais e o Emagrecimento</li>
												<li>Ingestão de óleos essenciais</li>
												<li>Lives de Perguntas e Respostas</li>
												<li>Aulas Ao Vivo</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingBonus'>
										<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseBonus' aria-expanded='false' aria-controls='collapseBonus'>
											<strong>Bônus exclusivo</strong>
										</button>
									</h2>
									<div id='collapseBonus' className='accordion-collapse collapse' aria-labelledby='headingBonus' data-bs-parent='#accordionConteudo'>
										<div className='accordion-body'>
											<ul>
												<li>Ebook Concentração Motivação e Óleos Essenciais</li>
												<li>Ebook Cozinhando com Óleos Essenciais</li>
												<li>Ebook Guia Introdutório Sobre os Óleos Essenciais</li>
												<li>Ebook Origens dos Óleos Essenciais</li>
												<li>Ebook os Óleos Essenciais e o Sono</li>
												<li>Ebook Uso Aromático</li>
												<li>Ebook Uso Tópico</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className='text-center'>
								<a href={checkout} target='_blank' className='btn btn-lg btn-primary'>
									Quero me inscrever
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id='duvidas' className='cover d-flex justify-content-center align-items-center'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col col-lg-8'>
							<h2 className='display-5 text-center'>Dúvidas Frequentes</h2>
							<div className='accordion my-5' id='accordionDuvidas'>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingDuvida01'>
										<button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseDuvida01' aria-expanded='true' aria-controls='collapseDuvida01'>
											<strong>1. Não tenho estudo, posso fazer o curso?</strong>
										</button>
									</h2>
									<div id='collapseDuvida01' className='accordion-collapse collapse show' aria-labelledby='headingDuvida01' data-bs-parent='#accordionDuvidas'>
										<div className='accordion-body'>
											<p>Claro! As aulas são extremamente didáticas, você conseguirá aprender com certeza.</p>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingDuvida02'>
										<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseDuvida02' aria-expanded='false' aria-controls='collapseDuvida02'>
											<strong>2. O curso aborda os óleos essenciais de alguma marca específica?</strong>
										</button>
									</h2>
									<div id='collapseDuvida02' className='accordion-collapse collapse' aria-labelledby='headingDuvida02' data-bs-parent='#accordionDuvidas'>
										<div className='accordion-body'>
											<p>Não. É um curso sobre aromaterapia, não abordamos nenhuma marca específica.</p>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingDuvida03'>
										<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseDuvida03' aria-expanded='false' aria-controls='collapseDuvida03'>
											<strong>3. O curso é certificado pela ABRATH?</strong>
										</button>
									</h2>
									<div id='collapseDuvida03' className='accordion-collapse collapse' aria-labelledby='headingDuvida03' data-bs-parent='#accordionDuvidas'>
										<div className='accordion-body'>
											<p>Sim, nossa empresa possui certificação da ABRATH.</p>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingDuvida04'>
										<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseDuvida04' aria-expanded='false' aria-controls='collapseDuvida04'>
											<strong>4. O curso é de formação em aromaterapia? Receberei o diploma de aromaterapeuta?</strong>
										</button>
									</h2>
									<div id='collapseDuvida04' className='accordion-collapse collapse' aria-labelledby='headingDuvida04' data-bs-parent='#accordionDuvidas'>
										<div className='accordion-body'>
											<p>Sim. O que ocorre com a aromaterapia no Brasil é semelhante ao que ocorre com os professores de yoga: são ambas áreas do conhecimento sem regulamentação como profissão. Para você trabalhar como aromaterapeuta, basta você querer e se aprofundar no assunto.</p>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingDuvida05'>
										<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseDuvida05' aria-expanded='false' aria-controls='collapseDuvida05'>
											<strong>5. É ensinado como produzir os óleos essenciais no curso?</strong>
										</button>
									</h2>
									<div id='collapseDuvida05' className='accordion-collapse collapse' aria-labelledby='headingDuvida05' data-bs-parent='#accordionDuvidas'>
										<div className='accordion-body'>
											<p>Não, não é possível produzir os óleos essenciais, de forma artesanal, somente indústrias  conseguem fazer isso. É necessário tecnologia específica para tal fim. No curso ensinamos a usar de forma adequada essas ferramentas de saúde, bem-estar e estética maravilhosas.</p>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingDuvida06'>
										<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseDuvida06' aria-expanded='false' aria-controls='collapseDuvida06'>
											<strong>6. Quais são as formas de pagamento?</strong>
										</button>
									</h2>
									<div id='collapseDuvida06' className='accordion-collapse collapse' aria-labelledby='headingDuvida06' data-bs-parent='#accordionDuvidas'>
										<div className='accordion-body'>
											<p>Aceitamos pagamento através de boleto, cartão de crédito, cartão de débito, PayPal, conta Hotmart, Samsung Pay e Google Pay.</p>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingDuvida07'>
										<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseDuvida07' aria-expanded='false' aria-controls='collapseDuvida07'>
											<strong>7. Qual o formato do curso?</strong>
										</button>
									</h2>
									<div id='collapseDuvida07' className='accordion-collapse collapse' aria-labelledby='headingDuvida07' data-bs-parent='#accordionDuvidas'>
										<div className='accordion-body'>
											<p>As aulas e os materiais ficam hospedados em um site, adquirindo o curso você receberá o acesso ao site por e-mail e poderá assistir as aulas imediatamente. Caso opte por pagar através de boleto, o acesso é encaminhado em 1 dia útil após o pagamento.</p>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingDuvida08'>
										<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseDuvida08' aria-expanded='false' aria-controls='collapseDuvida08'>
											<strong>8. As aulas serão ao vivo?</strong>
										</button>
									</h2>
									<div id='collapseDuvida08' className='accordion-collapse collapse' aria-labelledby='headingDuvida08' data-bs-parent='#accordionDuvidas'>
										<div className='accordion-body'>
											<p>Não, todas as aulas já foram gravadas e estão disponíveis em um site.</p>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingDuvida09'>
										<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseDuvida09' aria-expanded='false' aria-controls='collapseDuvida09'>
											<strong>9. O curso possui certificado de conclusão?</strong>
										</button>
									</h2>
									<div id='collapseDuvida09' className='accordion-collapse collapse' aria-labelledby='headingDuvida09' data-bs-parent='#accordionDuvidas'>
										<div className='accordion-body'>
											<p>Sim, ao término do curso o certificado é entregue automaticamente.</p>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingDuvida10'>
										<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseDuvida10' aria-expanded='false' aria-controls='collapseDuvida10'>
											<strong>10. Vocês dão alguma garantia?</strong>
										</button>
									</h2>
									<div id='collapseDuvida10' className='accordion-collapse collapse' aria-labelledby='headingDuvida10' data-bs-parent='#accordionDuvidas'>
										<div className='accordion-body'>
											<p>Sim, o curso possui garantia de 7 dias. Antes desses 7 dias, é possível solicitar o cancelamento da compra e seu dinheiro é devolvido automaticamente.</p>
										</div>
									</div>
								</div>
								<div className='accordion-item'>
									<h2 className='accordion-header' id='headingDuvida11'>
										<button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseDuvida11' aria-expanded='false' aria-controls='collapseDuvida11'>
											<strong>11. Quanto tempo tenho para fazer o curso?</strong>
										</button>
									</h2>
									<div id='collapseDuvida11' className='accordion-collapse collapse' aria-labelledby='headingDuvida11' data-bs-parent='#accordionDuvidas'>
										<div className='accordion-body'>
											<p>O acesso ao curso é vitalício, as aulas sempre estarão disponíveis no site.</p>
										</div>
									</div>
								</div>
							</div>
							<div className='text-center'>
								<a href={checkout} target='_blank' className='btn btn-lg btn-primary'>
									Quero me inscrever
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id='investimento' className='cover d-flex justify-content-center align-items-center'>
				<div className='container text-center'>
					<div className='row justify-content-center'>
						<div className='col col-lg-8'>
							<h2 className='display-5'>Investimento</h2>
							<p className='lead'>CURSO COMPLETO + CERTIFICADO DE 200 HORAS + ACESSO VITALÍCIO + SUPORTE PARA TIRAR DÚVIDAS + COMUNIDADE DAS ALUNAS + NOVAS AULAS TODOS OS MESES</p>
							<p className='fs-2'>DE: <span className='text-danger text-decoration-line-through'>R$ 847,00</span></p>
							<p className='fs-2'>POR: <span className='text-success'>R$ 297,00</span></p>
							<p>ou 12 X R$ 28,94</p>
							<a href={checkout} target='_blank' className='btn btn-lg btn-success'>
								Quero me inscrever
							</a>
						</div>
					</div>
				</div>
			</section>
		</Container>
	);
}
