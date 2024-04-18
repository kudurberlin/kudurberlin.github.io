
/*global Hydra*/
/*global osc*/

var hydra = new Hydra({
  canvas: document.getElementById("myCanvas"),
  detectAudio: true,
  enableStreamCapture: false,
 })

setResolution(595,835);
osc(10,1/8,300).luma().diff(osc(10,1/8,300).luma().rotate(1.57)).diff(shape(4,.9,1).repeat([2,3],[2,3])).diff(gradient(1).thresh().rotate(Math.PI/10)).diff(gradient(1).thresh().rotate(Math.PI/10+1.57)).blend(src(o0).scale([1/2,3/2].smooth())).scale([1/2,3/2].reverse().smooth()).scale(()=>(a.fft[0]+1),()=>(a.fft[1]+1),()=>(a.fft[2]+1)).out()
   