const loadAllPosts = async (category) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category ? `?category=${category}` : ''}`)
    const data = await res.json()
    displayAllPosts(data.posts)




}



const displayAllPosts = (posts) => {

    const postContainer = document.getElementById("post-container")
    postContainer.innerHTML = ""
    posts.forEach(post => {
        console.log(post)



        const card = document.createElement("div")
        card.innerHTML =

            `

         
          <div class="bg-gray-200 rounded-xl flex p-10 gap-8  ">

            <div class="border-4">
              <div class=" avatar relative ">
                <div class="w-24 rounded-full">
                  <img src="${post.image}" />
                </div>


                ${post.isActive === true ? `<div id="activeStatus" class="h-4 w-4 bg-green-500 rounded-full absolute right-2 top-1 " >
                </div>` : `<div id="activeStatus" class="h-4 w-4 bg-red-500 rounded-full absolute right-2 top-1 " >
                </div>` }


      


              </div>
            </div>

            <div class="space-y-4">

              <div class="flex gap-2 ">
                <p>${post.category}</p>
                <p>${post.author.name}</p>
              </div>

              <p class="text-2xl font-bold">${post.title}</p>

              <p class="border-b-2 border-gray-300 pb-4"  >${post.description}</p>

              

              <div class="flex justify-between ">

                <div class="flex gap-4">
                  <p>${post.comment_count}</p>
                  <p>${post.view_count}</p>
                  <p>${post.posted_time} Min</p>
                </div>
                <div onclick="card('${post.description}', '${post.view_count}')" >
                  <img class="h-10" src="https://img.icons8.com/?size=80&id=783cmu1qIACD&format=png">
                </div>

              </div>

            </div>

          </div>

        
         `
        postContainer.append(card)
    })


}


let count = 1
const card=(description, view)=>{

    const markAsReadCounter =document.getElementById('markAsReadCounter')
    markAsReadCounter.innerText = count++
    const markAsReadContainer = document.getElementById('markAsReadContainer')
    
    const div = document.createElement('div')
    div.classList = "border-2 p-2 bg-gray-300 rounded-xl"
    div.innerHTML = `
    
    <div class="flex gap-10">
    
    <div>${description}</div>
    <div>${view}</div>
    
    
    </div>
    
    
    `
    markAsReadContainer.appendChild(div)
    

}


loadAllPosts()

handleSearchByCategory = () => {

    const searchText = document.getElementById('searchPosts').value
    loadAllPosts(searchText)

}
