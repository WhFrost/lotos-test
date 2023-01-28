import styles from './Tender-table.module.scss';
import {IUser} from '../../interfaces/user';

interface TenderTableProps {
	usersList: IUser[];
	usersOnTender: string[] | [];
}

function TenderTable({usersList, usersOnTender}: TenderTableProps) {
	const usersToRender: IUser[] = [];
	const renderUsers = (allUsers: IUser[], onTender: string[] | []) => {
		if (!allUsers || !onTender) {
			return <></>;
		}
		onTender.map((id) => {
			const user = allUsers.find(
				(userFromAllUsers: IUser) => userFromAllUsers.id === id,
			);
			if (user) {
				usersToRender.push(user);
			}
			return usersOnTender;
		});
	};
	renderUsers(usersList, usersOnTender);

	return (
		<article className={styles.tender}>
			<table className={styles.tender__table}>
				<thead className={styles.table__head}>
					<tr className={styles.table__row}>
						<th>Параметры и требования</th>
						{usersToRender.map((user) => (
							<th key={user.id}>
								<div>{user.name}</div>
								<div>{user.company}</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody className={styles.table__body}>
					<tr className={styles.table__row}>
						<td className={styles.table__cell}>
							Наличие комплекса мероприятий, повышающий стандарты качества
							изготовления
						</td>
						{usersToRender.map((user) => (
							<td key={user.id} className={styles.table__cell}>
								{user.optional ? user.optional : '-'}
							</td>
						))}
					</tr>
					<tr className={styles.table__row}>
						<td className={styles.table__cell}>Срок изготовления лота, дней</td>
						{usersToRender.map((user) => (
							<td key={user.id} className={styles.table__cell}>
								{user.productionTime}
							</td>
						))}
					</tr>
					<tr className={styles.table__row}>
						<td className={styles.table__cell}>
							Гарантийные обязательства, мес
						</td>
						{usersToRender.map((user) => (
							<td key={user.id} className={styles.table__cell}>
								{user.guarantee}
							</td>
						))}
					</tr>
					<tr className={styles.table__row}>
						<td className={styles.table__cell}>Условия оплаты</td>
						{usersToRender.map((user) => (
							<td key={user.id} className={styles.table__cell}>
								{user.termsOfPayment}
							</td>
						))}
					</tr>
					<tr className={styles.table__row}>
						<td className={styles.table__cell}>
							Стоимость оплаты изготовления лота, руб (без НДС)
						</td>
						{usersToRender.map((user) => (
							<td key={user.id} className={styles.table__cell}>
								{user.cost}
							</td>
						))}
					</tr>
					<tr className={styles.table__row}>
						<td className={styles.table__cell}>Действия</td>
					</tr>
				</tbody>
			</table>
		</article>
	);
}

export default TenderTable;
