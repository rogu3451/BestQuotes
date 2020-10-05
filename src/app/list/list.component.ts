import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quotation} from "../models/quotation";
import {QUOTES} from "../models/database";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent {

  @Input()
  quotes: Quotation[];

  @Output() vote = new EventEmitter<QuotationEvent>();

  addVote1(quotation: Quotation, value: number){
    this.vote.emit({quotation, value});
  }
}

export interface QuotationEvent{
  quotation: Quotation;
  value: number;
}
