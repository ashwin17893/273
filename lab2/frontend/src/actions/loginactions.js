import * as API from "../api/API";
export const LOGIN ="LOGIN";
export const SIGNUP ="SIGNUP";
export const POST ="POST";




export function actionlogin(userdata) {
    console.log("in login");
    return function (dispatch) {
        try {

            API.doLogin(userdata)
                .then((response) => {
                    try {
                        console.log("inside action");
                        dispatch(login(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function login(data) {
    console.log("data in action==>",data.message);
    return {
        type: LOGIN,
        message: "inside login actions",
        data:data
    }
}

export function actionsign(userdata) {
    console.log("in signup");
    return function (dispatch) {
        try {

            API.signup(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(Signup(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function Signup(data) {
    console.log(data);
    return {
        type: SIGNUP,
        message: "inside Signup Actions",
        data:data
    }
}

export function topost(userdata) {
    console.log("in post project");
    return function (dispatch) {
        try {

            API.post(userdata)
                .then((response) => {
                    try {
                        console.log("inside 2nd try");
                        dispatch(postup(response));
                    }
                    catch (error) {
                        console.log(error);
                    }
                });
        }
        catch (error) {
            console.log(error);
        }
    }

};

export function postup(data) {
    console.log(data);
    return {
        type: POST,
        message: "inside Signup Actions",
        data:data
    }
}