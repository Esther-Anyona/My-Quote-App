import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  title = 'Quotes';
  quote:Quotes[] = [
    new Quotes(1, 'It always seems impossible until it\'s done.', 'Nelson Mandela', 'Esther', new Date(2021,11,22), 0, 0, false),
    new Quotes(2, 'God always gives His best to those who leave the choice with Him.', 'Jim Elliot', 'Damian', new Date(2021,11,26), 0, 0, false),
    new Quotes(3, 'Don\'t ask me who\'s influenced me. A lion is made up of the lamb he\'s digested, and I\'ve been reading all my life.', 'Charles de Gaulle', 'Ari', new Date(2021,11,29), 0, 0, false),
    new Quotes(4, 'The future belongs to those who believe in the beauty of their dreams.', 'Eleanor Roosevelt', 'Teija', new Date(2022,0,2), 0, 0, false),
    new Quotes(5, 'A genuine leader is not a searcher for consensus but a molder of consensus.', 'Martin Luther King, Jr', 'Jones', new Date(2022,0,4), 0, 0, false),
    new Quotes(6, 'Opportunity does not knock, it presents itself, when you beat down the door.', 'Kyle Chandler', 'Kenia', new Date(2022,0,9), 0, 0, false),
  ];

  


  addNewQuote(quotes: Quotes){
    let quoteLength = this.quote.length;
    quotes.id = quoteLength+1;
    quotes.uploadDate = new Date(quotes.uploadDate)
    this.quote.push(quotes)
  }
  showDetails(index){
    this.quote[index].showDetails= !this.quote[index].showDetails
  }

  deleteQuote(quoteRead,index)
{
  if(quoteRead){
    let remove=confirm (`You are about to delete this ${this.quote[index].quote}, proceed?`)
    if(remove){
      this.quote.splice(index,1)
    }
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
