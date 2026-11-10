export const a = 10;  // named export
export const b = 20;  // named export 
export const c = 30;  // named export
export const d = 40;  // named export
export const e = 50;  // named export

// let obj

// export default obj = {  // default export 
//     x: 5,
//     y: 10
// }



// obj can also be exported like this:

const obj = {  // default export of obj
    x: 5,
    y: 10
}
export default obj


// default export can be exported by any given name by the user.
// Note that default export do not require braces at the time of import