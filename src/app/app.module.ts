import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomDirectiveHighlight } from './custom-directive/custom-directive-highlight';
import { BetterHighlightDirective } from './custom-directive/better-highlight.directive';
import { CustomStructuralDirDirective } from './custom-directive/custom-structural-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveHighlight,
    BetterHighlightDirective,
    CustomStructuralDirDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
