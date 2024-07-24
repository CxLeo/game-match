import colors from 'colors';

const igdbAuth = async (req,res,next) =>{
    if (!req.app.locals.igdbAuth){
        const tokens = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENTID}&client_secret=${process.env.SECRET}&grant_type=client_credentials`,{
            method:"POST",
        })
        if (!tokens.ok){
            throw new Error("Could not get access token");
        }

        req.app.locals.token = await tokens.json();
        req.app.locals.igdbAuth = true;
        
        setTimeout(() =>{
            req.app.locals.igdbAuth = false;
        }
        , req.app.locals.token["expires_in"]*100);

        console.log(`Authenticated by IGDB successfully, this session expires in ${req.app.locals.token["expires_in"]} seconds.`.magenta)
    }
    next();
};

export default igdbAuth;