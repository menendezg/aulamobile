import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsDetailsPage } from './notificationsDetails';

@NgModule({
  declarations: [
    NotificationsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsDetailsPage),
  ],
})
export class NotificationsDetailsPageModule {}
