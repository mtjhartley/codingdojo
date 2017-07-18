import { Component } from '@angular/core';
import { NoteService } from './note.service';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes: Array<Note> = []

  constructor(private _noteService: NoteService){
    this.getNotes() //what does this line do
  }

  getNotes(){
    this._noteService.retrieveNotes()
    .then(
      (data) => {
        this.notes = data
      })
      .catch(
        () => console.log("an error occured while getting notes on the client side.")
      )
  }

}
