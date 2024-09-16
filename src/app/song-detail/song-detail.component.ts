import { AfterViewInit, Component, Input, OnDestroy } from "@angular/core";

@Component({
  selector: "song-detail",
  standalone: true,
  imports: [],
  templateUrl: "./song-detail.component.html",
  styleUrl: "./song-detail.component.css",
})
export class SongDetailComponent implements AfterViewInit, OnDestroy {
  @Input() id = "";
  song = new Audio();
  ngAfterViewInit(): void {
    this.song.src = `./assets/songs/${this.id}.mp3`;
    this.song.load();
    this.song.volume = 1
    this.song.play();
  }

  ngOnDestroy(): void {
    this.song.pause();
  }
}
