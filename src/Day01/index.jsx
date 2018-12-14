import React from "react";
import Day from "../Day";

const part01 = (input, startValue = 0) => {
  const regex = /\n/gm;
  const sum = (prev, element) => prev + Number(element);

  return input.split(regex).reduce(sum, startValue);
};

const part02 = (input1, startValue = 0) => {
  const input = input1.split("\n");
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
};

const props = {
  day: "01",
  exercises: [
    {
      name: "01",
      description: 'Sum all values from input file',
      dataPath: "./data/data01.txt",
      code: part01,
      codeText: `
const part01 = (input, startValue = 0) => {
  const regex = /\\n/gm;
  const sum = (prev, element) => prev + Number(element);

  return input.split(regex).reduce(sum, startValue);
};
`
    },
    {
      name: "02",
      description: 'Sum the numbers from input until you find a result that occurred twice. If you do not find such a result, continue adding from the beginning of the input data',
      dataPath: "./data/data01.txt",
      code: part02,
      codeText: `
const part02 = (input1, startValue = 0) => {
  const input = input1.split("\\n");
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
};
`
    }
  ]
};

const Day01 = () => <Day {...props} />;

export default Day01;
