  let width = 220, height=width
  let cnst  = $('spinner').innerHTML
  let body  = dom.body.innerHTML
  let b     = 20;
  let num = false
  let dist = window.innerHeight - 250 - 60
  
  
  function tout(fn,t){
     setTimeout(fn,t) 
  }
  
  function rand(b){
     return Math.floor(Math.random()*b)
  }
  
  function refresh(ev, obj){
     game.refresh(ev,obj)
  }
  
  function restart(){
     game = new Game()
     game.start()
  }
   

 let game = new Game()
   game.start()