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


      jarallax.addAnimation(".bak1",[{progress: "0%", top:"0%"}, {progress: "20%", top: "250%"}]); // 250% på 20%
      jarallax.addAnimation(".bak1",[{progress: "20%", top:"250%"}, {progress: "25%", top: "500%"}]); //250% på 5%


      jarallax.addAnimation(".bak2",[{progress: "0%", top:"120%"}, {progress: "20%", top: "370%"}]);
      jarallax.addAnimation(".bak1",[{progress: "20%", top:"370%"}, {progress: "25%", top: "620%"}]); 


      jarallax.addAnimation(".bak3",[{progress: "0%", top:"240%"}, {progress: "20%", top: "490%"}]); 
      jarallax.addAnimation(".bak1",[{progress: "20%", top:"490%"}, {progress: "25%", top: "740%"}]); 


      jarallax.addAnimation(".bak4",[{progress: "0%", top:"360%"}, {progress: "20%", top: "610%"}]);
      jarallax.addAnimation(".bak1",[{progress: "20%", top:"610%"}, {progress: "25%", top: "860%"}]); 


      jarallax.addAnimation(".bak5",[{progress: "0%", top:"480%"}, {progress: "20%", top: "730%"}]);
      jarallax.addAnimation(".bak1",[{progress: "20%", top:"730%"}, {progress: "25%", top: "980%"}]); 


      jarallax.addAnimation(".bak6",[{progress: "0%", top:"600%"}, {progress: "20%", top: "850%"}]);  
      jarallax.addAnimation(".bak1",[{progress: "20%", top:"850%"}, {progress: "25%", top: "1100%"}]); 

     
   });

