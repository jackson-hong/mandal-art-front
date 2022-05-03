import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {loginUser} from "../../../_actions/user_action";
import {SUCCESS_CODE} from "../../../_actions/types";
import {useHistory} from "react-router-dom";

const LoginPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = e => setUsername(e.currentTarget.value)
    const onPasswordHandler = e => setPassword(e.currentTarget.value)
    const onSubmitHandler = e => {
        e.preventDefault()
        let body = {
            username: Username,
            password : Password
        }
        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.code === SUCCESS_CODE){
                    history.push('/nav')
                }else {
                    alert('Error')
                }
            })
    }

    return (
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center',
            width:'100%', height:'100vh'}}>
            <form style={{ display:'flex', flexDirection:'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Username</label>
                <input type={"text"} value={Username} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type={"password"} value={Password} onChange={onPasswordHandler}/>
                <br />
                <button type={"submit"}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
