// // Await 
// // node.js ES7
// // 原生使用ES6 ES7  不用npm包
// // docker 进程隔离的船里 微服务架构
// // docker + node.js

function getFirstName() {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
       console.log('await')
       resolve()
       //resolve('hello')
    },2000)
  })
}

function getLastName() {
   return new Promise((resolve,reject) => {
    setTimeout(()=>{
      console.log('async')
     // resolve('async')
      resolve()
    },300)
  })
}

// getFirstName()
//   .then(data=>{
//     console.log(data);
//     return getLastName();
//   })
//   .then(data=>{
//     console.log(data);
//   })


// // then公交车排队问题
// // async 函数修饰关键字 让函数进入同步状态。
// // 所有耗时代码都会变成阻塞式的
// async function say() {
//   // 同步执行环境
//   let firstName = await getFirstName();
//   let lastName = await getLastName();
// }

// say();

// Await
// node.js
// node 5+ node 6.?  node 7
// 原生使用es6/es7 promise npm 包
// docker + 微服务
// docker+node.js

// function getFirstName() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('hello')
//       resolve('hello')
//     },2000)
//   })
// }
// function getLastName() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('world')
//       resolve('world')
//     },1000)
//   })
// }
// // then 公车排队问题
// // async 函数修饰关键字 让函数内部进入同步状态。
// // 所有要耗时的代码都会变成阻塞式的。

// // getFirstName()
// //   .then((data) => {
// //     return getLastName()
// //   })
// //   .then((data) => {
// //     console.log('事情办完了')
// //   })
async function say() {
  // 同步执行的环境
  // let firstName = await getFirstName()
  // let lastName = await getLastName()
  await getFirstName()
  await getLastName()
}
say()