import React, { Component } from "react";
import PropTypes from "prop-types";

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
    const { dataPath } = this.props;
    const toText = r => r.text();
    const setDataState = data => {
      this.setState({ data });
    };

    fetch(dataPath)
      .then(toText)
      .then(setDataState);
  }

  _handleOnCLick = () => {
    const { data } = this.state;
    const { code } = this.props;
    const { result, performance } = getPerformance(code, data);
    this.setState({ result, performance });
  };

  render() {
    const { result, performance } = this.state;
    const { name, codeText, description } = this.props;

    return (
      <div>
        <h2>Exercise {name}</h2>
        <h3>Description:</h3>
        <p>{description}</p>
        <h3>Code:</h3>
        <SyntaxHighlighter language="javascript" style={coy}>
          {codeText}
        </SyntaxHighlighter>
        <br />
        <button onClick={this._handleOnCLick}>run</button>
        <h3>Results: {result}</h3>
        <h3>Performance: {performance} milliseconds</h3>
      </div>
    );
  }
}

Exercise.propTypes = {
  name: PropTypes.string,
  code: PropTypes.func,
  codeText: PropTypes.string,
  dataPath: PropTypes.string,
  description: PropTypes.string
};
