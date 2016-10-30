import {Component} from 'angular2/core';
import { OnInit } from 'angular2/core';
import {PlayerListComponent} from './players/player-list.component';
import {PlayerDetailComponent} from './players/player-detail.component';
import {PlayerService} from './players/player.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS,RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {WelcomeComponent} from './home/welcome.component';
import 'rxjs/Rx';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
	   <div class='container-fluid'>
		<a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
		    <li><a [routerLink]="['Welcome']" >Home</a></li>
		    <li><a [routerLink]="['Players']">Player List</a></li>
		</ul>
	    </div>
	</nav>
	<div class='container'>
	    <router-outlet></router-outlet>
        </div>
    <div>
	`,
	directives: [ROUTER_DIRECTIVES],
	providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
	})
@RouteConfig([
    {path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    {path: '/players', name: 'Players', component: PlayerListComponent},
    {path: '/player/:id', name: 'PlayerDetail', component: PlayerDetailComponent}
])


export class AppComponent {
    pageTitle:string = 'Peter\'s FUT DB';
    }
