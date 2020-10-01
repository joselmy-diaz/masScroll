import { move,MoveSc } from "./tipo";
import { positioning } from "./calc";

interface Options {

}

class scroll {
  scroll: HTMLElement;

  constructor(el:HTMLElement = document.documentElement){
    this.scroll = el;
  }
  
  scrollToA(moveTo:number, duration:number=300){
    var scrollToAn = (moveTo:number, duration:number=300, num1:number,posision:number)=>{
      window.requestAnimationFrame(()=>{
        var num = Date.now();
        const time = Math.min(1,((num - num1) / duration));
        var resu = move({ start:posision, fine:moveTo, x:time},'tanh');
        this.scrollTo(Math.round(resu));
        if (time < 1) {
          scrollToAn(moveTo,duration, num1,posision);
        }
      });
    }
    new Promise((resolve) => {
      scrollToAn(moveTo,duration,Date.now(),this.scroll.scrollTop);
    });
  }
  
  scrollTo(top:number,left:number=0){
    this.scroll.scrollTo({top,left});
  }
  
  scrollToView(el:HTMLElement){
    var hola = positioning(el, this.scroll,{position:"relative",align:"central"})
    this.scrollToA( hola, 2000);
  }
}

export default scroll