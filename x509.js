/**
 *  x509.js
 *
 *  David Janes
 *  IOTDB
 *  2016-05-25
 *
 *  Demonstrate reading what's in an X.509 certificate.
 *  Do "npm install x509" first
 */

const x509 = require('x509');

const certs = [
    "certs/cert.pem",
    "certs/rootCA.pem",
];

certs.map(function(cert) {
    console.log(JSON.stringify({
        file: cert,
        cert: x509.parseCert(cert),
    }, null, 2));
    console.log("--");
});
