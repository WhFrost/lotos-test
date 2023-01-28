export interface ITender {
	id: string;
	name: string;
	startDate: Date;
	endDate: Date;
	startPrice: number;
	description: string;
	usersOnTender: string[] | [];
}
