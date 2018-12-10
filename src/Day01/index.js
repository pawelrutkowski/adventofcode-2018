import React from "react";
import Day from "../Day";

const part01 = (input, startValue = "0") => {
  const regex = /(\r\n\t|\n|\r\t)/gm;
  const emptyValue = "";

  return eval(startValue + input.replace(regex, emptyValue));
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
      dataPath: "/data/data01.txt",
      code: part01
    },
    {
      name: "02",
      dataPath: "/data/data01.txt",
      code: part02
    }
  ]
};

const Day01 = () => <Day {...props} />;

export default Day01;
