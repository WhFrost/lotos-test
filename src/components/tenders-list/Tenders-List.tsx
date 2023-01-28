import useSWR from 'swr';
import {Link} from 'react-router-dom';
import styles from './Tenders-List.module.scss';
import {ITender} from '../../interfaces/tenders';
import {fetcher} from '../../utils';
import Loading from '../loading/Loading';

function TendersList() {
	const {data: tenders} = useSWR<ITender[]>(
		'http://localhost:3001/tenders',
		fetcher,
	);
	if (!tenders) {
		return <Loading />;
	}

	return (
		<ul className={styles.list}>
			{tenders.map((tender) => (
				<li key={tender.id} className={styles.list__item}>
					<Link to={`tenders/${tender.id}`} className={styles.list__link}>
						{' '}
						{tender.name}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default TendersList;
