class Spinner {
      constructor(game){
	   this.game = game
       this.mspeed   = 2
       this.bt       = dist
       
       this.dec('used links rt',"array")
       this.dec('speed n c q',0)
     }
	 
	 init(){
	   
	 }
	 
	 start(){
	     this.init()
		 this.play()
	 }
          
     getMethods(){  
       return Object.getOwnPropertyNames(Object.getPrototypeOf(this)).slice(1)     
     }
     
     dec(vs, d){
       vs = vs.split(' ')
       vs.forEach((v)=>{
         if (d == "array")
            this[v] = []
         else
            this[v] = d
       })
     }
    
	 
	 play(){
        let r = $('spinner')
        let k = 0.02
        
        $('arrows').innerHTML = ""
        
        for(let i=0; i<=361; i++){
           this.used.push(false)
           this.links.push(-1)
        }
       
	    this.setWidth(width)  
        
        let self = this
        
        function update(){
          if ((k >0 && self.speed < self.mspeed) || (k<0 && self.speed > self.mspeed))
              self.speed += k
          
          self.c = (self.c + self.speed) % 360;
          st(r,`tr:rotate(${self.c}deg);`)
          requestAnimationFrame(update)
        }
        
          setInterval(()=>{
              if (this.game.finished) return
              self.mspeed = Math.floor(Math.random()*5) + 1
              k = (self.mspeed - self.speed) / 300
          },10000)  
          
          requestAnimationFrame(update)
     }
	 
	 setWidth(w){ 
	    width = w
        st($('circle'), `w:${w}px;h:${w}px;`)
		st($('spinner'), `l:calc(50% - ${w/2}px`)
     }
	 
	 angle(){
        return Math.floor(this.c)
     }
	 
	 exactAngle(){
	    return this.c
	 }
	 	
	 process() {
         let rt = this.angle()
        
         if (rt < 0)
           alert('smthing isnt working')
         
         if (!this.game.arrow.isLucky){
           if (!this.isUnique()){
               if (this.game.lives == 0){
			     this.addArrow(rt,1)
                 this.game.finish()
                 return
               }
               else {
                 $('moving').innerHTML = ""
                 this.game.changeLives(-1)
               }
           }
           else {
               this.addArrow(rt)
               this.used[rt] = true
           }
         }
         else 
         {
              this.addArrow(rt)
              this.used[rt] = true
              this.removeArrows(rt)
         }
	 }
	 
	 isUnique() {
         let r = this.angle()
         for(let i=r-6;i<r+7;i++){
              let j = i
              if (j < 0) j += 360
              else if(j >= 360) j -= 360
            
              if (this.used[j]) return false
          }      
          return true
	 }
	 
	 addArrow(rt, f){
         let r = $('arrows')
         let o = $('moving').children[0]
         
         o.id        =`rt${this.q}`
         
         this.links[rt] = this.q++
      
         if (this.q % 30 == 0) this.game.changeLives(1)
         
		 o.className = 'arrow fget'
		 if (f) st(o, 'bg:red')
		 
         st(o, `t:-10px;b:0;tr:translateY(${width/2}px) rotate(${180-this.exactAngle()}deg) translateY(-${width/2}px) rotate(180deg);`)
         r.appendChild(o)
     }
     
     removeArrows(r){
         for(let i=r-60; i<r+61; i++){
           let j = i
           if (j < 0) j+= 360
           else if (j >= 360) j -= 360
           
           if (this.used[j]) this.used[j] = false

           if (this.links[j] > -1){
             let id = this.links[j]
             this.links[j] = -1
             
             this.removeArrow(id,r-i)
           }
         }
		 
     }
	 
     removeArrow(id, rt) {
	  let el =$(`rt${id}`)
      //   let t = el.style.transform
      //   let s = t.replace(/-?[0-9]+deg/,`${rt}deg`)
      //   st(el,`tr: ${s}`)
         el.className += ' fall'
      //   $('_arrs').appendChild(el)
         
         tout(()=>{ el.remove() },600)
     }
	 
 }