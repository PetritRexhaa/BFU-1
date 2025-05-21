
{
   
  let spelarVal = prompt("välj: sten sax eller påse");
   let slumpTal = Math.floor(Math.random() * 3);
   const computerWeapons = ["sten", "sax", "påse"];
   const datorVal = computerWeapons[slumpTal];

   
   
   //let datorVal;
     // if (slumpTal === 1){
       // datorVal = "sten";
      //}
      //else if (slumpTal === 2){
        //datorVal = "sax";
      //}
      //else {
        //datorVal = "påse";
      //}
      console.log("du valde:" + spelarVal);
      console.log("datorn valde:" + datorVal);

    if (spelarVal === "sten"){

      if (datorVal === "sten"){
        console.log ("oavgjort!");}
      else if (datorVal === "sax"){
        console.log ("jag vann!");}
      else if (datorVal === "påse"){
        console.log ("datorn Vann!");}
      }

    if (spelarVal === "sax"){
      if (datorVal === "sax"){
        console.log ("oavgjort!");
      }
      else if (datorVal === "påse"){
        console.log ("jag vann!");
      }
      else if (datorVal === "sten"){
        console.log ("datorn Vann!");}     
      }



    if (spelarVal === "påse"){
      if (datorVal === "påse"){
        console.log ("oavgjort!");
      }
      else if (datorVal === "sten"){
        console.log ("jag vann!");
      }
      else if (datorVal === "sax"){
        console.log ("datorn Vann!");}  
      }
       
}