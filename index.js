// DAY 3
// Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button
// Write code to get 1st H1 element from a webpage using DOM
// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
// Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
// Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

    // const button = document.getElementById('heading');
    // const container = document.getElementById('container');
    //  button.addEventListener('click', () => {
     
    //   const heading = document.createElement('h1');
     
    //   heading.textContent = 'Mern stack';
      
    //   container.insertBefore(heading, button);
    // });


    //...........................................................2.............................................................

// const firstH1 = document.querySelector('h1');

// if (firstH1) {
//     console.log('First <h1> text:', firstH1.textContent);
// } else {
//     console.log('No element found on this page.');
// }


//.......................................3........................................................

function times(){
    let clock = new Date();
    let hours = clock.getHours();
    let mins = clock.getMinutes();
    let sec = clock.getSeconds();
    let time = hours + ":" + mins + ":" + sec;
    document.getElementsByTagName("h2")[0].innerText = time;
    setTimeout(times, 1000);
}

//.........................................4................................................
function contentChange(){
    let content = document.getElementsByTagName("div");
    content[0].innerText = "Welcome to Elevation academy";
}

//.....................................5........................................
// function hideText(){
//     let doc = document.getElementsByTagName("div2");
//     doc[1].innerText = "";
// }





function myFunction() {
    var x = document.getElementById("text");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }