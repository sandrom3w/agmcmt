import { NgModule, ErrorHandler} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { TextMaskModule } from 'angular2-text-mask';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthService} from '../providers/auth-service';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { CalendarPage } from '../pages/calendar/calendar';
import { StorePage } from '../pages/store/store';
import { ProfilePage } from '../pages/profile/profile';
import { ModalStore } from '../pages/modalstore/modalstore';
import { CalendarComponent } from "angular2-fullcalendar/src/calendar/calendar";
import { FullCalendarComponent } from '../components/full-calendar/full-calendar';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    SignupPage,
    CalendarPage,
    StorePage,
    ProfilePage,
    ModalStore,
    FullCalendarComponent,
    CalendarComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    TextMaskModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    SignupPage,
    CalendarPage,
    StorePage,
    ProfilePage,
    ModalStore,
    FullCalendarComponent,
    CalendarComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: AuthService, useClass: AuthService},
    Storage
  ]
})
export class AppModule {}
