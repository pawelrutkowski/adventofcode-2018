import React from "react";
import Day from "../Day";

const part01 = input1 => {
  const input = input1.split("\n");

  const line = input.split(' ')
  const b = line.map(item => {
    const line = item.split(" ")
    const x1 = line[2].substr(0, 1)
    const x2 = line[2].substr(2, 1)
    const y1 = line[3].substr(0, 1)
    const y2 = line[3].substr(2, 1)
    return { x1, x2, y1, y2 }
  })

};

const part02 = input1 => {
};

const props = {
  day: "02",
  exercises: [
    {
      name: "01",
      description: `
      `,
      dataPath: "./data/data03.txt",
      code: part01,
      codeText: `
`
    },
    {
      name: "02",
      description: ``,
      dataPath: "./data/data03.txt",
      code: part02,
      codeText: `

`
    }
  ]
};

const Day02 = () => <Day {...props} />;

export default Day02;
