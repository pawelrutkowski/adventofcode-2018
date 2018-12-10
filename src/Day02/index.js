import React from "react";
import Day from "../Day";

const part01 = input1 => {
  const countCharacters = value => {
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

  const input = input1.split("\n");

  const countedCharacters = input.map(countCharacters);
  const test = {};
  const sumOfCounters = (prev, next) => {
    const tmp = prev;
    next.forEach(element => {
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

const part02 = input1 => {
  const countDiff = (element1, element2) => {
    const e1 = element1.split("");
    const e2 = element2.split("");
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

  const input = input1.split("\n");

  const inputLength = input.length;
  for (let index1 = 0; index1 < inputLength - 1; index1++) {
    const element1 = input[index1];
    for (let index2 = index1 + 1; index2 < inputLength; index2++) {
      const element2 = input[index2];
      const { count, e1, e2 } = countDiff(element1, element2);
      if (count < 2) {
        return removeDiff(e1, e2).join("");
      }
    }
  }
  return null;
};

const props = {
  day: "02",
  exercises: [
    {
      name: "01",
      dataPath: "/data/data02.txt",
      code: part01
    },
    {
      name: "02",
      dataPath: "/data/data02.txt",
      code: part02
    }
  ]
};

const Day02 = () => <Day {...props} />;

export default Day02;
