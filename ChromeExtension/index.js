let myLead = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage)
 

inputBtn.addEventListener("click", function(){    
    myLead.push(inputEl.value)
    // console.log(myLead)
    inputEl.value = ""

    
    window.localStorage.setItem("myLeads", JSON.stringify(myLead))
    renderLead()

    console.log(localStorage.getItem("myLeads"))
})

function renderLead(){
    let listItem = ''
    for (let i = 0; i < myLead.length; i++){
        //  
        listItem += `
        <li>
            <a href='${myLead[i]}'target= '_blank'>
                ${myLead[i]}
            </a>
        </li> `
    } 

    ulEl.innerHTML = listItem

}
