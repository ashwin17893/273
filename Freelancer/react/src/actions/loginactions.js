import * as API from "../api/API";
export const LOGIN ="LOGIN";




export function tologin(userdata) {
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

export function logi(data) {
    console.log("data in action==>",data.message);
    return {
        type: LOGIN,
        message: "inside login actions",
        data:data
    }
}

export function tosignup(userdata) {
    console.log("in login");
    return function (dispatch) {
        try {

            API.dosignup(userdata)
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

export function tosignup(data) {
    console.log("data in action==>",data.message);
    return {
        type: SIGNUP,
        message: "inside login actions",
        data:data
    }
}



export function actionProject(userdata) {
    console.log("in login");
    return function (dispatch) {
        try {

            API.projects(userdata)
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

export function Project(data) {
    console.log("data in action==>",data.message);
    return {
        type: Project,
        message: "inside login actions",
        data:data
    }
}

export function actionBid(userdata) {
    console.log("in login");
    return function (dispatch) {
        try {

            API.projects(userdata)
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

export function Bid(data) {
    console.log("data in action==>",data.message);
    return {
        type: BID,
        message: "inside login actions",
        data:data
    }
}