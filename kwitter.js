function add_user(){
get_item=document.getElementById("username").value;
    localStorage.setItem("username",get_item);
    window.location="kwitter_room.html";
}