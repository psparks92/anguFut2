
import {Injectable} from 'angular2/core';
import {IPlayer} from './player';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class PlayerService {

    private _playersUrl = 'http://peterfutdb.com/api/player/';
    private _singlePlayerUrl = 'http://peterfutdb.com/api/player/id/';
    private _playerID: number;
    private _searchName: string;
    constructor(private _http: Http) {}
    
   getPlayers() : Observable<IPlayer[]> {
       return this._http.get(this._playersUrl)
	.map((response: Response) => <IPlayer[]> response.json())
	.do(data => console.log('All: ' + JSON.stringify(data)));
	//.catch(this.handleError);
   }
   searchPlayers() : Observable<IPlayer[]> {
       return this._http.get(this._playersUrl + this._searchName)
	.map((response: Response) => <IPlayer[]> response.json())
	.do(data => console.log('All: ' + JSON.stringify(data)));
	//.catch(this.handleError);
   }

   getPlayer() : Observable<IPlayer[]> {
       return this._http.get(this._singlePlayerUrl + this._playerID)
	.map((response: Response) => <IPlayer[]> response.json())
	.do(data => console.log('All: ' + JSON.stringify(data)));
	//.catch(this.handleError);
   }

   private handleError(error: Response) {

    }
}
