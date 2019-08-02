import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

const Wrap = styled.div`
  padding: 50px;
  font-size: 40px;
  text-align: center;
`;

const Child = styled.div`
  color: blue;

  :before {
    padding-right: 10px;
    content: "\\00d7";
  }
`;

const Child2 = styled.div`
  color: blue;

  :before {
    padding-right: 10px;
    content: "\00d7";
  }
`;

function App() {
  return (
    <Wrap>
      <Child>This is blue</Child>
      <br />
      <Child2>This should be blue as well</Child2>
    </Wrap>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
