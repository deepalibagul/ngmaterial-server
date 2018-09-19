import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatCardModule, MatDividerModule, MatTableModule,
  MatMenuModule, MatButtonModule, MatIconModule, MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsetableComponent } from './components/usetable/usetable.component';
import { TodoService } from './services/todo.service';



@NgModule({
  declarations: [
    AppComponent,
    UsetableComponent
  ],
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    BrowserModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
