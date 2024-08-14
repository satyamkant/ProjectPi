import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import "../css/OnlineCompiler.css";

const OnlineCompiler = () => {
  const [code, setCode] = useState("// Write your code here...");
  const [input, setInput] = useState([""]);
  const [output, setOutput] = useState("");

  const handleRun = () => {
    // Logic for running the code goes here
    setOutput("Sample Output");
  };

  const handleSubmit = () => {
    // Logic for submitting the code goes here
    alert("Code submitted!");
  };

  const handleInputChange = (index, value) => {
    const newInput = [...input];
    newInput[index] = value;
    setInput(newInput);
  };

  const addTestCase = () => {
    setInput([...input, ""]);
  };

  return (
    <div className="compiler-container">
      <div className="editor-container">
        <Editor
          height="40vh"
          defaultLanguage="cpp"
          defaultValue={code}
          theme="vs-dark"
          onChange={(value) => setCode(value)}
        />
      </div>
      <div className="testcase-container">
        <div className="testcase-header">
          <div className="testcase-title">Testcase</div>
          <div className="add-testcase" onClick={addTestCase}>
            +
          </div>
        </div>
        {input.map((inp, index) => (
          <div key={index} className="testcase-input">
            <label>Case {index + 1}</label>
            <textarea
              value={inp}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder="Enter input here..."
            />
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleRun}>Run</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="output-container">
        <label>Output</label>
        <textarea value={output} readOnly />
      </div>
    </div>
  );
};

export default OnlineCompiler;