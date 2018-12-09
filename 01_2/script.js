// main part of the exercise
function getResult(input, startValue = 0) {
  const sequences = [0];
  let balance = startValue;
  let isResult = true;
  let result = null;

  while (isResult) {
    for (let index = 0; index < input.length; index++) {
      const value = input[index];
      if (value) {
        balance += Number(value);
        if (sequences.includes(balance)) {
          isResult = false;
          result = balance;
          break;
        } else {
          sequences.push(balance);
        }
      }
    }
  }
  return result;
}

function onLoad(e) {
  const contents = e.target.result;

  const lines = contents.split('\n');
  window.lines = lines;

  const t0 = performance.now();

  const result = getResult(lines);

  const t1 = performance.now();
  console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);


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
