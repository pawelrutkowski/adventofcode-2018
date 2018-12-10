const countCharacters = (value) => {
  const object = {};
  for (let index = 0; index < value.length; index++) {
    const character = value[index];
    if (object[character] === undefined) {
      object[character] = 1;
    } else {
      object[character] += 1;
    }
  }
  return [...new Set(Object.values(object))];
};

const multiply = (prev, next) => prev * next;

const getResultPart1 = (input) => {
  const countedCharacters = input.map(countCharacters);
  const test = {};
  const sumOfCounters = (prev, next) => {
    const tmp = prev;
    next.forEach((element) => {
      const asdasdasd = `test${element}`;
      if (tmp[asdasdasd] === undefined) {
        tmp[asdasdasd] = 1;
      } else {
        tmp[asdasdasd] += 1;
      }
    });
    return test;
  };
  const result = countedCharacters.reduce(sumOfCounters, test);

  delete result.test1;

  return Object.values(result).reduce(multiply, 1);
};

const countDiff = (element1, element2) => {
  const e1 = element1.split('');
  const e2 = element2.split('');
  let count = 0;
  for (let index = 0; index < e1.length; index++) {
    if (e1[index] !== e2[index]) {
      count += 1;
      if (count > 2) {
        return { count: 2 };
      }
    }
  }
  return { count, e1, e2 };
};

const removeDiff = (e1, e2) => {
  const result = [];
  for (let index = 0; index < e1.length; index++) {
    if (e1[index] === e2[index]) {
      result.push(e1[index]);
    }
  }
  return result;
};


const getResultPart2 = (input) => {
  const inputLength = input.length;
  for (let index1 = 0; index1 < inputLength - 1; index1++) {
    const element1 = input[index1];
    for (let index2 = index1 + 1; index2 < inputLength; index2++) {
      const element2 = input[index2];
      const { count, e1, e2 } = countDiff(element1, element2);
      if (count < 2) {
        return removeDiff(e1, e2).join('');
      }
    }
  }
  return null;
};

const getPerformance = (func, data) => {
  const t0 = performance.now();
  const result = func(data);
  const t1 = performance.now();

  return `Result: ${result} ,Call took ${t1 - t0} milliseconds.`;
};

function onLoad(e) {
  const lines = e.target.result.split('\n');

  document.getElementById('result').innerHTML = getPerformance(getResultPart1, lines);
  document.getElementById('result2').innerHTML = getPerformance(getResultPart2, lines);
}

function readFile() {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onload = onLoad;
  reader.readAsText(file);
}

const inputElement = document.getElementById('input_data');
inputElement.addEventListener('change', readFile, false);
