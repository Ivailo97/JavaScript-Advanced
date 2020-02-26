function validate(request) {

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];

    let uriPattern = /^((\*)|[a-zA-Z0-9\.]+)$/gim;

    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    let messagePattern = /(^$)|^((\d)+|[^<>\\\&'"]+)$/gim;

    if (!request.hasOwnProperty('method') || !validMethods.includes(request.method)) {
        throw new Error('Invalid request header: Invalid Method')
    }

    if (!request.hasOwnProperty('uri') || !request.uri.match(uriPattern)) {
        throw new Error('Invalid request header: Invalid URI')
    }

    if (!request.hasOwnProperty('version') || !validVersions.includes(request.version)) {
        throw new Error('Invalid request header: Invalid Version')
    }

    if (!request.hasOwnProperty('message') || !request.message.match(messagePattern)) {
        throw new Error('Invalid request header: Invalid Message')
    }

    return request;
}

console.log(validate({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}))