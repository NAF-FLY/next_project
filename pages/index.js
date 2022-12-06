import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<h1>Главная</h1>
			<Link href='/burgers'>Все бургеры</Link>
		</div>
	)
}
