// Quick and simple in-memory storage for invalid tokens
const invalidTokens = [];

export function addInvalidToken(token) {
    invalidTokens.push(token);
}

export function isTokenInvalid(token) {
    return invalidTokens.includes(token);
}
