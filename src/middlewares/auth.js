const checkAuthentication = async (ctx, next) => {
    if(ctx.session.isAuthenticated){
        return ctx.redirect('/pm2dashboard/apps')
    }
    await next()
}

const isAuthenticated = async (ctx, next) => {
    if(!ctx.session.isAuthenticated){
        return ctx.redirect('/pm2dashboard/login')
    }
    await next()
}

module.exports = {
    isAuthenticated,
    checkAuthentication,
};