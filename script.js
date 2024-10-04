const loadAllPosts = async (category) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category ? `?category=${category}` : ''}`)
    const data = await res.json()
    displayAllPosts(data.posts)




}

const displayAllPosts = (posts) => {

    const postContainer = document.getElementById("post-container")
    postContainer.innerHTML = ""
    posts.forEach(post => {
    



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



const card=(description, view)=>{

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
    count()
    

}
const count=()=>{
    const markAsReadCounter = Number(document.getElementById('markAsReadCounter').innerHTML)
   let sum = markAsReadCounter + 1
   document.getElementById('markAsReadCounter').innerText = sum

    
}


loadAllPosts()

handleSearchByCategory = () => {

    const searchText = document.getElementById('searchPosts').value
    loadAllPosts(searchText)

}


// ! latest post section 

const latesPost= async ()=> {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json()
    displayPost(data)

}

const displayPost=(data)=>{
    const latestPostContainer = document.getElementById('latest-post-container')
   data.forEach(post => {

    const div = document.createElement("div")
    div.innerHTML = 
    
    `
            <div class="card lg:w-96 pb-5 bg-base-100 shadow-2xl">
          <figure class="lg:px-6 px-4 pt-4 lg:pt-8">
            <img src=${post.cover_image} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="p-5 lg:p-10 space-y-4 lg:space-y-5">
            <p class="opacity-50 text-start">
            <i class="fa-solid fa-calendar-days me-2"> ${post.author.posted_date? post.author.posted_date : "No Publish Date" }</i>
            
            
       
            </p>
            <h2 class="card-title text-start">${post.title}</h2>
            <p class="text-start">
             ${post.description}
            </p>
            <div class="card-actions flex gap-5 items-center">
              <div class="avatar">
                <div class="lg:w-12 w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="${post.profile_image}" />
                </div>
              </div>
              <div>
                <h3 class="text-start font-extrabold">${post.author.name}</h3>
                <p class="text-start opacity-60">${post.author.designation? post.author.designation : "Unknown"}</p>
              </div>
            </div>
    
    `

    latestPostContainer.appendChild(div)



   })
}


latesPost()