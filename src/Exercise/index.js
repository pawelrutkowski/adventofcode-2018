import React, { Component } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/styles/prism";

const getPerformance = (func, data) => {
  const t0 = performance.now();
  const result = func(data);
  const t1 = performance.now();

  return {
    result,
    performance: t1 - t0
  };
};

export class Exercise extends Component {
  state = {
    data: null,
    result: "-",
    performance: "-"
  };

  componentDidMount() {
    const toText = r => r.text();
    const setDataState = data => {
      this.setState({ data });
    };

    fetch(this.props.dataPath)
      .then(toText)
      .then(setDataState);
  }

  _handleOnCLick = () => {
    const { data } = this.state;
    const { result, performance } = getPerformance(this.props.code, data);
    this.setState({ result, performance });
  };

  render() {
    const { result, performance } = this.state;

    return (
      <div>
        <p>Exercise {this.props.name}</p>
        <p>Code:</p>
        <SyntaxHighlighter language="javascript" style={coy}>
          {this.props.code.toString()}
        </SyntaxHighlighter>
        <br />
        <button onClick={this._handleOnCLick}>run</button>
        <p>Results: {result}</p>
        <p>Performance: {performance} milliseconds</p>
      </div>
    );
  }
}
