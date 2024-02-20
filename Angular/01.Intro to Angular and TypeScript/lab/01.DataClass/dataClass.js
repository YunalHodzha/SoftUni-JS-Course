var Data = /** @class */ (function () {
    function Data(method, uri, version, message) {
        this.fulfilled = false;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = this.response;
        this.fulfilled = this.fulfilled;
    }
    return Data;
}());
var myData = new Data('GET', 'http://google.com', 'HTTP/1.1', 'Hello World!');
console.log(myData);
