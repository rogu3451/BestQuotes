import { Component } from '@angular/core';
import {Quotation} from './models/quotation';
import {QUOTES} from './models/database';
import {QuotationEvent} from "./list/list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  quotes: Quotation[] = QUOTES;

  mainTitle = 'Cytaty App';
  rankTitle: string;




  addVote(quotationEvent: QuotationEvent){
    quotationEvent.quotation.votes += quotationEvent.value;
  }

  bestQuotes(){
    this.rankTitle = 'Najlepsze';
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes(){
    this.rankTitle = 'Najgorsze';
    return this.quotes.filter(q => q.votes < 0);
  }

  appTitle(){
    return this.mainTitle;
  }

  rankingTitle() {
    return this.rankTitle;
  }

  onNewQuotation(quotation: Quotation){
    this.quotes.unshift(quotation);
  }

}
