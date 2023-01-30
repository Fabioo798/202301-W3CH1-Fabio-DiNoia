import {Got} from './Character';

export class Fighter extends Got {
	weapon;
	dexterity;
	constructor(
		name: string,
		family: string,
		age: number,
		status: boolean,
		weapon: string,
		dexterity: number,
	) {
		super(name, family, age, status, 'Primero pego y luego pregunto');
		this.weapon = weapon;
		this.dexterity = dexterity;
	}
}
