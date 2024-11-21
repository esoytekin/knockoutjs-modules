/** @typedef {import('./flag').FlagApi} FlagApi*/

define([], function () {
    const FlagApi = {
        /**
         * @returns {Promise<Flag[]>} flagList
         */
        async getFlags() {
            const r = await fetch("http://localhost:3004/flags");
            return await r.json();
        },
        /**
         * @param {Flag} flagData
         */
        addFlag(flagData) {
            return fetch("http://localhost:3004/flags", {
                headers: {
                    Accept: "application/json",
                    Content: "application/json",
                },
                method: "POST",
                body: JSON.stringify(flagData),
            });
        },
        /**
         * @param {Flag} flagData
         */
        updateFlag(flagData) {
            return fetch(`http://localhost:3004/flags/${flagData.id}`, {
                headers: {
                    Accept: "application/json",
                    Content: "application/json",
                },
                method: "PUT",
                body: JSON.stringify(flagData),
            });
        },
        /**
         * @param {string} flagId - id of the flag
         */
        deleteFlag(flagId) {
            return fetch(`http://localhost:3004/flags/${flagId}`, {
                headers: {
                    Accept: "application/json",
                    Content: "application/json",
                },
                method: "DELETE",
            });
        },
    };

    return FlagApi;
});
