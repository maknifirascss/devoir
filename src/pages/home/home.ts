import {Component, NgModule} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
@NgModule({
    providers: [
        Geolocation
    ]
})
export class HomePage {

    constructor(public navCtrl: NavController, private geolocation: Geolocation) {

    }


    search() {
        alert("ok");
        const subscription = this.geolocation.watchPosition()
        //   .filter((p) => p.coords !== undefined) //Filter Out Errors
            .subscribe(position => {
                alert(position.coords.longitude + ' ' + position.coords.latitude);
            });

// To stop notifications
        subscription.unsubscribe();
    }

    stop() {

    }
}
