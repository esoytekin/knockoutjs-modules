requirejs.config({
    baseUrl: "src",
    paths: {
        jquery: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min",
        knockout:
            "https://cdnjs.cloudflare.com/ajax/libs/knockout/3.5.1/knockout-latest.min",
        text: "https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min",
    },
    shim: {
        knockout: {
            deps: ["jquery"],
        },
    },
});

// Start the application
require(["app"], function (app) {
    app.init();
});
