class Arrow {
    
    constructor(game,spinner){
	   this.game = game
	   this.spinner = spinner
	   this.n    = 0
       this.refresh()
       this.create()
    }
    
    create(){
       let div = dom.createElement('div')
       div.className = "arrow"
       div.innerHTML = "<img class='head' src='img/head.jpg' />"
              
       let sp = Math.floor(this.spinner.speed)
       
       if (this.lky = this.lucky())
         div.className += ' bomb'
      
       $('arrow').appendChild(div)
	   
       tout(()=>{
        if (num) this.shoot()
       },(6 - sp)* 50)
       
    }
    
    shoot(){
       if (this.game.finished) {
          if (!this.game.isnew)
            this.refresh()
          return
       }
    
       this.isLucky = this.lky
       
       let div = $('arrow').children[0]
	   if (div == null) return
	   
       div.className += ' magic'
       $('moving').appendChild(div)
     
       let f = false
       let bt = 30
       let speed = this.spinner.speed
	   let self = this
       
       function update(){
       
         f = check()
         if (f)  return
		 
         upbottom()
         requestAnimationFrame(update)
       }
       
       function upbottom(){
         st(div,`b:${bt}px`)
         bt += speed * 48
       }
       
       function check(){
         if (bt > self.spinner.bt){
            self.spinner.process()
            return true
         }
         return false
       }
       requestAnimationFrame(update)
       
       if (!this.game.finished)
         tout(()=> this.create(), 100)
       
    
    }
    
    
    lucky(){
       return Math.random() > 0.95
    }
    
    refresh(){
       $('arrow').innerHTML = ""
       $('moving').innerHTML= ""
    }
 }