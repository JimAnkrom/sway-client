/**
 * Created by cosinezero on 3/13/2016.
 */

sway.plugins = {
    // TODO: how does this establish a connection?

};


// TODO: plugin should retain some state

/**
 * Build an input plugin
 * @param options
 */
function buildInputPlugin(options) {

    function invoke (data) {
        if (this.onBeforeSend) this.onBeforeSend(data, this);
        if (this.onSend) this.onSend(data, this);
        if (this.onAfterSend) this.onAfterSend(data, this);
    }

    invoke.init = function () {
        if (this.onInit) this.onInit(invoke);
    };

    if (options.init) invoke.onInit = multicast(options.init);
    if (options.response) invoke.onResponse = multicast(options.response);
    if (options.beforeSend) invoke.onBeforeSend = multicast(options.beforeSend);
    if (options.send) invoke.onSend = multicast(options.send);
    if (options.afterSend) invoke.onAfterSend = multicast(options.afterSend);

    // TODO: maybe give this a lifecycle?
}

// TODO: this should only fire off when we have the sway config back, so we can give it the plugin configuration.
// TODO: how do we determine the 'sensor to plugin' routing? Is that a shui task? Do we not care?
(function () {
    var realtimeSocket;

    sway.plugins.realtime = buildInputPlugin({
        send: function (data) {
            // TODO:
        },
        init: function (config) {
            // TODO: initialize the socket.
            realtimeSocket = new sway.Socket(config);
            // TODO: and make a connection
        }
    })
})();