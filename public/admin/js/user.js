const buttonsDelete=document.querySelectorAll("[button-delete]");
if(buttonsDelete.length>0){
    const formDeleteUser=document.querySelector("#form-delete-user");
    const path=formDeleteUser.getAttribute("data-path");
    buttonsDelete.forEach(button=>{
        button.addEventListener("click",()=>{
            // console.log(button);
            const isComfirm=confirm("Bạn có muốn xóa người dùng này?");
            if(isComfirm){
                const id=button.getAttribute("data-id");
                // console.log(id);
                const action=`${path}/${id}?_method=DELETE`;
                // console.log(action);
                formDeleteUser.action=action;
                formDeleteUser.submit();
            }



        });
    });
}
// End delete item