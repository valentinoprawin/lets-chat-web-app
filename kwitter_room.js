const firebaseConfig = {
      apiKey: "AIzaSyDJBRLKJkMcprW9RgZeGCCaaaCCrB2LmpU",
      authDomain: "kwitter-c225a.firebaseapp.com",
      databaseURL: "https://kwitter-c225a-default-rtdb.firebaseio.com",
      projectId: "kwitter-c225a",
      storageBucket: "kwitter-c225a.appspot.com",
      messagingSenderId: "509695630712",
      appId: "1:509695630712:web:46ed53d8023f03bc1dbc8d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="WELCOME "+user_name;
  function addRoom()
  {
      room_name = document.getElementById("room_name") .value;

      firebase.databace().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
       window.location = "kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
Window.location = "kwitter.html";
}
