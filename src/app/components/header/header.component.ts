import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Task Application';

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log('ADD TASK TOGGLE!');
  }

}
