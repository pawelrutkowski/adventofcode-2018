// main part of the exercise
function getResult(input) {
  const arrayOfValues = input.map((value) => {
    const object = {};
    for (let index = 0; index < value.length; index++) {
      const character = value[index];
      if (object[character] === undefined) {
        object[character] = 1;
      } else {
        object[character] += 1;
      }
    }
    return object;
  });
  const a = arrayOfValues.map(element => [...new Set(Object.values(element))]);
  const test = {};
  const b = a.reduce((prev, next) => {
    const tmp = prev;
    next.forEach((element) => {
      if (tmp[`test${element}`] === undefined) {
        tmp[`test${element}`] = 1;
      } else {
        tmp[`test${element}`] += 1;
      }
    });
    return test;
  }, test);
  delete b.test1;
  const checksum = Object.values(b).reduce((prev, next) => prev * next, 1);
  return checksum;
}

function check(element1, element2) {
  const e1 = element1.split('');
  const e2 = element2.split('');
  let count = 0;
  for (let index = 0; index < e1.length; index++) {
    if (e1[index] !== e2[index]) {
      count += 1;
    }
  }
  return {
    count, e1, e2,
  };
}

function withoutDiff(e1, e2) {
  const result = [];
  const diff = [];
  for (let index = 0; index < e1.length; index++) {
    if (e1[index] === e2[index]) {
      result.push(e1[index]);
    } else {
      diff.push(e1[index]);
    }
  }
  return { result, diff };
}


function getResultPart2(input) {
  for (let index1 = 0; index1 < input.length - 1; index1++) {
    const element1 = input[index1];
    for (let index2 = index1 + 1; index2 < input.length; index2++) {
      const element2 = input[index2];
      const {
        count, e1, e2,
      } = check(element1, element2);
      if (count <= 1) {
        const { result } = withoutDiff(e1, e2);
        return result.join('');
      }
    }
  }
}

function onLoad(e) {
  const contents = e.target.result;
  const lines = contents.split('\n');
  window.lines = lines;

  const t0 = performance.now();
  const result = getResult(lines);
  const t1 = performance.now();
  console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

  const t2 = performance.now();
  const result2 = getResultPart2(lines);
  const t3 = performance.now();
  console.log(`Call to doSomething took ${t3 - t2} milliseconds.`);

  document.getElementById('result').innerHTML = result;
  document.getElementById('result2').innerHTML = result2;
}

function readFile() {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onload = onLoad;
  reader.readAsText(file);
}

const inputElement = document.getElementById('input_data');
inputElement.addEventListener('change', readFile, false);
