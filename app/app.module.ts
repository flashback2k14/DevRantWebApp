// Modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
// Routing
import { routing } from "./app.routing";
// Components
import { AppComponent } from "./components/app/app.component"
import { RantsComponent } from "./components/rants/rants.component";
import { RantComponent } from "./components/rant/rant.component";
import { RantcardComponent } from "./components/rantcard/rant-card.component";
import { CommentcardComponent } from "./components/commentcard/comment-card.component";
import { ProfileComponent } from "./components/profile/profile.component";
// Pipes
import { TimestampDatePipe } from "./pipes/timestamp-date.pipe";
// Services
import { DevrantService } from "./services/devrant.service";

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    RantsComponent,
    RantComponent,
    RantcardComponent,
    CommentcardComponent,
    ProfileComponent,
    TimestampDatePipe
  ],
  providers: [
    DevrantService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }