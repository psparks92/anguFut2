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
@Pipe({
    name: 'clubPlayerFilter'
})
export class clubPlayerFilterPipe implements PipeTransform {
    transform(value: IPlayer[], args: string[]): IPlayer[] {
        let filter: string = args[0] ? args[0] : null;
        return filter ? value.filter((player: IPlayer) =>
            player.club.clubid.toString() == args[0]) : value;
    }
}
@Pipe({
    name: 'leaguePlayerFilter'
})
export class leaguePlayerFilterPipe implements PipeTransform {
    transform(value: IPlayer[], args: string[]): IPlayer[] {
        let filter: string = args[0] ? args[0] : null;
        return filter ? value.filter((player: IPlayer) =>
            player.league.leagueid.toString() == args[0]) : value;
    }
}
@Pipe({
    name: 'nationPlayerFilter'
})
export class nationPlayerFilterPipe implements PipeTransform {
    transform(value: IPlayer[], args: string[]): IPlayer[] {
        let filter: string = args[0] ? args[0] : null;
        return filter ? value.filter((player: IPlayer) =>
            player.nation.nationid.toString() == args[0]) : value;
    }
}
@Pipe({ name: 'attributeDisplay' })
export class AttributesPipe implements PipeTransform {
    transform(attr: Attribute[]): string[] {
            var attrs = [];
        if (attr) {
            for (var i = 0; i < attr.length; i+=2) {
                let name = attr[i].name.substring(14),
                    value = attr[i].value,
                name2 = attr[i].name.substring(14),
                    value2 = attr[i].value;

                attrs.push(name + " " + value + "      " + name2 + " " + value2);
            }
        }
        return attrs;
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


