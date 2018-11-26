import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/*import { AboutPage } from '../pages/about/about';*/
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SearchPage } from '../pages/search/search';
import { SearchplacePage } from '../pages/searchplace/searchplace';
import { CreatePage } from '../pages/create/create';
import { SavePage } from '../pages/save/save';
import { ProfilePage } from '../pages/profile/profile';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    /*AboutPage,*/
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    SearchPage,
    SearchplacePage,
    CreatePage,
    SavePage,
    ProfilePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    /*AboutPage,*/
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    SearchPage,
    SearchplacePage,
    CreatePage,
    SavePage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
