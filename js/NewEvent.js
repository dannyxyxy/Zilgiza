function submit_event()
{
    var result = confirm("작성한 글을 게시하시겠습니까?");
    if(result){
        alert("게시하였습니다.");
        location.href="./Community.html";
    }else{
        alert("취소하였습니다.");
    }
}
