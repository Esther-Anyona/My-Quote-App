import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

newQuote = new Quotes(0, "", "", "", new Date(), 0, 0, false);

  constructor() { }

  ngOnInit(): void {
  }

}
