import useSWR from 'swr';
import {Link, useParams} from 'react-router-dom';
import {fetcher} from '../utils';
import {ITender} from '../interfaces/tenders';
import {IUser} from '../interfaces/user';
import Timer from '../components/timer/Timer';
import Loading from '../components/loading/Loading';
import TenderTable from '../components/tender-table/Tender-table';

function TenderPage() {
	const params = useParams();
	const tenderId = params.id;

	const {data: tender} = useSWR<ITender>(
		`http://localhost:3001/tenders/${tenderId}`,
		fetcher,
	);
	const {data: users} = useSWR<IUser[]>('http://localhost:3001/users', fetcher);

	if (!tender || !users) {
		return <Loading />;
	}

	return (
		<>
			<h1>{tender?.name}</h1>
			<Timer startDate={tender.startDate} endDate={tender.endDate} />
			<TenderTable usersList={users} usersOnTender={tender.usersOnTender} />
			<Link to='/'>Вернуться на Главную</Link>
		</>
	);
}

export default TenderPage;
