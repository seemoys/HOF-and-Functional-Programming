const books=[
    {title:"Science",author:"Sanu",yop:1994},
    {title:"Math",author:"Don",yop:2023},
    {title:"English",author:"Mantosh",yop:2015},
    {title:"Hindi",author:"Bunty",yop:2001},
    {title:"Sanskrit",author:"Sanjeev",yop:1999}
    ];
// console.log(books);
const filteredBooks=books.filter(books=>books.yop<2010);
let capitalizeFilteredBooks=filteredBooks.map(books => ({ title: books.title, author: books.author.toUpperCase(),yop:books.yop }));

console.log(capitalizeFilteredBooks)