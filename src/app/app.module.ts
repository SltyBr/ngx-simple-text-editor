import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxSimpleTextEditorModule} from 'bii-text-editor';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,

    NgxSimpleTextEditorModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
          json: () => import('highlight.js/lib/languages/json')
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
