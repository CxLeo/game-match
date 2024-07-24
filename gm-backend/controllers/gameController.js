const url = "https://api.igdb.com/v4/games";


//@desc get 10 games
//@route GET /api/games
//@access ...
const getGame = async (req,res)=>{
    const data = await fetch(url,{
        method:"POST",
        headers:{
            "Client-ID":process.env.CLIENTID,
            "Authorization":`Bearer ${req.app.locals.token["access_token"]}`,
            "Content-Type": "application/json"
        },
        body:"fields name,cover; where rating > 75;"
    })
    
    if (!data.ok) {
        throw new Error("Could not get games.");
    }
    const info = await data.json();
    console.log(info);



    
    res.send(info);
};

export { getGame }


