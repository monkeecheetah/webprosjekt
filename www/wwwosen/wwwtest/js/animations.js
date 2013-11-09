$(document).ready(function(){
      jarallax = new Jarallax();
      console.log("Jeg spiser havregrøt til min kaffe");

      jarallax.addAnimation('.bmeter',[{progress: "0%", width:"0%"}, {progress: "100%", width: "100%"}]); //progress barometer*/

      jarallax.setDefault(".bak1", {top:"0%"});
      jarallax.setDefault(".bak2", {top:"120%"});
      jarallax.setDefault(".bak3", {top:"240%"});
      jarallax.setDefault(".bak4", {top:"360%"});
      jarallax.setDefault(".bak5", {top:"480%"});
      jarallax.setDefault(".bak6", {top:"600%"});


    /*  jarallax.addAnimation(".bak1",[{progress: "0%", top:"0%"}, {progress: "20%", top: "30%"}]); // 250% på 20%*/
      jarallax.addAnimation(".bak1",[{progress: "9%", top:"0%"}, {progress: "24%", top: "150%"}]); //250% på 5%
      jarallax.addAnimation(".bak1", [{progress:"24%", top:"150%"}, {progress:"32%", top:"150%"}]);

     /* jarallax.addAnimation(".bak2",[{progress: "0%", top:"120%"}, {progress: "20%", top: "150%"}]);*/
      jarallax.addAnimation(".bak2",[{progress: "9%", top:"120%"}, {progress: "24%", top: "270%"}]); 
      jarallax.addAnimation(".bak2", [{progress:"24%", top:"270%"}, {progress:"32%", top:"270%"}]);


     /* jarallax.addAnimation(".bak3",[{progress: "0%", top:"240%"}, {progress: "20%", top: "270%"}]); */
      jarallax.addAnimation(".bak3",[{progress: "9%", top:"240%"}, {progress: "24%", top: "390%"}]); 
      jarallax.addAnimation(".bak3", [{progress:"24%", top:"390%"}, {progress:"32%", top:"390%"}]);

     /* jarallax.addAnimation(".bak4",[{progress: "0%", top:"360%"}, {progress: "20%", top: "390%"}]);*/
      jarallax.addAnimation(".bak4",[{progress: "9%", top:"360%"}, {progress: "24%", top: "510%"}]); 
      jarallax.addAnimation(".bak4", [{progress:"24%", top:"510%"}, {progress:"32%", top:"510%"}]);


     /* jarallax.addAnimation(".bak5",[{progress: "0%", top:"480%"}, {progress: "20%", top: "510%"}]);*/
      jarallax.addAnimation(".bak5",[{progress: "9%", top:"480%"}, {progress: "24%", top: "630%"}]); 
      jarallax.addAnimation(".bak5", [{progress:"24%", top:"630%"}, {progress:"32%", top:"630%"}]);


   /*   jarallax.addAnimation(".bak6",[{progress: "0%", top:"600%"}, {progress: "20%", top: "630%"}]);  */
      jarallax.addAnimation(".bak6",[{progress: "9%", top:"600%"}, {progress: "24%", top: "750%"}]); 
      jarallax.addAnimation(".bak6", [{progress:"24%", top:"750%"}, {progress:"32%", top:"750%"}]);

     
   });

