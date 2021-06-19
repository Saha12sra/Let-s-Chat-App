
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDGHfoKaZ2DA2HQfIldBB1geh33jAjb_G0",
      authDomain: "let-s-chat-app-f8b22.firebaseapp.com",
      databaseURL: "https://let-s-chat-app-f8b22-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-app-f8b22",
      storageBucket: "let-s-chat-app-f8b22.appspot.com",
      messagingSenderId: "1035228160772",
      appId: "1:1035228160772:web:93d19f8a21392f51e6a651",
      measurementId: "G-K8NKHNQSNB"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //firebase.analytics();//


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+ " onclick='redirect_to_room(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function add_room(){

      room_name=document.getElementById("addroom").value;
      firebase.database().ref("/").child(room_name).update({

            purpose: 'adding room name'
      });

      localStorage.setItem("roomname", room_name);
     window.location="chat_page.html";
}

function redirect_to_room(name){

      localStorage.setItem("roomname",name);
      window.location="chat_page.html";
}


