var firebaseConfig = {
    apiKey: "AIzaSyCdifPaSfF9Rzu8cNWK0w5huKfmh5aXeZA",
    authDomain: "lets-chat-b23be.firebaseapp.com",
    databaseURL: "https://lets-chat-b23be-default-rtdb.firebaseio.com",
    projectId: "lets-chat-b23be",
    storageBucket: "lets-chat-b23be.appspot.com",
    messagingSenderId: "220070179151",
    appId: "1:220070179151:web:e3ea5160edd65db679d53a"
  };
  roomName= localStorage.getItem("roomName");
  username= localStorage.getItem("userName");
   firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    
} });  }); }
getData();
function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        name:username,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
}
function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location = "index.html";
}