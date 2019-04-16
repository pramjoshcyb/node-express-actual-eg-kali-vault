"use strict"; // to display that the code must be executed in strict mode, variables have to be declared

/*
 * Queue data structure (FIFO METHOD - FIRST IN FIRST OUT)
 * 
 * PUBLIC METHODS:
 * 
 * add(i)   adds the item i to the end of the queue 
 * remove() removes an item from the front of the queue and returns it
 * if no items in the queue then it returns: undefined
 * toArray() returns an array of the items initialised with the first one
 * length() returns the current list length
 * 
*/

/// watch videos on queue

class Queue{

    constructor(){
        this.qLength = 0;
        this.first = null;
        this.last = null;
    }

    add(value) {
        this.qLength++;

        
        // have to think that the current queue is FIRST -> A -> B -> C -> LAST

        // create a new item; the "old" last item is before this one
        const newItem = {
            //before: LAST,
            before: this.last,
            after: null,
            value: value,
        };

        
        if (this.last === null) { // if list is empty, new item is the first
            this.first = newItem;

        } else { // if not then the new item comes after the "old" last item

            // LAST is the old last item
            // newItem is the new last item
            // LAST.after = something...
            // the real name of LAST is this.last

            this.last.after = newItem;

        }

        // actual last item is the current new item
        this.last = newItem;
    }

        remove() {
            const firstItem = this.first;

            if (firstItem === null) {
                return undefined;
            }

            // make this.first point to second item

            this.first = firstItem.after;
            if (this.first === null) {
                this.last = null;
            }

            this.qLength--;

            return firstItem.value;
        }


        toArray() {

            const result = [];

            let thisItem = this.first;
            while (thisItem !== null) {
                result.push(thisItem.value);
                thisItem = thisItem.after;
            }

            return result;
        }

        length() {
            return this.qLength;
        }
    }

module.exports = Queue;