  let width = 220, height=width
  let cnst  = $('spinner').innerHTML
  let body  = dom.body.innerHTML
  let b     = 20;
  let num = false
  let dist = window.innerHeight - 250 - 60
  
  
  function refresh(ev, obj){
     game.refresh(ev,obj)
  }
  
  function restart(){
     game = new Game()
     game.start()
  }
  
  function start(o) {
	   game.start()
	   o.remove()
	   st($('parent'), 'o:1')
  }
   

 let game = new Game()