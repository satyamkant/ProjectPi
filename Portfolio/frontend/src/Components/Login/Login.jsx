import AuthService from "../Controller/AuthService";
import {useState} from "react";


function Login({onLoginSuccess}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await AuthService.LoginService(email, password);

        onLoginSuccess(response);
        if(response.status === 200){
            // Programmatically trigger the "Close" button click
            const closeButton = document.querySelector('[data-bs-dismiss="modal"]');
            if (closeButton) {
                closeButton.click();
            }
        }
    };



    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
             aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h1 className="fw-bold mb-0 fs-2">Sign up for free</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body p-5 pt-0">
                        <form className="">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control rounded-3" id="floatingInput"
                                       placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control rounded-3" id="floatingPassword"
                                       placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" onClick={handleSubmit}>Sign In
                            </button>
                            <small className="text-body-secondary">By clicking Sign up, you agree to the terms of
                                use.</small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;