let time = document.getElementById("currenttime");
let d = new Date();
time.innerHTML = d.toLocaleTimeString();




    type="text/javascript">
    document.write("<h2>");
    var day = new Date();
    var hr = day.getHours();
    var min = day.getMinutes();
/* Customs */
    var workOne = "Khan"
    var workTwo = "HTML | JS | CSS "
    var workThree = "Computer Science Principles"
    var workFour = "Mathmatics"
    var nightStyle ="<style>body{background: fixed url('image/night.png') no-repeat;background-size:cover;}</style>"
    var dayStyle ="<style>body{background: fixed url('image/morning.png') no-repeat !important;background-size:cover!important;}</style>"

    var clockin = 12
    var clockout = 16

    if (clockin >= hr && clockout >= hr) {
    document.write("<style>body{background: fixed url('image/chip.png') no-repeat !important;background-size:cover!important;}</style>");
    }

/* Early Morning */
    
    if (hr == 5) {
     document.write(" 5AM You woke up early!");
    }
    if (hr == 6) {
     document.write(" 6AM Great star to the day!");
    }
    if (hr == 7) {
     document.write(" 7AM Good Morning!");
    }
    if (hr == 8) {
     document.write(" 8AM Good Mornin!");
    }
    if ((hr == 5) || (hr == 6) || (hr == 7) || (hr == 8)) {
        document.write(dayStyle);
       }

/* Morning */

    if (hr == 9 && min <= 30) {
     document.write(" 9AM: Time to start your work");
    } if (hr == 9 && min >= 30) {
     document.write("<img class=nowimg src='image/nkey.png'>");
     document.write(" 9:30am");
    }
    if (hr == 10 && min <= 30) {
     document.write("<img class=nowimg src='image/khanimg.png'>");
     document.write(" 10AM: Khan");
     document.write("<style> body{background:  #089b79;} </style>");
    } if (hr == 10 && min >= 30) {
     document.write("<img class=nowimg src='image/khanimg.png'>");
     document.write(" 10:30am: Khan");
     document.write("<style> body{background:  #089b79;} </style>");
    }
    if (hr == 11 && min <= 30) {
     document.write("<img class=nowimg src='image/tri2.png'>");
     document.write(" 11AM: " + workTwo);
     document.write("<style> h2,h1{color: black;}body{background-image: linear-gradient(90deg, #e9491d, #efdb50, #efdb50,#50ef6d);} </style>");
    } if (hr == 11 && min >= 30) {
     document.write("<img class=nowimg src='image/tri2.png'>");
     document.write(" 11:30AM: " + workTwo);
     document.write("<style> h2,h1{color: black;}body{background-image: linear-gradient(90deg, #e9491d, #efdb50, #efdb50,#50ef6d);} </style>");
    }
    if (hr == 12 && min <= 30) {
     document.write(" 12PM: Lunch Time!");
     document.write("<style>body{background: fixed url('image/hdlunch.png') no-repeat;background-size:cover;}</style>");
    } if (hr == 12 && min >= 30) {
     document.write(" 12:30PM: Break");
     document.write("<style> h2,h1{color: black;}body{background-image: linear-gradient(90deg, #e9491d, #efdb50, #efdb50,#50ef6d);} </style>");
       }

/* After Noon */

    if (hr == 13) {
     document.write(" 1PM: Back on the grind!");
    }
    if (hr == 14) {
     document.write(" 2PM: " + workThree);
    }
    if ((hr == 15)) {
     document.write(" 3PM: " + workFour);
    }
    if ((hr == 16)) {
     document.write("<style> h2,h1{color: black;}body{background-image: linear-gradient(90deg, #ff874f, #ff7636, #ff5100);} </style>");
     document.write(" 4PM: 💪 Exercise");
    }
    if ((hr == 17)) {
     document.write("<style> h2,h1{color: black;}body{background-image: linear-gradient(90deg, #ff874f, #ff7636, #ff5100);} </style>");
     document.write(" 5PM: TITLE");
    }

/* Evening */

    if ((hr == 18)) {
     document.write(" 6PM: Dinner Time :D");
    }
    if ((hr == 19) || (hr == 20) || (hr == 21)) {
     document.write(nightStyle);
     document.write(" Evening");
       }


/* Sleeping */

    if ((hr == 22) || (hr == 23) || (hr == 0) || (hr == 1) || (hr == 2) || (hr == 3) || (hr == 4)) {
     document.write("<style>body{background: fixed url('image/night.png') no-repeat !important;background-size:cover!important;}</style>");
     document.write(" Go to bed. It's late!");
    }

    document.write("</h2>");

    
/* Other Notes */
    type="text/javascript"> document.write("<h3>");  var day = new Date(); var hr = day.getHours();
    if ((hr == 12) || (hr == 15) || (hr == 9)) {
    document.write("•Remember to Smell Oils");}
    if ((hr == 1) || (hr == 2) || (hr == 3)) {
    document.write("E");}
    document.write("</h3>");