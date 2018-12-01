var inputElement = document.getElementById("input_data");
inputElement.addEventListener("change", readFile, false);

function readFile() {
  const file = this.files[0];
  var reader = new FileReader();
  reader.onload = onLoad
  reader.readAsText(file);
}

function onLoad(e) {
    const contents = e.target.result;
    const result = getResult(contents)
    document.getElementById('result').innerHTML = result
}

// main part of the exercise
function getResult(input, startValue = '0'){
    return eval(startValue + input.replace(/(\r\n\t|\n|\r\t)/gm,""))
}