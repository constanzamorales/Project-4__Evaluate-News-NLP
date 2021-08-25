import { checkUrl } from "../src/client/js/urlChecker";

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the URL checker with HTTP", () => {
    // Tests a link with "https://"
    test("Test should return true", () => {
        const userInput = "https://www.bbc.co.uk/"
        expect(checkUrl(userInput)).toBe(true);
    })
    // Tests a link with "http://"
    test("Test should return true", () => {
        const userInput = "http://www.bbc.co.uk/"
        expect(checkUrl(userInput)).toBe(true);
    })
});

describe("Testing the URL checker without HTTP", () => {
    // Tests a link starting with "http:" and no "//"
    test("Test should return false", () => {
        const userInput = "http:www.bbc.co.uk/"
        expect(checkUrl(userInput)).toBe(false);
    })
    // Tests a link with " "
    test("Test should return false", () => {
        const userInput = " www.bbc.co.uk/"
        expect(checkUrl(userInput)).toBe(false);
    })
    // Tests a link starting with only "www"
    test("Test should return false", () => {
        const userInput = "www.bbc.co.uk/"
        expect(checkUrl(userInput)).toBe(false);
    })
    // Tests a link without any protocol or www
    test("Test should return false", () => {
        const userInput = "bbc.co.uk/"
        expect(checkUrl(userInput)).toBe(false);
    })
});
