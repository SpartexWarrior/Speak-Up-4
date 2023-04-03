const firebaseConfig = {
    apiKey: "AIzaSyBkC2nSPgRlIBCNCnPVsiQZsTmSzXZW6u8",
    authDomain: "speak-up-d0721.firebaseapp.com",
    databaseURL: "https://speak-up-d0721-default-rtdb.firebaseio.com",
    projectId: "speak-up-d0721",
    storageBucket: "speak-up-d0721.appspot.com",
    messagingSenderId: "1017200203075",
    appId: "1:1017200203075:web:ed0892a52afc6ab2f80bf6",
    measurementId: "G-86Z7NS1E6L"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

room_name = localStorage.getItem("Roomname");
user_name = localStorage.getItem("Username");

console.log("room name "+room_name);
console.log("user name "+user_name);

function logout() {
      localStorage.removeItem("Roomname");
      localStorage.removeItem("Username");
      window.location.replace("index.html");
}
function send() {
      msg = document.getElementById("msg").value;
      console.log("Message "+msg);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
            dislike:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
  
//End code
  } });  }); }
getData();
