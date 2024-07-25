const url = "https://api.igdb.com/v4/games";


//@desc get 15 games' name and cover
//@route GET /api/games
//@access ...
const getGame15 = async (req,res)=>{
    const raw = await fetch(url,{
        method:"POST",
        headers:{
            "Client-ID":process.env.CLIENTID,
            "Authorization":`Bearer ${req.app.locals.token["access_token"]}`,
            "Content-Type": "application/json"
        },
        body:"fields name,cover.url; where total_rating > 90 & total_rating < 94 & release_dates.date > 13196293; sort total_rating desc; limit 15;"
    })
    
    if (!raw.ok) {
        throw new Error("Could not get games.");
    }

    let data = await raw.json();

    data = data.map(game =>({
        name:game.name,
        url:game.cover?.url
    }));
    console.log(data)
    res.send(data);
};

export { getGame15 }


