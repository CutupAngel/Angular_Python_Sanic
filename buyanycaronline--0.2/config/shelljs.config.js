var shell = require('shelljs');

// Copy Angular Build
shell.cp( "-R", "app/buyanycaronline/dist/buyanycaronline/*", "app/public/" );
