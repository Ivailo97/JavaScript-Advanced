import { fireBaseRequestFactory } from './firebase-requests.js';

/**
 * Creates object that support CRUD operations over set of entities 
 */
export const requester = (() => {
    let _treks;
    //let _userMeta;
    let apiKey;

    /**
     * Updates the auth token which is applied to the requests
     * @param {string} token firebaseAuthToken
     */
    let setAuthToken = (token) => {
        _treks = fireBaseRequestFactory(apiKey, 'treks', token);
        // _userMeta = fireBaseRequestFactory(apiKey, 'userMeta', token);
    };

    /**
     * Initialize singleton request objet to be used across the application 
     * @param {string} firebaseApiKey sets the firebaseApiKey to which we will make requests
     * @param {string} token optionally sets the auth token
     */
    let init = (firebaseApiKey, token = null) => {
        apiKey = firebaseApiKey;
        _treks = fireBaseRequestFactory(apiKey, 'treks', token);
        // _userMeta = fireBaseRequestFactory(apiKey, 'userMeta', token);
    };

    /** 
     * Return all supported collection + config functions
     */
    return {
        init,
        setAuthToken,
        //  get userMeta() {
        //    return _userMeta
        // },
        get treks() {
            return _treks
        }
    };
})();