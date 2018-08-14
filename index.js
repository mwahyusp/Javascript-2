// const names = [
//     "Mr. Fahri",
//     "Mr. Abdul",
//     "Mrs. Josephhine",
//     "Mr. Joseph",
//     "Mr. Paul",
//     "Mrs. Paula",
//     "Mr. Hakim"
//   ];
// LEVEL 0 -----------------
//   console.log(names); 

// LEVEL 1 -----------------

// var all = names.filter(function(str){
// return  str.includes("Mr.");
// })
// console.log(all);

// LEVEL 2 -----------------

// var mr = names.map(nama => {
//   if (nama.includes("Mr.")) {
//   return `${nama} (Male)` 
//   }
//   else {
//     return `${nama} (Female)` 

//   }
// })
// console.log(mr);

// LEVEL 3 -----------------
// function search_name(s){
//   return names.find(nama => nama.toLowerCase().includes(s.toLowerCase())) 
// }
// console.log(search_name("abdul"));

// LEVEL 4 -----------------

// const names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine,"]; 
// const names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];

// const names3 = names1.concat(names2);
// console.log(names3);

// Level 5 ---------------

// const names = [
//     "Mr. Fahri",
//     null,
//     undefined,
//     "Mr. Abdul",
//     24,
//     "Mrs. Josephhine",
//     "Mr. Joseph",
//     "Mr. Paul",
//     32,
//     "Mrs. Paula",
//     7,
//     22,
//     "Mr. Hakim"
//   ];
  
//   var showString = names.filter(word => typeof word == 'string')
//   console.log(showString.join(', '))
