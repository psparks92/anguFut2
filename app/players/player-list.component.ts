import {Component} from 'angular2/core';
import { OnInit } from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {IPlayer} from './player';
import {PlayerService} from './player.service';
import{playerFilterPipe, clubPlayerFilterPipe, leaguePlayerFilterPipe, nationPlayerFilterPipe} from './player-filter.pipe';
import {Observable} from 'rxjs/Observable'
@Component({
    selector: 'pm-players',
    templateUrl: 'app/players/player-list.component.html',
    styleUrls: ['app/players/player-list.component.css'],
    pipes: [playerFilterPipe, clubPlayerFilterPipe, leaguePlayerFilterPipe, nationPlayerFilterPipe],
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
    clubSearch: string ="";
    clubName: string ="";
    nationSearch: string ="";
    nationName: string ="";
    leagueSearch: string ="";
    leagueName: string ="";
    toggleImage(): void {
	this.showImage = !this.showImage;
    }

    getPlayers(): void {
        this.playerService.getPlayers()
        .subscribe(
            players => this.players = players, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
	ngOnInit(): void {
    this.getPlayers();
  }
}

