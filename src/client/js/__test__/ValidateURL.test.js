import { URLValidation } from "../ValidateURL"

describe("Testing Validation for true", () => {
    test("url test true?", () => {
           expect(URLValidation('https://api.aylien.com/api/v1/concepts')).toEqual(true);
})});

describe("Testing Validation for false", () => {
    test("url test false?", () => {
           expect(URLValidation('can I have a cookie')).toEqual(false);
})});
