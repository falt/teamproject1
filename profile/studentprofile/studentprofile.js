let readMore = document.getElementsByClassName("read-more);
let newsContainer = document.getElementsByClassName("article")
let 

function showHide(elementid){
    if (document.getElementById(elementid).style.display == 'none'){
        document.getElementById(elementid).style.display = '';
    } else {
        document.getElementById(elementid).style.display = 'none';
    }
}