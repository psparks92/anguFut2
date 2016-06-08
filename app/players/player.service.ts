
import {Injectable} from 'angular2/core';
import {IProduct} from './product';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class PlayerService {

    private _playersUrl = 'http://peterfutapi.azurewebsites.net/players/search/';
    private _singlePlayerUrl = 'http://peterfutapi.azurewebsites.net/players/get/';
    private _playerID: number;
    private _searchName: string;
    constructor(private _http: Http) {}
    
   getPlayers() : Observable<IProduct[]> {
       return this._http.get(this._playersUrl + _searchName)
	.map((response: Response) => <IProduct[]> response.json())
	.do(data => console.log('All: ' + JSON.stringify(data)))
	.catch(this.handleError);
   }

   getPlayer() : Observable<IProduct[]> {
       return this._http.get(this._playerUrl + _playerID)
	.map((response: Response) => <IProduct[]> response.json())
	.do(data => console.log('All: ' + JSON.stringify(data)))
	.catch(this.handleError);
   }

   private handleError(error: Response) {

    }
}
