define(["knockout", "api/flag"], (ko, FlagApi) => {
    const MainModel = function () {
        const self = this;

        self.flags = ko.observableArray([]);

        self.filteredFlags = ko.observableArray([]);

        self.loadFlags = async function () {
            const flags = await FlagApi.getFlags();
            self.flags(flags);
            self.filteredFlags(flags);
        };

        self.onFilter = function (filterText) {
            const filtered = self
                .flags()
                .filter((flag) => flag.id.includes(filterText));
            self.filteredFlags(filtered);
        };
    };

    return MainModel;
});
