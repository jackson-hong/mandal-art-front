import axios from "axios";
import {LOGIN_USER} from "./types";

export function loginUser(dataToSubmit) {
    const request = axios.post('/v1/partner/auth/login', dataToSubmit)
        .then(response => response.data);
    return {
        type : LOGIN_USER,
        payload : request
    }
}