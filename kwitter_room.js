// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD3D6IWk64MW7KRAZVMaM1UJkIgzTfRM24",
      authDomain: "kwitter-c74c4.firebaseapp.com",
      databaseURL: "https://kwitter-c74c4-default-rtdb.firebaseio.com",
      projectId: "kwitter-c74c4",
      storageBucket: "kwitter-c74c4.appspot.com",
      messagingSenderId: "605452902002",
      appId: "1:605452902002:web:c6f64aff3a661482b4eceb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();