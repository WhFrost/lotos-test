import {Link} from 'react-router-dom';

function NotFoundPage() {
	return (
		<>
			<h1>404</h1>
			<p>Страница не найден</p>
			<Link to={'/'}>Вернуться на Главную страницу</Link>
		</>
	);
}

export default NotFoundPage;
