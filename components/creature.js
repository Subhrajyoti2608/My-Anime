AFRAME.registerComponent("fish",{
    init: function(){
        for (var i = 0; i<=10; i++){
            var id = `fish${i}`
            var posX = (Math.random()*3000+(-1000))
            var posY = (Math.random()*2+(-1))
            var posZ = (Math.random()*3000+(-1000))
            var position={x:posX, y:posY, z:posZ}
            this.fish(id,position)
        }
    },
    fish:(id,position)=>{
        var terrainEL = document.querySelector("#terrain")
        var fishEL = document.createElement("a-entity")
        fishEL.setAttribute("id",id)
        fishEL.setAttribute("position",position)
        fishEL.setAttribute("scale",{x:500,y:500,z:500})
        fishEL.setAttribute("gltf-model","./assets/fish/scene.gltf")
        fishEL.setAttribute("animation-mixer",{})
        terrainEL.appendChild(fishEL)
    }
})