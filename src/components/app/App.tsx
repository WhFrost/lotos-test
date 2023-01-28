import {Routes, Route} from 'react-router-dom';
import MainPage from '../../pages/Main-page';
import TenderPage from '../../pages/Tender-page';
import NotFoundPage from '../../pages/Not-Found-page';
import Layout from '../layout/Layout';

function App() {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path={'tenders/:id'} element={<TenderPage />} />
					<Route path={'*'} element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
