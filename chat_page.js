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
console.log(firebase_message_id);
console.log(message_data);
usersname=message_data['name'];
likes=message_data['like'];
message=message_data['message'];

name_with_tag="<h4>"+usersname+"<img src='tick.png' class='user_tick'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' onclick='update_likes(this.id)' value="+likes+ " id="+firebase_message_id+">";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+likes+"</span></button>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
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

function update_likes(message_id){

      likes=document.getElementById(message_id).value;
      updated_likes=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
      
      like: updated_likes
      });
      
      }
      
      function logout(){
      
            localStorage.removeItem("username");
            localStorage.removeItem("roomname");
            window.location="index.html";
            
      }
      
      