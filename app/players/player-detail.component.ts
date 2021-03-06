import { Component } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { OnInit } from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {IPlayer} from './player';
import {PlayerService} from './player.service';
import{playerFilterPipe, KeysPipe, AttributesPipe} from './player-filter.pipe';
import{PlayerCardComponent} from './player-card.component';
import {Observable} from 'rxjs/Observable'

@Component({
    selector: 'pm-player',
    templateUrl: 'app/players/player-detail.component.html',
    providers: [PlayerService],
    pipes : [KeysPipe, AttributesPipe],
    directives : [PlayerCardComponent]
})
export class PlayerDetailComponent implements OnInit{
    pageTitle: string = 'Player Detail';
    id:number;
    constructor(private _routeParams: RouteParams,
                private _router: Router,
                private _playerService: PlayerService) {
          let id = +this._routeParams.get('id');
          this.id = +this._routeParams.get('id');
          this.pageTitle += `: ${id}`;
    }
    player = this._playerService.getPlayer(this.id)

    onBack(): void {
        this._router.navigate(['Players']);
    }

    getPlayer(): void {
        this._playerService.getPlayer(this.id)
        .subscribe(
            player => this.player = player, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
    
	ngOnInit(): void {
    this.getPlayer();
    }
}
