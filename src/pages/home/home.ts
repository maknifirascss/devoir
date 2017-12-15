import {Component, NgModule} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import {Diagnostic} from '@ionic-native/diagnostic';
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

    constructor(public navCtrl: NavController,private diagnostic: Diagnostic, private geolocation: Geolocation) {

    }


    search() {
        alert("ok");
        try {
            this.diagnostic.isLocationEnabled().then(
                (isAvailable) => {
                    if (!isAvailable) {
                        alert("0)")
                    } else {

                        const subscription = this.geolocation.watchPosition()
                        //   .filter((p) => p.coords !== undefined) //Filter Out Errors
                            .subscribe(position => {
                                alert(position.coords.longitude + ' ' + position.coords.latitude);
                            });

// To stop notifications
                        subscription.unsubscribe();
                    }  }).catch((e) => {
                alert(e);
            });
        } catch (e) {

        }
    }

    stop() {

    }
}
