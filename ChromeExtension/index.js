let myLead = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage){
    myLead = leadsFromLocalStorage
    render(myLead)
}


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLead.push(tabs[0].url)    
        localStorage.setItem("myLeads", JSON.stringify(myLead))
        render(myLead)
})    
})

function render(leads){
    let listItem = ''
    for (let i = 0; i < leads.length; i++){
        //  
        listItem += `
        <li>
            <a href='${leads[i]}'target= '_blank'>
                ${leads[i]}
            </a>
        </li> `

        
    } 
    
ulEl.innerHTML = listItem
}

deleteBtn.addEventListener('dblclick', function(){
    localStorage.clear()
    myLead = []
    render(myLead)
})
 

inputBtn.addEventListener("click", function(){ 
    if (inputEl.value) {
        myLead.push(inputEl.value)
        // console.log(myLead)
        inputEl.value = ""

    
        window.localStorage.setItem("myLeads", JSON.stringify(myLead))
        render(myLead)

        console.log(localStorage.getItem("myLeads"))
    } 
    
})


