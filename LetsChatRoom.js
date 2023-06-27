var firebaseConfig = {
  apiKey: "AIzaSyCdifPaSfF9Rzu8cNWK0w5huKfmh5aXeZA",
  authDomain: "lets-chat-b23be.firebaseapp.com",
  databaseURL: "https://lets-chat-b23be-default-rtdb.firebaseio.com",
  projectId: "lets-chat-b23be",
  storageBucket: "lets-chat-b23be.appspot.com",
  messagingSenderId: "220070179151",
  appId: "1:220070179151:web:e3ea5160edd65db679d53a"
};
     firebase.initializeApp(firebaseConfig);
     var username = localStorage.getItem("userName");
     document.getElementById("username").innerHTML = "Welcome " + username;
     function addRoom() {
      roomName=document.getElementById("roomName").value;
          firebase.database().ref("/").child(roomName).update({
        purpose:"adding room"
    });
    localStorage.setItem("roomName", roomName);
    window.location="LetsChatPage.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      roomNames = childKey;
      //console.log("Room Name -" + roomNames);
      row = "<div class='room_name' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name) {
      console.log("Inside Redirect " + name);
      localStorage.setItem("roomName", name);
      window.location = "LetsChatPage.html";
}
function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location="index.html";
}