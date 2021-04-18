function fetchGitHubByValue(value){
    fetch(`https://api.github.com/search/users?q=${value}`, {
       
        headers: {
           "Accept": "application/vnd.github.v3+json"
       }
    })
    .then(res => res.json())
    .then (json => json.items.forEach((user) => {
        const li = createLi(user)
            appendLi(li)
        
    }))
        
}

const submitBttn = document.getElementById('submit-button')
const searchBox = document.getElementById('search')
    submitBttn.addEventListener('click', (e) => {
        e.preventDefault()
        fetchGitHubByValue(searchBox.value)
    });
    
// append data to 'git-hub container'
function createLi(user) {
    user.createLi
}


function appendLi(li) {
    const userList =
   user.append(li)
}


