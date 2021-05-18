(function(){
    var precedent = "";
    var articles = document.querySelectorAll("article");
    
   
    for (const article of articles) {
        article.addEventListener('mousedown', function(e){
           
            var elems = document.getElementsByClassName(e.target.className);
          
                console.log(e);
          

            for (const elem of elems){
             
                
                if (elem.className == "Web") {
                    elem.style.backgroundColor = "#99ffcc";
                }else {
                  precedent =  ".Web";
                  resetCouleur(precedent);
                }
                 
                if (elem.className == "Image 2d/3d") {
                    elem.style.backgroundColor = "#99ffcc";
                }
                else {
                precedent = ".Image";
                resetCouleur(precedent);
                }

                if (elem.className == "Jeu") {
                    elem.style.backgroundColor = "#99ffcc";
                }
                else{
                    precedent = ".Jeu";
                    resetCouleur(precedent);
                }
                
                if (elem.className == "Spécifique") {
                    elem.style.backgroundColor = "#99ffcc";
                }
                else{
                    precedent = ".Spécifique";
                    resetCouleur(precedent);
                }
                
              
            }
        })
    }

    

    function resetCouleur(c) {
        var classes = document.querySelectorAll(c);

        for (const classe of classes ) {
            classe.style.backgroundColor = "white";
        }
    }
    




}())	