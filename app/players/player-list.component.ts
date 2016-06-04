import {Component} from 'angular2/core';

import {IPlayer} from './player';
import{playerFilterPipe} from './player-filter.pipe';
@Component({
    selector: 'pm-players',
    templateUrl: 'app/players/player-list.component.html',
    styleUrls: ['app/players/player-list.component.css'],
    pipes: [playerFilterPipe]
})


export class PlayerListComponent {
    pageTitle: string = 'Player List';
    players: IPlayer[] =  [   
    {
        "playerId": 1,
        "firstName": "Arjen",
        "lastName": "Robben",
        "rating": "90"
    },
    {
        "playerId": 2,
        "firstName": "Kevin",
        "lastName": "De Bruyne",
        "rating": "86"
    }
    ];
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    nameSearch: string = "";
    toggleImage(): void {
	this.showImage = !this.showImage;
    }
}

