import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { HttpClientModule } from '@angular/common/http';
import { OneComponent } from './one/one.component';
import { PostUserComponent } from './post-user/post-user.component';
import { BoxComponent } from './box/box.component';
import { from } from 'rxjs';
import { HumanComponent } from './human/human.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    OneComponent,
    PostUserComponent,
    BoxComponent,
    HumanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
