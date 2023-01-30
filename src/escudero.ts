import {Got} from './Character';

export class Squire extends Got {
	serve;
	grade;
	constructor(
		name: string,
		family: string,
		age: number,
		status: boolean,
		serve: string,
		grade: number,
	) {
		super(name, family, age, status, 'Soy un loser');
		this.serve = serve;
		this.grade = grade;
	}
}
