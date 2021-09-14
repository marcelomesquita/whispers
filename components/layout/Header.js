import Link from 'next/link';
import Image from 'next/image';
import profile from '../../assets/images/fernandaessenciais.jpg';

export default function Header() {
	return (
		<header className='d-flex flex-column gap-3 my-3'>
			<div className='text-center'>
				<Link href={`/`}>
					<Image src={profile} alt='fernandaessenciais' width='200' height='200' className='avatar rounded-circle' />
				</Link>
			</div>
			<h1 className='h3 text-primary text-center'>
					@fernandaessenciais
					<br />
					@lariessenciais
			</h1>
		</header>
	);
}
