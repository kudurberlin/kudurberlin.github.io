
/*global Hydra*/
/*global osc*/

var hydra = new Hydra({
  canvas: document.getElementById("myCanvas"),
  detectAudio: true,
  enableStreamCapture: false,
 })


setResolution(window.Width,window.Height);
a.setBins(8)

src(o0)
osc( 20, 0.01, ()=>a.fft[7]*3).modulate(noise(3),()=>a.fft[0]) 
.kaleid(50)
.saturate( () => Math.sin(time) * 10 )
.hue(() => Math.sin(time)/100)

.add(solid([1,0,0],[0,1,0],[0,0,1],1))

.modulateRepeat(voronoi(0.1,0.1,0.9),3,12,45)
.out(o0)



   speed=0.8
