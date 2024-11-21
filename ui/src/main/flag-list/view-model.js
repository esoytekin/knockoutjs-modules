define(["api/flag"], /**
 * @param {FlagApi} FlagApi
 */ function (FlagApi) {
    "use strict";

    const FlagList = function ({ filteredFlags, loadFlags }) {
        const self = this;
        self.filteredFlags = filteredFlags;

        self.toggleFlag = function (flag) {
            const updatedFlag = {
                id: flag.id,
                value: !flag.value,
            };

            FlagApi.updateFlag(updatedFlag).then(() => {
                loadFlags();
            });
        };

        self.deleteFlag = function (flag) {
            FlagApi.deleteFlag(flag.id).then(() => {
                loadFlags();
            });
        };
    };

    return FlagList;
});
