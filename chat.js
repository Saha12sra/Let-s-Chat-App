function add_user(){
get_item=document.getElementById("username").value;
    localStorage.setItem("username",get_item);
    window.location="kwitter_room.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyDGHfoKaZ2DA2HQfIldBB1geh33jAjb_G0",
    authDomain: "let-s-chat-app-f8b22.firebaseapp.com",
    projectId: "let-s-chat-app-f8b22",
    storageBucket: "let-s-chat-app-f8b22.appspot.com",
    messagingSenderId: "1035228160772",
    appId: "1:1035228160772:web:93d19f8a21392f51e6a651",
    measurementId: "G-K8NKHNQSNB"
  };
  // Initialize Firebase //
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

