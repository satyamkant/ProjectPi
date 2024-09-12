import axios from 'axios';

const SubmitCode = async (code, language, input) => {
  // Create the JSON object
    const requestData = new FormData();
    requestData.append("code", code);
    requestData.append("language", language);
    requestData.append("input", input);

  try {
      // Send POST request with the JSON body
    console.log("sending code")
    const response = await axios.post('http://localhost:1020/api/code/execute', requestData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Return the response data
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error executing code:', error);
    return { output: '', error: error.message, executionTime: 0 };
  }
};

export default SubmitCode;

// export async function addRoomApiCall(photo, roomType, roomPrice) {
//   const formData = new FormData();
//   formData.append("photo", photo)
//   formData.append("roomType", roomType)
//   formData.append("roomPrice", roomPrice)
 
//   const response = await api.post("/rooms/add/new-room", formData, { headers: getHeaderMultipart() })
//   if (response.status === 201) {
//     return true;
//   } else {
//     return false
//   }
 
// }
