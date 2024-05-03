//[get] admin/user
const User=require("../../models/usermodel");
const SearchHelper=require("../../helpers/search");
const PaginationHelper=require("../../helpers/pagination");

const systemConfig=require("../../config/system");
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
        find.firstName=objectSearch.regex;
    }
        
    
    
    //phân trang
   
    const countUser = await User.countDocuments(find);
    let objectPagination=PaginationHelper({
        currentPage:1,
        limitItems:5
        },
        req.query,
        countUser
    );
    //
    
   
    const user= await User.find(find).limit(objectPagination.limitItems).skip(objectPagination.skip);
    // console.log(user);
    res.render("admin/pages/user/index",{
        pageTitle:" danh sach nguoi dung",
        user : user,
        keyword: objectSearch.keyword,
        pagination: objectPagination
    });
}


//[DELETE] /admin/user/delete/:id
module.exports.deleteUser=async(req,res)=>{
    const id=req.params.id;
    await User.updateOne({_id:id},{
        deleted:true,
        deleteAt: new Date()
    });
   
    res.redirect("back");
};

// [Get] /admin/user/create
module.exports.create = async (req,res)=>{
    
    res.render("admin/pages/user/create",{
        pageTitle:" Them mới người dùng",

    });
}

//[POST] /admin/user/create
module.exports.createPost =async(req,res)=>{
    if(req.file){
        req.body.image=`/uploads/${req.file.filename}`;
    }
    
    // console.log(req.body);
    const user=new User(req.body);
    await user.save();
    res.redirect(`${systemConfig.prefixAdmin}/user`);
} 

module.exports.edit= async (req,res)=>{
    // console.log(req.params.id);
    try{
        const find={
            deleted: false,
            _id: req.params.id
        };
        const user=await User.findOne(find);
        // console.log(product);
        res.render("admin/pages/user/edit",{ 
            pageTitle:"Chỉnh sửa User",
            user: user
        });
    } catch(error){
        
        res.redirect(`${systemConfig.prefixAdmin}/user`)
    }
}
// [PATCH] /admin/user/edit/:id
module.exports.editPatch = async (req,res)=>{
    // console.log(req.body);
    const id=req.params.id;
    if(req.file){
        req.body.image=`/uploads/${req.file.filename}`;
    }
    try{
        await User.updateOne({_id: id},req.body);
    
    } catch (error){
        

    }
    res.redirect(`${systemConfig.prefixAdmin}/user`)
}