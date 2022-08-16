// var httpReq = new XMLHttpRequest()
// allResp = []

// function getData(q) {
//     httpReq.open('GET', `https://forkify-api.herokuapp.com/api/search?&q=${q}`)
//     httpReq.send()

//     httpReq.addEventListener('readystatechange', function() {
//         if (httpReq.readyState == 4) {
//             allResp = JSON.parse(httpReq.response).recipes
//             display()

//         }
//     })
// }
// getData('salad')

// function display() {
//     var box = ``
//     for (i = 0; i < allResp.length; i++) {
//         box += `<div class="col-md-4">
//         <img class="w-100" height="250" src="${allResp[i].image_url}" alt="">
//         <h2>${allResp[i].title.split(' ').slice(0,2).join(' ')}</h2>
//         <p>${allResp[i].publisher}</p>
//     </div>`
//     }
//     document.getElementById('recipesRow').innerHTML = box
// }
// var searchInput = document.getElementById('searchInput')
// var searchBtn = document.getElementById('searchBtn')

// searchBtn.addEventListener('click', function() {
//     getData(searchInput.value)
// })





var allResp = []

function getData(data) {
    var httpReq = new XMLHttpRequest()
    httpReq.open('GET', `https://forkify-api.herokuapp.com/api/search?&q=${data}`)
    httpReq.send()

    httpReq.addEventListener('readystatechange', function () {

        if (httpReq.readyState==4) {
            allResp = JSON.parse(httpReq.response).recipes
            display()
            
        }
       
    })
}
getData('pizza')


function display() {
    var box = ''
    for (let i = 0; i < allResp.length; i++) {
        box += `<div class="col-md-4">
                <img class="w-100" height="250" src="${allResp[i].image_url}" alt="">
                <h2>${allResp[i].title.split(' ').slice(0, 2).join(' ')}</h2>
                <p>${allResp[i].publisher}</p>
            </div>`


    }
    document.getElementById('recipesRow').innerHTML = box
}

var searchBtn=document.getElementById('searchBtn')
var searchInput=document.getElementById('searchInput')

searchBtn.addEventListener('click',function(){
    
    getData(searchInput.value)
})



// async function getSalad(data){

//     let ahmed=await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${data}`)
//     let conver=await ahmed.json()
//     console.log(conver.recipes);
// }
// getSalad('salad')


// let demo=document.querySelector('.demo span')
// let x= setInterval(function(){

//     let count=demo.innerText
//     count++
//     demo.innerText=count
//     if (demo.innerText==500) {
//         clearInterval(x)
        
//     }

// },10)