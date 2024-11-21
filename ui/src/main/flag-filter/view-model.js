define(["knockout"], function (ko) {
    "use strict";

    const FlagFilter = function ({ onFilter }) {
        const self = this;

        self.onFilterChange = () => {
            onFilter(self.filterText());
        };

        self.filterText = ko.observable("");
    };

    return FlagFilter;
});
