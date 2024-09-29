import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { GameService } from "../game.service";
import { Router } from "@angular/router";
import { BoardComponent } from "../board/board.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, BoardComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regForm: FormGroup;
  headline: string;

  constructor(private gServ: GameService, private router: Router) {
    this.regForm = new FormGroup({
      player1: new FormControl(''),
      player2: new FormControl('')
    });
    this.headline = "";
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.regForm.valid) {
      const player1 = this.regForm.get('player1')?.value;
      const player2 = this.regForm.get('player2')?.value;
      this.gServ.registerPlayers(player1, player2);
      this.router.navigate(['/board']);
    }
  }
}
