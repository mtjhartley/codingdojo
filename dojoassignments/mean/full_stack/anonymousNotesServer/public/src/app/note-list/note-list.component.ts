import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  @Input() notes

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }

}
