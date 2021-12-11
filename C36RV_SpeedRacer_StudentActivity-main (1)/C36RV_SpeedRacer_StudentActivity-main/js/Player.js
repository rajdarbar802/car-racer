class Player {
  constructor() {
    this.name=null
    this.index=null
    this.positionx=0
    this.positiony=0
    this.rank=0
    this.score=0
    this.fuel=185
    this.life=185
  }
  getCount(){
   var playerCountref=database.ref("playerCount").on ("value",function(data){
     playerCount=data.val()
   })
  }
  updateCount(count){
    database.ref('/').update({
      playerCount:count
    })
  }
  static getPlayersInfo(){
    database.ref('players').on("value",data=>{
      allPlayers=data.val()
    })
  }
  update(){
    var playerIndex="players/player"+this.index
    database.ref(playerIndex).update({
      positionx:this.positionx,positiony:this.positiony,
      rank:this.rank,
      score:this.score,
      life:this.life 

    })
  }
  getCarsAtEnd() {
    database.ref("carsAtEnd").on("value", data => {
      this.rank = data.val();
    });
  }
  static updatecarsAtEnd(rank){
    database.ref("/").update({
      carsAtEnd:rank
    })
  }
  getDistance(){
    var playerIndex="players/player"+this.index
    database.ref(playerIndex).on("value",data=>{
      var data=data.val()
      this.positionx=data.positionx
      this.positiony=data.positiony
    })
  }
  addPlayer(){
    var playerIndex="players/player"+this.index
    if (this.index===1) {
     this.positionx=width/2-100
     
    } else {
      this.positionx=width/2+100
    }
    database.ref(playerIndex).set({
      name:this.name,
      positionx:this.positionx,
      positiony:this.positiony,
      rank:this.rank,
      score:this.score
    })
  }
}
