import {LOGIN} from '../actions/loginactions';
import {SIGNUP} from '../actions/loginactions';
import {POST} from '../actions/loginactions';

const initialState = {
    "stores":{
        "username" : '',
        "message" : "",
        "email":"",
        "info": "",
        "sign": false,
        "added": false
    }
};

const stores= (state = initialState, action) => {


    switch (action.type) {

        case LOGIN:
            console.log("im here in store");
            console.log("message",action.data.logi);
            console.log("username",action.data.username);
            console.log("status",action.data.status);
            return {
                ...state,
                "stores":{
                    "username":action.data.username,
                    "info":action.data.logi,
                    "login":action.data.status
                }
            }

        case SIGNUP:
            console.log("im here in Signup store");
            console.log("in signup:")
            console.log(action.data.status);
            console.log("email",action.data.email);
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "sign":action.data.status,
                    "email": action.data.email
                }
            }

        case POST:
            console.log("im here in post ");
            console.log("in proj:");
            console.log(action.data.status);
            console.log(action.data);
            console.log(stores)
            return {
                ...state,
                "stores":{
                    "added":action.data.status
                }
            }


        default :
            return state;

    }
};

export default stores;