let faceBookIcon = document.getElementById("facebookIcon")
let twitterIcon = document.getElementById("twitterIcon")
function mOverFB(){
    faceBookIcon.src = "../images/icon-facebook2.svg";
}
function mOutFB(){
    faceBookIcon.src = "../images/icon-facebook.svg";
}
function mOverTwitter(){
    twitterIcon.src = "../images/icon-twitter2.svg";
}
function mOutTwitter(){
    twitterIcon.src = "../images/icon-twitter.svg";
}
function changeIllustration(obj){
    //change bottom border
    removeBottomBorders();
    obj.style.borderBottomWidth = "4px";
    obj.style.borderColor = "#dd6b20";

    let chosenTitle = document.querySelector("#" + obj.id + "> p").innerHTML;
    if (chosenTitle == "Speedy Searching"){
        //change Image
        document.querySelector("#illustration img").src = "../images/illustration-features-tab-2.svg";
        //change texts
        document.getElementById("title").innerHTML = "Intelligent Search";
        document.getElementById("content").innerHTML = 
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks";
    } else if (chosenTitle == "Easy Sharing"){
        //change Image
        document.querySelector("#illustration img").src = "../images/illustration-features-tab-3.svg";
        //change texts
        document.getElementById("title").innerHTML = "Share your Bookmarks";
        document.getElementById("content").innerHTML = 
        "Easily share your bookmarks and collections with others. Create a shardable link that you can send at the click of a button";
    } else if(chosenTitle == "Simple Bookmarking"){
        //change Image
        document.querySelector("#illustration img").src = "../images/illustration-features-tab-1.svg";
        //change texts
        document.getElementById("title").innerHTML = "Bookmark in one click";
        document.getElementById("content").innerHTML = 
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
    }
}
function removeBottomBorders(){
    let titles = document.querySelectorAll("#titles > div");
    document.querySelector("#titles > div").className = "w-52 px-5 py-4 text-center border-b-2 hover:text-orange-600"
    for (let index = 0; index < 3; index++) {
        titles[index].style.borderBottomWidth = "2px";
        titles[index].style.borderColor = "";
    }     
}
function showAns(obj){
    let ans = document.querySelector("#" + obj.id + " p:last-child");
    if ( ans.className == "w-[500px] text-[rgba(0,0,0,0.5)] hidden"){
        ans.className = "w-[500px] text-[rgba(0,0,0,0.5)]";
    } else {
        ans.className = "w-[500px] text-[rgba(0,0,0,0.5)] hidden"
    }
    
    let icon = document.querySelector("#" + obj.id + " img");
    if ( icon.src == "http://127.0.0.1:5501/images/icon-arrow.svg"){
        icon.src = "../images/icon-arrow1.svg";
        icon.style.transform = "rotate(180deg)"
    } else {
        icon.src = "../images/icon-arrow.svg";
        icon.style.transform = "rotate(0)"
    }
}

function checkEmail(){
    let email = document.getElementById("email").value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        alert("Thanks. We'll keep you updated");
        document.getElementById("errorMsg").className = 
        "absolute top-full left-0 border-2 bg-red-600 text-xs italic p-1 border-red-600 hidden";
        document.getElementById("email").className = 
        "py-3 px-5 rounded-md outline-none w-96 border-2";
        document.getElementById("email").value = "";
        document.getElementById("errorIcon").className = 
        "absolute top-0 right-0 mt-[15px] mr-3 w-6 h-6 hidden";
    } else if (email == ""){
        alert("enter email");
        document.getElementById("errorMsg").className = 
        "absolute top-full left-0 border-2 bg-red-600 text-xs italic p-1 border-red-600 hidden";
        document.getElementById("email").className = 
        "py-3 px-5 rounded-md outline-none w-96 border-2";
        document.getElementById("errorIcon").className = 
        "absolute top-0 right-0 mt-[15px] mr-3 w-6 h-6 hidden";
    } else {
        document.getElementById("errorMsg").className = 
        "absolute top-full left-0 border-2 bg-red-600 text-xs italic p-1 border-red-600";
        document.getElementById("email").className = 
        "py-3 px-5 rounded-md outline-none w-96 border-2 border-red-600";
        document.getElementById("errorIcon").className = 
        "absolute top-0 right-0 mt-[15px] mr-3 w-6 h-6";
    }
}
