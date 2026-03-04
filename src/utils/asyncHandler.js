// const asyncHandler = ()=> {} ;



export {asyncHandler}
// const asyncHandler = (fn) => () => {}

// Some codebase use this try catch method and some codebase use promise method 

// const asyncHandler = (func)=> async (req , res , next )=> {
//     try {
//         await func(res , req , next)
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false ,
//             message : error.message
//         })
//     }
// }

