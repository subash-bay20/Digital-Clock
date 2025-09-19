let ampm = document.getElementById('ampm')
const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  const localhour = date.getHours();
  const localmin = date.getMinutes();
  const localSeconds = date.getSeconds();

  if (localhour >= 12) {
    ampm = "PM";
  } else{
    ampm = "AM";
  }

  document.getElementById("demo1").innerHTML = `${localhour}<br>Hours`;
  document.getElementById("demo2").innerHTML = `${localmin}<br>Minutes`;
  document.getElementById("demo3").innerHTML = `${localSeconds}<br>Second`;
  document.getElementById("ampm").innerHTML = `${ampm}`;
}

