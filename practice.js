
//ADD YOUR FIREBASE LINKS
 var firebaseConfig = {
    apiKey: "AIzaSyCv2mTtCEbB-1claF_qZ0z9eI1CWUANdP8",
    authDomain: "kwitter-28de8.firebaseapp.com",
    databaseURL: "https://kwitter-28de8-default-rtdb.firebaseio.com",
    projectId: "kwitter-28de8",
    storageBucket: "kwitter-28de8.appspot.com",
    messagingSenderId: "510347155750",
    appId: "1:510347155750:web:44a07906d4a81fd5d849e7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function adduser(){
      user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose:"adding user"  
    });

  }