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
        Geolocation,Diagnostic
    ]
})
export class HomePage {
    Latitude:number;
    Longitude:number;
    subscription:any=null;
    constructor(public navCtrl: NavController,private diagnostic: Diagnostic, private geolocation: Geolocation) {

    }


    search() {
    if(this.subscription!==null){
    alert("prob");
    this.subscription.unsubscribe();
this.subscription=null;
    }else{
        alert("ok");
        try {
            this.diagnostic.isLocationEnabled().then(
                (isAvailable) => {
                    if (!isAvailable) {
                        alert("0");
                    } else {
                        alert("1");

                        this.subscription = this.geolocation.watchPosition()
                        //   .filter((p) => p.coords !== undefined) //Filter Out Errors
                            .subscribe(position => {
                                alert(position.coords.longitude + ' ' + position.coords.latitude);
                            });

// To stop notifications
                    
                    }  }).catch((e) => {
                alert(e);
            });
        } catch (e) {

        }
        }
    }

    stop() {
    alert('no');

this.subscription.unsubscribe();
this.subscription=null;

       /* var watchID = navigator.geolocation.watchPosition(this.onSuccess, this.onError, { enableHighAccuracy: true });


      

        navigator.geolocation.clearWatch(watchID);
        */
    }

       onSuccess (position) {


            alert(position.coords.longitude + ' ' + position.coords.latitude);

        };

      onError (error) {
            console.log('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        };
}
