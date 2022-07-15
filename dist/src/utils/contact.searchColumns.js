"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortColumns = exports.SearchColumns = void 0;
var SearchColumns;
(function (SearchColumns) {
    SearchColumns["certificateId"] = "contains";
    SearchColumns["serialNumber"] = "contains";
    SearchColumns["subjectName"] = "exact";
    SearchColumns["issuerName"] = "contains";
    SearchColumns["status"] = "contains";
    SearchColumns["issuedAt"] = "contains";
    SearchColumns["expiredAt"] = "contains";
})(SearchColumns = exports.SearchColumns || (exports.SearchColumns = {}));
var SortColumns;
(function (SortColumns) {
    SortColumns[SortColumns["certificateId"] = 1] = "certificateId";
    SortColumns[SortColumns["serialNumber"] = 1] = "serialNumber";
    SortColumns[SortColumns["subjectName"] = 1] = "subjectName";
    SortColumns[SortColumns["issuerName"] = 1] = "issuerName";
    SortColumns[SortColumns["status"] = 1] = "status";
    SortColumns[SortColumns["issuedAt"] = 1] = "issuedAt";
    SortColumns[SortColumns["expiredAt"] = 1] = "expiredAt";
})(SortColumns = exports.SortColumns || (exports.SortColumns = {}));
//# sourceMappingURL=contact.searchColumns.js.map