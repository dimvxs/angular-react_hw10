import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactFormComponent } from './react-form/react-form.component';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactFormComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hw';
}
