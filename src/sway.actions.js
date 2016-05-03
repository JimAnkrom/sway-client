/**
 * Created by cosinezero on 4/20/2016.
 */

sway.actions = {
    // Show the splashscreen for the installation
    "splash": function () {},
    // Show intro message
    "intro": function () {},
    // Confirm user wants to join
    "confirm": function () {},
    // Select shape for the user
    "shape": function () {},
    // Calibrate user into the system
    "calibrate": function (data) {
    },
    // Notify user that they are waiting
    "queue": function () {},
    // Enter play state
    "play": function () {},
    // Quit the interation
    "quit": function () {}
};

sway.workflow = {
    action: function (name, data) {
        var action = sway.actions[name];
        if (action) action(data);
    },
    next: function () {
        // post to the action API
        sway.api.post(config.api.address + config.api.action, {}, {});
    }
};