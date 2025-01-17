import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/tournament-creating/entities/player';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }



    find(name: string): Observable<Player[]> {
      const url = 'http://localhost:3000/player';

      const headers = new HttpHeaders()
        .set('Accept', 'application/json');

      const params = new HttpParams()
        .set('name', name)

      return this.http.get<Player[]>(url, { headers, params });
    }



save(player: Player): Observable<Player> {
  const url = 'http://localhost:3000/player';

  const headers = new HttpHeaders()
    .set('Accept', 'application/json');

  return this.http.post<Player>(url, player, { headers });
}

update(selectedPlayer: Player): Observable<Player> {
  const url = 'http://localhost:3000/player';

  const headers = new HttpHeaders()
    .set('Accept', 'application/json');

  return this.http.put<Player>(url +"/" + selectedPlayer.id, selectedPlayer, { headers });
}

delete(selectedPlayer: Player): Observable<Player> {
  const url = 'http://localhost:3000/player';

  const headers = new HttpHeaders()
    .set('Accept', 'application/json');

  return this.http.delete<Player>(url + "/"+ selectedPlayer.id, {headers})
      // .subscribe(() => this.message = 'Delete successful');
}

}