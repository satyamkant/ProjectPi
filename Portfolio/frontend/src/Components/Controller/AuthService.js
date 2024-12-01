
import axios from 'axios'

const API_BASE_URL = 'https://blogsecurity.satyampi.uk'; // Replace with your backend URL

// Configure Axios instance
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, // Include cookies for requests
    headers: {
        'Content-Type': 'application/json',
    },
});

const AuthService = {
     LoginService : async (email, password) => {
        // Create the JSON object
        const requestData = {
            email: email,
            passwordHash: password
        };

        try {
            // Send POST request with the JSON body
            console.log("login request");
            const response = await axiosInstance.post("/security/login",requestData, {
            });

            // Return the response data
            return response.data;
        } catch (error) {
            console.error('Error executing code:', error);
            return { output: '', error: error.message, executionTime: 0 };
        }
    },

    AdminTestService : async () => {
        try {
            // Send POST request with the JSON body
            console.log("AdminTestService called");
            const response = await axiosInstance.get("/security/admin", {
            });

            // Return the response data
            return response.data;
        } catch (error) {
            console.error('Error executing code:', error);
            return { output: '', error: error.message, executionTime: 0 };
        }
    }

}

export default AuthService;