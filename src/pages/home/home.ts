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
    Latitude:number;
    Longitude:number;
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
        var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });


        var onSuccess = function (position) {


            alert(position.coords.longitude + ' ' + position.coords.latitude);

        };

     var    onError =function(error) {
            console.log('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        };

        navigator.geolocation.clearWatch(watchID);
    }
}
