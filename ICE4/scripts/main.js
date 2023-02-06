(function (){
    function DisplayButton(){
        let randomButton = document.getElementById("RandomButton")
        randomButton.addEventListener("click", function() {
            Location.href = "/webd6201-in-class-demo/projects.html"
        })

        let mainContent = document.getElementsByTagName("main")[0]
        mainContent.setAttribute("class", "container")

        //another way to access body
        documentBody = document.body
        
        let mainParagraph = document.createElement("p")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt- 3 container")
        
        //concatenation - '1' + '2' + '3'
        //interpolation - `${var}`
        let firstString = "this is a" 
        let secondString = `${ firstString } main paragraph that we added through javascript and this is also on Github Pages`
        mainParagraph.textContent = secondString

        /**
         * textContent - changes text node
         * innerHTML - overwrites anything in the innerHTML of that element
         */

        //add after(after)
        mainContent.appendChild(mainParagraph)

        //add before(before)
        //mainContent.before(mainParagraph)

        //delete element
        //document.getElementById("AboutUsButton").remove()
        
        //documentBody.innerHTML= `
        //<div class="container">
        //    <h1 class="display-1">Hello WEBD6201</h1>
        //    <p class="mt-5 lead"> and... what do you think of this method?
        //</p></div> 
        //`
        let Quintyn = new Contact("Quintyn","6478393531","GG@dcmail.ca")
        console.log(Quintyn.toString())
    }
    function Start(){
        console.log("App started!")

        switch(document.title){
            case"Home - WEBD6201 Demo":
                DisplayButton()
                break
            case"Projects - WEBD6201 Demo":
                DisplayButton()
                break

        }
    }

    window.addEventListener("load", Start)
})()