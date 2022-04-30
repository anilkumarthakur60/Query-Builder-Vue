/*
 * Lodash
 *
 * We use only a couple of  functions by importing them directly inside components
 * So, no need to import full package
 *
 * */
// window._ = require('lodash');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common["X-CSRF-TOKEN"] = token.content;
} else {
    console.error(
        "CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token"
    );
}

/**
 * We'll add interceptors to redirect user to login once we get 401 response
 * */
import {
    ToastProgrammatic as Toast,
    NotificationProgrammatic as Notification
} from "buefy";

window.axios.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        if (error.response.status === 401) {
            window.location.href = "/login";
        } else {
            let errors = error.response.data.errors;
            for (let field in errors) {
                errors[field].forEach(msg => {
                    Notification.open({
                        duration: 10000,
                        message: `${msg}`,
                        position: "is-bottom-right",
                        type: "is-danger",
                        queue: false
                    });
                });
            }

            Toast.open({
                message: `Error: ${error.message}`,
                type: "is-danger",
                queue: false
            });
        }

        return Promise.reject(error);
    }
);

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

window.tinycolor = require("tinycolor2");
window.moment = require("moment");
