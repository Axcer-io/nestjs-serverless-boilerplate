"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortColumns = exports.SearchColumns = void 0;
var SearchColumns;
(function (SearchColumns) {
    SearchColumns["first_name"] = "contains";
    SearchColumns["last_name"] = "contains";
    SearchColumns["email"] = "contains";
    SearchColumns["mobile"] = "contains";
})(SearchColumns = exports.SearchColumns || (exports.SearchColumns = {}));
var SortColumns;
(function (SortColumns) {
    SortColumns[SortColumns["first_name"] = 1] = "first_name";
    SortColumns[SortColumns["last_name"] = 1] = "last_name";
    SortColumns[SortColumns["email"] = 1] = "email";
    SortColumns[SortColumns["mobile"] = 1] = "mobile";
})(SortColumns = exports.SortColumns || (exports.SortColumns = {}));
//# sourceMappingURL=contact.searchColumns.js.map