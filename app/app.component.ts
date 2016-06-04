import {Component} from 'angular2/core';
import {PlayerListComponent} from './players/player-list.component';


@Component({
    selector: 'pm-app',
    template: `
	<div><h1>{{pageTitle}}</h1>
	    <div>My First Component</div>
	    <pm-players></pm-players>
	</div>
	`,
	directives: [PlayerListComponent]
	})

export class AppComponent {
    pageTitle:string = 'AnguFUT 2';
    }
