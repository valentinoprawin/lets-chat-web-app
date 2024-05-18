//YOUR FIREBASE LINKS
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
function send ()
{
msg = document.getElementById("msg").value;
firebase.databas().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});

document.getElementById("msg").value = "";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>"+ message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+"vlaue="+"onclick='updateLike(this.id)'>";
span_with_tag = "<span class'glyphicon glyphicon-thumbs-up>Like:"+"</span></button><hr>";

row = name_with_tag +message_data+ like_button + span_with_tag;
document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();
function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      like = document.getElementById(button_id).value;
      updateed_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).chid(message_id).update({
            like : updated_likes
      });
}