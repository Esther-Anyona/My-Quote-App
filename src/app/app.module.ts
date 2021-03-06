import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteComponent } from './quote/quote.component';
import { DaysPassedCountPipe } from './days-passed-count.pipe';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { PopularQuoteHighlightDirective } from './popular-quote-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteComponent,
    DaysPassedCountPipe,
    QuoteDetailsComponent,
    PopularQuoteHighlightDirective,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
