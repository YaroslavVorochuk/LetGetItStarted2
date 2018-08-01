import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatCardModule } from '@angular/material';
import { ItemService } from './services/item.service';
import { SortingPipe } from './shared/sorting.pipe';
import { FormsModule } from '../../node_modules/@angular/forms';
import { ModalService } from './services/modal.service';
import { ModalComponent } from '../directives/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    SortingPipe,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule
  ],
  providers: [ItemService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
