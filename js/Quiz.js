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

    var correctAns="2";

    Contestant.getPlayerInfo();

    

    
    for(var c in allContestants){

      if(correctAns===allContestants[c].answer){
       /* this.cname = createElement('h4');
        this.cname.html(allContestants[c].name);
        this.cname.position(290,330);
        this.cname.color("green");*/

        fill("green");

        text(allContestants[c].name,250,330);

      }
      else{
       /* this.cname = createElement('h4');
        this.cname.html(allContestants[c].name);
        this.cname.position(290,370);
        this.cname.color("red");*/
        fill("red");
        text(allContestants[c].name,270,350);
      }
      
      //alert(allContestants[c].name+","+allContestants[c].answer);
    }

    //write code here to hide question elements

    //write code to change the background color here
   
    //write code to show a heading for showing the result of Quiz
   
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    if(allContestants!==undefined){
      fill("blue");
      textSize(20);
      text("Contestants who answered orrect are highlighted in green colour!",130,230);
      textSize(30);
      text("Results of the quiz", 250,30);
  
    }
    //write condition to check if contestantInfor is not undefined
    

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
