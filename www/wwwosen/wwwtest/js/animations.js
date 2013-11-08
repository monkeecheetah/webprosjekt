$(document).ready(function(){
      jarallax = new Jarallax();
      console.log("Jeg spiser havregrøt til min kaffe");

      jarallax.addAnimation('.bmeter',[{progress: "0%", width:"0%"}, {progress: "100%", width: "100%"}]); //progress barometer*/

       jarallax.setDefault(".bak1", {top:"0%"});
      jarallax.setDefault(".bak2", {top:"200%"});
      jarallax.setDefault(".bak3", {top:"400%"});
      jarallax.setDefault(".bak4", {top:"600%"});
      jarallax.setDefault(".bak5", {top:"800%"});
      jarallax.setDefault(".bak6", {top:"1000%"});

      jarallax.addAnimation(".bak1",[{progress: "0%", top:"0%"}, {progress: "100%", top: "1150%"}]); 
      jarallax.addAnimation(".bak2",[{progress: "0%", top:"200%"}, {progress: "100%", top: "1350%"}]); 
      jarallax.addAnimation(".bak3",[{progress: "0%", top:"400%"}, {progress: "100%", top: "1550%"}]); 
      jarallax.addAnimation(".bak4",[{progress: "0%", top:"600%"}, {progress: "100%", top: "1750%"}]); 
      jarallax.addAnimation(".bak5",[{progress: "0%", top:"800%"}, {progress: "100%", top: "1950%"}]);
      jarallax.addAnimation(".bak6",[{progress: "0%", top:"1000%"}, {progress: "100%", top: "2150%"}]);  

     
   });

