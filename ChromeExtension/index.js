let myLead = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLead = leadsFromLocalStorage
    renderLead()
}

deleteBtn.addEventListener('dblclick', function(){
    localStorage.clear()
    myLead = []
    renderLead()
})
 

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
