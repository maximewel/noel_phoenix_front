
class ApiCaller {
    //URL gestion
    localUrl = "http://localhost:8000";
    remoteUrl = "https://www.noel-phoenix-backend.tk";
    apiUrl = (process.env.NODE_ENV === 'production') ? this.remoteUrl : this.localUrl;
    //Singleton variable
    static _instance = null;
    //User-related variables
    aToken = null;
    rToken = null;
    isLogged = false;
    //Localstorage keys
    LocalstorageKeys = {
        REMEMBERME: "rememberMe",
        ATOKEN: "accessToken",
        RTOKEN: "refreshToken",
    }
    //Login variables
    grantType = "convert_token";
    backend = "facebook";
    CONFIG = require('../env.json');
    client_id = this.CONFIG.client_id;
    client_secret = this.CONFIG.client_secret;


    /// Authorization: Bearer 123456

    constructor() {
        console.log("Calling ApiCaller");
        if (ApiCaller._instance) {
            return ApiCaller._instance;
        }

        console.log("Built a new ApiCaller");

        if (localStorage.getItem(this.LocalstorageKeys.REMEMBERME) === 'true') {
            this.refreshFromStorage();
        }

        ApiCaller._instance = this;
    }

    refreshFromStorage() {
        this.aToken = JSON.parse(localStorage.getItem(this.LocalstorageKeys.ATOKEN));
        this.rToken = JSON.parse(localStorage.getItem(this.LocalstorageKeys.RTOKEN));
    }

    updateStorage() {
        localStorage.setItem(this.LocalstorageKeys.ATOKEN, JSON.stringify(this.aToken));
        localStorage.setItem(this.LocalstorageKeys.RTOKEN, JSON.stringify(this.rToken));
    }

    updateRememberMe(newRemember) {
        localStorage.setItem(this.LocalstorageKeys.REMEMBERME, JSON.stringify(newRemember));
        //delete tokens from storage if user doent want to be remembered
        if (!newRemember) {
            localStorage.removeItem(this.LocalstorageKeys.ATOKEN);
            localStorage.removeItem(this.LocalstorageKeys.RTOKEN);
        }
    }

    //Request method - generalize the requests to the API (tokens and refresh managment)
    async request(method, requestUrl, body = null, retry = false) {
        let headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });
        //add token if user is logged in
        if (this.aToken){
            headers.append('Authorization', `Bearer ${this.aToken}`)
        }

        var options = {
            method: method,
            headers: headers,
            body: body
        }

        let response = await fetch(`${this.apiUrl}${requestUrl}`, options)
            .then(response => {
                if (response.status === 401) {
                    if (retry) {
                        throw Error('Could not refresh token - error: ' + response.text);
                    }
                    //Try refreshing access token (last change, retry at true)
                    this.update_refresh_token();
                    this.request(method, requestUrl, body, true);
                }
                return response;
            })
            .then(resp => resp.json())
            .catch(err => console.log("Could not perform request - error: " + err));

        return response;
    }

    //Update the access token using the refresh token
    async update_refresh_token() {

    }

    async loginFromFacebook(facebookToken) {
        try {
            //Prepare form data
            let bodyFormData = new FormData();
            bodyFormData.append("grant_type", this.grantType);
            bodyFormData.append("client_id", this.client_id);
            bodyFormData.append("client_secret", this.client_secret);
            bodyFormData.append("backend", this.backend);
            bodyFormData.append("token", facebookToken);

            //Request token convertion
            const response = await this.request('POST', '/auth/convert-token', bodyFormData);

            //Update variables
            console.log("Resp : " + response);
            this.aToken = response.access_token;
            this.rToken = response.refresh_token;
            console.log("New tokens : at " + this.aToken + " rt " + this.rToken);

            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    }
}

//To facilitate imports
new ApiCaller();
export default ApiCaller._instance;