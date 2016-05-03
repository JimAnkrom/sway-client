/**
 * Created by cosinezero on 3/20/2016.
 */
(function (rootNS) {
    var config = {
        "api": {
            "management": {
                "address": "http://127.0.0.1:11100",
                "timer": "/timer"
            }
        }
    };
    var timer,
        timerURI = config.api.management.address + config.api.management.timer;

    rootNS.management = {
        getTimer: function () {
            sway.api.post(timerURI, {}, {
                success: function (http, response) {
                    timer = response;
                    console.log('Timer: ' + JSON.stringify(timer));
                }
            });
        },
        updateTimer: function () {
            if (timer) {
                sway.api.put(timerURI, {id: timer.id}, {
                    success: function (http, response) {
                        timer = response;
                        console.log('Timer: ' + JSON.stringify(timer));
                    }
                });
            }
        }
    };


})(
    sway
);