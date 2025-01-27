let a = true;
function navshow(){

    if(a = true){
    document.getElementById("navjs").style.display = "block"
    document.getElementById("omdome").style.display = "none"
    document.getElementById("mainone").style.display = "none"
    document.getElementById("sectionmain").style.display = "none"
    document.getElementById("sectionmaintwo").style.display = "none"
    document.getElementById("hed").style.display = "none"
    document.getElementById("fot").style.display = "none"
    a = false;
    }

    else if(a = false){
        document.getElementById("navjs").style.display = "none"
        document.getElementById("omdome").style.display = "block"
        document.getElementById("mainone").style.display = "block"
        document.getElementById("sectionmain").style.display = "block"
        document.getElementById("sectionmaintwo").style.display = "block"
        document.getElementById("hed").style.display = "block"
        document.getElementById("fot").style.display = "block"
        a = true
    }
}