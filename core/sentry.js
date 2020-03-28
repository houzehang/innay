"use strict";
let electron = require("electron");
const remote = electron.remote;
var Sentry	 = remote.require('@sentry/electron');

Sentry.init({
    dsn: 'http://09043f5505ec455986f34ef1611285f6@localhost:9000/3',
    debug: true,
});
Sentry.configureScope(function(scope) {
    scope.setUser({"email": "2210036910@qq.com"});
  });
Sentry.configureScope(scope => {
    scope.setExtra('battery', 0.7);
    scope.setTag('user_mode', 'admin');
    scope.setUser({ id: '4711' });
    // scope.clear();
});
   
// Add a breadcrumb for future events
Sentry.addBreadcrumb({
    message: 'My Breadcrumb',
});

// Capture exceptions, messages or manual events
Sentry.captureMessage('hello sentry!');
Sentry.captureException(new Error('Good bye bye'));
Sentry.captureEvent({
    message: 'Manual event~~',
    stacktrace: [
        'gogo',
        'toto'
    ],
});

console.log('MINGXI_DEBUG_LOG>>>>>>>>>sentry :',Sentry);