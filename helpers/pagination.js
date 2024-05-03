module.exports=(objectPagination,query,countUser)=>{
    if(query.page){
        objectPagination.currentPage=parseInt(query.page);
    }
    objectPagination.skip=(objectPagination.currentPage-1)* objectPagination.limitItems;
    const totalPage=Math.ceil(countUser/objectPagination.limitItems);
    // console.log(totalPage);
    objectPagination.totalPage=totalPage;

    return objectPagination;
}