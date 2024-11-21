const modules = [
    {
        name: "main-page",
        path: "main/main-page",
    },
    {
        name: "add-flag-form",
        path: "main/add-flag",
    },
    {
        name: "flag-filter",
        path: "main/flag-filter",
    },
    {
        name: "flag-list",
        path: "main/flag-list",
    },
];

define([
    "knockout",
    ...modules.map(({ path }) => `${path}/view-model`),
], function (ko, ...views) {
    return {
        init: () => {
            modules.forEach((module, idx) => {
                ko.components.register(module.name, {
                    viewModel: views[idx],
                    template: {
                        require: `text!${module.path}/template.html`,
                    },
                });
            });

            ko.applyBindings();
        },
    };
});
