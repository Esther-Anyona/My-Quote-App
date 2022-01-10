import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

newQuote = new Quotes(0, "", "", "", new Date(), 0, 0, false);
@Output() addQuote = new EventEmitter<Quotes>();

onSubmit(form: NgForm){
  var add=this.newQuote;
  this.addQuote.emit(this.newQuote);
  form.resetForm();
}
publishQuote(){
  this.addQuote.emit(this.newQuote);
}

  constructor() { }

  ngOnInit(): void {
  }

}
