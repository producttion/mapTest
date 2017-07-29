

 $(document).ready(function () {

  //mapArea  
  $('#mapArea').html("<div style='background-color:#bcfef1;width:100%;height:100%;'><div style='background-color:#ffffff;width:10%;height:100%;float:left;'><div style='background-color:#ffffff;width:100%;height:12%;'></div><div id='zone-A' class='zoomItem' style='background-color:#c0c0c0;width:40%;height:80%;float:right;'></div></div> <div style='background-color:#ffffff;width:100%;height:12%;'></div><div  class='zoomItem' style='background-color:#e29d36;width:100%;height:80%;bottom:0%;'><div style='background-color:#f381df;width:100%;height:90%;'><div style='background-color:#e6f381;width:100%;height:80%;'> <div style='background-color:#e28b2c;width:80%;height:100%;float:right;'><div style='background-color:#57e0e8;width:25%;height:100%;float:left;'><div id='zone-B' class='zoomItem' style='background-color:#c0c0c0;width:20%;height:100%;float:left;'></div><div class='zoomItem' style='background-color:#ffffff;width:100%;height:85%;'></div><div id='zone-C' class='zoomItem' style='background-color:#c0c0c0;width:100%;height:15%;'></div></div><div  class='zoomItem' style='background-color:#abf0f3;width:15%;height:100%;float:left;'><div style='background-color:#ffffff;width:100%;height:50%;'></div></div><div style='background-color:#073234;width:60%;height:100%;float:left;'><div style='background-color:#ffffff;width:100%;height:85%;'></div><div id='zone-D' class='zoomItem' style='background-color:#c0c0c0;width:100%;height:15%;bottom:0%;'></div></div></div><div class='zoomItem' style='background-color:#ffffff;width:10%;height:100%;float:left;'></div></div><div class='zoomItem' style='background-color:#ffffff;width:100%;height:20%;bottom:0%;'></div></div><div id='zone-E' class='zoomItem' style='background-color:#c0c0c0;width:100%;height:10%;bottom:0%;'></div><div class='zoomItem' style='background-color:#ffffff;width:100%;height:10%;bottom:0%;'></div></div>");

  var zoneA = $('#zone-A');
  var zoneB = $('#zone-B');
  var zoneC = $('#zone-C');
  var zoneD = $('#zone-D');
  var zoneE = $('#zone-E');

  var createButtonZA = 11;
  var createButtonZB = 19;
  var createButtonZC = 24;
  var createButtonZD = 38;
  var createButtonZE = 65;

  var buttonZoneA = 1;
  var buttonZoneB = 12;
  var buttonZoneC = 20;
  var buttonZoneD = 25;
  var buttonZoneE = 39;

  $(document).ready(function () {


    //  Zone A
    var endZoneA = setInterval(function () {
      
      if (buttonZoneA == createButtonZA) {
        clearInterval(endZoneA);
      }
      zoneA.append("<button class='cbtn' onClick='clickOn()' value=" + buttonZoneA + " class='zoomItem'  style='font-size:50%; width:100%;height:9%;'> "+'boundary' + buttonZoneA +"</button");
      var newListA = $('#zone-A');
      newListA.fadeIn();
      var colorEnd = setInterval(function () {
        newListA.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      buttonZoneA = buttonZoneA + 1;
      
    }, 0);


    // ZoneB
    var endZoneB = setInterval(function () {
      if (buttonZoneB == createButtonZB) {
        clearInterval(endZoneB);
      }
      zoneB.append("<button class='cbtn' onClick='clickOn()' type='button' value="+ buttonZoneB + " class='zoomItem'  style='font-size:50%; width:100%;height:12%;'>"+'boundary' + buttonZoneB +"</button>");
      var newListB = $('#zone-B');
      newListB.fadeIn();
      var colorEnd = setInterval(function () {
        newListB.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      buttonZoneB = buttonZoneB + 1;
    }, 0);

    // ZoneC
    var endZoneC = setInterval(function () {
      if (buttonZoneC == createButtonZC) {
        clearInterval(endZoneC);
      }
      zoneC.append("<button class='cbtn' onClick='clickOn()' type='button' value="+ buttonZoneC + " class='zoomItem'  style='font-size:50%; width:16%;height:100%;'>"+'boundary' + buttonZoneC +"</button>");
      var newListC = $('#zone-C');
      newListC.fadeIn();
      var colorEnd = setInterval(function () {
        newListC.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      buttonZoneC = buttonZoneC + 1;
    }, 0);

    // ZoneD
    var endZoneD = setInterval(function () {
      if (buttonZoneD == createButtonZD) {
        clearInterval(endZoneD);
      }
      zoneD.append("<button class='cbtn' onClick='clickOn()' type='button' value=" + buttonZoneD + " class='zoomItem'  style='font-size:50%; width:7%;height:100%;'>"+'boundary' + buttonZoneD +"</button>");
      var newListD = $('#zone-D');
      newListD.fadeIn();
      var colorEnd = setInterval(function () {
        newListD.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      buttonZoneD = buttonZoneD + 1;
    }, 0);

    // ZoneE
    var endZoneE = setInterval(function () {
      if (buttonZoneE == createButtonZE) {
        clearInterval(endZoneE);
      }
      zoneE.append("<button class='cbtn' onClick='clickOn()' type='button' value=" + buttonZoneE + " class='zoomItem'  style='font-size:50%; width:3.3%;height:100%;'>"+'boundary' + buttonZoneE +"</button>");
      var newListE = $('#zone-E');
      newListE.fadeIn();
      var colorEnd = setInterval(function () {
        newListE.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      buttonZoneE = buttonZoneE + 1;
    }, 0);

  });








});



