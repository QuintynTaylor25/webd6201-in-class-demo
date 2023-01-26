(function (){
    function DisplayButton(){
        let randomButton = document.getElementById("RandomButton")
        randomButton.addEventListener("click", function(){
            Location.href = './webd6201-23/webd6201-in-class-demo/projects.html'
        })

        let mainContent = document.getElementsByTagName("main")[0]
        console.setAttribute("class", "container")

        let mainParagraph = documentcreateElement("p")
        mainParagraph.serAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt- 3 container")
        
        //concatenation - '1' + '2' + '3'
        //interpolation - `${var}`
        let firstString = "this is a" 
        let secondString = `${firstString} main paragraph that we added through javascript`
        mainParagraph.textContent = secondString

        //add after(after)
        mainContent.appendchild(mainParagraph)

        //add before(before)
        //mainContent.before(mainParagraph)

        //delete element
        //mainContent.before(mainParagraph)
        
        //documentBody.innerHTML= `
        //<div class="container">
        //    <h1 class="display-1">Hello WEBD6201</h1>
        //    <p class="mt-5 lead"> and... what do you think of this method?
        //</p></div> 
        //`
        
    }

    function Start(){
        console.log("App started!")

        if(document.title ===''){

        } else if (document.title === 'sads'){

        }

        switch(document.title){
            case"Home -WEBD6201 Demo":
                DisplayButton()
                break
            case "Projects - WEBD6201 Demo":
                DisplayButton()
                break

        }
    }

    window.addEventListener("load", Start)
})()