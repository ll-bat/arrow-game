
  class Game {
      
	 constructor(){
	   this.lives    = 1
	 }
	 
	 setup(){  
       dom.onmousedown = (ev)=>{
           num = true
           game.arrow.shoot()
       }
       
       dom.onmouseup = (ev) => {
           num = false
       }
	   this.init()
	 }
     
     init(){
	   this.spinner = new Spinner(this)
       this.arrow   = new Arrow(this, this.spinner)
       this.showLives() 
	   
	   tout(()=>{
         this.finished = false
         this.isnew    = false
       },500)
     }
     
	 start() {
	   this.setup()
	   this.spinner.start()
	   this.updateColor()
	 }
    
     
     updateColor(){        
        let colors = ['blue','red','green','cyan','orange']
        
        tout(()=>{
           this.tfc(()=>{
             let c = colors[rand(colors.length)]
             st($('circle'),`bc: ${c}`)
             this.updateColor()
           })
        },35000)
     }
     
     tfc(fn){
           st($('circle'),"ts: all 2s ease-in")
           fn()
           tout(()=>{
             st($('circle'), "ts:;")
           },1000)
     }
           
     changeLives(i){
       this.lives+=i
       this.showLives()
     }
     
     showLives(){
	 
       $('live').innerHTML = this.lives
       $('box').className  = "shdow"
       
       tout(()=>{
         $('box').className = ""
       },2000)
       
     }
	 
	 finish() {
	   this.beforeRefresh()
       this.finished = true
       this.arrow.shoot()
	 }
     
     beforeRefresh(){
         let r = $('parent')
         st(r, "o:.2")
         
         let o = $('arrow')
         
         st(o,"ts:all .5s ease-in");
         
         tout(()=>{
             st($('refresh'), 'd:block')
         },1000)
         
         this.spinner.mspeed = 0.2
         this.spinner.speed  = 0.2
     }
     
     refresh(e, r){
        let o = $('parent')
        let p = $('spinner')
        
        st(r,'d:none')
        st(o,'o:1')
         
        restart()
     }
     
	 
 }
 