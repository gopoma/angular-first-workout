import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "my-dream-app";
  name : string;
  email;
  webpage : string;
  hobbies : string[];
  showHobbies : boolean;
  num : number;

  constructor() {
    console.log("Constructor Working...");
    this.name = "Gustavo Eduardo ORDOÑO POMA";
    this.email = "gordono@unsa.edu.pe";
    this.webpage = "https://www.unsa.edu.pe";
    this.hobbies = ["Fuchibol", "Programación", "Ajedrez"];
    this.showHobbies = false;
    this.num = 0;
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }
  newHobby(hobby: Hobby) {
    // console.log(hobby.value);
    if(hobby.value.trim() === "") {return false;}
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }
  increment() {
    this.num++;
  }
}

interface Hobby {
  value: string;
}
