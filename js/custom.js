
 let dom = document
 
 let $ = (id)=>{
    return dom.getElementById(id)
 }
 let cl = (cl)=>{
    return dom.getElementsByClassName(cl)
 }
 
 let u = {
     tr : 'transform',
     ts : 'transition',
     bg : 'background-color',
     bc : 'border-color',
     o  : 'opacity',
     b  : 'bottom',
     t  : 'top',
	 l  : 'left',
	 r  : 'right',
	 dw : 'down',
	 ml : 'margin-left',
	 mt : 'margin-top',
	 mr : 'margin-right',
	 md : 'margin-down',
     d  : 'display',
     w  : 'width',
     h  : 'height'
 }
 
 let st = (o, d)=>{
 
     if (typeof d === "object")
          InitObj()
     else InitStr()
 
     function InitObj(){
         let keys = Object.keys(d)
 
          keys.forEach(key => {
             o.style[u[key]] = d[key]
          })
     }
 
     function InitStr(){
        if (typeof d !== "string")
        {
           alert("data is not of type string")
           return
        }
 
        if (o == null) return 
		
        let s = d.split(';')
            s.forEach(c => {
              c = c.split(':')
              o.style[u[c[0]]] = c[1]
            })
     
      }
 }
