$(document).ready(function(){
      jarallax = new Jarallax();
      console.log("Jeg spiser havregrøt til min kaffe");

      jarallax.addAnimation('.bmeter',[{progress: "0%", width:"0%"}, {progress: "100%", width: "100%"}]); //progress barometer*/

      jarallax.addAnimation('.bak1',[{progress: "0%", top:"0"}, {progress: "100%", top: "50%"}]); 
      jarallax.addAnimation('.bak2',[{progress: "0%", top:"200"}, {progress: "100%", top: "250%"}]); 
      jarallax.addAnimation('.bak3',[{progress: "0%", top:"400"}, {progress: "100%", top: "450%"}]); 
      jarallax.addAnimation('.bak4',[{progress: "0%", top:"600"}, {progress: "100%", top: "650%"}]); 
      jarallax.addAnimation('.bak5',[{progress: "0%", top:"800"}, {progress: "100%", top: "850%"}]);
      jarallax.addAnimation('.bak6',[{progress: "0%", top:"1000"}, {progress: "100%", top: "1050%"}]);  

     
   });

