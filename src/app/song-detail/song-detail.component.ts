import { Component, Input } from '@angular/core';

@Component({
  selector: 'song-detail',
  standalone: true,
  imports: [],
  templateUrl: './song-detail.component.html',
  styleUrl: './song-detail.component.css'
})
export class SongDetailComponent {

  @Input() id = '';
}
