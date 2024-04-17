//[get] admin/user
const User=require("../../models/usermodel");
const SearchHelper=require("../../helpers/search");

const { query } = require("express");

module.exports.index = async (req,res)=>{
    // console.log(req.query.status);
    let find={
        deleted:false
       

    };
    if(find.status){
        find.status=req.query.status;

    }
    
    
    // tìm kiem
    const objectSearch=SearchHelper(req.query);

    if(objectSearch.regex){
        find.fullName=objectSearch.regex;
    }
        
    
    // console.log(user);
    
    // chinh sua nguoi dung
    const user= await User.find(find);
    res.render("admin/pages/user/index",{
        pageTitle:" danh sach nguoi dung",
        user : user,
        keyword: objectSearch.keyword
       
    });
}