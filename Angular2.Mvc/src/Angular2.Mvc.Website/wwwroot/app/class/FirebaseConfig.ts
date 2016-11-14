export module FirebaseConfig {

    var config: any;

    export function Get() {
        config = {
            apiKey: "AIzaSyCZzDE0KS0jj4WIW424-92w86lerFaLiKU",
            authDomain: "fir-e1a22.firebaseapp.com",
            databaseURL: "https://fir-e1a22.firebaseio.com",
            storageBucket: "fir-e1a22.appspot.com",
            messagingSenderId: "499014936125"
        };

        return config;
    }
}