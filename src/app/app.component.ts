import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroComponent } from "./registro/registro.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RegistroComponent, HomeComponent, LoginComponent]
})
export class AppComponent {
  title = 'mercadillo-libre';
}
