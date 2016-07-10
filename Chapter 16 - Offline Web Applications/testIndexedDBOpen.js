window.indexedDB = window.indexedDB || window.mozIndexedDB
|| window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
window.IDBCursor = window.IDBCursor || window.webkitIDBCursor;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;

var indexedDB = window.indexedDB;
var openRequest = indexedDB.open('Library', 1);
var db;
openRequest.onsuccess = function(response) {
db = openRequest.result;
alert("IndexedDB object store opened successfully");
};
openRequest.onerror = function (response) {
alert("Error code: " + response.target.errorCode);
};