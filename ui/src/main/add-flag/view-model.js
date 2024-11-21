define(["knockout", "api/flag"], /**
 * @param {FlagApi} FlagApi
 */ function (ko, FlagApi) {
    const AddFlag = function ({ loadFlags }) {
        const self = this;

        /**
         *
         * @type { FlagMember }
         */
        self.newFlag = {
            id: ko.observable(""),
            value: ko.observable("false"),
        };

        /**
         * @type { () => Promise<void> }
         */
        self.addFlag = function () {
            const flagData = {
                id: this.newFlag.id(),
                value: this.newFlag.value() === "true",
            };

            FlagApi.addFlag(flagData).then(() => {
                loadFlags();
                this.newFlag.id("");
                this.newFlag.value("false");
            });
        };
    };

    return AddFlag;
});
