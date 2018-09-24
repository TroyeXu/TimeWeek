<template>
  <div class="hello"> 
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created(){
 
  },
  mounted(){
 //basic-canvas
  let canvas = document.getElementById("canvas")
  let ctx = canvas.getContext("2d")
  let ww = window.innerWidth
  let wh = window.innerHeight
  let time = 0 
  let degToPi = Math.PI*2
  let ship
  let bullet
  let grid
  let monster
  //class-modules
  class Grid {
    constructor(args){
      let def={
        x: 0,
        y:0,
      }
      Object.assign(def,args)
      Object.assign(this,def)
    }
    update(){
      
    }
    draw(){
      ctx.save()//格線
        let gutter= 50
        ctx.strokeStyle="rgba(255,255,255,0.1)"
        for(let i=0;i*10<=ww;i++){//直線
          ctx.moveTo(i*gutter,0)
          ctx.lineTo(i*gutter,wh)
        }
        for(let i=0;i*10<=wh;i++){//橫
          ctx.moveTo(0,i*gutter)
          ctx.lineTo(ww,i*gutter)
        }
        ctx.stroke()
      ctx.restore()
    }  
  }
  class Ship {
    constructor(args){
      let def={
        x:0,
        y:0,
        r:50,
        deg:50*degToPi
      }
      Object.assign(def,args)
      Object.assign(this,def)
    }
    update(){
      this.x+=0.1
      this.y+=0.5
      this.deg+=0.05
    }
    draw(){
      ctx.shadowBlur=50
      ctx.shadowColor="white"
      ctx.save()//圓圈
        ctx.translate(ww/2,wh/2)
        ctx.beginPath()
        ctx.arc(0,0,80,0,Math.PI*2)
        ctx.strokeStyle="white"
        ctx.lineWidth=15
        ctx.stroke()
        ctx.rotate(this.deg)
        for(let i=0; i<3;i++){//三格線
          ctx.rotate(Math.PI*2/3)
          ctx.moveTo(0,0)
          ctx.lineTo(80,0)
        }
        ctx.lineWidth=10
        ctx.stroke()
        ctx.beginPath()
          if (time%50==0){
            // TweenMax.to(ship,0.5,{deg: time/20})
            // ship.deg = time/20
          }
          ctx.arc(0,0,150,-Math.PI/4+ ship.deg ,Math.PI/4+ship.deg )
          ctx.stroke()
        ctx.save()//炮口
          ctx.rotate(ship.deg+Math.PI)
          ctx.beginPath()
          ctx.fillStyle="white"
          ctx.fillRect(100,-25-10,50,50)
          ctx.stroke()
        ctx.restore()
      ctx.restore()
    }
  }
  class Bullet {
    constructor(args){
      let def={
        x: 0,
        y:0,
        v:{
          x:0,
          y:0
        }
      }
      Object.assign(def,args)
      Object.assign(this,def)
    }
    update(){
      this.x+=this.v.x
      this.y+=this.v.y
    }
    draw(){
      ctx.save()
        ctx.fillStyle="white"
        ctx.translate(this.x,this.y)
        ctx.fillRect(0,0,10,10)
      ctx.restore()
    }  
  }
  class Monster {
    constructor(args){
      let def={
        x: 0,
        y:0,
      }
      Object.assign(def,args)
      Object.assign(this,def)
    }
    update(){
    }
    draw(){
      let r =300
      let circledeg =time/60
      ctx.save()
        ctx.translate(ww/2,wh/2)
        ctx.beginPath()
        ctx.arc(Math.cos(circledeg)*r,Math.sin(circledeg)*r,40,0,Math.PI*2)
        ctx.fillStyle="red"
        ctx.fill()
      ctx.restore()
    }  
  }

  //Main Logic
  function init(){
    canvas.width=ww
    canvas.height=wh
    ship= new Ship()


    grid= new Grid()
    monster = new Monster()
    
  }
  let bullets=[]
  function update(){
    ctx.fillStyle="black"
    ctx.fillRect(0,0,ww,wh)
    ship.update()
    time++
    if(time%30==0){
    let b= new Bullet({
        x:ww/2 +Math.cos(ship.deg)*ship.r,
        y:wh/2+Math.sin(ship.deg)*ship.r,
        v:{
          x:Math.cos(ship.deg)*2,
          y:Math.sin(ship.deg)*2
        }
      })  
    bullets.push(b)
    }
    // if(time%100==0){
    //   TweenMax.to(ship,2,{
    //     deg:mousePos.x/50,
    //     ease: Elastic.easeOut
    //   })
    // }
    bullets.forEach(b=>b.update())
    
  }
  function draw(){
    ctx.fillStyle="#001D2E"
    ctx.fillRect(0,0,ww,wh)  
    grid.draw()
    ship.draw()
    monster.draw()
    bullets.forEach(b=>b.draw())  
    requestAnimationFrame(draw)
  }

  //addEventListener
  let mousePos={x:0,y:0}
  canvas.addEventListener("mousemove",function(evt){
    mousePos.x=evt.x
    mousePos.y=evt.y
  })

  //start
  init()
  let fps = 60
  setInterval(update,1000/fps)
  requestAnimationFrame(draw)

  },
  computed:{
  }
};
</script>


<style lang="sass" scoped>
@import "./week7.sass"
</style>
