var supervisor = require("supervisor");
var shell = require('shelljs');
var path = require("path");
supervisor.run("-w test/server/ -e node,js,html test/server/server.js".split(/\s+/));


