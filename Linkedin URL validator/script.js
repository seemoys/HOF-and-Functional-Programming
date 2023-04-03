const btn=document.getElementById("check-btn");
const urlRegex=/^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/?$/;
function urlValidate(){
    const url=document.getElementById("url").value;
    if(urlRegex.test(url)){
        alert(`${url} is VALID`);
    }else{
        alert(`${url} is NOT VALID`);
    }
}
btn.addEventListener("click",urlValidate);