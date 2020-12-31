const HTTP = require('http');
const FS = require('fs');
const PATH = require('path');

const GET = 'GET';
const HOME_PAGE_URL = "/";
const Home_PAGE_URI = "D:\\MyWork\\OnlineShopping\\index.html";

const SUCSES_CODE = 200;
const NOT_FOUND_CODE = 404;

function onRequest(req, res){

    if(req.method == GET && req.url == HOME_PAGE_URL){
        displayHomePage(res)
    }else {
        displayNotFound(res);
    }
    //res.end();
}

function displayHomePage(res){
    res.writeHead(SUCSES_CODE, { 'Content-Type':'text/html' });
    let homeStream = FS.createReadStream(PATH.normalize(Home_PAGE_URI));
    homeStream.on('open', function () {
        homeStream.pipe(res);
    });

    homeStream.on('error', function (err) {
        res.end(err);
    });

    console.log(PATH.normalize(Home_PAGE_URI));
}

function displayNotFound(res) {
    res.writeHead(NOT_FOUND_CODE, {'Content-Type': 'text/plain'});
    res.write(NOT_FOUND_CODE+ " Page not found");
    res.end();
}

function main(){
    HTTP.createServer(onRequest).listen(8888);
    console.log("Server has been created");
}

main();