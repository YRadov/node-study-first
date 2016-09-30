/**
 * Created by YRadov on 30.09.2016.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);