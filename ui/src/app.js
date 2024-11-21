define([
    "knockout",
    "main/main-page/view-model",
    "main/add-flag/view-model",
    "main/flag-list/view-model",
    "main/flag-filter/view-model",
], function (ko, mainView, addFlag, flagList, flagFilter) {
    return {
        init: function () {
            const t = Date.now();
            ko.components.register("main-page", {
                viewModel: mainView,
                template: {
                    require: "text!./main/main-page/template.html",
                },
            });

            ko.components.register("add-flag-form", {
                viewModel: addFlag,
                template: {
                    require: `text!./main/add-flag/template.html`,
                },
            });

            ko.components.register("flag-filter", {
                viewModel: flagFilter,
                template: {
                    require: "text!./main/flag-filter/template.html",
                },
            });

            ko.components.register("flag-list", {
                template: {
                    require: `text!./main/flag-list/template.html?t=${t}`,
                },
                viewModel: flagList,
            });

            ko.applyBindings();
        },
    };
});
