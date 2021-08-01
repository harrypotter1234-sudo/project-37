class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

      
      background("yellow")

    //write code to show a heading for showing the result of Quiz

  
       //call getContestantInfo( ) here
   Contestant.getPlayerInfo();
       
 var position=250;
    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      fill("blue");
      text("NOTE:Contestant who won is highlighted in green",130,210)
   
        for(var plr in allContestants){

          var correctAns="2";
          if(correctAns === allContestants[plr].answer)
          fill("green")
          else
          fill("red")
          text(allContestants[plr].name+":"+allContestants[plr].answer,200,position)
          position=position+30;
        }      
   
   
   
   
   
   
   
   
   
   
   
   
   
    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
