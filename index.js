function getAllValues() {
  const inputHorraireBrut = document.getElementById("h-brut").value;
  const inputMensuelBrut = document.getElementById("m-brut").value;
  const inputAnnuelBrut = document.getElementById("a-brut").value;
  const inputHorraireNet = document.getElementById("h-net").value;
  const inputMensuelNet = document.getElementById("m-net").value;
  let inputAnnuelNet = document.getElementById("a-net").value;

  if (inputHorraireBrut !== "") {
    getValuesByHorraireBrut();
  } else if (inputMensuelBrut !== "") {
    getValuesByMensuelBrut();
  } else if (inputAnnuelBrut !== "") {
    getValuesByAnnuelBrut();
  } else if (inputHorraireNet !== "") {
    getValuesByHorraireNet();
  } else if (inputMensuelNet !== "") {
    getValuesByMensuelNet();
  } else if (inputAnnuelNet !== "") {
    getValuesByAnnuelNet();
  }
}

function clearAllValues() {
  const inputHorraireBrut = (document.getElementById("h-brut").value = "");
  const inputMensuelBrut = (document.getElementById("m-brut").value = "");
  const inputAnnuelBrut = (document.getElementById("a-brut").value = "");
  const inputHorraireNet = (document.getElementById("h-net").value = "");
  const inputMensuelNet = (document.getElementById("m-net").value = "");
  const inputAnnuelNet = (document.getElementById("a-net").value = "");
}

function getValuesByHorraireBrut() {
  const inputHorraireBrut = document.getElementById("h-brut").value;
  const inputMensuelBrut = (document.getElementById("m-brut").value = (
    inputHorraireBrut * 151
  ).toFixed(2));
  const inputAnnuelBrut = (document.getElementById("a-brut").value = (
    inputHorraireBrut * 1820
  ).toFixed(2));
  const inputHorraireNet = (document.getElementById("h-net").value = (
    inputHorraireBrut - brutToNet(inputHorraireBrut)
  ).toFixed(2));
  const inputMensuelNet = (document.getElementById("m-net").value = (
    inputMensuelBrut - brutToNet(inputMensuelBrut)
  ).toFixed(2));
  const inputAnnuelNet = (document.getElementById("a-net").value = (
    inputAnnuelBrut - brutToNet(inputAnnuelBrut)
  ).toFixed(2));
}

function getValuesByMensuelBrut() {
  const inputMensuelBrut = document.getElementById("m-brut").value;
  const inputHorraireBrut = (document.getElementById("h-brut").value = (
    inputMensuelBrut / 151
  ).toFixed(2));
  const inputAnnuelBrut = (document.getElementById("a-brut").value = (
    inputHorraireBrut * 1820
  ).toFixed(2));
  const inputHorraireNet = (document.getElementById("h-net").value = (
    inputHorraireBrut - brutToNet(inputHorraireBrut)
  ).toFixed(2));
  const inputMensuelNet = (document.getElementById("m-net").value = (
    inputMensuelBrut - brutToNet(inputMensuelBrut)
  ).toFixed(2));
  const inputAnnuelNet = (document.getElementById("a-net").value = (
    inputAnnuelBrut - brutToNet(inputAnnuelBrut)
  ).toFixed(2));
}

function getValuesByAnnuelBrut() {
  const inputAnnuelBrut = document.getElementById("a-brut").value;
  const inputHorraireBrut = (document.getElementById("h-brut").value = (
    inputAnnuelBrut / 1820
  ).toFixed(2));
  const inputMensuelBrut = (document.getElementById("m-brut").value = (
    inputHorraireBrut * 151
  ).toFixed(2));
  const inputHorraireNet = (document.getElementById("h-net").value = (
    inputHorraireBrut - brutToNet(inputHorraireBrut)
  ).toFixed(2));
  const inputMensuelNet = (document.getElementById("m-net").value = (
    inputMensuelBrut - brutToNet(inputMensuelBrut)
  ).toFixed(2));
  const inputAnnuelNet = (document.getElementById("a-net").value = (
    inputAnnuelBrut - brutToNet(inputAnnuelBrut)
  ).toFixed(2));
}

function getValuesByHorraireNet() {
  const inputHorraireNet = document.getElementById("h-net").value;
  const inputMensuelNet = (document.getElementById("m-net").value = (
    inputHorraireNet * 151
  ).toFixed(2));
  const inputAnnuelNet = (document.getElementById("a-net").value = (
    inputHorraireNet * 1820
  ).toFixed(2));
  const inputHorraireBrut = (document.getElementById("h-brut").value =
    netToBrut(inputHorraireNet).toFixed(2));
  const inputMensuelBrut = (document.getElementById("m-brut").value =
    netToBrut(inputMensuelNet).toFixed(2));
  const inputAnnuelBrut = (document.getElementById("a-brut").value =
    netToBrut(inputAnnuelNet).toFixed(2));
}

function getValuesByMensuelNet() {
  const inputMensuelNet = document.getElementById("m-net").value;
  const inputHorraireNet = (document.getElementById("h-net").value = (
    inputMensuelNet / 151
  ).toFixed(2));
  const inputAnnuelNet = (document.getElementById("a-net").value = (
    inputHorraireNet * 1820
  ).toFixed(2));
  const inputHorraireBrut = (document.getElementById("h-brut").value =
    netToBrut(inputHorraireNet).toFixed(2));
  const inputMensuelBrut = (document.getElementById("m-brut").value =
    netToBrut(inputMensuelNet).toFixed(2));
  const inputAnnuelBrut = (document.getElementById("a-brut").value =
    netToBrut(inputAnnuelNet).toFixed(2));
}

function getValuesByAnnuelNet() {
  const inputAnnuelNet = document.getElementById("a-net").value;
  const inputHorraireNet = (document.getElementById("h-net").value = (
    inputAnnuelNet / 1820
  ).toFixed(2));
  const inputMensuelNet = (document.getElementById("m-net").value = (
    inputHorraireNet * 151
  ).toFixed(2));
  const inputHorraireBrut = (document.getElementById("h-brut").value =
    netToBrut(inputHorraireNet).toFixed(2));
  const inputMensuelBrut = (document.getElementById("m-brut").value =
    netToBrut(inputMensuelNet).toFixed(2));
  const inputAnnuelBrut = (document.getElementById("a-brut").value =
    netToBrut(inputAnnuelNet).toFixed(2));
}

function brutToNet(amount) {
  return (amount * 23) / 100;
}

function netToBrut(amount) {
  return amount / (1 - 0.23);
}
