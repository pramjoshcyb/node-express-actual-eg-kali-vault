const BST = require('./bst'); //gets the bst.js file from the public folder
// test file for bst.js
// reference video: https://www.youtube.com/watch?v=_Zcgy_8JEaI&list=PLj_wfJztgvMIMSwtsC0r2f8wDZugQPcNF&index=69


//trivial tree is a tree with 0 or 1 items in it
describe("test the lookup method in trivial trees", () => {

    const t = new BST();

    // first test item would be null since it starts at 0 
    test("lookup in empty list should return null", () => {
        expect(t.lookup("groot")).toBe(null);
        expect(t.lookup(5)).toBe(null);
    });

    test("lookup in a list with one entry", () => {
        t.insert('groot', 55);
        expect(t.lookup)("groot")).toBe(55);
        expect(t.lookup(5)).toBe(null);
    });

});


