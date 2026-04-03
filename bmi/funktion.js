function obliczBMI() {
  let waga = document.getElementById("waga").value;
  let wzrost = document.getElementById("wzrost").value;
  let strzalka = document.getElementById("strzala");

  wzrost = wzrost / 100;

  let bmi = waga / (wzrost * wzrost);

  document.getElementById("wynik").innerText = bmi.toFixed(1);

  if (bmi <= 15) {
  strzalka.style.transform = "rotate(-210deg)";
  }
  else if (bmi <= 17.4) {
    strzalka.style.transform = "rotate(-180deg)";
  }
  else if (bmi <= 18.5) {
    strzalka.style.transform = "rotate(-135deg)";
  }
  else if (bmi <= 24.9) {
    strzalka.style.transform = "rotate(-100deg)";
  }
  else if (bmi <= 29.9) {
    strzalka.style.transform = "rotate(-80deg)";
  }
  else if (bmi <= 34.9) {
    strzalka.style.transform = "rotate(-45deg)";
  }
  else if (bmi <= 39.9) {
    strzalka.style.transform = "rotate(-10deg)";
  }
  else {
    strzalka.style.transform = "rotate(20deg)";
  }

  let img = document.getElementById("obrazBMI");

  if (bmi <= 15) {
    img.src = "wyglodzony.png";
  }
  else if (bmi >= 15.1 && bmi <= 17.4) {
    img.src = "wychudzony.png";
  }
  else if (bmi >= 17.5 && bmi <= 18.4) {
    img.src = "niedowaga.png";
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    img.src = "normal.png";
  }
  else if (bmi >= 25 && bmi <= 29.9) {
    img.src = "nadwaga.png";
  }
  else if (bmi >= 30 && bmi <= 34.9) {
    img.src = "1st.png";
  }
  else if (bmi >= 35 && bmi <= 39.9) {
    img.src = "2stop.png";
  }
  else if(bmi >= 40) {
    img.src = "obese.png";
  }
}