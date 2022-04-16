AFRAME.registerComponent("target-coin", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        var id = `coin${i}`;
  
        var posX = Math.random() * 3000 + (-1000);      
        var posY = Math.random() * 2 + (-1);
        var posZ = Math.random() * 3000 + -1000;
  
        var position = { x: posX, y: posY, z: posZ };
  
        this.createCoins(id, position);
      }
    },
  
    createCoinss: function(id,position) {
      var terrainEl = document.querySelector("#terrain");
      var coinEl = document.createElement("a-entity");
  
      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      coinEl.setAttribute("scale", {x: 500, y: 500, z: 500});
      coinEl.setAttribute("gltf-model", "./assets/coin/project155.glb"); 
      
      coinEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 2
      });
  
      coinEl.setAttribute("game-play", {
        elementId: `#${id}`
      });
   
      terrainEl.appendChild(coinEl);
    }
  });