import { AfterViewInit, Component, Input, OnDestroy } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "song-detail",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./song-detail.component.html",
  styleUrl: "./song-detail.component.css",
})
export class SongDetailComponent implements AfterViewInit, OnDestroy {
  @Input() id = "";
  song: HTMLAudioElement = new Audio();
  isSongPlaying: boolean = true;

  ngAfterViewInit(): void {
    this.playSong();
  }

  ngOnDestroy(): void {
    this.song.pause();
  }

  public playSong() {
    this.song.src = `./assets/songs/${this.id}.mp3`;
    this.song.load();
    this.song.volume = 1
    const playPromise = this.song.play();

    if (playPromise !== undefined) {
      playPromise
      .then(() => {
        this.isSongPlaying = true
      })
      .catch((error) => {
        if (error.name === "NotAllowedError") {
          this.isSongPlaying = false
        }
      })
    }
  }

}
