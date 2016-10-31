import { PipeTransform, Pipe } from 'angular2/core';
import { IPlayer, Attribute } from './player';

@Pipe({
    name: 'playerFilter'
})

export class playerFilterPipe implements PipeTransform {
    transform(value: IPlayer[], args: string[]): IPlayer[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((player: IPlayer) =>
            player.firstName.toLocaleLowerCase().indexOf(filter) != -1
            || player.lastName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}
@Pipe({ name: 'attributeDisplay' })
export class AttributesPipe implements PipeTransform {
    transform(attr: Attribute): [string, number] {
        let name = attr.name,
            value = attr.value;
        return [name.substring(14), value];
    }

}
@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
    transform(value: any, args?: any[]): any[] {
        let keys = Object.keys(value),
            data = [];

        keys.forEach(key => {
            data.push(value[key]);
        });

        return data;
    }
}


