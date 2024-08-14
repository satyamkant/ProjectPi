import axios from 'axios';

const SubmitCode = async (code, language, input) => {
  // Create the JSON object
  const requestData = {
    "code": code,
    "language": language,
    "input": input
  };

  try {
      // Send POST request with the JSON body
      console.log(requestData);
    const response = await axios.post('http://localhost:8081/api/code/execute', requestData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Return the response data
    return response.data;
  } catch (error) {
    console.error('Error executing code:', error);
    return { output: '', error: error.message, executionTime: 0 };
  }
};

export default SubmitCode;