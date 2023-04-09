export class Ui{
    constructor(){
      this.gamesArr=Array.from(document.querySelectorAll('.game'))
      console.log(this.gamesArr);
  this.rowContain=document.getElementById("gamesInfo")
  this.detailsSec=document.getElementById("detailsContent")
  
    }


displayGames(finalResponse){
    var temp=""
    for(let i=0;i<finalResponse.length;i++){
        temp+=` <div class="col-md-3">
        <div class="card  mt-4" data-id="${finalResponse[i].id}" style="width: 18rem;">
            <div class="card-container m-4">
               <img src="${finalResponse[i].thumbnail}" class=" w-100 card-image card-img-top" alt="...">
               <div class="card-body ">
               <div class="card-title d-flex justify-content-between align-items-center">
                <div class="game-name">
                <h6>${finalResponse[i].title.split(" ", 2)}</h6> 
             </div>
             <div class="free-button">
               <a href="" class="btn btn-warning button1" id="freeBtn">Free</a>
             </div>
               </div>
                 <p class="card-text text text-muted text-center">${finalResponse[i].short_description.split(" ", 8)}</p>
    
                </div>
                <div class="card-footer hstack d-flex justify-content-between align-items-start">
                  <div class="type mt-1">
    <p id="game-type">${finalResponse[i].genre}</p>
                  </div>
                  <div class="device mt-1">
    <p class="device-type">${finalResponse[i].platform}</p>
                  </div>
                 
                </div>
                
            </div> 
        </div>
    </div>`
    }
this.rowContain.innerHTML=temp;

  }

  displayDetails(data){
   var det=` <div class="col-md-4"> <img src="${data.thumbnail}" class="w-100" alt=""></div>
   <div class="col-md-8">
     <h4 class="text-light fw-bold">Title: <span>${data.title}</span>  </h4>
<p class="name1">Category : <span class="span1">${data.genre}</span></p>
<p class="name1">Platform : <span class="span1">${data.platform}</span></p>
<p class="name1">Status : <span class="span1">${data.status}</span></p>
<p class="des">${data.description}</p>

<a  href="${data.game_url}" class="btn btn-outline-warning show-game">Show Game</a>

</div>
 </div>
</div>`
  

this.detailsSec.innerHTML=det
}
  
}
