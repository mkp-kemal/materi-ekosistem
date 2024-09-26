function ExecuteScript(strId) {
  switch (strId) {
    case "63fY8M5FlHE":
      Script1();
      break;
    case "6NOgXuZ4dsQ":
      Script2();
      break;
    case "6ocBLChe0EV":
      Script3();
      break;
    case "69PZwi70Tts":
      Script4();
      break;
    case "6nhjKNmlGac":
      Script5();
      break;
    case "6osUMa9QqpC":
      Script6();
      break;
    case "5X8S8FzI11l":
      Script7();
      break;
    case "670sTYcxJoI":
      Script8();
      break;
    case "62j86p6iK1u":
      Script9();
      break;
    case "5fzcO93pwjF":
      Script10();
      break;
    case "65qFIOH0WKU":
      Script11();
      break;
    case "6BtrOwqrbRa":
      Script12();
      break;
  }
}

function getAudioElement() {
  return document.getElementById('bgSong');
}

function Script1() {
  var audio = getAudioElement();
  audio.src = "musik.mp3";
  audio.load();
  audio.play();
}

function Script2() {
  var audio = getAudioElement();
  audio.volume = 0.0;
}

function Script3() {
  var audio = getAudioElement();
  audio.volume = 0.1;
}

function Script4() {
  var audio = getAudioElement();
  audio.volume = 0.2;
}

function Script5() {
  var audio = getAudioElement();
  audio.volume = 0.3;
}

function Script6() {
  var audio = getAudioElement();
  audio.volume = 0.4;
}

function Script7() {
  var audio = getAudioElement();
  audio.volume = 0.5;
}

function Script8() {
  var audio = getAudioElement();
  audio.volume = 0.6;
}

function Script9() {
  var audio = getAudioElement();
  audio.volume = 0.7;
}

function Script10() {
  var audio = getAudioElement();
  audio.volume = 0.8;
}

function Script11() {
  var audio = getAudioElement();
  audio.volume = 0.9;
}

function Script12() {
  var audio = getAudioElement();
  audio.volume = 1.0;
}
