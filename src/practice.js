// import { Map } from 'immutable';
import { produce } from 'immer';

let book = Map({title: 'Harry Potter'});

function publish(book) {
    // book.isPublished = true
    // return book.set('isPublished', true) // add
    return produce(book, draftBook => { // obj is not mutated
        draftBook.isPublished = true;
    })
}
// book = publish(book)
let updated = publish(book) 

// console.log(book.title) =>
// console.log(book.get('title'))


// book.toJS() //convert to plain js