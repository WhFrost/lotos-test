import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import styles from './Timer.module.scss';
import {TIMER} from '../../const';

interface TimerProps {
	startDate: Date;
	endDate: Date;
}

function Timer({startDate, endDate}: TimerProps) {
	const tenderStartDate = dayjs(startDate);
	const tenderEndDate = dayjs(endDate);
	const currentDay = dayjs();
	console.log(dayjs(tenderEndDate).format('hh:mm'));
	console.log(dayjs(tenderEndDate).format('MM:DD'));

	const elapsedTimeFromStart = currentDay.diff(tenderStartDate);
	const tick = TIMER * 60 * 1000;
	const elapsedCountTicks = elapsedTimeFromStart / tick;
	const remainingToFullTick = elapsedCountTicks % 1;
	const remainingTimer = Math.round(tick - remainingToFullTick * tick);

	const [duration, setDuration] = useState(remainingTimer);
	const [isOpened, setIsOpened] = useState(true);

	useEffect(() => {
		if (currentDay.isAfter(tenderEndDate)) {
			setIsOpened(false);
		}
	}, [currentDay, tenderEndDate]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (isOpened) {
				if (duration > 0) {
					setDuration((prev) => prev - 1000);
				}
				if (duration <= 0) {
					setDuration(tick);
				}
			} else {
				setIsOpened(false);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [isOpened, tick, duration]);

	const minutes = duration > 0 ? Math.floor(duration / 60 / 1000) % 60 : 0;
	const seconds = duration > 0 ? Math.floor(duration / 1000) % 60 : 0;
	const getMinutes = (time: number) => (time >= 10 ? time : `0${time}`);
	const getSeconds = (time: number) => (time >= 10 ? time : `0${time}`);
	return (
		<div className={styles.timer}>
			{isOpened ? (
				<span>
					{getMinutes(minutes)} : {getSeconds(seconds)}
				</span>
			) : (
				<div>
					<span>Торги закрыты</span>
				</div>
			)}
		</div>
	);
}

export default Timer;
