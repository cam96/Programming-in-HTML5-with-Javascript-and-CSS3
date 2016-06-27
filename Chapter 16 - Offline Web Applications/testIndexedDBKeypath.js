window.indexedDB = window.indexedDB || window.mozIndexedDB
|| window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
window.IDBCursor = window.IDBCursor || window.webkitIDBCursor;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;

var indexedDB = window.indexedDB;

//Boilerplate code is above

//Keypath code is below
var openRequest = indexedDB.open('Library', 1);

//NOTE: the 'onupgradeneeded' function WILL NOTE fire if the database has already been created. 
//So change the database name or the version number if this function doesn't run on startup
openRequest.onupgradeneeded = function(response) {
response.currentTarget.result.createObjectStore("authors",
{ keypath: 'id', autoIncrement: true });
alert("Keypath property used successfully");
};

openRequest.onsuccess = function(event){
	alert("IndexedDB opened DB successfully");
}