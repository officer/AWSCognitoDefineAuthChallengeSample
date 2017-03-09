console.log('Loading');

exports.handler = function (event, context) {

    if (event != null) {
        console.log('event = ' + JSON.stringify(event));
    }
    else {
        console.log('No event object');

    }

    if (event.request.session.length == 0) {
        event.response.issueTokens = false;
        event.response.failAuthentication = false;
        event.response.challengeName = 'CUSTOM_CHALLENGE';
    } else if(event.request.session.length == 1 && event.request.session[0].challengeName == "CUSTOM_CHALLENGE") {
        event.response.issueTokens = true;
        event.response.failAuthentication = false;
    } else {
        event.response.issueTokens = false;
        event.response.failAuthentication = true;
    }

    console.log('event = ' + JSON.stringify(event));

    context.done(null, event);  // SUCCESS with message
};
