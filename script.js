let indicateur = document.getElementById("indi")
        let bloc1 = document.getElementById("niv1")
        let bloc2 = document.getElementById("niv2")
        let bloc3 = document.getElementById("niv3")
        function block(){
            if(indicateur.value == 1){
                bloc1.style.display = "flex"
                bloc2.style.display = "none"
                bloc3.style.display = "none"}
            if(indicateur.value == 2){
                bloc1.style.display = "none"
                bloc2.style.display = "flex"
                bloc3.style.display = "none"}
            if(indicateur.value == 3){
                bloc1.style.display = "none"
                bloc2.style.display = "none"
                bloc3.style.display = "flex"}
        }
        indicateur.addEventListener("change",block)