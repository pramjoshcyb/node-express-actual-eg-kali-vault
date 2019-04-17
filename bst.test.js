const BST = require('./bst'); //gets the bst.js file from the public folder
// test file for bst.js
// reference video: https://www.youtube.com/watch?v=_Zcgy_8JEaI&list=PLj_wfJztgvMIMSwtsC0r2f8wDZugQPcNF&index=69


//trivial tree is a tree with 0 or 1 items in it
describe("test the lookup method in trivial trees", () => {

    const t = new BST();

    // first test item would be null since it starts at 0 
    test("lookup in empty list should return null", () => {
        //groot is a key that it looks up
        expect(t.lookup("groot")).toBe(null); //lookup allows to find a key
        expect(t.lookup(5)).toBe(null); //should be returning null for the first test case
    }); // from bst.js


    test("lookup in a list with one entry", () => {
        t.insert('groot', 55); //anything that isnt null
        expect(t.lookup)("groot")).toBe(55); 
        expect(t.lookup(5)).toBe(null);
    });


describe("test add and lookup methods", () => {

    const t = new BST();

    const toAdd = [50, 25, 12,6,37,31,75,66,89,95];
    for (let i = 0; i < toAdd.length; i++) {
        t.insert(toAdd[i], 'test ' + toAdd[i]);
    }
    test("lookup existent and non-existent entries in bst", () => {
        for (let i = 0; i < 100; i++) {
            if (toAdd.indexOf(i) === -1) {
                expect(t.lookup(i)).toBe(null);
            } else {
                expect(t.lookup(i)).toBe('test ' + i);
            }
        }
    });
});


describe("range queries with no results", () => {

    test("range query of emptry tree", () => {
        const t = new BST();

        expect(t.range(0, 50)).toEqual([]);
        expect(t.range('myrange', 'z')).toEqual([]);
    });
});


test("ranges with empty results", () => {
    const t = new BST();

    t.insert('myki', '$3.50');
    t.insert(0, 'xyz');
    t.insert(-1, 'abc');
    t.insert(10, 'def');
    t.insert(-10, 'defg');

    // must be empty no matter what is in BST
    expect(t.range(0, -1)).toEqual([]);
    expect(t.range(0, -1)).toEqual([]);

    // will be empty in this case
    expect(t.range('m', 'mx')).toEqual([]);
    });


describe("range queries with some results", () => {

    test("ranges with a leaf-only result", () => {
        const t = new BST();

        // root node
        t.insert('test', 5);
        expect(t.range('a', 'z')).toEqual([5]);

        // other leaves
        t.insert('test2', 2);
        t.insert('test3', 3);
        t.insert('test7', 7);
        t.insert('test8', 8);
        expect(t.range('test2', 'test3')).toEqual([2, 3]);
    });


test("ranges with complex results", () => {
    const t = new BST();

    t.insert('test5', 5);
    t.insert('test2', 2);
    t.insert('test3', 3);
    t.insert('test7', 7);
    t.insert('test8', 8);
    expect(t.range('test2', 'test7')).toEqual([2, 3, 5, 7]);
    expect(t.range('test3', 'test5')).toEqual([3, 5]);  
    });
});



