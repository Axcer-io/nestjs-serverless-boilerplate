"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParameters = exports.QueryOptions = exports.Util = void 0;
const PAGE_LIMIT = 10;
class Util {
    getPageOptions(query) {
        const pageOptions = {
            offset: parseInt(query.offset, 10) || 0,
            limit: parseInt(query.limit, 10) || PAGE_LIMIT,
        };
        return pageOptions;
    }
}
exports.Util = Util;
class QueryOptions {
}
exports.QueryOptions = QueryOptions;
class QueryParameters {
}
exports.QueryParameters = QueryParameters;
//# sourceMappingURL=Util.js.map