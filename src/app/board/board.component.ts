import { Component, OnInit } from '@angular/core'; // Import OnInit
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit { // Implement OnInit
  boardStatus: string[] = ['', '', '', '', '', '', '', '', ''];
  headline!: string; // Use definite assignment assertion
  playerTurn!: string; // Use definite assignment assertion
  winner!: boolean; // Use definite assignment assertion

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.headline = this.gameService.headline;
    this.playerTurn = this.gameService.playerTurn;
    this.winner = this.gameService.winner;
  }

  /**
   * Handle the user selecting a square to put an X or an O.
   * @param id  The square id
   */
  handleBtnClick(id: number): void {
    if (!this.winner && this.boardStatus[id] === '') {
      this.gameService.makeMove(this.boardStatus, id);
      this.updateGameState();
    }
  }

  /**
   * Update the component's state based on the game service
   */
  private updateGameState(): void {
    this.headline = this.gameService.headline;
    this.playerTurn = this.gameService.playerTurn;
    this.winner = this.gameService.winner;
  }
}
