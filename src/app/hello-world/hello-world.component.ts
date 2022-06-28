import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  users = ["ryan", "joe", "cameron", "john"];
  activated = false;

  constructor() { }

  ngOnInit(): void {
  }

  sayHello() {
    window.alert("Hola desde hello-world.component");
  }

  addUser(newUser: User) {
    // console.log(newUser.value);
    if(newUser.value.trim() === "") {return false;}
    this.users.push(newUser.value);
    newUser.value = "";
    // newUser.focus();
    return false;
  }
  deleteUser(user: string): void {
    this.users = this.users.filter(u => u !== user);
  }
}

interface User {
  value: string
}
