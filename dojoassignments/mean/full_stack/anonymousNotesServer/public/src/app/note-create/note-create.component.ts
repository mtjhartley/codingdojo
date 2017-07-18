import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from './../note';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})
export class NoteCreateComponent implements OnInit {

  newNote = new Note();
  @Output() createNoteEvent = new EventEmitter();

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }
  onSubmit(addForm){
    this._noteService.addNote(this.newNote)
    .then(
      (response) => {
        console.log("Response: ", response)
        this.createNoteEvent.emit("Note was added.")
        this.newNote = new Note();
        addForm.reset()

      }
    )
    .catch(
      (err) => {
        console.log("error: ", err)
        this.createNoteEvent.emit("Note was not added.")
      }
    )
  }

}
