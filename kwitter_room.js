
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDMMFuIzv_XYXd3NN7NbllPb2WgzYit1PI",
  authDomain: "kwitter-project-6f185.firebaseapp.com",
  databaseURL: "https://kwitter-project-6f185-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-6f185",
  storageBucket: "kwitter-project-6f185.appspot.com",
  messagingSenderId: "898920194968",
  appId: "1:898920194968:web:1dfdc4e7ffe6ab4097c1ed"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
