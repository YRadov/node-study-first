/**
 * Created by YRadov on 30.09.2016.
 */

var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '"+
                postDataChunk + "'.");
        });

        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });

    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;


//*****************************************************
// add Listeners to request
//*****************************************************
//request.addListener("data", function(chunk) {
//    // called when a new chunk of data was received
//});
//
//request.addListener("end", function() {
//    // called when all chunks of data have been received
//});