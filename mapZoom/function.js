



// Initialize Firebase
var config = {
  apiKey: "AIzaSyB6bQk1TDpCH3ylmFL3HHbqMjqMapiLZpU",
  authDomain: "test-c5a03.firebaseapp.com",
  databaseURL: "https://test-c5a03.firebaseio.com",
  projectId: "test-c5a03",
  storageBucket: "test-c5a03.appspot.com",
  messagingSenderId: "919585579120"
};
firebase.initializeApp(config);

var dbRef = firebase.database().ref()

function clickOn() {
  $('.cbtn').click(function () {
    var text = $(this).attr("value")

    dbRef.child(`users/data/${text}`)
      .set({
        test: text
      })
    alert(text);


  })
}

var getdbRef = firebase.database().ref(`users/data/10/test`);

var getValueRef = getdbRef.on('value', function (snapshot) {
  var snap = snapshot.val();
  var num0 = 0;
  console.log(snap)


  if (getdbRef == getdbRef) {
    if (snap >= 1) {
      $('.cbtn').css({ 'background-color': '#f44336' });
    } else {
      $('.cbtn').css({ 'background-color': '#' });
    }
  } else {
  }
})


    setInterval(function () {
    if (snap != null) {

      $('.cbtn').css({ 'background-color': '#f44336' });
    } else {

      $('.cbtn').css({ 'background-color': '#' });
    }
  })
