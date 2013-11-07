$(document).ready(function(){
      jarallax = new Jarallax();
      console.log("Jeg spiser havregrøt til min kaffe");

      // jarallax.setDefault("p", {opacity:'0'});
      // jarallax.setDefault("p, h2, h3", {marginLeft:'-1000px'});
      // jarallax.setDefault("h1",{marginLeft:'20%', marginBottom:'20px'}); 
      // jarallax.setDefault("#love",{marginLeft:'30%', opacity:'1'});

      jarallax.setDefault(".bak1", {top:"-10%"}); //test


      jarallax.addAnimation('.bak1',[{progress: "0%", top:"-10%"},      //start ved progress # , top X
                                     {progress: "5%", top: "-15"}]);   //slutt ved progress ## , top Y

      jarallax.addAnimation('.bak2',[{progress: "6%", top:"100%"}, 
                                     {progress: "11%", top: "-15%"}]);

      jarallax.addAnimation('.bak3',[{progress: "0%", top:"200%"},
                                     {progress: "50%", top: "-15%"}]);

      jarallax.addAnimation('.bak4',[{progress: "0%", top:"300%"}, 
                                     {progress: "75%", top: "-15%"}]);

                                                            // sett bak2 til 50
      
      jarallax.addAnimation('.arrow',[{progress: "0%", opacity:"0.6"}, {progress: "50%"}]);                             //pil som hinter til scroll
      jarallax.addAnimation('.arrow',[{progress: "5%", opacity:"0.4"}, {progress: "100%", top: "2%"}]);
      jarallax.addAnimation('.arrow',[{progress: "7%", opacity:"0"}, {progress: "100%", top: "8%"}]);

      jarallax.addAnimation('.bmeter',[{progress: "0%", width:"0%"}, {progress: "100%", width: "100%"}]); //progress barometer


      // jarallax.addAnimation('#intro',[{progress: "0%", opacity:"0"}, {progress: "2%", opacity:"1"}]);
      // jarallax.addAnimation('#intro',[{progress: "2%", opacity:"1"}, {progress: "100%"}]);
      // jarallax.addAnimation('#intro',[{progress: "15%", opacity:"1"}, {progress: "20%", opacity:"0"}]);
      // jarallax.addAnimation('#intro',[{progress: "5%", marginLeft:"0"}, {progress: "7%"}]);


      jarallax.addAnimation('#intro',[{progress: "0%", opacity: "0"}, {progress: "1%", opacity: "1"}]);
      jarallax.addAnimation('#intro',[{progress: "2%", opacity: "1"}, {progress: "5%"}]);
      jarallax.addAnimation('#intro',[{progress: "5%", opacity: "1"}, {progress: "7%"}]);
      jarallax.addAnimation('#intro',[{progress: "0%", opacity:"0"}, {progress: "7%", opacity:"0"}]);     
      // jarallax.addAnimation('#intro',[{progress: "45%", marginLeft:"0"}, {progress: "70%"}]);


      // jarallax.addAnimation('#p1',[{progress: "15%", opacity:"0"}, {progress: "20%", opacity:"1"}]);
      // jarallax.addAnimation('#p1',[{progress: "20%", opacity:"1"}, {progress: "30%"}]);
      // jarallax.addAnimation('#p1',[{progress: "30%", opacity:"1"}, {progress: "40%", opacity:"0"}]);
      // jarallax.addAnimation('#p1',[{progress: "15%", marginLeft:"0"}, {progress: "40%"}]);

   });

