const {
    saveBooks, 
    getAllBooks, 
    getDetailBook,
    editBooks,
    deleteBook,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: saveBooks,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooks,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getDetailBook,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBooks,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBook,
    },
];

module.exports = routes;