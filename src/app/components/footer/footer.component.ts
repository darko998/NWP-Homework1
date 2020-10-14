import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public username: string
  public today: number

  constructor() {
    this.today = Date.now();
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }

}
