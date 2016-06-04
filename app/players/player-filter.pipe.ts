import { PipeTransform, Pipe } from 'angular2/core';
import {IPlayer} from './player';

@Pipe({
    name: 'playerFilter'
})

export class playerFilterPipe implements PipeTransform {
    transform(value: IPlayer[], args: string[]) : IPlayer[] {
	let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
	return filter ? value.filter((player: IPlayer) =>
	player.firstName.toLocaleLowerCase().indexOf(filter) != -1 
	|| player.lastName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}