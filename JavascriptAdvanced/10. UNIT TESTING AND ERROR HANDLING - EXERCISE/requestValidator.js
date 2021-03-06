function solve(input) {
    let allowedMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];

    if (!allowedMethods.includes(input.method)) {
        throw new Error('Invalid request header: Invalid Method');
    } else if (input.method === undefined) {
        throw new Error('Invalid request header: Invalid Method');
    };

    let allowedURIpattern = /^[0-9.a-zA-Z*]+$/;

    if (!allowedURIpattern.test(input.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    } else if (input.uri === '') {
        throw new Error('Invalid request header: Invalid URI');
    } else if (input.uri === undefined) {
        throw new Error('Invalid request header: Invalid URI');
    };

    let allowedVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!allowedVersions.includes(input.version)) {
        throw new Error('Invalid request header: Invalid Version');
    } else if (input.version === undefined) {
        throw new Error('Invalid request header: Invalid Version');
    };

    let specialChars = ['<', '>', '\\', '&', '\'', '\"'];

    if (input.message === undefined) {
        throw new Error('Invalid request header: Invalid Message');
    } else {
        input.message
            .split('')
            .forEach(char => {
                if (specialChars.includes(char)) {
                    throw new Error('Invalid request header: Invalid Message');
                }
            });
    };

    return input;
}

solve({
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
})