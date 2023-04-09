import { Ui } from "./ui.module.js"
export class Details{
    constructor(id){
        this.ui=new Ui()
       
       this.ButtonClose=document.getElementById("closeBtn")
   this.closePage()
       
       this.getDetails(id)
    }

    async getDetails(dataId){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0d0028bc24msh7a87076f027554ep1bb21djsn242faf1b0b0b',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let detailsApi= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${dataId}`, options)
        let detailResponse= await detailsApi.json()
     console.log(detailResponse);
this.ui.displayDetails(detailResponse)
      
    }
closePage(){
    this.ButtonClose.addEventListener("click",()=>{
        document.querySelector("#details").classList.add("d-none")
            document.querySelector("#gamesSection").classList.remove("d-none")
      
       })
}
}
