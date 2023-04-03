const btn=document.getElementById("check-btn");
const urlRegex=/^https?:\/\/[\w\d-]+(\.[\w\d-]+)+[^\s]*$/;
function urlValidate(){
    const url=document.getElementById("url").value;
    if(urlRegex.test(url)){
        alert(`${url} is Valid`)
    }else{
        alert(`${url} is not Valid`)
    }
}
btn.addEventListener("click",urlValidate);