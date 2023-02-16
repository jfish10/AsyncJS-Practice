// console.log(" I ")
// console.log(" eat ")
// setTimeout(() => {
//   console.log(" ice cream ")
// }, 3000)
// console.log(" with a ")
// console.log(" spoon ")
let ingredients = {
    liquids: ["water", "ice"],
  fruits : ["berries", "banana", "grapes", "apple"],
  containers: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts", "coconut shavings", "honey"],
}

// let order = (fruit_name, call_production) => {

// setTimeout(() => {
//     console.log(`${ingredients.fruits[fruit_name]} was selected`);

//     call_production();
// }, 2000)
  
  
// }


//CALLBACK HELL EXAMPLE
// let production = () => {
  
//     setTimeout(() => {
//         console.log("Production has started")

//         setTimeout(() => {
//             console.log("the fruit has been chopped")

//             setTimeout(() => {
//                 console.log(`${ingredients.liquids[0]} and ${ingredients.liquids[1]} was added`)

//                 setTimeout(() => {
//                     console.log('The machine was started')

//                     setTimeout(() => {
//                        console.log(`${ingredients.containers} was selected`) 

//                     setTimeout(() => {
//                         console.log(`${ingredients.toppings[0]} was sprinkled`)

//                         setTimeout(() => {
//                             console.log("Serve ice cream!")
                            
//                         }, 2000)
//                     }, 3000)
                        
//                     }, 2000)
//                 }, 1000)
                
//             }, 1000)
            
//         }, 2000)
//     }, 1000)
// }

//order(0, production);

let is_shop_open = false;


//RESOLVE/REJECT PROMISE EXAMPLE
// let order = (time, work) => {

//     return new Promise((resolve, reject) => {

//         if(is_shop_open) {
//             setTimeout(() => {
//                 resolve(work())
//             }, time);
//         } else {
//             reject(console.log('our shop is closed!'))
//         }
//     } )
// }

// order(2000, ()=>{console.log(`${ingredients.fruits[0]} was selected`)})
// .then(() => {
//     return order(1000, () => {console.log('Production has started!')})
// })
// .then(() => {
//     return order(2000, () => {console.log('The fruit has been chopped.')})
// })
// .then(() => {
//     return order(1000, ()=> console.log(`${ingredients.liquids[0]} and ${ingredients.liquids[1]} have been added.`))
// })
// .then(() => {
//     return order(1000, () => {
//         console.log('Started the ice cream machine.')
//     })
// })
// .then(() => {
//     return order(2000, () => {
//         console.log(`${ingredients.containers[0]} has been selected as the holder.`)
//     })
// })
// .then(() => {
//     return order(3000, () => {
//         console.log(`${ingredients.toppings[0]} has been selected as the flavor.`)
//     })
// })
// .then(() => {
//     return order(2000, () => console.log('Ice cream has been served! Enjoy :)'))
// })

// .catch(() => {
//     console.log("Customer has canceled their order")
// })

// .finally(() => {
//     console.log('Our shop is now closed for the day!')
// })

//Async Await Examples
// async function order() {
//     try {
//         await abc;
//     } catch(error) {
//        console.log('abc doesn"t exist', error) 
//     } finally {
//         console.log("runs code anyway")
//     }
// }


// order()
// .then(() => {
//     console.log('hello this is next')
// })

// let topping_choice = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log('Which topping would you like?'))
//         }, 3000)
//     })
// }
// async function kitchen() {
//     console.log("A")
//      console.log("B")
//      console.log("C")
    
//     await topping_choice()
    
//      console.log("D")
//      console.log("E")
// }

// kitchen()

// console.log("doing the dishes")
// console.log("cleaning the tables")
// console.log("taking new orders")

function time(ms) {
    
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(resolve, ms)
        } else {
            reject(console.log("the shop is closed for business."))
        }
    } );
    
}

async function iceCreamKitchen() {
    try {
        await time(2000)
        console.log(`${ingredients.fruits[0]} was selected`)

        await time(500)
        console.log("Started ice cream production")

        await time(2000)
        console.log("cutting the fruit")

        await time(1000)
        console.log(`${ingredients.liquids[0]} & ${ingredients.liquids[1]} was retrieved`)

        await time(1000)
        console.log("starting the machine.")

        await time(2000)
        console.log(`${ingredients.containers[0]} has been selected as the holder.`)

        await time(3000)
        console.log(`${ingredients.toppings[0]} has been chosen as the flavor.`)

        await time(2000)
        console.log("Serving ice cream, collecting money, and buying a nice lambo for myself!")

        
    } catch(error) {
        console.log("The customer has canceled their order", error)
    } finally {
        console.log("The shop has closed for the day.")
    }
}

iceCreamKitchen()

