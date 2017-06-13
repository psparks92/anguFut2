
import {Injectable} from 'angular2/core';
import {IPlayer, ISmallPlayer} from './player';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class PlayerService {

    private _playersUrl = 'http://api.peterfutdb.com/api/players/';
    private _singlePlayerUrl = 'http://api.peterfutdb.com/api/player/';
    private _playerID: number;
    private _searchName: string;
    constructor(private _http: Http) {}
    
   getPlayers() : Observable<IPlayer[]> {
       return this._http.get(this._playersUrl)
	.map((response: Response) => <IPlayer[]> response.json())
	.do(data => console.log('All: ' + JSON.stringify(data)))
	.catch(this.handleError);
   }

   getSmallPlayers() : Observable<ISmallPlayer[]> {
       return this._http.get(this._playersUrl)
	.map((response: Response) => <ISmallPlayer[]> response.json())
	.do(data => console.log('All: ' + JSON.stringify(data)))
	.catch(this.handleError);
   }
   searchPlayers() : Observable<IPlayer[]> {
       return this._http.get(this._playersUrl + this._searchName)
	.map((response: Response) => <IPlayer[]> response.json())
	.do(data => console.log('All: ' + JSON.stringify(data)))
	.catch(this.handleError);
   }

   getPlayer(id: number) : Observable<IPlayer> {
       return this._http.get(this._singlePlayerUrl + id)
       .map((response: Response) => <IPlayer> response.json())
	.catch(this.handleError);
   }

   private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
