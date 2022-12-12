AFRAME.registerComponent("terrain-rotation",{
    schema: {
        speedOfRotation: {type:"number",default:0}
    },
    init: function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key==="ArrowRight"){
                if(this.data.speedOfRotation < 0.1){
                    this.data.speedOfRotation += 0.1
                }
            }
            
            if(e.key==="ArrowLeft"){
                if(this.data.speedOfRotation > -0.1){
                    this.data.speedOfRotation -= 0.1
                }
            }
        })
    },
    tick: function(){
        var mapRotation = this.el.getAttribute("rotation")
        mapRotation.y += this.data.speedOfRotation
        this.el.setAttribute("rotation",{
            x: mapRotation.x,
            y: mapRotation.y,
            z: mapRotation.z
        })
    }
})

AFRAME.registerComponent("tiger-rotation",{
    schema: {
        speedOfRotation:{type:"number",default:0},
        speedOfAscent:{type:"number",default:0}
    },
    init: function(){
        window.addEventListener("keydown",(e)=>{
           this.data.speedOfRotation=this.el.getAttribute("rotation")
           this.data.speedOfAscent=this.el.getAttribute("position")

           var tigerRotation=this.data.speedOfRotation
           var tigerPosition=this.data.speedOfAscent

           if(e.key==="ArrowRight"){
            if(tigerRotation.x < 10){
               tigerRotation.x += 0.5
               this.el.setAttribute("rotation",tigerRotation)

            }
        }
        if(e.key==="ArrowLeft"){
            if(tigerRotation.x > -10){
               tigerRotation.x -= 0.5
               this.el.setAttribute("rotation",tigerRotation)
            }
        }
        if(e.key==="ArrowUp"){
            if(tigerRotation.z < 20){
               tigerRotation.z += 0.5
               this.el.setAttribute("rotation",tigerRotation)

            }
            if(tigerPosition.y < 2){
                tigerPosition.y +=0.01
                this.el.setAttribute("position",tigerPosition)
            }
        }

        if(e.key==="ArrowDown"){
            if(tigerRotation.z > -10){
               tigerRotation.z -= 0.5
               this.el.setAttribute("rotation",tigerRotation)
            }
            if(tigerPosition.y > -2){
                tigerPosition.y -=0.01
                this.el.setAttribute("position",tigerPosition)
            }
        }
        })
    }
})
