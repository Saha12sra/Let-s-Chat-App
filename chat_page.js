//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC3IEYFQahfQXbwzx-CMjBWTHCpu7uix_Y",
      authDomain: "kwitter-20c6e.firebaseapp.com",
      databaseURL: "https://kwitter-20c6e-default-rtdb.firebaseio.com",
      projectId: "kwitter-20c6e",
      storageBucket: "kwitter-20c6e.appspot.com",
      messagingSenderId: "953794630334",
      appId: "1:953794630334:web:cfae28fe04df153b9444ef",
      measurementId: "G-J6B5PHQRS7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   // firebase.analytics();

   username=localStorage.getItem("username");
room_name=localStorage.getItem("roomname");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();



function send(){

      msg=document.getElementById("input_msg").value;
      firebase.database().ref(room_name).push({

            name: username,
            message: msg,
            like:0
      });

      document.getElementById("input_msg").value="";
}