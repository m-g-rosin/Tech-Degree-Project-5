function filter () {
    let input = document.getElementById("mysearch");
    let search = input.value.toUpperCase();
    let found = document.getElementsByTagName("a");
    
    for(let i = 0; i < found.length; i++) {
        console.log(search)
        let name = document.getElementsByTagName("a")[i].getAttribute("data-caption").toUpperCase();
        console.log(search.indexOf(name))
        
        if(name.indexOf(search) > -1 || search == "") {
            document.getElementsByTagName("a")[i].style.display = "";
        
        } else {   
            document.getElementsByTagName("a")[i].style.display = "none";
             
    }
}
}