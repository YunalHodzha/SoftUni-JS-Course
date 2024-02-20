class Data {
    method: string;
    uri: string;
    version: string;
    message: string;
    response: undefined;
    fulfilled: boolean = false;

    constructor(method: string, uri: string, version: string, message: string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = this.response;
        this.fulfilled = this.fulfilled;
    }

}

let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', 'Hello World!')
console.log(myData)