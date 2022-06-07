var naveg = document.getElementById("naveg");
var wi = document.body.clientWidth;


window.addEventListener("resize", function() {
    if(this.document.body.clientWidth < 450){
        this.document.getElementById("naveg").classList.remove("col-md-8");
        this.document.getElementById("naveg").classList.add("col-md-2")
        this.document.getElementById("iconfoot").classList.remove("col-md-4");
        this.document.getElementById("iconfoot").classList.add("col-md-2")
    }
    else{
        this.document.getElementById("naveg").classList.add("col-md-8")
    }
})
