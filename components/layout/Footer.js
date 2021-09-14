import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';

export default function Footer() {
	return (
		<footer className='my-3 py-3 border-top d-flex flex-row justify-content-center'>
			<a href='https://www.facebook.com/profile.php?id=100069260531782' target='_blank' className='mx-3'><AiOutlineFacebook size={36} /></a>
			<a href='https://instagram.com/fernandaessenciais' target='_blank' className='mx-3'><AiOutlineInstagram size={36} /></a>
			<a href='https://wa.me/5561995833000' target='_blank' className='mx-3'><AiOutlineWhatsApp size={36} /></a>
			<a href='mailto:nandartavares@hotmail.com' target='_blank' className='mx-3'><AiOutlineMail size={36} /></a>
		</footer>
	);
}
