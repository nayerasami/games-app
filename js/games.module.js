import { Ui } from "./ui.module.js";
import { Details } from "./details.js";
export class Games{
    constructor(){
     
        this.gamesArr=Array.from(document.querySelectorAll('.game'))
        this.activeNav=document.querySelector(".nav-link .active")
      
     
        this.fetchApi("MMORPG");
        this.gamesArr.forEach((link)=>{
            link.addEventListener("click",(e)=>{
                console.log(e.target.name);
                this.fetchApi(e.target.name)
               
            })
        })

 this.ui=new Ui()
 this.animateNavbar()

 
    }



 async fetchApi(category){


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0d0028bc24msh7a87076f027554ep1bb21djsn242faf1b0b0b',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    

    
  let apiData= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
let response =await apiData.json()
 this.ui.displayGames(response)
 this.openGame()
 
    }
  animateNavbar(){
$(document , window).scroll(()=>{
    let distance =$(".navbar").offset().top 
    if($(document).scrollTop() >= $(".navbar").offset().top){
      $("#navbar").css({"top":`-${distance}`})
    
    console.log(distance);
    console.log("hi");
    }
    })
  }
  
    openGame(){

   document.querySelectorAll(".card").forEach((item)=>{
item.addEventListener("click",()=>{
let id =item.dataset.id
console.log(id);
this.showPage(id)

})
    })
    }
    showPage(gameId){
        let details =new Details(gameId)
        document.querySelector("#gamesSection").classList.add("d-none")
        document.querySelector("#details").classList.remove("d-none")
  
    }
   
}



