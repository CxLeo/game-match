const notFound = (req,res,next)=>{
    const error = new Error("Not Found this page");
    error.status = 404;
    next(error);
};

export default notFound;