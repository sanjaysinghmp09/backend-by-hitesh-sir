class ApiError extends Error {
    constructor (
        statusCode ,
        message = "Sothing went wrong !!",
        error = [],
        statck = ""
    ){
        // explain super speacilly
       super(message)
       this.statusCode = statusCode
       this.data = null 
    //    what happend in the this.data
       this.message
       this.success = false;
       this.errors = errors

    }
}