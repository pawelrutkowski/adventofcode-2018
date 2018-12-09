// main part of the exercise
function getResult(input, startValue = '0') {
  return eval(startValue + input.replace(/(\r\n\t|\n|\r\t)/gm, ''));
}

function onLoad(e) {
  const contents = e.target.result;
  const result = getResult(contents);
  document.getElementById('result').innerHTML = result;
}

function readFile() {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onload = onLoad;
  reader.readAsText(file);
}

const inputElement = document.getElementById('input_data');
inputElement.addEventListener('change', readFile, false);
