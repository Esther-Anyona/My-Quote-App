import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Quotes } from '../quotes';



@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input ()quote= Quotes;
  @Output() quoteRead= new EventEmitter<boolean>();
  deleteRead(remove:boolean){
    this.quoteRead.emit(remove);
  }
  // upvote(){
  //   this.quote.upvote+=1;
  // }

  // downvote(){
  //   this.quote.downvote+=1;
  // }




  constructor() { }

  ngOnInit(): void {
  }

}
