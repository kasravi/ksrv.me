function toggle(f) {
    var menu = ['music','events','publications','projects','social', 'videos'];
    menu.forEach(function(m){
        var x = document.getElementById(m);
        if(f===m){
            if (x.style.display === "none") {
                x.style.display = "flex";
            } else {
                x.style.display = "none";
            }
        } else{
            x.style.display = "none";
        }
    })
}

function prepare(){
    var music = document.getElementById('music');
}


window.onload = function  () {
	var li_ul = document.querySelectorAll(".col_ul li  ul");
    for (var i = 0; i < li_ul.length; i++) {
        li_ul[i].style.display = "none"
    };

    var exp_li = document.querySelectorAll(".col_ul li > span");
    for (var i = 0; i < exp_li.length; i++) {
        exp_li[i].style.cursor = "pointer";
        exp_li[i].onclick = showul;
    };
    function showul () {
        nextul = this.nextElementSibling;
        if(nextul.style.display == "block")
            nextul.style.display = "none";
        else
            nextul.style.display = "block";
    }

    var ads = document.querySelectorAll('audio');
    for (var i = 0; i<ads.length; i++){
        ads[i].id = ID();
        ads[i].parentElement.innerHTML += '<span onclick="play(\''+ads[i].id+'\')"> &gt;</span>';
    }
}

var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

function play(d){
    document.getElementById(d).parentElement.innerHTML = document.getElementById(d).parentElement.innerHTML.replace('<span onclick="play(\''+d+'\')"> &gt;</span>','<span onclick="pause(\''+d+'\')"> ||</span>');
    document.getElementById(d).play();
}

function pause(d){
    document.getElementById(d).parentElement.innerHTML = document.getElementById(d).parentElement.innerHTML.replace('<span onclick="pause(\''+d+'\')"> ||</span>','<span onclick="play(\''+d+'\')"> &gt;</span>')
    document.getElementById(d).pause();
}