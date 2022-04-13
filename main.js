timercounter=0;
score=0;
timercheck="";
drawnsketch="";
answerholder="";
quick_draw=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser"]
random_number = Math.floor((Math.random() * quick_draw.length) + 1);
 sketch = quick_draw[random_number]; 
 document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch;
function setup() {
    canvas=createCanvas(350, 350);
    canvas.center();
    background("white");
    canvas.mouseReleased(clascan);
}
function preload() {
    dood=ml5.imageClassifier('DoodleNet') 
}
function draw() {
    stroke(0);
    strokeWeight(13);
    if(mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
    }
check_sketch() 
if(drawnsketch==sketch){ 
    answerholder="set";
    score++;
    document.getElementById("score").innerHTML="score: "+score;

}
}
function clearCanvas(){
    background("white");
    
}
function clascan() 
{
    dood.classify(canvas, gotresults);

}
function gotresults(error, results) {
    if(error) {
        console.log(error);
    }
else {
    console.log(results);
    document.getElementById("label").innerHTML="label -"+results[0].label;
    document.getElementById("confid").innerHTML="confidence -"+Math.round(results[0].confidence*100)+"%";
}
}

function check_sketch() {
     timercounter++; 
     document.getElementById('timer').innerHTML = 'Timer: ' + timercounter; 
     console.log(timercounter) 
     if(timercounter > 400) { 
         timercounter = 0; timercheck = "completed" } 
         if(timercheck =="completed" || answerholder == "set") 
         { timercheck = ""; answerholder = ""; updateCanvas(); } }

         function updateCanvas() {
             background("white")
             random_number = Math.floor((Math.random() * quick_draw.length) + 1);
 sketch = quick_draw[random_number]; 
 document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch;
         }