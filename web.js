var gzippo = require('gzippo');
    var express = require('express');
    var app = express();
    // app.use(express.logger('dev'));
    app.use(gzippo.staticGzip("" + __dirname ));
    // app.use(express.static(__dirname + '/dist'));
    app.get('*', function(req, res){
            res.sendFile(__dirname + '/index.html');
    });
    app.listen(process.env.PORT || 5000);
