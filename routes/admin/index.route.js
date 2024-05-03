
const dashboarRoutes=require("./dashboard.route");
const systemConfig= require("../../config/system");
const userRoutes=  require("./user.route");

module.exports= (app) =>{
    const PATH_ADMIN=systemConfig.prefixAdmin;
    app.use(PATH_ADMIN+"/dashboard",dashboarRoutes);
    app.use(PATH_ADMIN+"/user",userRoutes);
    

}
