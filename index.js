// const obj={
//     name:'Max',
//     getName:function (){
//         return this.name
//     }
// }
//
// console.log(obj.getName());


// const arr = [1, 2, 3, 4]
//
// const swap = (array, index) => {
//     let tmp = array[index];
//     array[index] = array[index + 1]
//     array[index + 1] = tmp
//     return arr
// }
//
// console.log(swap(arr, 1));


// const arr = [1, 5, 2, -12, 45]
// //
// // // const findMin = (array) => {
// function findMin(array) {
//     let min = array[0]
//     for (let item of array) {
//         if (min > item) {
//             min = item
//         }
//     }
//     return min
// }

//
// console.log(findMin(arr));

// console.log(10 % 4);
// let a = 5;
// a%=5
// a = a %5;

// const arr1 = []
// for (let i = 0; i < 10; i++) {
//     arr1[i] = Math.round(Math.random()*100)
// }
// const arr2 = []
// for (let i = 0; i < arr1.length; i++) {
//     arr2[i] = arr1[i]*5
// }
//
// console.log(arr1);
// console.log(arr2);


// const arr = [0, 2, 0, 2, 6, 0, 1]
//
// const res = []
// let count = 0
// let index = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         count++
//     } else {
//         res[index++]=arr[i]
//     }
// }
// console.log(res);
// let zeroCount = res.length
// for (let i = 0; i < count; i++) {
//     res[zeroCount++]=0
// }
//
// console.log(res);


// const arr = [1, 2, 3]
//
// arr[arr.length] = 5
//
// console.log(arr);


// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
//
// const res = []
// let index = 0
// for (let i = 0; i < arr.length; i+=2) {
//         res[index++] = arr[i]
// }
//
// console.log(res);


// const myFunc = (data) => {
//
//     console.log('ddfdfsfsdf'+data);
// }
//
//
// myFunc(' data')
//
//
//
// document.write(`<div class="users-box"></div>`)
// for (const user of users) {
//     document.write(`
// <div class="user-block">
//     <h2>${user.id} - ${user.name} - ${user.username} </h2>
//     <h3> ${user.email} - ${user.phone} </h3>
//         </div>
// `
//     )
// }


// const users = [
//     {id: 1, name: 'Max', username: 'max', email: 'asd@sdf', phone: '54546'},
//     {id: 2, name: 'Popov', username: 'popov', email: 'sdfsf', phone: '5454'},
//     {id: 3, name: 'Cat', username: 'cat', email: 'sdfsf', phone: '54545'},
//     {id: 4, name: 'Kokos', username: 'koks', email: 'sdfsfd', phone: '8622121'},
// ]
//
// for (let i = 0; i < users.length; i++) {
//     document.write(`<div>${users[i].name} -- ${users[i].username}</div>`)
// }


let books = [
    {
        title: `Harry Potter`,
        pages: 242,
        authors: [`Rowling`],
        asd:{
            name:'max'
        },
        genre: [`first genre`, `second genre`, `third genre`, `fourth genre`],
    },
    {
        title: `Second book`,
        pages: 18,
        authors: [`First author`, `second author`],
        genre: [`first genre`, `second genre`, `third genre`],
    },
    {title: `3rd book`, pages: 141, authors: [`Rowling`], genre: [`first genre`, `second genre`, `third genre`],},
];
let maxBook = books[0]

for (const book of books) {
    if (maxBook.genre.length<book.genre.length){
        maxBook = book
    }
}

console.log(maxBook);
