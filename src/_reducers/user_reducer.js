import {LOGIN_USER, SUCCESS_CODE} from "../_actions/types";
import isEmpty from "../utils/ObjectUtils";

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER : {
            const token = action.payload.resultData.token
            return {...state, loginSuccess : isEmpty(token) ? false : true, loginToken : token}
        }
        default: return state;
    }
}