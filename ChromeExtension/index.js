let myLead = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function(){    
    myLead.push(inputEl.value)
    // console.log(myLead)
    inputEl.value = ""
    renderLead()
})

function renderLead(){
    let listItem = ''
    for (let i = 0; i < myLead.length; i++){
        // listItem +=("<li><a href='"+ myLead[i] +"'target= '_blank'>"+ myLead[i] + "</a></li> ")
        listItem += `
        <li>
            <a href='${myLead[i]}'target= '_blank'>
                ${myLead[i]}
            </a>
        </li> `
    } 

    ulEl.innerHTML = listItem

}
