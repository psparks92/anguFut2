import {Component} from 'angular2/core';
import { OnInit } from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {IPlayer} from './player';
import {PlayerService} from './player.service';
import{playerFilterPipe} from './player-filter.pipe';
@Component({
    selector: 'pm-players',
    templateUrl: 'app/players/player-list.component.html',
    styleUrls: ['app/players/player-list.component.css'],
    pipes: [playerFilterPipe],
    providers: [PlayerService]
})


export class PlayerListComponent implements OnInit{
    pageTitle: string = 'Player List';
    constructor(private playerService: PlayerService) {}
    players = this.playerService.getPlayers();
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    nameSearch: string = "";
    toggleImage(): void {
	this.showImage = !this.showImage;
    }

    getPlayers(): void {
        this.players = this.playerService.getPlayers();
    }
	ngOnInit(): void {
    this.getPlayers();
  }
}

