import {LOGIN} from '../actions/loginactions';
const initialState = {
    "userdata":{
        "username" : 'ashwin',
        "message" : "",
        "info": ""
    }
};

const redu= (state = initialState, action) => {


    switch (action.type) {

        case "LOGIN":

            return {
                ...state,
                "userdata":{
                    "username":action.username,
                    "info":action.data.logi,
                }
            }
            break;

        case "SIGNUP":

            return {
                ...state,
                "userdata":{
                    "username":action.username,
                    "info":action.data.logi,
                }
            }
            break;

        case "PROJECT":

            return {
                ...state,
                "userdata":{
                    "username":action.username,
                    "info":action.data.logi,
                }
            }
            break;

        case "BID":

            return {
                ...state,
                "userdata":{
                    "username":action.username,
                    "info":action.data.logi,
                }
            }
            break;




        default :
            return state;

    }
};

export default redu;