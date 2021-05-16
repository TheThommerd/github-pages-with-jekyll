document.getElementById("frame001").style.zoom="1.4";
  var goFS = document.getElementById("goFS");
  goFS.addEventListener("click", function() {
      document.body.requestFullscreen();
  }, false);
function load(){
if (document.getElementById("passwordsaverEight").value != "BIB FORTUNA"){
message004.innerHTML = "<input id=password type=text maxlength=35 placeholder=Password /></br/></br/><button id=submit3  class=buttons001 onclick=submitpassword()>Submit</button>";
message001.innerHTML = "Enter password.";
		document.getElementById("password").focus();
}
else if (document.getElementById("passwordsaverEight").value == "BIB FORTUNA"){
message004.innerHTML = "<input id=q2 type=text maxlength=15 placeholder=Name /><br /><br /><input id=q3 placeholder=@Twitter type=text maxlength=15 /><br /><br /><br /><button id=submit3  class=buttons001 onclick=submitname()>Submit </button><br /><br /><button id=skip class=buttons001 onclick=skip()>Skip</button>";
message006.innerHTML = "";
message001.innerHTML = "Enter your name and twitter, or press Skip to proceed.";
		document.getElementById("q2").focus();
}
	if (document.getElementById("wins").value.length < 1)
	{
	document.getElementById("wins").value = 0;
	}
	if (document.getElementById("losses").value.length < 1)
	{
	document.getElementById("losses").value = 0;
	}
  	record001.innerHTML = document.getElementById("wins").value + "-" + document.getElementById("losses").value;
  	player001.innerHTML = document.getElementById("naam").value.toUpperCase();
	var twittername = document.getElementById("twitt").value;
	var twitter = twittername.substring(0, 13);
	twitter001.innerHTML = twitter.replace(" ","");
}
var competitorlist = [
{
"id": "Cabrera",
"lowercase": "Andres Cabrera",
"twitter": "@SquadLeaderAce",
"record": "1-0",
"faction": "S.W.A.G.",
"strength1" : "The Phantom Menace",
"strength2" : "The Force Awakens",
"strength3" : "The Last Jedi",
"percentage": "89",
"percentage3": "84",
"percentage5": "84",
"strengthpercentage": "99",
"strengthpercentage3": "94",
"strengthpercentage5": "94",
},
{
"id": "Wilson",
"lowercase": "Marie Wilson",
"twitter": "@AliaMorgaine",
"record": "1-0",
"faction": "SUSPECTS",
"strength1" : "Rise of Skywalker",
"strength2" : "The Force Awakens",
"strength3" : "Rogue One",
"percentage": "85",
"percentage3": "80",
"percentage5": "80",
"strengthpercentage": "95",
"strengthpercentage3": "90",
"strengthpercentage5": "90",
},
{
"id": "Hoey",
"lowercase": "John Hoey",
"twitter": "@JohnnyHoey",
"record": "1-0",
"faction": "DUNGEON",
"strength1" : "Solo",
"strength2" : "Return of the Jedi",
"strength3" : "Rogue One",
"percentage": "86",
"percentage3": "81",
"percentage5": "81",
"strengthpercentage": "96",
"strengthpercentage3": "91",
"strengthpercentage5": "91",
},
{
"id": "Harper",
"lowercase": "Thomas Harper",
"twitter": "@thomasLharper",
"record": "1-0",
"faction": "THE DEN",
"strength1" : "A New Hope",
"strength2" : "The Empire Strikes Back",
"strength3" : "The Force Awakens",
"percentage": "88",
"percentage3": "83",
"percentage5": "83",
"strengthpercentage": "98",
"strengthpercentage3": "93",
"strengthpercentage5": "93",
},
{
"id": "GoldLeader",
"lowercase": "Gold Leader",
"twitter": "@EvanBushkar",
"record": "1-0",
"faction": "EXCHANGE",
"strength1" : "A New Hope",
"strength2" : "The Empire Strikes Back",
"strength3" : "The Force Awakens",
"percentage": "87",
"percentage3": "82",
"percentage5": "82",
"strengthpercentage": "97",
"strengthpercentage3": "92",
"strengthpercentage5": "92",
},
{
"id": "Damon",
"lowercase": "Alex Damon",
"twitter": "@StarWarsExplain",
"record": "5-1",
"faction": "ROXSTARS",
"strength1" : "A New Hope",
"strength2" : "The Force Awakens",
"strength3" : "The Last Jedi",
"percentage": "95",
"percentage3": "90",
"percentage5": "90",
"strengthpercentage": "100",
"strengthpercentage3": "97",
"strengthpercentage5": "97",
},
{
"id": "damon",
"lowercase": "Mollie Damon",
"twitter": "@MollieDamon",
"record": "0-1",
"faction": "USUAL SUSPECTS",
"strength1" : "A New Hope",
"strength2" : "The Force Awakens",
"strength3" : "The Empire Strikes Back",
"percentage": "85",
"percentage3": "80",
"percentage5": "80",
"strengthpercentage": "95",
"strengthpercentage3": "90",
"strengthpercentage5": "90",
},
{
"id": "Dimalanta",
"lowercase": "Andrew Dimalanta",
"twitter": "@DrewDimalanta",
"record": "0-2",
"faction": "EXCHANGE",
"strength1" : "Return of the Jedi",
"strength2" : "A New Hope",
"strength3" : "The Force Awakens",
"percentage": "91",
"percentage3": "86",
"percentage5": "86",
"strengthpercentage": "100",
"strengthpercentage3": "96",
"strengthpercentage5": "96",
},
{
"id": "Kelly",
"lowercase": "Laura Kelly",
"twitter": "@ShutUp_Laura",
"record": "1-2",
"faction": "KORRUPTION",
"strength1" : "The Empire Strikes Back",
"strength2" : "Attack of the Clones",
"strength3" : "The Phantom Menace",
"percentage": "90",
"percentage3": "85",
"percentage5": "85",
"strengthpercentage": "100",
"strengthpercentage3": "95",
"strengthpercentage5": "95",
},
{
"id": "Napzok",
"lowercase": "Ken Napzok",
"twitter": "@KenNapzok",
"record": "1-3",
"faction": "USUAL SUSPECTS",
"strength1" : "A New Hope",
"strength2" : "The Empire Strikes Back",
"strength3" : "Return of the Jedi",
"percentage": "84",
"percentage3": "79",
"percentage5": "79",
"strengthpercentage": "94",
"strengthpercentage3": "89",
"strengthpercentage5": "89",
},
{
"id": "Scrimshaw",
"lowercase": "Joseph Scrimshaw",
"twitter": "@JosephScrimshaw",
"record": "1-3",
"faction": "QUIRKY MERCS",
"strength1" : "The Force Awakens",
"strength2" : "A New Hope",
"strength3" : "The Phantom Menace",
"percentage": "82",
"percentage3": "77",
"percentage5": "77",
"strengthpercentage": "92",
"strengthpercentage3": "87",
"strengthpercentage5": "87",
},
{
"id": "Sullivan",
"lowercase": "Sean Sullivan",
"twitter": "@suitupsully",
"record": "1-1",
"faction": "THE DEN",
"strength1" : "The Force Awakens",
"strength2" : "A New Hope",
"strength3" : "The Phantom Menace",
"percentage": "78",
"percentage3": "73",
"percentage5": "73",
"strengthpercentage": "88",
"strengthpercentage3": "83",
"strengthpercentage5": "83",
},
{
"id": "Witt",
"lowercase": "Adam Witt",
"twitter": "@Adam_Witt",
"record": "0-1",
"faction": "DUNGEON",
"strength1" : "The Force Awakens",
"strength2" : "A New Hope",
"strength3" : "Return of the Jedi",
"percentage": "75",
"percentage3": "70",
"percentage5": "70",
"strengthpercentage": "85",
"strengthpercentage3": "80",
"strengthpercentage5": "80",
},
{
"id": "Witwer",
"lowercase": "Sam Witwer",
"twitter": "@SamWitwer",
"record": "2-1",
"faction": "FORCE BROS",
"strength1" : "The Empire Strikes Back",
"strength2" : "The Force Awakens",
"strength3" : "Revenge of the Sith",
"percentage": "93",
"percentage3": "88",
"percentage5": "88",
"strengthpercentage": "100",
"strengthpercentage3": "98",
"strengthpercentage5": "98",
}
];
var percentage = 0;
var percentage3 = 0;
var percentage5 = 0;
var similarity1 = 0;
var similarity2 = 0;
function choosecomp() {
  	var comp = document.getElementById("select").value;
	document.getElementById("select").style.visibility = "hidden";
	document.getElementById("choose").style.visibility = "hidden";
	document.getElementById("select").style.display = "none";
	document.getElementById("choose").style.display = "none";
	competitorlist.forEach(function(item,i){
	if(item.id == comp){
	competitorlist.splice(i, 1);
	competitorlist.unshift(item);
	}
	});
 	player002.innerHTML = competitorlist[0].id.toUpperCase();
  	twitter002.innerHTML = competitorlist[0].twitter;
  	faction002.innerHTML = competitorlist[0].faction;
  	record002.innerHTML = competitorlist[0].record;
	percentage = competitorlist[0].percentage;
	percentage3 = competitorlist[0].percentage3;
	percentage5 = competitorlist[0].percentage5;
	message001.innerHTML = "Click Next to proceed.";
	message005.innerHTML = "You selected " +competitorlist[0].lowercase + ".";
wheelie = [competitorlist[0].strength1, competitorlist[0].strength2, competitorlist[0].strength3];
wheelie = shuffle(wheelie);
	message004.innerHTML = "<button class=buttons002 onclick=pregame()>Next</button>";
}
var wheelie = [];
function submitpassword() {
var ww = document.getElementById("password").value.toUpperCase();
document.getElementById("passwordsaverEight").value = document.getElementById("password").value.toUpperCase();
if (ww == "BIB FORTUNA")
{
message004.innerHTML = "<input id=q2 type=text maxlength=15 placeholder=Name /><br /><br /><input id=q3 placeholder=@Twitter type=text maxlength=15 /><br /><br /><br /><button id=submit3  class=buttons001 onclick=submitname()>Submit </button><br /><br /><button id=skip class=buttons001 onclick=skip()>Skip</button>";
message006.innerHTML = "";
message001.innerHTML = "Enter your name and twitter, or press Skip to proceed.";
}
else
{
message006.innerHTML = "Password incorrect!";
document.getElementById("message006").style.top = "-140px";
}
}
function pregame(){
	document.getElementById("JTE").style.display = "initial";
	document.getElementById("time001").style.display = "initial";
	message001.innerHTML = "Click Begin to start the match.";
	message005.innerHTML = "<strong><font size=4>ROUND ONE</font><br/></br>YOU GET 10 QUESTIONS FROM RANDOM CATEGORIES</br></br>YOU HAVE 20 SECONDS TO READ THE QUESTION AND SUBMIT YOUR ANSWER</br>YOU CAN SUBMIT YOUR ANSWER BY CLICKING THE SUBMIT BUTTON OR BY HITTING THE ENTER KEY</br></br>ALL QUESTIONS ARE WORTH 1 POINT</br>A PERFECT ROUND TRIGGERS A 1 POINT BONUS QUESTION</br></br>YOU CAN ASK 3 TIMES DURING THE MATCH FOR A QUESTION TO BE REPEATED</br>THIS GIVES YOU AN ADDITIONAL 15 SECONDS TO ANSWER THE QUESTION</br></br>YOU CAN CHALLENGE ANY RULING BY CLICKING THE 'CHALLENGE' BUTTON</br>JUDGE YOUR CHALLENGE BY CLICKING THE 'WIN CHALLENGE' OR 'LOSE CHALLENGE' BUTTON</br>REVERSALS LET YOU KEEP YOUR CHALLENGE</strong>";
	document.getElementById("message005").style.position = "relative";
	document.getElementById("message005").style.top = "-200px";
message003.innerHTML = "<button id=begin class=buttons002 onclick=begin001()>Begin</button>";
	document.getElementById("message003").style.top = "-200px";
	message006.innerHTML =  "First category is " +question001[0].cat;
	document.getElementById("message006").style.position = "relative";
	document.getElementById("message006").style.top = "-200px";
	message004.innerHTML = "";
}
function submitname () {
	var name = document.getElementById("q2").value.toUpperCase();
	var twitt = document.getElementById("twitt").value;
	var naam = document.getElementById("naam").value.toUpperCase();
	var length1 = name.length;
	var twittername = document.getElementById("q3").value;
	var length2 = twittername.length;
	var twitter = twittername.substring(0, 15);
	var twitter = twitter.replace(" ","");
	if (length1 < 1){
	player001.innerHTML = naam ;
	} 
	else if (length1 >= 1){
	player001.innerHTML = name;
	document.getElementById("naam").value = document.getElementById("q2").value;
	}
	if (length2 < 1){
	twitter001.innerHTML = twitt ;
	} 
	else if (length2 >= 1){
	twitter001.innerHTML = twitter;
	document.getElementById("twitt").value = document.getElementById("q3").value;
	}
	if (document.getElementById("wins").value.length < 1)
	{
	document.getElementById("wins").value = 0;
	}
	if (document.getElementById("losses").value.length < 1)
	{
	document.getElementById("losses").value = 0;
	}
	var record = document.getElementById("wins").value + "-" + document.getElementById("losses").value;
  	record001.innerHTML = record;
	document.getElementById("skip").style.visibility = "hidden";
	document.getElementById("skip").style.display = "none";
message004.innerHTML = "<select id=select><option value=damon>Mollie Damon</option><option value=Scrimshaw>Joseph Scrimshaw</option></select></br></br><button id=choose onclick=choosecomp()>Choose Opponent</button>";
	message001.innerHTML = "Choose your opponent.";
}
function skip () {
	document.getElementById("skip").style.visibility = "hidden";
	document.getElementById("skip").style.display = "none";
message004.innerHTML = "<select id=select><option value=damon>Mollie Damon</option><option value=Scrimshaw>Joseph Scrimshaw</option></select></br></br><button id=choose onclick=choosecomp()>Choose Opponent</button>";
	message001.innerHTML = "Choose your opponent.";
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
 	var a = 0;
        a++;
        var r = 0;
        r++;
        var q = 0;
        q++;
        var b = 0;
        var s = 0;
	var j = 3;
	j--;
	var h = 2;
	h--;
var quescount = 0 ;
var posspoints = 0;
var quescor = 0;
var quescountopp = 0 ;
var posspointsopp = 0;
var quescoropp = 0;
var c;
var stealopp = 0;
var stealmc = 0;
threepointer001 = shuffle(threepointer001); 
fivepointer001 = shuffle(fivepointer001);   
var roundone = [episodei[0], episodeii[0], episodeiii[0], episodeiv[0], episodev[0], episodevi[0], episodevii[0], rogueone[0], solo[0], heroesvillains[0], clonewars[0]];
roundone = shuffle(roundone);
var roundthree = [episodei[1], episodeii[1], episodeiii[1], episodeiv[1], episodev[1], episodevi[1], episodevii[1], episodeviii[1], episodeix[1], rogueone[1], solo[1], heroesvillains[1], clonewars[1], whosaidit[1], vehiclesweapons[1]];
roundthree = shuffle(roundthree);
question001[0] = roundone[0];
question001[1] = roundone[1];
question001[2] = roundone[2];
question001[3] = roundone[3];
question001[4] = roundone[4];
question001[5] = roundone[5];
question001[6] = roundone[6];
question001[7] = roundone[7];
question001[14] = roundone[8];
question001[15] = roundone[9];
question001[9]  = roundone[10];
question001[8] = roundthree[0];
question001[10] = roundthree[1];
question001[11] = roundthree[2];
question001[12] = roundthree[3];
question001[13] = roundthree[4];
question001[16] = roundthree[5];
question001[17] = roundthree[6];
question001[18] = roundthree[7];
question001[19] = roundthree[8];
var chosen = [r2Q1[0].cat, r2Q2[0].cat, r2Q3[0].cat, r2Q4[0].cat, r2Q5[0].cat, r2Q6[0].cat, r2Q7[0].cat, r2Q8[0].cat];
chosen = shuffle(chosen); 
var chosen2 = [r2Q9[0].cat, r2Q10[0].cat, r2Q11[0].cat, r2Q12[0].cat];
chosen2 = shuffle(chosen2); 
var data = [];
data[0] = "Spinner's Choice";
data[1] = chosen[0];
data[2] = chosen[1];
data[3] = chosen[2];
data[4] = chosen[3];
data[5] = chosen[4];
data[6] = "Opponent's Choice";
data[7] = chosen[5];
data[8] = chosen[6];
data[9] = chosen[7];
data[10] = chosen2[0];
data[11] = chosen2[1];
function unique2(){
	if ((fivepointer001[0].cat == threepointer001[0].cat) || (fivepointer001[0].cat == question001[8].cat)) {
	      fivepointer001 = shuffle(fivepointer001);   
		unique2();
    	}
}
function unique(){
   	if (question001[8].cat == threepointer001[0].cat) {
	threepointer001 = shuffle(threepointer001); 
		unique();
    	}
   	else {
		unique2();
    	}
}
var q = "0";
var p = "0";
function colorpick(){
if ( (q == "0") || (q == "2") || (q == "4")  || (q == "6") || (q == "8")|| (q == "10")|| (q == "12")){
q++;
return "#e0980b" ;
}
else if ( (q == "1") || (q == "3")|| (q == "5")|| (q == "7")|| (q == "9")|| (q == "11")) {
q++;
return "#272421" ;
}
}
function colorpicktext(){
if ((p == "0") || (p == "2") || (p == "4") || (p == "6") || (p == "8") || (p == "10") || (p == "12")) {
p++;
return "#e0980b" ;
}
else if ((p == "1") || (p == "3")|| (p == "5")|| (p == "7")|| (p == "9")|| (p == "11")) {
p++;
return "white" ;
}
}
        var padding = {top:00, right:0, bottom:0, left:0},
            wid = 400 - padding.left - padding.right,
            hei = 400 - padding.top  - padding.bottom,
            rot = Math.min(wid, hei)/2,
            rotation = 0,
            oldrotation = 0,
            picked = 100000,
            oldpick = [],
            color = colorpick();
        var svg = d3.select('#chart')
            .append("svg")
            .data([data])
            .attr("width",  wid + padding.left + padding.right)
            .attr("height", hei + padding.top + padding.bottom);
        var container = svg.append("g")
            .attr("class", "chartholder")
            .attr("transform", "translate(" + (wid/2 + padding.left) + "," + (hei/2 + padding.top) + ")");
        var vis = container
            .append("g");
            
        var pie = d3.layout.pie().sort(null).value(function(d){return 1;});
        var arc = d3.svg.arc().outerRadius(rot);
        var arcs = vis.selectAll("g.slice")
            .data(pie)
            .enter()
            .append("g")
            .attr("class", "slice");
            
        arcs.append("path")
           .attr("fill", function(i){ return colorpick(); })
            .attr("d", function (d) { return arc(d); });
        arcs.append("text").attr("transform", function(d){
                d.innerRadius = 0;
                d.outerRadius = rot;
                d.angle = (d.startAngle + d.endAngle)/2;
                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
            })
            .attr("text-anchor", "end")
            .attr("font-weight", "bold")
	    .attr("fill", function(i){ return colorpicktext(); })
            .text( function(d, i) {
                return data[i];
            });
    function spin(d){
            document.getElementById("spin").style.visibility = "hidden";
            container.on("click", null);
            var  ps       = 360/data.length,
                 pieslice = Math.round(1440/data.length),
                 rng      = Math.floor((Math.random() * 1440) + 360);
                
            rotation = (Math.round(rng / ps) * ps);
            
            picked = Math.round(data.length - (rotation % 360)/ps);
            picked = picked >= data.length ? (picked % data.length) : picked;
                       
            rotation += 90 - Math.round(ps/2);
            vis.transition()
                .duration(3000)
                .attrTween("transform", rotTween)
                .each("end", function(){
                    oldrotation = rotation;
message002.innerHTML = "You spun " +data[picked] + "<br/></br>" + "<button class=buttons008 id=respin onclick=spin2()>Spin Again</button>";
if (data[picked] == "Spinner's Choice"){
message002.innerHTML = "You spun Spinner's Choice" + "<br/></br>" + "Select which category you want to pick:" + "<br/></br>" + "<ul id=boxes class=aligner><li><input type=checkbox id=box1 value= /><label for=box1>" + data[1] +"</label></li><li><input type=checkbox id=box2 value=/><label for=box2>" +data[2] +"</label></li><li><input type=checkbox id=box3 value=/><label for=box3>" + data[3] + "</label></li><li><input type=checkbox id=box4 value=/><label for=box4>" + data[4] + "</label></li><li><input type=checkbox id=box5 value=/><label for=box5>" + data[5] + "</label></li><li><input type=checkbox id=box6 value=/><label for=box6>" + data[7] + "</label></li><li><input type=checkbox id=box7 value=/><label for=box7>" + data[8] + "</label></li><li><input type=checkbox id=box8 value=/><label for=box8>" + data[9] + "</label></li><li><input type=checkbox id=box9 value=/><label for=box9>" + data[10] + "</label></li><li><input type=checkbox id=box10 value=/><label for=box10>" + data[11] + "</label></li></ul>" + "<button class=buttons008 id=confirm onclick=confirm()>Confirm</button>";
document.getElementById("confirm").style.visibility= "hidden"; 
document.getElementById("confirm").style.top= "-160px"; 
document.getElementById("box1").value = data[1];
document.getElementById("box2").value = data[2];
document.getElementById("box3").value = data[3];
document.getElementById("box4").value = data[4];
document.getElementById("box5").value = data[5];
document.getElementById("box6").value = data[7];
document.getElementById("box7").value = data[8];
document.getElementById("box8").value = data[9];
document.getElementById("box9").value = data[10];
document.getElementById("box10").value = data[11];
$('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > 1) {
        $(this).prop('checked', false);
    }
    if ($('input[type=checkbox]:checked').length == 1) {
	document.getElementById("confirm").style.visibility= "visible"; 
    }
    if ($('input[type=checkbox]:checked').length < 1) {
	document.getElementById("confirm").style.visibility= "hidden"; 
    }
});
}
else if (data[picked] == "Opponent's Choice"){
document.getElementById("respin").style.visibility = "hidden"; 
document.getElementById("nextbutton").style.visibility= "visible"; 
if (wheelie[0] == chosen[0]) {picked = "1";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen[1]) {picked = "2";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen[2]) {picked = "3";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen[3]) {picked = "4";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen[4]) {picked = "5";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen[5]) {picked = "7";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen[6]) {picked = "8";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen[7]) {picked = "9";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen2[0]) {picked = "10";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen2[1]) {picked = "11";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
          round2();
}
else 
{
document.getElementById("nextbutton").style.visibility= "visible"; 
round2();
}
			mess = picked+1;     
                });
        }
function confirm(){
document.getElementById("message003").style.top= "-140px"; 
message001.innerHTML = "Press Next to proceed";
document.getElementById("message002").style.display= "none"; 
document.getElementById("chart").style.visibility = "hidden";
if (document.getElementById("box1").checked ){picked = 1;}
if (document.getElementById("box2").checked ){picked = 2;}
if (document.getElementById("box3").checked ){picked = 3;}
if (document.getElementById("box4").checked ){picked = 4;}
if (document.getElementById("box5").checked ){picked = 5;}
if (document.getElementById("box6").checked ){picked = 7;}
if (document.getElementById("box7").checked ){picked = 8;}
if (document.getElementById("box8").checked ){picked = 9;}
if (document.getElementById("box9").checked ){picked = 10;}
if (document.getElementById("box10").checked ){picked = 11;}
message003.innerHTML = "You selected " + data[picked] + "<br/><br/>" + "<button id=nextbutton class=buttons002 onclick=next001()>Next</button><br><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
round2();
}
function confirmopp(){
document.getElementById("message003").style.visibility = "visible";
if ((document.getElementById("box1").checked) && (document.getElementById("box1").disabled != true)){random = 1;}
if ((document.getElementById("box2").checked) && (document.getElementById("box2").disabled != true)){random = 2;}
if ((document.getElementById("box3").checked) && (document.getElementById("box3").disabled != true)){random = 3;}
if ((document.getElementById("box4").checked) && (document.getElementById("box4").disabled != true)){random = 4;}
if ((document.getElementById("box5").checked) && (document.getElementById("box5").disabled != true)){random = 5;}
if ((document.getElementById("box6").checked) && (document.getElementById("box6").disabled != true)){random = 7;}
if ((document.getElementById("box7").checked) && (document.getElementById("box7").disabled != true)){random = 8;}
if ((document.getElementById("box8").checked) && (document.getElementById("box8").disabled != true)){random = 9;}
if ((document.getElementById("box9").checked) && (document.getElementById("box9").disabled != true)){random = 10;}
if ((document.getElementById("box10").checked) && (document.getElementById("box10").disabled != true)){random = 11;}
message002.innerHTML = "You selected " + data[random] + "<br>" + "<button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
assigncompcat();
}
function assigncompcat(){
if (data[random] == r2Q1[0].cat){compcat = r2Q1;}
else if (data[random] == r2Q2[0].cat){compcat = r2Q2;}
else if (data[random] == r2Q3[0].cat){compcat = r2Q3;}
else if (data[random] == r2Q4[0].cat){compcat = r2Q4;}
else if (data[random] == r2Q5[0].cat){compcat = r2Q5;}
else if (data[random] == r2Q6[0].cat){compcat = r2Q6;}
else if (data[random] == r2Q7[0].cat){compcat = r2Q7;}
else if (data[random] == r2Q8[0].cat){compcat = r2Q8;}
else if (data[random] == r2Q9[0].cat){compcat = r2Q9;}
else if (data[random] == r2Q10[0].cat){compcat = r2Q10;}
else if (data[random] == r2Q11[0].cat){compcat = r2Q11;}
else if (data[random] == r2Q12[0].cat){compcat = r2Q12;}
compcat = shuffle(compcat);
}
var opponentspun = "0";
var random = 0;
var spinners = "0";
function simulatecomputerround2(){
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
random = Math.floor(Math.random() * numbers.length);
if (data[random] == "Spinner's Choice"){
spinners = "1";
if (data[picked] != wheelie[0]) {
if (wheelie[0] == chosen[0]) {random = "1";}
else if (wheelie[0] == chosen[1]) {random = "2";}
else if (wheelie[0] == chosen[2]) {random = "3";}
else if (wheelie[0] == chosen[3]) {random = "4";}
else if (wheelie[0] == chosen[4]) {random = "5";}
else if (wheelie[0] == chosen[5]) {random = "7";}
else if (wheelie[0] == chosen[6]) {random = "8";}
else if (wheelie[0] == chosen[7]) {random = "9";}
else if (wheelie[0] == chosen2[0]) {random = "10";}
else if (wheelie[0] == chosen2[1]) {random = "11";}
assigncompcat();}
else if (data[picked] != wheelie[1]) {
if (wheelie[1] == chosen[0]) {random = "1";}
else if (wheelie[1] == chosen[1]) {random = "2";}
else if (wheelie[1] == chosen[2]) {random = "3";}
else if (wheelie[1] == chosen[3]) {random = "4";}
else if (wheelie[1] == chosen[4]) {random = "5";}
else if (wheelie[1] == chosen[5]) {random = "7";}
else if (wheelie[1] == chosen[6]) {random = "8";}
else if (wheelie[1] == chosen[7]) {random = "9";}
else if (wheelie[1] == chosen2[0]) {random = "10";}
else if (wheelie[1] == chosen2[1]) {random = "11";}
assigncompcat();}
else if (data[picked] != wheelie[2]) {
if (wheelie[2] == chosen[0]) {random = "1";}
else if (wheelie[2] == chosen[1]) {random = "2";}
else if (wheelie[2] == chosen[2]) {random = "3";}
else if (wheelie[2] == chosen[3]) {random = "4";}
else if (wheelie[2] == chosen[4]) {random = "5";}
else if (wheelie[2] == chosen[5]) {random = "7";}
else if (wheelie[2] == chosen[6]) {random = "8";}
else if (wheelie[2] == chosen[7]) {random = "9";}
else if (wheelie[2] == chosen2[0]) {random = "10";}
else if (wheelie[2] == chosen2[1]) {random = "11";}
assigncompcat();}
}
if (data[random] == "Opponent's Choice"){opponentspun = "1";}
if ((data[random] != "Spinner's Choice") && (data[random] != "Opponent's Choice") && (data[random] == data[picked])){
simulatecomputerround2();}
if ((data[random] != "Spinner's Choice") && (data[random] != "Opponent's Choice") && (data[random] != data[picked])){
assigncompcat();
}
}
        svg.append("g")
            .attr("transform", "translate(" + (wid + padding.left + padding.right) + "," + ((hei/2)+padding.top) + ")")
            .append("path")
            .attr("d", "M-" + (rot*.15) + ",0L0," + (rot*.05) + "L0,-" + (rot*.05) + "Z")
            .style({"fill":"black"});
        svg.append("g")
            .attr("transform", "translate(" + (wid + padding.left + padding.right) + "," + ((hei/2)+padding.top) + ")")
            .append("path")
            .attr("d", "M-" + (rot*.15) + ",0L0," + (rot*.05) + "L0,-" + (rot*.05) + "Z")
            .style({"fill":"black"});
   
        function rotTween(to) {
          var io = d3.interpolate(oldrotation % 360, rotation);
          return function(t) {
            return "rotate(" + io(t) + ")";
          };
        }
  	function spin2(d){
		document.getElementById("nextbutton").style.visibility = "hidden";  
		document.getElementById("message002").style.visibility = "hidden";  
        
            var  ps       = 360/data.length,
                 pieslice = Math.round(1440/data.length),
                 rng      = Math.floor((Math.random() * 1440) + 360);
                
            rotation = (Math.round(rng / ps) * ps);
            
            picked = Math.round(data.length - (rotation % 360)/ps);
            picked = picked >= data.length ? (picked % data.length) : picked;
            rotation += 90 - Math.round(ps/2);
            vis.transition()
                .duration(3000)
                .attrTween("transform", rotTween)
                .each("end", function(){
                    //populate question
                    oldrotation = rotation;
                mess = picked+1;
	document.getElementById("message002").style.visibility = "visible";  
	message002.innerHTML = "You spun " +data[picked] + "<br/></br>" + "<button class=buttons008 id=respin onclick=spin2()>Spin Again</button>";
	document.getElementById("respin").style.visibility = "visible"; 
if (data[picked] == "Spinner's Choice"){
message002.innerHTML = "You spun Spinner's Choice" + "<br/></br>" + "Select which category you want to pick:" + "<br/></br>" + "<ul id=boxes class=aligner><li><input type=checkbox id=box1 value= /><label for=box1>" + data[1] +"</label></li><li><input type=checkbox id=box2 value=/><label for=box2>" +data[2] +"</label></li><li><input type=checkbox id=box3 value=/><label for=box3>" + data[3] + "</label></li><li><input type=checkbox id=box4 value=/><label for=box4>" + data[4] + "</label></li><li><input type=checkbox id=box5 value=/><label for=box5>" + data[5] + "</label></li><li><input type=checkbox id=box6 value=/><label for=box6>" + data[7] + "</label></li><li><input type=checkbox id=box7 value=/><label for=box7>" + data[8] + "</label></li><li><input type=checkbox id=box8 value=/><label for=box8>" + data[9] + "</label></li><li><input type=checkbox id=box9 value=/><label for=box9>" + data[10] + "</label></li><li><input type=checkbox id=box10 value=/><label for=box10>" + data[11] + "</label></li></ul>" + "<button class=buttons008 id=confirm onclick=confirm()>Confirm</button>";
document.getElementById("confirm").style.visibility= "hidden"; 
document.getElementById("confirm").style.top= "-160px"; 
document.getElementById("box1").value = data[1];
document.getElementById("box2").value = data[2];
document.getElementById("box3").value = data[3];
document.getElementById("box4").value = data[4];
document.getElementById("box5").value = data[5];
document.getElementById("box6").value = data[7];
document.getElementById("box7").value = data[8];
document.getElementById("box8").value = data[9];
document.getElementById("box9").value = data[10];
document.getElementById("box10").value = data[11];
$('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > 1) {
        $(this).prop('checked', false);
    }
    if ($('input[type=checkbox]:checked').length == 1) {
	document.getElementById("confirm").style.visibility= "visible"; 
    }
    if ($('input[type=checkbox]:checked').length < 1) {
	document.getElementById("confirm").style.visibility= "hidden"; 
    }
});
}
else if (data[picked] == "Opponent's Choice"){
document.getElementById("respin").style.visibility = "hidden"; 
document.getElementById("nextbutton").style.visibility= "visible"; 
if (wheelie[0] == chosen[0]) {picked = "1";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen[1]) {picked = "2";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen[2]) {picked = "3";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen[3]) {picked = "4";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen[4]) {picked = "5";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen[5]) {picked = "7";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen[6]) {picked = "8";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen[7]) {picked = "9";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen2[0]) {picked = "10";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
else if (wheelie[0] == chosen2[1]) {picked = "11";
message002.innerHTML = "You spun Opponent's Choice" + "<br/></br>" + competitorlist[0].id + " gave you " + data[picked]; }
          round2();
}
else {
document.getElementById("respin").style.visibility = "hidden"; 
document.getElementById("message003").style.top = "-230px"; 
document.getElementById("nextbutton").style.visibility= "visible"; 
round2();
}
                });
        }
        
        function getRandomNumbers(){
            var arraywheel = new Uint16Array(1000);
            var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
            if(window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function"){
                window.crypto.getRandomValues(array);
                console.log("works");
            } else {
                for(var i=0; i < 1000; i++){
                    arraywheel[i] = Math.floor(Math.random() * 100000) + 1;
                }
            }
            return arraywheel;
        }
var compcat = [];  
function round2(){
if (data[picked] == r2Q1[0].cat){r2question001 = r2Q1;}
else if (data[picked] == r2Q2[0].cat){r2question001 = r2Q2;}
else if (data[picked] == r2Q3[0].cat){r2question001 = r2Q3;}
else if (data[picked] == r2Q4[0].cat){r2question001 = r2Q4;}
else if (data[picked] == r2Q5[0].cat){r2question001 = r2Q5;}
else if (data[picked] == r2Q6[0].cat){r2question001 = r2Q6;}
else if (data[picked] == r2Q7[0].cat){r2question001 = r2Q7;}
else if (data[picked] == r2Q8[0].cat){r2question001 = r2Q8;}
else if (data[picked] == r2Q9[0].cat){r2question001 = r2Q9;}
else if (data[picked] == r2Q10[0].cat){r2question001 = r2Q10;}
else if (data[picked] == r2Q11[0].cat){r2question001 = r2Q11;}
else if (data[picked] == r2Q12[0].cat){r2question001 = r2Q12;}
r2question001 = shuffle(r2question001);
}
function begin001() {
time001.innerHTML = 20;
            c = 21;
	    document.getElementById("JTE").style.visibility = "visible";
	    document.getElementById("time001").style.visibility = "visible";
	    document.getElementById("message005").style.position = "relative";
	    document.getElementById("message005").style.top = "-150px";
	    document.getElementById("message006").style.position = "relative";
	    document.getElementById("message006").style.top = "-100px";
	document.getElementById("time001").style.top = "-140px";
            message001.innerHTML = question001[0].ques;
            message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[0].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
            message003.innerHTML = "";
            message005.innerHTML = "";
            message006.innerHTML = "";
            a++;
            qu001.innerHTML = "1 - " +question001[0].cat.toUpperCase();
	    document.getElementById("q1").focus();
	    unique();
        }
function JTE(){
document.getElementById("q1").focus();
if ((c != 0) && (c < 15)) {
if (j == 3) {
            c = 16;
             j--;
	    }
else if (j == 2) {
  if (h == 1) {
	    c = 16;
             j--;
	    document.getElementById("frame001").style.backgroundImage = "url('2JTEChal.png')";
	    }
  else if (h < 1) {
	    c = 16;
             j--;
	    document.getElementById("frame001").style.backgroundImage = "url('2JTE.png')";
	    }
}
else if (j == 1) {
  if (h == 1) {
	    c = 16;
             j--;
	    document.getElementById("frame001").style.backgroundImage = "url('1JTEChal.png')";
	    }
  else if (h < 1) {
	    c = 16;
             j--;
	   document.getElementById("frame001").style.backgroundImage = "url('1JTE.png')";
	    }
}
else if (j == 0) {
 if (h == 1) {
	    c = 16;
             j--;
	    document.getElementById("frame001").style.backgroundImage = "url('Chal.png')";
	     }
 else if (h < 1) {
	    c = 16;
             j--;
	    document.getElementById("frame001").style.backgroundImage = "url('Nothing.png')";
	    }
}
else if (j < 0) {
            message005.innerHTML = "No repeats left!";
	    }
}
}
function Challenge(){
	     var question1 = document.getElementById("q1").value;
if (question1.length < 1){
            message003.innerHTML = "You can't challenge because you didn't submit an answer!";
}
if (question1.length >= 1){
if (h == 1) {
	    document.getElementById("chalacc").style.visibility = "visible";
	    document.getElementById("chalden").style.visibility = "visible";
	    }
 else if (h < 1) {
            message003.innerHTML = "No challenges left!";
	    }
}
}
var steal = 0;
function ChallengeAccepted(){
	    document.getElementById("message004").style.top = "-190px";
if (r == 1) {
            score001.innerHTML = b+=1;
quescor++;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge won!";
	     }
else if (r == 3) {
            score001.innerHTML = b+=2;
quescor++;
quescountopp--;
posspointsopp-=2;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge won!";
if (steal == 1){
           quescoropp--;
     	    score002.innerHTML = s-=2;
            message006.innerHTML = "<br>";
}
	     }
else if (r == 4) {
if (a == 18){
            score001.innerHTML = b+=2;
quescor++;
}
else if (a == 19){
            score001.innerHTML = b+=3;
quescor++;
}
else if (a == 20){
            score001.innerHTML = b+=5;
quescor++;
}
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge won!";
	     }
else if (r == 5) {
            score001.innerHTML = b+=1;
quescor++;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge won!";
	     }
}
function ChallengeDenied(){
	    document.getElementById("message004").style.top = "-190px";
if (j == 2) {
	    document.getElementById("frame001").style.backgroundImage = "url('3JTE.png')";
	     h--;
	     h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
}
else if (j == 1) {
	    document.getElementById("frame001").style.backgroundImage = "url('2JTE.png)";
	   h--;
	    h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
	          }
else if (j == 0) {
	    document.getElementById("frame001").style.backgroundImage = "url('1JTE.png')";
	     h--;
	     h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
	          }
 else if (j < 0) {
	    document.getElementById("frame001").style.backgroundImage = "url('Nothing.png')";
	    h--;
	     h--;
	    document.getElementById("chalacc").style.visibility = "hidden";
	    document.getElementById("chalden").style.visibility = "hidden";
	    document.getElementById("chal").style.visibility = "hidden";
            message003.innerHTML = "Challenge lost!";
	      }
}
         function qcor() {
		document.getElementById("message003").style.top = "-150px";
		document.getElementById("message004").style.top = "-150px";
		document.getElementById("message006").style.top = "-150px";
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	    quescor++;
	    cormusic.play();
if (mc == 0){
            message003.innerHTML = "Correct!";
            message002.innerHTML = "";
	    message005.innerHTML = "";
	    message006.innerHTML = "";
            score001.innerHTML = b+=1;
	if ((a == 13) ||(a == 14)||(a == 15)||(a == 16)){
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}  
	if (a == 17){
            message004.innerHTML = "<button class=buttons002 onclick=next004()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc != 0){
	    document.getElementById("message004").style.top = "-140px";
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Correct!";
            message002.innerHTML = "";
	    message005.innerHTML = "";
	    message006.innerHTML = "";
            score001.innerHTML = b+=1;
	    stealmc--;
if (mc == 1){
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 2){
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 3){
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 4){
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion5()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 5){
 	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		}
}
}
        function qinc() {
		document.getElementById("message003").style.top = "-150px";
		document.getElementById("message004").style.top = "-150px";
		document.getElementById("message006").style.top = "-150px";
	   quescount++;
	   posspoints+=1;
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
	    incmusic.play();
            c = "-";
if (mc == 0){
	if (a == 13){
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[0].answ2 ;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	   posspointsopp+=1;
	   quescountopp++;
if ((competitorlist[0].strength1 == r2question001[0].cat) || (competitorlist[0].strength2 == r2question001[0].cat) || (competitorlist[0].strength3 == r2question001[0].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		}  
	if (a == 14){
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[4].answ2 ;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	   posspointsopp+=1;
	   quescountopp++;
if ((competitorlist[0].strength1 == r2question001[4].cat) || (competitorlist[0].strength2 == r2question001[4].cat) || (competitorlist[0].strength3 == r2question001[4].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		} 
	if (a == 15){
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[1].answ2 ;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	   posspointsopp+=1;
	   quescountopp++;
if ((competitorlist[0].strength1 == r2question001[1].cat) || (competitorlist[0].strength2 == r2question001[1].cat) || (competitorlist[0].strength3 == r2question001[1].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		}  
	if (a == 16){
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[2].answ2 ;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	   posspointsopp+=1;
	   quescountopp++;
if ((competitorlist[0].strength1 == r2question001[2].cat) || (competitorlist[0].strength2 == r2question001[2].cat) || (competitorlist[0].strength3 == r2question001[2].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		}  
	if (a == 17){
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[3].answ2;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	   posspointsopp+=1;
	   quescountopp++;
if ((competitorlist[0].strength1 == r2question001[3].cat) || (competitorlist[0].strength2 == r2question001[3].cat) || (competitorlist[0].strength3 == r2question001[3].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
            message004.innerHTML = "<button class=buttons002 onclick=next004()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		}  
}
else if (mc != 0){
	    document.getElementById("message004").style.top = "-140px";
if (mc == 1){
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[5].answ2;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	    stealmc--;
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 2){
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[6].answ2;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	    stealmc--;
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 3){
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[7].answ2;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	    stealmc--;
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 4){
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[8].answ2;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	    stealmc--;
if (stealmc > 0) {
 message004.innerHTML = "<button class=buttons002 onclick=mcquestion5()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
 message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
if (mc == 5){
	    document.getElementById("JTE").style.visibility = "hidden";
            window.clearInterval(update);
            c = "-";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[9].answ2;
            message002.innerHTML = "";
	    message006.innerHTML = "";
            message005.innerHTML = "";
	    stealmc--;
 	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
		}  
}
}
function myTrim(x) {
 	    x = x.replace(":"," ");
	    x = x.replace("!","");
	    x = x.replace("$","");
	    x = x.replace("?","");
	    x = x.replace(","," ");
	    x = x.replace("&","AND");
	    x = x.replace(".","");
	    x = x.replace("-"," ");
	    x = x.replace("   "," ");
	    x = x.replace("  "," ");
	    x = x.replace("É","E");
	    x = x.replace("Ó","O");
	    x = x.replace("Í","I");
	    x = x.replace("Á","A");
	    x = x.replace("Ñ","N");
	    x = x.replace("È","E");
	    x = x.replace("Ç","C");
            x = x.replace(/^\s+|\s+$/gm,'');
            return x;
}
var answeredtwo = 0;
var answeredthree = 0;
var answeredfive = 0;
var usertwo = 0;
var userthree = 0;
var userfive = 0;
function simulateq2(){
document.getElementById("message004").style.top = "-190px";
	   quescountopp++;
	   posspointsopp+=2;
if ((competitorlist[0].strength1 == question001[8].cat) || (competitorlist[0].strength2 == question001[8].cat) || (competitorlist[0].strength3 == question001[8].cat)){
percentage = competitorlist[0].strengthpercentage3;
}
var chance = Math.random() * 100;
if (chance < percentage3){
                time001.innerHTML = "";
		score002.innerHTML = s+=2;
	    quescoropp++;
		message002.innerHTML = "";
		message003.innerHTML = "";
		message005.innerHTML = "";
if (s - b > 0){
if (usertwo == 0){
message006.innerHTML = competitorlist[0].lowercase + " hit the 2 pointer." + "</br></br>" + "Your first category is " + question001[8].cat;
}
else if ((usertwo == 1) && (userthree == 0)){
message006.innerHTML = competitorlist[0].lowercase + " hit the 2 pointer." + "</br></br>" + "Your next category is " + threepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 0)){
message006.innerHTML = competitorlist[0].lowercase + " hit the 2 pointer." + "</br></br>" + "Your next category is " + fivepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 1)){
message006.innerHTML = competitorlist[0].lowercase + " hit the 2 pointer.";
}
}
else if (b - s >= 0){
message006.innerHTML = competitorlist[0].lowercase + " hit the 2 pointer.";
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
document.getElementById("chal").style.visibility = "hidden";
		}
else {
		message002.innerHTML = "";
                time001.innerHTML = "";
message003.innerHTML = "";
message005.innerHTML = "";
if (s - b > 0){
if (usertwo == 0){
message006.innerHTML = competitorlist[0].lowercase + " missed the 2 pointer." + "</br></br>" + "Your first category is " + question001[8].cat;
}
else if ((usertwo == 1) && (userthree == 0)){
message006.innerHTML = competitorlist[0].lowercase + " missed the 2 pointer." + "</br></br>" + "Your next category is " + threepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 0)){
message006.innerHTML = competitorlist[0].lowercase + " missed the 2 pointer." + "</br></br>" + "Your next category is " + fivepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 1)){
message006.innerHTML = competitorlist[0].lowercase + " missed the 2 pointer.";
}
}
else if (b - s >= 0){
message006.innerHTML = competitorlist[0].lowercase + " missed the 2 pointer.";
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
document.getElementById("chal").style.visibility = "hidden";
		}
answeredtwo++;
}
function simulateq3(){
document.getElementById("message004").style.top = "-190px";
	   quescountopp++;
	   posspointsopp+=3;
if ((competitorlist[0].strength1 == threepointer001[1].cat) || (competitorlist[0].strength2 == threepointer001[1].cat) || (competitorlist[0].strength3 == threepointer001[1].cat)){
percentage3 = competitorlist[0].strengthpercentage3;
}
var chance = Math.random() * 100;
if (chance < percentage3){
		score002.innerHTML = s+=3;
	    quescoropp++;
                time001.innerHTML = "";
		message002.innerHTML = "";
message003.innerHTML = "";
message005.innerHTML = "";
if (s - b > 0){
if (usertwo == 0){
message006.innerHTML = competitorlist[0].lowercase + " hit the 3 pointer." + "</br></br>" + "Your first category is " + question001[8].cat;
}
else if ((usertwo == 1) && (userthree == 0)){
message006.innerHTML = competitorlist[0].lowercase + " hit the 3 pointer." + "</br></br>" + "Your next category is " + threepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 0)){
message006.innerHTML = competitorlist[0].lowercase + " hit the 3 pointer." + "</br></br>" + "Your next category is " + fivepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 1)){
message006.innerHTML = competitorlist[0].lowercase + " hit the 3 pointer.";
}
}
else if (b - s >= 0){
message006.innerHTML = competitorlist[0].lowercase + " hit the 3 pointer.";
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
document.getElementById("chal").style.visibility = "hidden";
		}
else { 
                time001.innerHTML = "";
		message002.innerHTML = "";
message003.innerHTML = "";
message005.innerHTML = "";
if (s - b > 0){
if (usertwo == 0){
message006.innerHTML = competitorlist[0].lowercase + " missed the 3 pointer." + "</br></br>" + "Your first category is " + question001[8].cat;
}
else if ((usertwo == 1) && (userthree == 0)){
message006.innerHTML = competitorlist[0].lowercase + " missed the 3 pointer." + "</br></br>" + "Your next category is " + threepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 0)){
message006.innerHTML = competitorlist[0].lowercase + " missed the 3 pointer." + "</br></br>" + "Your next category is " + fivepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 1)){
message006.innerHTML = competitorlist[0].lowercase + " missed the 3 pointer.";
}
}
else if (b - s >= 0){
message006.innerHTML = competitorlist[0].lowercase + " missed the 3 pointer.";
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
document.getElementById("chal").style.visibility = "hidden";
		}
answeredthree++;
}
function simulateq5(){
document.getElementById("message004").style.top = "-190px";
	   quescountopp++;
	   posspointsopp+=5;
if ((competitorlist[0].strength1 == fivepointer001[1].cat) || (competitorlist[0].strength2 == fivepointer001[1].cat) || (competitorlist[0].strength3 == fivepointer001[1].cat)){
percentage5 = competitorlist[0].strengthpercentage5;
}
var chance = Math.random() * 100;
if (chance < percentage5){
		score002.innerHTML = s+=5;
	    quescoropp++;
                time001.innerHTML = "";
		message002.innerHTML = "";
		message003.innerHTML = "";
		message005.innterHTML = "";
if (s - b > 0){
if (usertwo == 0){
message006.innerHTML = competitorlist[0].lowercase + " hit the 5 pointer." + "</br></br>" + "Your first category is " + question001[8].cat;
}
else if ((usertwo == 1) && (userthree == 0)){
message006.innerHTML = competitorlist[0].lowercase + " hit the 5 pointer." + "</br></br>" + "Your next category is " + threepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 0)){
message006.innerHTML = competitorlist[0].lowercase + " hit the 5 pointer." + "</br></br>" + "Your next category is " + fivepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 1)){
message006.innerHTML = competitorlist[0].lowercase + " hit the 5 pointer.";
}
}
else if (b - s >= 0){
message006.innerHTML = competitorlist[0].lowercase + " hit the 5 pointer.";
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
document.getElementById("chal").style.visibility = "hidden";
		}
else { 
                time001.innerHTML = "";
		message002.innerHTML = "";
message003.innerHTML = "";
message005.innerHTML = "";
if (s - b > 0){
if (usertwo == 0){
message006.innerHTML = competitorlist[0].lowercase + " missed the 5 pointer." + "</br></br>" + "Your first category is " + question001[8].cat;
}
else if ((usertwo == 1) && (userthree == 0)){
message006.innerHTML = competitorlist[0].lowercase + " missed the 5 pointer." + "</br></br>" + "Your next category is " + threepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 0)){
message006.innerHTML = competitorlist[0].lowercase + " missed the 5 pointer." + "</br></br>" + "Your next category is " + fivepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 1)){
message006.innerHTML = competitorlist[0].lowercase + " missed the 5 pointer.";
}
}
else if (b - s >= 0){
if (usertwo == 0){
message006.innerHTML = competitorlist[0].lowercase + " missed the 5 pointer." + "</br></br>" + "Your first category is " + question001[8].cat;
}
else if ((usertwo == 1) && (userthree == 0)){
message006.innerHTML = competitorlist[0].lowercase + " missed the 5 pointer." + "</br></br>" + "Your next category is " + threepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 0)){
message006.innerHTML = competitorlist[0].lowercase + " missed the 5 pointer." + "</br></br>" + "Your next category is " + fivepointer001[0].cat;
}
else if ((usertwo == 1) && (userthree == 1) && (userfive == 1)){
message006.innerHTML = competitorlist[0].lowercase + " missed the 5 pointer.";
}
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
document.getElementById("chal").style.visibility = "hidden";
		}
answeredfive++;
}
function analyser3 (){
if ((b - s >= 0) && (answeredtwo == 0)){
simulateq2();
}
else if ((b - s >= 0) && (answeredtwo == 1) && (answeredthree == 0)){
simulateq3();
}
else if ((b - s >= 0) && (answeredthree == 1) && (answeredfive == 0)){
simulateq5();
}
else if ((s - b > 0) && (usertwo == 1) && (userthree == 1) && (userfive == 1) && (answeredtwo == 1)){
lose();
}
else if ((b - s > 0) && (usertwo == 1) && (userthree == 1) && (userfive == 1) && (answeredtwo == 1)){
win();
}
else if ((b - s > 0) && (usertwo == 0) && (answeredtwo == 1) && (answeredfive == 1) && (answeredthree == 1)){
winTKO();
}
else if ((s - b > 0) && (usertwo == 1) && (userthree == 1) && (userfive == 1) && (answeredtwo == 0)){
loseTKO();
}
else {
next001();
}
}
function winKO(){
	    	document.getElementById("JTE").style.visibility = "hidden";
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "End of Match";
                time001.innerHTML = "";
		document.getElementById("message002").style.fontSize = "200%";
		document.getElementById("message002").style.fontWeight = "bold";
		document.getElementById("message003").style.fontSize = "200%";
		document.getElementById("message003").style.fontWeight = "bold";
                message002.innerHTML = "<span class=flash style=font-size:240%>KO</span>" + "</br></br>" + "And your winner...."
		var winner = competitorlist[0].lowercase;
                message003.innerHTML = player001.innerHTML;
 		var ppe = ((b / posspoints) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / posspointsopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].lowercase + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("wins").stepUp(1);
		document.getElementById("save").click();
document.getElementById("passwordsaverQuarter").value = "BOONTA EVE";
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br></br>" + "You have unlocked the next round. Use the password 'Boonta Eve' to enter.";
		document.getElementById("message002").style.top = "-200px";
		document.getElementById("message004").style.top = "-375px";
		document.getElementById("message003").style.top = "-200px";
		document.getElementById("message006").style.top = "-100px";
		document.getElementById("message006").style.fontSize = "110%";
}
function loseKO(){
	    	document.getElementById("JTE").style.visibility = "hidden";
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "End of Match";
                time001.innerHTML = "";
		document.getElementById("message002").style.fontSize = "200%";
		document.getElementById("message002").style.fontWeight = "bold";
		document.getElementById("message003").style.fontSize = "200%";
		document.getElementById("message003").style.fontWeight = "bold";
                message002.innerHTML = "<span class=flash style=font-size:240%>KO</span>" + "</br></br>" + "And your winner...."
		var winner = competitorlist[0].lowercase;
		message003.innerHTML = winner.toUpperCase();
 		var ppe = ((b / posspoints) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / posspointsopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].lowercase + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("losses").stepUp(1);
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>";
		document.getElementById("message002").style.top = "-200px";
		document.getElementById("message004").style.top = "-375px";
		document.getElementById("message003").style.top = "-200px";
		document.getElementById("message006").style.top = "-100px";
		document.getElementById("message006").style.fontSize = "110%";
}
function winTKO(){
	    	document.getElementById("JTE").style.visibility = "hidden";
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "End of Match";
                time001.innerHTML = "";
		document.getElementById("message002").style.fontSize = "200%";
		document.getElementById("message002").style.fontWeight = "bold";
		document.getElementById("message003").style.fontSize = "200%";
		document.getElementById("message003").style.fontWeight = "bold";
                message002.innerHTML = "<span class=flash style=font-size:240%>TKO</span>" + "</br></br>" + "And your winner...."
		var winner = competitorlist[0].lowercase;
                message003.innerHTML = player001.innerHTML;
 		var ppe = ((b / posspoints) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / posspointsopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].lowercase + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("wins").stepUp(1);
		document.getElementById("save").click();
document.getElementById("passwordsaverQuarter").value = "BOONTA EVE";
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br></br>" + "You have unlocked the next round. Use the password 'Boonta Eve' to enter.";
		document.getElementById("message002").style.top = "-200px";
		document.getElementById("message004").style.top = "-375px";
		document.getElementById("message003").style.top = "-200px";
		document.getElementById("message006").style.top = "-100px";
		document.getElementById("message006").style.fontSize = "110%";
}
function loseTKO(){
	    	document.getElementById("JTE").style.visibility = "hidden";
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "End of Match";
                time001.innerHTML = "";
		document.getElementById("message002").style.fontSize = "200%";
		document.getElementById("message002").style.fontWeight = "bold";
		document.getElementById("message003").style.fontSize = "200%";
		document.getElementById("message003").style.fontWeight = "bold";
                message002.innerHTML = "<span class=flash style=font-size:240%>TKO</span>" + "</br></br>" + "And your winner...."
		var winner = competitorlist[0].lowercase;
		message003.innerHTML = winner.toUpperCase();
 		var ppe = ((b / posspoints) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / posspointsopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].lowercase + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("losses").stepUp(1);
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>";
		document.getElementById("message002").style.top = "-200px";
		document.getElementById("message004").style.top = "-375px";
		document.getElementById("message003").style.top = "-200px";
		document.getElementById("message006").style.top = "-100px";
		document.getElementById("message006").style.fontSize = "110%";
}
function win(){
	    	document.getElementById("JTE").style.visibility = "hidden";
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "End of Match";
                time001.innerHTML = "";
		document.getElementById("message002").style.fontSize = "200%";
		document.getElementById("message002").style.fontWeight = "bold";
		document.getElementById("message003").style.fontSize = "200%";
		document.getElementById("message003").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...."
		var winner = competitorlist[0].lowercase;
                message003.innerHTML = player001.innerHTML;
		var ppe = ((b / posspoints) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / posspointsopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].lowercase + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("wins").stepUp(1);
		document.getElementById("save").click();
document.getElementById("passwordsaverQuarter").value = "BOONTA EVE";
message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>" + "</br></br></br>" + "You have unlocked the next round. Use the password 'Boonta Eve' to enter.";
		document.getElementById("message002").style.top = "-200px";
		document.getElementById("message004").style.top = "-375px";
		document.getElementById("message003").style.top = "-200px";
		document.getElementById("message006").style.top = "-100px";
		document.getElementById("message006").style.fontSize = "110%";
}
function lose(){
	    	document.getElementById("JTE").style.visibility = "hidden";
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "End of Match";
                time001.innerHTML = "";
		document.getElementById("message002").style.fontSize = "200%";
		document.getElementById("message002").style.fontWeight = "bold";
		document.getElementById("message003").style.fontSize = "200%";
		document.getElementById("message003").style.fontWeight = "bold";
                message002.innerHTML = "And your winner...."
		var winner = competitorlist[0].lowercase;
		message003.innerHTML = winner.toUpperCase();
		var ppe = ((b / posspoints) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / posspointsopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].lowercase + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message005.innerHTML = "";
		document.getElementById("losses").stepUp(1);
		document.getElementById("save").click();
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>";
		document.getElementById("message002").style.top = "-200px";
		document.getElementById("message004").style.top = "-375px";
		document.getElementById("message003").style.top = "-200px";
		document.getElementById("message006").style.top = "-100px";
		document.getElementById("message006").style.fontSize = "110%";
}
var mc = 0;
var open = 0;
function checker() {
document.getElementById("message003").style.top = "-140px";
document.getElementById("message004").style.top = "-140px";
document.getElementById("message006").style.top = "-140px";
	percentage = competitorlist[0].percentage;
	    steal = 0;
if (a == 2){
	    var question01 = document.getElementById("q1").value.toUpperCase();
	    var question1 = myTrim(question01);
	    question1 = myTrim(question1);
if (question1.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question1, question001[0].answ);
if (typeof(question001[0].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question1, question001[0].answ3);
}
}
else if (question1.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question1 == question001[0].answ) || (question1 == question001[0].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[1].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[0].cat) || (competitorlist[0].strength2 == question001[0].cat) || (competitorlist[0].strength3 == question001[0].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question1 != question001[0].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[0].answ2;
	    message006.innerHTML =  "Next category is " +question001[1].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[0].cat) || (competitorlist[0].strength2 == question001[0].cat) || (competitorlist[0].strength3 == question001[0].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
            }
	   
}
if (a == 3){
	    var question02 = document.getElementById("q1").value.toUpperCase();
	    var question2 = myTrim(question02);
	    question2 = myTrim(question2);
if (question2.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question2, question001[1].answ);
if (typeof(question001[1].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question2, question001[1].answ3);
}
}
else if (question2.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question2 == question001[1].answ) || (question2 == question001[1].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[2].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[1].cat) || (competitorlist[0].strength2 == question001[1].cat) || (competitorlist[0].strength3 == question001[1].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question2 != question001[1].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[1].answ2;
	    message006.innerHTML =  "Next category is " +question001[2].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[1].cat) || (competitorlist[0].strength2 == question001[1].cat) || (competitorlist[0].strength3 == question001[1].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
            }
	
}
if (a == 4){
	    var question03 = document.getElementById("q1").value.toUpperCase();
	    var question3 = myTrim(question03);
	    question3 = myTrim(question3);
if (question3.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question3, question001[2].answ);
if (typeof(question001[2].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question3, question001[2].answ3);
}
}
else if (question3.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question3 == question001[2].answ) || (question3 == question001[2].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[3].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[2].cat) || (competitorlist[0].strength2 == question001[2].cat) || (competitorlist[0].strength3 == question001[2].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question3 != question001[2].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[2].answ2;
	    message006.innerHTML =  "Next category is " +question001[3].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[2].cat) || (competitorlist[0].strength2 == question001[2].cat) || (competitorlist[0].strength3 == question001[2].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
	  
}
if (a == 5){
	    var question04 = document.getElementById("q1").value.toUpperCase();
	    var question4 = myTrim(question04);
	    question4 = myTrim(question4);
if (question4.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question4, question001[3].answ);
if (typeof(question001[3].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question4, question001[3].answ3);
}
}
else if (question4.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question4 == question001[3].answ) || (question4 == question001[3].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[4].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[3].cat) || (competitorlist[0].strength2 == question001[3].cat) || (competitorlist[0].strength3 == question001[3].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question4 != question001[3].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[3].answ2;
	    message006.innerHTML =  "Next category is " +question001[4].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[3].cat) || (competitorlist[0].strength2 == question001[3].cat) || (competitorlist[0].strength3 == question001[3].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
	   
}
if (a == 6){
	    var question05 = document.getElementById("q1").value.toUpperCase();
	    var question5 = myTrim(question05);
	    question5 = myTrim(question5);
if (question5.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question5, question001[4].answ);
if (typeof(question001[4].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question5, question001[4].answ3);
}
}
else if (question5.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question5 == question001[4].answ) || (question5 == question001[4].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[14].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[4].cat) || (competitorlist[0].strength2 == question001[4].cat) || (competitorlist[0].strength3 == question001[4].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question5 != question001[4].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[4].answ2;
	    message006.innerHTML =  "Next category is " +question001[14].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[4].cat) || (competitorlist[0].strength2 == question001[4].cat) || (competitorlist[0].strength3 == question001[4].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
	    
}
if (a == 7){
	    var question025 = document.getElementById("q1").value.toUpperCase();
	    var question25 = myTrim(question025);
	    question25 = myTrim(question25);
if (question25.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question25, question001[14].answ);
if (typeof(question001[14].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question25, question001[14].answ3);
}
}
else if (question25.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question25 == question001[14].answ) || (question25 == question001[14].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[15].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[14].cat) || (competitorlist[0].strength2 == question001[14].cat) || (competitorlist[0].strength3 == question001[14].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question25 != question001[14].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[14].answ2;
	    message006.innerHTML =  "Next category is " +question001[15].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[14].cat) || (competitorlist[0].strength2 == question001[14].cat) || (competitorlist[0].strength3 == question001[14].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
	    
}
if (a == 8){
	    var question026 = document.getElementById("q1").value.toUpperCase();
	    var question26 = myTrim(question026);
	    question26 = myTrim(question26);
if (question26.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question26, question001[15].answ);
if (typeof(question001[15].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question26, question001[15].answ3);
}
}
else if (question26.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question26 == question001[15].answ) || (question26 == question001[15].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[5].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[15].cat) || (competitorlist[0].strength2 == question001[15].cat) || (competitorlist[0].strength3 == question001[15].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question26 != question001[15].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[15].answ2;
	    message006.innerHTML =  "Next category is " +question001[5].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[15].cat) || (competitorlist[0].strength2 == question001[15].cat) || (competitorlist[0].strength3 == question001[15].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
	    
}
if (a == 9){
	    var question06 = document.getElementById("q1").value.toUpperCase();
	    var question6 = myTrim(question06);
	    question6 = myTrim(question6);
if (question6.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question6, question001[5].answ);
if (typeof(question001[5].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question6, question001[5].answ3);
}
}
else if (question6.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question6 == question001[5].answ) || (question6 == question001[5].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[6].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[5].cat) || (competitorlist[0].strength2 == question001[5].cat) || (competitorlist[0].strength3 == question001[5].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() *100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question6 != question001[5].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[5].answ2;
	    message006.innerHTML =  "Next category is " +question001[6].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[5].cat) || (competitorlist[0].strength2 == question001[5].cat) || (competitorlist[0].strength3 == question001[5].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
	  
}
if (a == 10){
	    var question07 = document.getElementById("q1").value.toUpperCase();
	    var question7 = myTrim(question07);
	    question7 = myTrim(question7);
if (question7.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question7, question001[6].answ);
if (typeof(question001[6].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question7, question001[6].answ3);
}
}
else if (question7.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question7 == question001[6].answ) || (question7 == question001[6].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "Next category is " +question001[7].cat;
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[6].cat) || (competitorlist[0].strength2 == question001[6].cat) || (competitorlist[0].strength3 == question001[6].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question7 != question001[6].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[6].answ2;
	    message006.innerHTML =  "Next category is " +question001[7].cat;
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[6].cat) || (competitorlist[0].strength2 == question001[6].cat) || (competitorlist[0].strength3 == question001[6].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
	
}
if (a == 11){
	    var question08 = document.getElementById("q1").value.toUpperCase();
	    var question8 = myTrim(question08);
	    question8 = myTrim(question8);
if (question8.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question8, question001[7].answ);
if (typeof(question001[7].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question8, question001[7].answ3);
}
}
else if (question8.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question8 == question001[7].answ) || (question8 == question001[7].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if (b == 10) {
            	message003.innerHTML = "Perfect Round! You'll get a bonus question.";
	    	message006.innerHTML =  "Next category is " +question001[9].cat;
}
else if (b != 10) {
	    	message003.innerHTML = "Correct!" ;
	    	message006.innerHTML =  "";
}
if ((competitorlist[0].strength1 == question001[7].cat) || (competitorlist[0].strength2 == question001[7].cat) || (competitorlist[0].strength3 == question001[7].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		message005.innerHTML = "";
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question8 != question001[7].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[7].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[7].cat) || (competitorlist[0].strength2 == question001[7].cat) || (competitorlist[0].strength3 == question001[7].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
	 
}
if (a == 12){
	    var question017 = document.getElementById("q1").value.toUpperCase();
	    var question17 = myTrim(question017);
	    question17 = myTrim(question17);
if (question17.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question17, question001[9].answ);
if (typeof(question001[9].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question17, question001[9].answ3);
}
}
else if (question17.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question17 == question001[9].answ) || (question17 == question001[9].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[9].cat) || (competitorlist[0].strength2 == question001[9].cat) || (competitorlist[0].strength3 == question001[9].cat)){
percentage = competitorlist[0].strengthpercentage;
}
if (s == 10){
	   quescountopp++;
	   posspointsopp+=1;
var chance = Math.random()*100;
if (chance < percentage) {
	    quescoropp++;
            score002.innerHTML = s+=1;
}
}
            message004.innerHTML = "<button class=buttons002 onclick=next002()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question17 != question001[9].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[9].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[9].cat) || (competitorlist[0].strength2 == question001[9].cat) || (competitorlist[0].strength3 == question001[9].cat)){
percentage = competitorlist[0].strengthpercentage;
}
if (s == 10){
	   quescountopp++;
	   posspointsopp+=1;
var chance = Math.random()*100;
if (chance < percentage) {
	    quescoropp++;
            score002.innerHTML = s+=1;
}
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next002()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
}
if (a == 13){
	    var question09 = document.getElementById("q1").value.toUpperCase();
	    var question9 = myTrim(question09);
	    question9 = myTrim(question9);
if (question9.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question9, r2question001[0].answ);
if (typeof(r2question001[0].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question9, r2question001[0].answ3);
}
}
else if (question9.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
	    document.getElementById("q1").disabled = true;
	if ((question9 == r2question001[0].answ) || (question9 == r2question001[0].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("mc").style.display = "none";
	    document.getElementById("sub").style.display = "none";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=2;
quescor++;
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question9 != r2question001[0].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("sub").style.display = "none";
	    document.getElementById("mc").style.display = "none";
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[0].answ2;
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    incmusic.play();
	   quescountopp++;
	   posspointsopp+=2;
if ((competitorlist[0].strength1 == r2question001[0].cat) || (competitorlist[0].strength2 == r2question001[0].cat) || (competitorlist[0].strength3 == r2question001[0].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
var percentager2 = 0.9 * percentage;
if (chance < percentager2){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
	    steal = 1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
}
}
if (a == 14){
	    var question029 = document.getElementById("q1").value.toUpperCase();
	    var question29 = myTrim(question029);
	    question29 = myTrim(question29);
if (question29.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question29, r2question001[4].answ);
if (typeof(r2question001[4].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question29, r2question001[4].answ3);
}
}
else if (question29.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
	    document.getElementById("q1").disabled = true;
	if ((question29 == r2question001[4].answ) || (question29 == r2question001[4].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("mc").style.display = "none";
	    document.getElementById("sub").style.display = "none";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question29 != r2question001[4].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("sub").style.display = "none";
	    document.getElementById("mc").style.display = "none";
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[4].answ2;
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    incmusic.play();
	   quescountopp++;
	   posspointsopp+=2;
if ((competitorlist[0].strength1 == r2question001[4].cat) || (competitorlist[0].strength2 == r2question001[4].cat) || (competitorlist[0].strength3 == r2question001[4].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
var percentager2 = 0.9 * percentage;
if (chance < percentager2){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
	    steal = 1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
}
}
if (a == 15){
	    var question010 = document.getElementById("q1").value.toUpperCase();
	    var question10 = myTrim(question010);
	    question10 = myTrim(question10);
if (question10.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question10, r2question001[1].answ);
if (typeof(r2question001[1].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question10, r2question001[1].answ3);
}
}
else if (question10.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
	    document.getElementById("q1").disabled = true;
	if ((question10 == r2question001[1].answ) || (question10 == r2question001[1].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("sub").style.display = "none";
	    document.getElementById("mc").style.display = "none";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
	    message005.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question10 != r2question001[1].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("sub").style.display = "none";
	    document.getElementById("mc").style.display = "none";
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[1].answ2;
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    incmusic.play();
	   quescountopp++;
	   posspointsopp+=2;
if ((competitorlist[0].strength1 == r2question001[1].cat) || (competitorlist[0].strength2 == r2question001[1].cat) || (competitorlist[0].strength3 == r2question001[1].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
var percentager2 = 0.9 * percentage;
if (chance < percentager2){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
	    steal = 1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
            }
}
if (a == 16){
	    var question011 = document.getElementById("q1").value.toUpperCase();
	    var question11 = myTrim(question011);
	    question11 = myTrim(question11);
if (question11.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question11, r2question001[2].answ);
if (typeof(r2question001[2].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question11, r2question001[2].answ3);
}
}
else if (question11.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
	    document.getElementById("q1").disabled = true;
	if ((question11 == r2question001[2].answ) || (question11 == r2question001[2].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("mc").style.display = "none";
	    document.getElementById("sub").style.display = "none";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
	    message005.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question11 != r2question001[2].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("mc").style.display = "none";
	    document.getElementById("sub").style.display = "none";
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[2].answ2;
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    incmusic.play();
	   quescountopp++;
	   posspointsopp+=2;
if ((competitorlist[0].strength1 == r2question001[2].cat) || (competitorlist[0].strength2 == r2question001[2].cat) || (competitorlist[0].strength3 == r2question001[2].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
var percentager2 = 0.9 * percentage;
if (chance < percentager2){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
	    steal = 1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
            }
}
if ((a == 17) && (open == 0) && (mc == 0)){
	    var question012 = document.getElementById("q1").value.toUpperCase();
	    var question12 = myTrim(question012);
	    question12 = myTrim(question12);
if (question12.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question12, r2question001[3].answ);
if (typeof(r2question001[3].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question12, r2question001[3].answ3);
}
}
else if (question12.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
	    document.getElementById("q1").disabled = true;
	if ((question12 == r2question001[3].answ) || (question12 == r2question001[3].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("mc").style.display = "none";
	    document.getElementById("sub").style.display = "none";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
	    message005.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next004()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question12 != r2question001[3].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
	    document.getElementById("mc").style.display = "none";
	    document.getElementById("sub").style.display = "none";
            message003.innerHTML = "Incorrect. The correct answer is " + r2question001[3].answ2;
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    incmusic.play();
	   quescountopp++;
	   posspointsopp+=2;
if ((competitorlist[0].strength1 == r2question001[3].cat) || (competitorlist[0].strength2 == r2question001[0].cat) || (competitorlist[0].strength3 == r2question001[3].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
var percentager2 = 0.9 * percentage;
if (chance < percentager2){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
	    steal = 1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next004()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
            }
}
if (a == 18){
	    var question013 = document.getElementById("q1").value.toUpperCase();
	    var question13 = myTrim(question013);
	    question13 = myTrim(question13);
if (question13.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question13, question001[8].answ);
if (typeof(question001[8].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question13, question001[8].answ3);
}
}
else if (question13.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question13 == question001[8].answ) || (question13 == question001[8].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
if (s - b > 0){
	    message006.innerHTML =  "Next category is " +threepointer001[0].cat;
}
else if ((s - b == 0) && (answeredfive == 1)){
	    message006.innerHTML =  "Next category is " +threepointer001[0].cat;
}
            message004.innerHTML = "<button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question13 != question001[8].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[8].answ2;
	    incmusic.play();
if (s - b > 0){
	    message006.innerHTML =  "Next category is " +threepointer001[0].cat;
}
else if ((s - b == 0) && (answeredfive == 1)){
	    message006.innerHTML =  "Next category is " +threepointer001[0].cat;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
            }
}
if (a == 19){
	    var question014 = document.getElementById("q1").value.toUpperCase();
	    var question14 = myTrim(question014);
	    question14 = myTrim(question14);
if (question14.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question14, threepointer001[0].answ);
if (typeof(threepointer001[0].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question14, threepointer001[0].answ3);
}
}
else if (question14.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=3;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question14 == threepointer001[0].answ) || (question14 == threepointer001[0].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
            score001.innerHTML = b+=3;
quescor++;
	    cormusic.play();
if (s - b > 0){
	    message006.innerHTML =  "Next category is " +fivepointer001[0].cat;
}
else if ((s - b == 0) && (answeredfive == 1)){
	    message006.innerHTML =  "Next category is " +fivepointer001[0].cat;
}
            message004.innerHTML = "<button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question14 != threepointer001[0].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + threepointer001[0].answ2;
	    incmusic.play();
if (s - b > 0){
	    message006.innerHTML =  "Next category is " +fivepointer001[0].cat;
}
else if ((s - b == 0) && (answeredfive == 1)){
	    message006.innerHTML =  "Next category is " +fivepointer001[0].cat;
}
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
            }
}
if (a == 20){
	    var question015 = document.getElementById("q1").value.toUpperCase();
	    var question15 = myTrim(question015);
	    question15 = myTrim(question15);
if (question15.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question15, fivepointer001[0].answ);
if (typeof(fivepointer001[0].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question15, fivepointer001[0].answ3);
}
}
else if (question15.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=5;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question15 == fivepointer001[0].answ) || (question15 == fivepointer001[0].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=5;
quescor++;
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	     }
            else if (question15 != fivepointer001[0].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + fivepointer001[0].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
            }
}
if (a == 22){
	    var question016 = document.getElementById("q1").value.toUpperCase();
	    var question16 = myTrim(question016);
	    question16 = myTrim(question16);
if (question16.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question16, question001[10].answ);
if (typeof(question001[10].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question16, question001[10].answ3);
}
}
else if (question16.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question16 == question001[10].answ) || (question16 == question001[10].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[10].cat) || (competitorlist[0].strength2 == question001[10].cat) || (competitorlist[0].strength3 == question001[10].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question16 != question001[10].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[10].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[10].cat) || (competitorlist[0].strength2 == question001[10].cat) || (competitorlist[0].strength3 == question001[10].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
}
if (a == 23){
	    var question018 = document.getElementById("q1").value.toUpperCase();
	    var question18 = myTrim(question018);
	    question18 = myTrim(question18);
if (question18.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question18, question001[11].answ);
if (typeof(question001[11].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question18, question001[11].answ3);
}
}
else if (question18.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question18 == question001[11].answ) || (question18 == question001[11].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[11].cat) || (competitorlist[0].strength2 == question001[11].cat) || (competitorlist[0].strength3 == question001[11].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question18 != question001[11].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[11].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[11].cat) || (competitorlist[0].strength2 == question001[11].cat) || (competitorlist[0].strength3 == question001[11].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
}
if (a == 24){
	    var question019 = document.getElementById("q1").value.toUpperCase();
	    var question19 = myTrim(question019);
	    question19 = myTrim(question19);
if (question19.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question19, question001[12].answ);
if (typeof(question001[12].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question19, question001[12].answ3);
}
}
else if (question19.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question19 == question001[12].answ) || (question19 == question001[12].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[12].cat) || (competitorlist[0].strength2 == question001[12].cat) || (competitorlist[0].strength3 == question001[12].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question19 != question001[12].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[12].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[12].cat) || (competitorlist[0].strength2 == question001[12].cat) || (competitorlist[0].strength3 == question001[12].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
}
if (a == 25){
	    var question020 = document.getElementById("q1").value.toUpperCase();
	    var question20 = myTrim(question020);
	    question20 = myTrim(question20);
if (question20.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question20, question001[13].answ);
if (typeof(question001[13].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question20, question001[13].answ3);
}
}
else if (question20.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question20 == question001[13].answ) || (question20 == question001[13].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[13].cat) || (competitorlist[0].strength2 == question001[13].cat) || (competitorlist[0].strength3 == question001[13].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question20 != question001[13].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[13].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[13].cat) || (competitorlist[0].strength2 == question001[13].cat) || (competitorlist[0].strength3 == question001[13].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
}
if (a == 26){
	    var question021 = document.getElementById("q1").value.toUpperCase();
	    var question21 = myTrim(question021);
	    question21 = myTrim(question21);
if (question21.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question21, question001[16].answ);
if (typeof(question001[16].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question21, question001[16].answ3);
}
}
else if (question21.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question21 == question001[16].answ) || (question21 == question001[16].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[16].cat) || (competitorlist[0].strength2 == question001[16].cat) || (competitorlist[0].strength3 == question001[16].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question21 != question001[16].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[16].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[16].cat) || (competitorlist[0].strength2 == question001[16].cat) || (competitorlist[0].strength3 == question001[16].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
}
if (a == 27){
	    var question022 = document.getElementById("q1").value.toUpperCase();
	    var question22 = myTrim(question022);
	    question22 = myTrim(question22);
if (question22.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question22, question001[17].answ);
if (typeof(question001[17].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question22, question001[17].answ3);
}
}
else if (question22.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question22 == question001[17].answ) || (question22 == question001[17].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[17].cat) || (competitorlist[0].strength2 == question001[17].cat) || (competitorlist[0].strength3 == question001[17].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question22 != question001[17].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[17].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[17].cat) || (competitorlist[0].strength2 == question001[17].cat) || (competitorlist[0].strength3 == question001[17].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
}
if (a == 28){
	    var question023 = document.getElementById("q1").value.toUpperCase();
	    var question23 = myTrim(question023);
	    question23 = myTrim(question23);
if (question23.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question23, question001[18].answ);
if (typeof(question001[18].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question23, question001[18].answ3);
}
}
else if (question23.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question23 == question001[18].answ) || (question23 == question001[18].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
if ((competitorlist[0].strength1 == question001[18].cat) || (competitorlist[0].strength2 == question001[18].cat) || (competitorlist[0].strength3 == question001[18].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question23 != question001[18].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[18].answ2;
	    message006.innerHTML =  "";
	    incmusic.play();
if ((competitorlist[0].strength1 == question001[18].cat) || (competitorlist[0].strength2 == question001[18].cat) || (competitorlist[0].strength3 == question001[18].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random()*100;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
	    message005.innerHTML = "";
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
	percentage = competitorlist[0].percentage;
            }
}
if (a == 29){
	    var question024 = document.getElementById("q1").value.toUpperCase();
	    var question24 = myTrim(question024);
	    question24 = myTrim(question24);
if (question24.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(question24, question001[19].answ);
if (typeof(question001[19].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(question24, question001[19].answ3);
}
}
else if (question24.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=1;
	   quescountopp++;
	   posspointsopp+=1;
	    document.getElementById("submit2").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((question24 == question001[19].answ) || (question24 == question001[19].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=1;
quescor++;
	    cormusic.play();
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
	     }
            else if (question24 != question001[19].answ) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " + question001[19].answ2;
	    message006.innerHTML =  "";
	    message005.innerHTML = "";
	    incmusic.play();
            message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge </button>";
            }
}
if (open == 1)
{
checkerq1();
}
if (open == 2)
{
checkerq2();
}
if (open == 3)
{
checkerq3();
}
if (open == 4)
{
checkerq4();
}
if (open == 5)
{
checkerq5();
}
}
function setvis(){
            c = 16;
document.getElementById("q1").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "initial";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "initial";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "initial";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "initial";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "initial";}
document.getElementById("sub").style.display = "none";
document.getElementById("mc").style.display = "none";
}
var input = "<input type=text id=q1 /><br />";
var buttons = "<button id=sub class=buttons001 onclick=checker()>Submit Answer</button><br /><br /><button id=mc class=buttons007 onclick=setvis()>Multiple Choice</button>";
function next001() {
	document.getElementById("message002").style.top = "-130px";
        document.getElementById("message002").style.display= "block";
	    document.getElementById("message004").style.top = "-140px";
        document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "20px";
	document.getElementById("player002").style.top = "-2px";
	document.getElementById("score001").style.top = "-65px";
	document.getElementById("score002").style.top = "-102px";
	document.getElementById("twitter001").style.top = "-135px";
	document.getElementById("twitter002").style.top = "-157px";
	document.getElementById("faction001").style.top = "-175px";
	document.getElementById("faction002").style.top = "-175px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-135px";
	    document.getElementById("time001").style.display = "initial";
	    document.getElementById("chart").style.visibility = "hidden";
	    document.getElementById("JTE").style.display = "initial";
	    document.getElementById("JTE").style.visibility = "visible";
	    document.getElementById("chalacc").style.display = "initial";
	    document.getElementById("chalden").style.display = "initial";
	    document.getElementById("message004").style.display = "initial";
	    document.getElementById("message005").style.display = "initial";
	document.getElementById("time001").style.top = "-140px";
            if (a == 2) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[1].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[1].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
	        document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
            qu001.innerHTML = "2 - " +question001[1].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
		   document.getElementById("JTE").style.visibility = "hidden";
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            	    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 3) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[2].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[2].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
                qu001.innerHTML = "3 - " +question001[2].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
		   document.getElementById("JTE").style.visibility = "hidden";
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 4) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[3].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[3].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
                qu001.innerHTML = "4 - " +question001[3].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 5) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[4].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[4].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 		qu001.innerHTML = "5 - " +question001[4].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 6) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[14].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[14].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 		qu001.innerHTML = "6 - " +question001[14].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 7) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[15].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[15].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 		qu001.innerHTML = "7 - " +question001[15].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 8) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[5].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[5].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 		qu001.innerHTML = "8 - " +question001[5].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 9) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[6].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[6].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
                qu001.innerHTML = "9 - " +question001[6].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 10) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[7].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[7].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
	         a++;
 	        qu001.innerHTML = "10 - " +question001[7].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
else if ((a == 11) && (b != 10)){
if (s == 10){
	   quescountopp++;
	   posspointsopp+=1;
var chance = Math.random()*100;
if (chance < competitorlist[0].percentage) {
	    quescoropp++;
            score002.innerHTML = s+=1;
}
}
	         a++;
next002();
}
		else if ((a == 11) && (b == 10)){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[9].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[9].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
	         a++;
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "BONUS QUESTION";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next002()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 12) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("message002").style.top = "-130px";
	document.getElementById("message003").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = r2question001[0].ques;
                message002.innerHTML = input + r2question001[0].option + buttons;
if (r2question001[0].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 	        qu001.innerHTML = "1 - " +r2question001[0].cat.toUpperCase();
                round001.innerHTML = r++;
                round001.innerHTML = r++;
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 13) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = r2question001[4].ques;
                message002.innerHTML = input + r2question001[4].option + buttons;
if (r2question001[4].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 	        qu001.innerHTML = "2 - " +r2question001[4].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 14) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = r2question001[1].ques;
                message002.innerHTML = input + r2question001[1].option + buttons;
if (r2question001[1].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                a++;
 	        qu001.innerHTML = "3 - " +r2question001[1].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 15) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = r2question001[2].ques;
                message002.innerHTML = input + r2question001[2].option + buttons;
if (r2question001[2].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 	        qu001.innerHTML = "4 - " +r2question001[2].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            }
            else if (a == 16) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = r2question001[3].ques;
                message002.innerHTML = input + r2question001[3].option + buttons;
if (r2question001[3].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                a++;
 	        qu001.innerHTML = "5 - " +r2question001[3].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            	    message004.innerHTML = "<button class=buttons002 onclick=next004()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            } 
            else if (a == 17) {
if ((s - b > 10) && (answeredtwo == 0)){
loseTKO();
}
else if ((b -s > 0) && (answeredfive == 1)){
winTKO();
}
else{
usertwo++;
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[8].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[8].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
                round001.innerHTML = r++;
 	        qu001.innerHTML = "1 - " +question001[8].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
            } 
            else if (a == 18) {
if ((s - b > 8) && (answeredtwo == 0)){
loseTKO();
}
else if ((b -s > 8) && (answeredfive == 0)){
win();
}
else if ((b -s > 0) && (answeredfive == 1)){
win();
}
else{
userthree++;
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = threepointer001[0].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (threepointer001[0].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 	        qu001.innerHTML = "2 - " +threepointer001[0].cat.toUpperCase();
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
            } 
            else if (a == 19) {
if ((s - b > 5) && (answeredtwo == 0)){
loseTKO();
}
else if ((b -s > 5) && (answeredfive == 0)){
win();
}
else if ((b -s > 0) && (answeredfive == 1)){
win();
}
else{
userfive++;
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = fivepointer001[0].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (fivepointer001[0].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
 	        qu001.innerHTML = "3 - " +fivepointer001[0].cat.toUpperCase();
                message004.innerHTML = "";
  		if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
}
                      else if (a == 21) {
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[10].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[10].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "9px";
	document.getElementById("score001").style.top = "-48px";
	document.getElementById("score002").style.top = "-85px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-143px";
	document.getElementById("faction001").style.top = "-155px";
	document.getElementById("faction002").style.top = "-155px";
	document.getElementById("record001").style.top = "-25px";
	document.getElementById("record002").style.top = "-45px";
	document.getElementById("round002").style.top = "-120px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
             a++;
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "SUDDEN DEATH - QUESTION 1";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
    else if ((a == 22) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[11].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[11].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "9px";
	document.getElementById("score001").style.top = "-48px";
	document.getElementById("score002").style.top = "-85px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-143px";
	document.getElementById("faction001").style.top = "-155px";
	document.getElementById("faction002").style.top = "-155px";
	document.getElementById("record001").style.top = "-25px";
	document.getElementById("record002").style.top = "-45px";
	document.getElementById("round002").style.top = "-120px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                a++;
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "SUDDEN DEATH - QUESTION 2";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
  else if ((a == 22) && (b != s )){
		if (b > s){
                  win();
	}
	else if (b < s){
                 lose();
	}
}
  else if ((a == 23) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[12].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[12].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "9px";
	document.getElementById("score001").style.top = "-48px";
	document.getElementById("score002").style.top = "-85px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-143px";
	document.getElementById("faction001").style.top = "-155px";
	document.getElementById("faction002").style.top = "-155px";
	document.getElementById("record001").style.top = "-25px";
	document.getElementById("record002").style.top = "-45px";
	document.getElementById("round002").style.top = "-120px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "SUDDEN DEATH - QUESTION 3";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
 else if ((a == 23) && (b != s )){
		if (b > s){
		win();
	}
	else if (b < s){
	    	lose();
	}
}
  else if ((a == 24) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[13].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[13].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "9px";
	document.getElementById("score001").style.top = "-48px";
	document.getElementById("score002").style.top = "-85px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-143px";
	document.getElementById("faction001").style.top = "-155px";
	document.getElementById("faction002").style.top = "-155px";
	document.getElementById("record001").style.top = "-25px";
	document.getElementById("record002").style.top = "-45px";
	document.getElementById("round002").style.top = "-120px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "SUDDEN DEATH - QUESTION 4";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
 else if ((a == 24) && (b != s )){
		if (b > s){
		win();
	}
	else if (b < s){
	    	lose();
	}
}
  else if ((a == 25) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[16].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[14].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "9px";
	document.getElementById("score001").style.top = "-48px";
	document.getElementById("score002").style.top = "-85px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-143px";
	document.getElementById("faction001").style.top = "-155px";
	document.getElementById("faction002").style.top = "-155px";
	document.getElementById("record001").style.top = "-25px";
	document.getElementById("record002").style.top = "-45px";
	document.getElementById("round002").style.top = "-120px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "SUDDEN DEATH - QUESTION 5";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
 else if ((a == 25) && (b != s )){
		if (b > s){
		win();
	}
	else if (b < s){
	    	lose();
	}
}
  else if ((a == 26) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[17].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[15].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "9px";
	document.getElementById("score001").style.top = "-48px";
	document.getElementById("score002").style.top = "-85px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-143px";
	document.getElementById("faction001").style.top = "-155px";
	document.getElementById("faction002").style.top = "-155px";
	document.getElementById("record001").style.top = "-25px";
	document.getElementById("record002").style.top = "-45px";
	document.getElementById("round002").style.top = "-120px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "SUDDEN DEATH - QUESTION 6";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
 else if ((a == 26) && (b != s )){
		if (b > s){
		win();
	}
	else if (b < s){
	    	lose();
	}
}
  else if ((a == 27) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[18].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[16].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "9px";
	document.getElementById("score001").style.top = "-48px";
	document.getElementById("score002").style.top = "-85px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-143px";
	document.getElementById("faction001").style.top = "-155px";
	document.getElementById("faction002").style.top = "-155px";
	document.getElementById("record001").style.top = "-25px";
	document.getElementById("record002").style.top = "-45px";
	document.getElementById("round002").style.top = "-120px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "SUDDEN DEATH - QUESTION 7";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
}
 else if ((a == 27) && (b != s )){
		if (b > s){
		win();
	}
	else if (b < s){
	    	lose();
	}
}
    else if ((a == 28) && (b == s )){
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = question001[19].ques;
                message002.innerHTML = "<input id=q1 type=text /><br /><br /><button id=submit2 class=buttons001 onclick=checker()>Submit Answer</button>";
if (question001[17].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "9px";
	document.getElementById("score001").style.top = "-48px";
	document.getElementById("score002").style.top = "-85px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-143px";
	document.getElementById("faction001").style.top = "-155px";
	document.getElementById("faction002").style.top = "-155px";
	document.getElementById("record001").style.top = "-25px";
	document.getElementById("record002").style.top = "-45px";
	document.getElementById("round002").style.top = "-120px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                 a++;
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "SUDDEN DEATH - QUESTION 8";
                message004.innerHTML = "";
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
                }
            } 
 else if ((a == 28) && (b != s )){
		if (b > s){
		win();
	}
	else if (b < s){
		lose();
	}
}
   else if ((a == 29) && (b == s )){
	    	document.getElementById("JTE").style.visibility = "hidden";
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "End of Match";
                time001.innerHTML = "";
                message003.innerHTML = "The game has ended in a tie.";
		var ppe = ((b / posspoints) * 100)
		var accuracy = ((quescor / quescount) * 100)
 		var ppeopp = ((s / posspointsopp) * 100)
		var accuracyopp = ((quescoropp / quescountopp) * 100)
 message006.innerHTML = "<b>" + "Stats" + "</b>" + "</br></br>" + "<table class=table2><style>.table2 { border-spacing: 0; width: 50%; margin-left: 120px;} .th2, .td2, .tr2 {padding: 4px; font-size: 90%;}</style><tr class=tr2><th class=th2></th><th class=th2>" + document.getElementById("naam").value + "</th><th class=th2>" + competitorlist[0].id + "</th></tr><tr class=tr2><td class=td2><b>Questions answered</b></td><td class=td2>" + quescount + "</td><td class=td2>" + quescountopp + "</td></tr class=tr2><tr class=tr2><td class=td2><b>PPE</b></td><td class=td2>" + ppe.toFixed(2) + "%" + "</td><td class=td2>" + ppeopp.toFixed(2) + "%" + "</td></tr><tr class=tr2><td class=td2><b>Accuracy</b></td><td class=td2>" + accuracy.toFixed(2) + "%" + "</td><td class=td2>" + accuracyopp.toFixed(2) + "%" + "</td></tr></table>";
                message002.innerHTML = "";
                message005.innerHTML = "";
            	message004.innerHTML = "<button class=buttons001 onclick=repeat001()>Play again</button>";
		document.getElementById("message004").style.top = "-375px";
		document.getElementById("message003").style.top = "-200px";
		document.getElementById("message006").style.top = "-100px";
		document.getElementById("message006").style.fontSize = "110%";
                }
      else {
	if (b > s){
		win();
	}
	else if (b < s){
		lose();
	}
	else if (b == s) {
	    	document.getElementById("JTE").style.visibility = "hidden";
                window.clearInterval(update);
                c = "-";
                message001.innerHTML = "Click Next to proceed";
                time001.innerHTML = "";
                message002.innerHTML = "";
                message003.innerHTML = "";
		message005.innerHTML = "<strong><font size=4>SUDDEN DEATH</br></br>QUESTIONS IN RANDOM CATEGORIES GIVEN TO COMPETITORS</br></br>COMPETITORS HAVE 20 SECONDS TO SUBMIT THEIR ANSWER</br></br>ALL QUESTIONS WORTH 1 POINT</br></br>FIRST COMPETITOR WITH A LEAD WINS</strong>";
	    	
                 a++;
		round001.innerHTML = r++;
		document.getElementById("round001").style.display = "none";
 		round002.innerHTML = "OVERTIME";
 		qu001.innerHTML = "";
            message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	}
            }
        }
function timer001() {
	percentage = competitorlist[0].percentage;
            c = c - 1;
            if (c < 200) {
                time001.innerHTML = c;
            }
            if (c < 1) {
	   quescount++;
document.getElementById("message003").style.top = "-140px";
document.getElementById("message004").style.top = "-140px";
document.getElementById("message006").style.top = "-140px";
document.getElementById("JTE").style.visibility = "hidden";
if (a == 2){
if ((competitorlist[0].strength1 == question001[0].cat) || (competitorlist[0].strength2 == question001[0].cat) || (competitorlist[0].strength3 == question001[0].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[0].answ2;
	    message006.innerHTML =  "Next category is " +question001[1].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 3){
if ((competitorlist[0].strength1 == question001[1].cat) || (competitorlist[0].strength2 == question001[1].cat) || (competitorlist[0].strength3 == question001[1].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[1].answ2;
	    message006.innerHTML =  "Next category is " +question001[2].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 4){
if ((competitorlist[0].strength1 == question001[2].cat) || (competitorlist[0].strength2 == question001[2].cat) || (competitorlist[0].strength3 == question001[2].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[2].answ2;
	    message006.innerHTML =  "Next category is " +question001[3].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 5){
if ((competitorlist[0].strength1 == question001[3].cat) || (competitorlist[0].strength2 == question001[3].cat) || (competitorlist[0].strength3 == question001[3].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[3].answ2;
	    message006.innerHTML =  "Next category is " +question001[4].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 6){
if ((competitorlist[0].strength1 == question001[4].cat) || (competitorlist[0].strength2 == question001[4].cat) || (competitorlist[0].strength3 == question001[4].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[4].answ2;
	    message006.innerHTML =  "Next category is " +question001[14].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 7){
if ((competitorlist[0].strength1 == question001[14].cat) || (competitorlist[0].strength2 == question001[14].cat) || (competitorlist[0].strength3 == question001[14].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[14].answ2;
	    message006.innerHTML =  "Next category is " +question001[15].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 8){
if ((competitorlist[0].strength1 == question001[15].cat) || (competitorlist[0].strength2 == question001[15].cat) || (competitorlist[0].strength3 == question001[15].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[15].answ2;
	    message006.innerHTML =  "Next category is " +question001[5].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 9){
if ((competitorlist[0].strength1 == question001[5].cat) || (competitorlist[0].strength2 == question001[5].cat) || (competitorlist[0].strength3 == question001[5].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[5].answ2;
	    message006.innerHTML =  "Next category is " +question001[6].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 10){
if ((competitorlist[0].strength1 == question001[6].cat) || (competitorlist[0].strength2 == question001[6].cat) || (competitorlist[0].strength3 == question001[6].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[6].answ2;
	    message006.innerHTML =  "Next category is " +question001[7].cat;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 11){
if ((competitorlist[0].strength1 == question001[7].cat) || (competitorlist[0].strength2 == question001[7].cat) || (competitorlist[0].strength3 == question001[7].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            message003.innerHTML = "The correct answer is " + question001[7].answ2;
	    message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 12){
if ((competitorlist[0].strength1 == question001[9].cat) || (competitorlist[0].strength2 == question001[9].cat) || (competitorlist[0].strength3 == question001[9].cat)){
percentage = competitorlist[0].strengthpercentage;
}
	   posspoints+=1;
if (s == 10){
	   quescountopp++;
	   posspointsopp+=1;
var chance = Math.random()*100;
if (chance < percentage) {
	    quescoropp++;
            score002.innerHTML = s+=1;
}
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[9].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next002()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 13){
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
            	message003.innerHTML = "The correct answer is " + r2question001[0].answ2;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
if (document.getElementById("mc").style.display == 'none') {
if ((competitorlist[0].strength1 == r2question001[0].cat) || (competitorlist[0].strength2 == r2question001[0].cat) || (competitorlist[0].strength3 == r2question001[0].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
}
else {
if ((competitorlist[0].strength1 == r2question001[0].cat) || (competitorlist[0].strength2 == r2question001[0].cat) || (competitorlist[0].strength3 == r2question001[0].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 0.9 * percentage;
var chance = Math.random() * 100;
	   posspoints+=2;
	   posspointsopp+=2;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
}
	    	document.getElementById("sub").style.display = "none";
	    	document.getElementById("mc").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
}
else if (a == 14){
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
            	message003.innerHTML = "The correct answer is " + r2question001[4].answ2;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
if (document.getElementById("mc").style.display == 'none') {
if ((competitorlist[0].strength1 == r2question001[4].cat) || (competitorlist[0].strength2 == r2question001[4].cat) || (competitorlist[0].strength3 == r2question001[4].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
}
else {
if ((competitorlist[0].strength1 == r2question001[4].cat) || (competitorlist[0].strength2 == r2question001[4].cat) || (competitorlist[0].strength3 == r2question001[4].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 0.9 * percentage;
var chance = Math.random() * 100;
	   posspoints+=2;
	   posspointsopp+=2;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
}
	    	document.getElementById("sub").style.display = "none";
	    	document.getElementById("mc").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
}
else if (a == 15){
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
            	message003.innerHTML = "The correct answer is " + r2question001[1].answ2;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
if (document.getElementById("mc").style.display == 'none') {
if ((competitorlist[0].strength1 == r2question001[1].cat) || (competitorlist[0].strength2 == r2question001[1].cat) || (competitorlist[0].strength3 == r2question001[1].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
}
else {
if ((competitorlist[0].strength1 == r2question001[1].cat) || (competitorlist[0].strength2 == r2question001[1].cat) || (competitorlist[0].strength3 == r2question001[1].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 0.9 * percentage;
var chance = Math.random() * 100;
	   posspoints+=2;
	   posspointsopp+=2;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
}
	    	document.getElementById("sub").style.display = "none";
	    	document.getElementById("mc").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
}
else if (a == 16){
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
            	message003.innerHTML = "The correct answer is " + r2question001[2].answ2;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
if (document.getElementById("mc").style.display == 'none') {
if ((competitorlist[0].strength1 == r2question001[2].cat) || (competitorlist[0].strength2 == r2question001[2].cat) || (competitorlist[0].strength3 == r2question001[2].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
}
else {
if ((competitorlist[0].strength1 == r2question001[2].cat) || (competitorlist[0].strength2 == r2question001[2].cat) || (competitorlist[0].strength3 == r2question001[2].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 0.9 * percentage;
var chance = Math.random() * 100;
	   posspoints+=2;
	   posspointsopp+=2;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
}
	    	document.getElementById("sub").style.display = "none";
	    	document.getElementById("mc").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
}
else if ((a == 17) && (open == 0) && (mc == 0)){
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
           	message003.innerHTML = "The correct answer is " + r2question001[3].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next004()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
if (document.getElementById("mc").style.display == 'none') {
if ((competitorlist[0].strength1 == r2question001[3].cat) || (competitorlist[0].strength2 == r2question001[3].cat) || (competitorlist[0].strength3 == r2question001[3].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 1.1 * percentage;
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=1;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
}
else {
if ((competitorlist[0].strength1 == r2question001[3].cat) || (competitorlist[0].strength2 == r2question001[3].cat) || (competitorlist[0].strength3 == r2question001[3].cat)){
percentage = competitorlist[0].strengthpercentage;
}
percentage1pnt = 0.9 * percentage;
var chance = Math.random() * 100;
	   posspoints+=2;
	   posspointsopp+=2;
	   quescountopp++;
if (chance < percentage1pnt){
score002.innerHTML = s+=2;
	    quescoropp++;
message006.innerHTML = "Question was stolen by " +competitorlist[0].lowercase;
}
}
	    	document.getElementById("sub").style.display = "none";
	    	document.getElementById("mc").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
}
else if (a == 18){
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[8].answ2;
	        incmusic.play();
if (s - b > 0){
	    	message006.innerHTML =  "Next category is " +threepointer001[0].cat;
}
            	message004.innerHTML = "<button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (a == 19){
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + threepointer001[0].answ2;
	        incmusic.play();
if (s - b > 0){
	    	message006.innerHTML =  "Next category is " +fivepointer001[0].cat;
}
            	message004.innerHTML = "<button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (a == 20){
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + fivepointer001[0].answ2;
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=analyser3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (a == 22){
if ((competitorlist[0].strength1 == question001[10].cat) || (competitorlist[0].strength2 == question001[10].cat) || (competitorlist[0].strength3 == question001[10].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[10].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 23){
if ((competitorlist[0].strength1 == question001[11].cat) || (competitorlist[0].strength2 == question001[11].cat) || (competitorlist[0].strength3 == question001[11].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[11].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 24){
if ((competitorlist[0].strength1 == question001[12].cat) || (competitorlist[0].strength2 == question001[12].cat) || (competitorlist[0].strength3 == question001[12].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[12].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 25){
if ((competitorlist[0].strength1 == question001[13].cat) || (competitorlist[0].strength2 == question001[13].cat) || (competitorlist[0].strength3 == question001[13].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[13].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 26){
if ((competitorlist[0].strength1 == question001[16].cat) || (competitorlist[0].strength2 == question001[16].cat) || (competitorlist[0].strength3 == question001[16].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[16].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 27){
if ((competitorlist[0].strength1 == question001[17].cat) || (competitorlist[0].strength2 == question001[17].cat) || (competitorlist[0].strength3 == question001[17].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[17].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 28){
if ((competitorlist[0].strength1 == question001[18].cat) || (competitorlist[0].strength2 == question001[18].cat) || (competitorlist[0].strength3 == question001[18].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
	   posspoints+=1;
	   posspointsopp+=1;
	   quescountopp++;
if (chance < percentage){
quescoropp++;
score002.innerHTML = s+=1;
}
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[18].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	percentage = competitorlist[0].percentage;
}
else if (a == 29){
		document.getElementById("submit2").style.visibility = "hidden";
	    	document.getElementById("submit2").style.display = "none";
            	message003.innerHTML = "The correct answer is " + question001[19].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=1;
            	message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (open == 1)
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
		document.getElementById("sub").style.visibility = "hidden";
	    	document.getElementById("sub").style.display = "none";
           	message003.innerHTML = "The correct answer is " + compcat[0].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=2;
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
else if (open == 2)
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
		document.getElementById("sub").style.visibility = "hidden";
	    	document.getElementById("sub").style.display = "none";
           	message003.innerHTML = "The correct answer is " + compcat[1].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=2;
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
else if (open == 3)
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
		document.getElementById("sub").style.visibility = "hidden";
	    	document.getElementById("sub").style.display = "none";
           	message003.innerHTML = "The correct answer is " + compcat[2].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=2;
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
else if (open == 4)
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
		document.getElementById("sub").style.visibility = "hidden";
	    	document.getElementById("sub").style.display = "none";
           	message003.innerHTML = "The correct answer is " + compcat[3].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=2;
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
else if (open == 5)
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
		document.getElementById("sub").style.visibility = "hidden";
	    	document.getElementById("sub").style.display = "none";
           	message003.innerHTML = "The correct answer is " + compcat[4].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=2;
stealopp--;
if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
else if (mc == 1)
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
           	message003.innerHTML = "The correct answer is " + compcat[5].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
	   posspoints+=1;
stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
}
else if (mc == 2)
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
           	message003.innerHTML = "The correct answer is " +compcat[6].answ2 ;
	    	message006.innerHTML =  "";
	        incmusic.play();
posspoints+=1;
stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
}
else if (mc == 3)
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
           	message003.innerHTML = "The correct answer is " +compcat[7].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
posspoints+=1;
stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
}
else if (mc == 4)
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
           	message003.innerHTML = "The correct answer is " +compcat[8].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
posspoints+=1;
stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion5()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
}
else if (mc == 5)
{
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
           	message003.innerHTML = "The correct answer is " +compcat[9].answ2;
	    	message006.innerHTML =  "";
	        incmusic.play();
posspoints+=1;
stealmc--;
if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop2").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "none";
document.getElementById("incop3").style.display = "none";
document.getElementById("incop4").style.display = "none";
}
}
                window.clearInterval(update);
                time001.innerHTML = "Time's up!";
		document.getElementById("time001").style.fontSize = "100%";
		document.getElementById("time001").style.fontWeight = "normal";
	    document.getElementById("q1").disabled = true;
            }
        }
        update = setInterval("timer001()", 1000);
function repeat001() {
            location.reload();
        }
$("#message002").keypress(function(event) { 
         if (event.keyCode === 13){ 
                 $("#submit").click(); 
            } 
});
     	$("#message004").keypress(function(event) { 	
         if (event.keyCode === 13){ 	
                 $("#submit3").click(); 	
            } 	
});
     
function next003() {
	    document.getElementById("message004").style.top = "-140px";
        document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "20px";
	document.getElementById("player002").style.top = "-2px";
	document.getElementById("score001").style.top = "-65px";
	document.getElementById("score002").style.top = "-102px";
	document.getElementById("twitter001").style.top = "-135px";
	document.getElementById("twitter002").style.top = "-157px";
	document.getElementById("faction001").style.top = "-175px";
	document.getElementById("faction002").style.top = "-175px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-135px";
	    	document.getElementById("qu002").style.display = "initial";
	    	document.getElementById("JTE").style.display = "none";
		document.getElementById("chart").style.position = "relative";
		document.getElementById("chart").style.top = "-180px";
	    	document.getElementById("chart").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "none";
	    	document.getElementById("message004").style.display = "none";
	    	document.getElementById("message005").style.display = "none";
		round001.innerHTML = 2;
 		qu001.innerHTML = "";
	        var place = " ";
                message001.innerHTML = "Spin the Wheel.";
message002.innerHTML = place + "<br/></br>" + "<button class=buttons009 id=spin onclick=spin()>Spin</button>";
                message004.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
            	message003.innerHTML = "<button id=nextbutton class=buttons002 onclick=next001()>Next</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "none";
	   	document.getElementById("chalden").style.display = "none";
	    	document.getElementById("nextbutton").style.visibility = "hidden";  
		document.getElementById("message002").style.top = "-180px";
		document.getElementById("message003").style.top = "-180px";
}
function next002() {
	    document.getElementById("message004").style.top = "-140px";
        document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "20px";
	document.getElementById("player002").style.top = "-2px";
	document.getElementById("score001").style.top = "-65px";
	document.getElementById("score002").style.top = "-102px";
	document.getElementById("twitter001").style.top = "-135px";
	document.getElementById("twitter002").style.top = "-157px";
	document.getElementById("faction001").style.top = "-175px";
	document.getElementById("faction002").style.top = "-175px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-135px";
	    	document.getElementById("chart").style.visibility = "hidden";
	    	document.getElementById("JTE").style.display = "none";
	    	document.getElementById("time001").style.display = "none";
		document.getElementById("qu002").style.display = "initial";
		round001.innerHTML = 2;
 		qu001.innerHTML = "";
                message001.innerHTML = "Click the Next button";
		message002.innerHTML = "";
                message004.innerHTML = "";
		message005.innerHTML = "<strong><font size=4>ROUND TWO</font><br/></br>COMPETITORS SPIN THE CATEGORY WHEEL</br>YOU CAN RE-SPIN ONCE</br></br>YOU WILL GET 5 QUESTIONS FROM CHOSEN CATEGORY</br></br>QUESTIONS ARE WORTH 2 POINTS</br>IF MULTIPLE CHOICE IS REQUESTED VALUE DROPS TO 1 POINT</br></br>OPPONENTS MAY STEAL IF COMPETITOR GIVES A WRONG ANSWER</br></br>REPEATS & CHALLENGES STILL IN EFFECT</strong>";
                message006.innerHTML = "";
            	message003.innerHTML = "<button id=nextbutton class=buttons002 onclick=next003()>Next</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "none";
	    	document.getElementById("chalden").style.display = "none";
}
function next005() {
        open = 0;
mc = 0;
	document.getElementById("message004").style.top = "-140px";
        document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "20px";
	document.getElementById("player002").style.top = "-2px";
	document.getElementById("score001").style.top = "-65px";
	document.getElementById("score002").style.top = "-102px";
	document.getElementById("twitter001").style.top = "-135px";
	document.getElementById("twitter002").style.top = "-157px";
	document.getElementById("faction001").style.top = "-175px";
	document.getElementById("faction002").style.top = "-175px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-135px";
if (s - b > 10){
loseKO();
}
else if (b -s > 10){
winKO();
}
else{
	    	document.getElementById("qu002").style.display = "initial";
	   	document.getElementById("chart").style.visibility = "hidden";
	    	document.getElementById("JTE").style.display = "none";
	    	document.getElementById("time001").style.display = "none";
		round001.innerHTML = 3;
 		qu001.innerHTML = "";
                message001.innerHTML = "Click the Next button";
		message002.innerHTML = "";
                message004.innerHTML = "";
		message005.innerHTML = "<strong><font size=4>ROUND THREE</font><br/></br>YOU WILL GET 3 QUESTIONS FROM RANDOM CATEGORIES </br></br>QUESTIONS ARE WORTH 2, 3, AND 5 POINTS</br></br>NO STEALING OR MULTIPLE CHOICE IN THIS ROUND</br></br>REPEATS & CHALLENGES STILL IN EFFECT</strong>";
if (s - b > 0){
	    message006.innerHTML =  "Your first category is " +question001[8].cat;
}
else if (b -s >= 0){
	    message006.innerHTML =  competitorlist[0].lowercase + " has to answer first.";
}
            	message003.innerHTML = "<button id=nextbutton class=buttons002 onclick=analyser3()>Next</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "none";
	    	document.getElementById("chalden").style.display = "none";
		document.getElementById("message003").style = "initial";
		document.getElementById("message004").style = "initial";
	    	document.getElementById("message003").style.top = "-70px";
	    	document.getElementById("message006").style.top = "-160px";
}
}
function next004 () {
simulatecomputerround2();
	document.getElementById("qu002").style.display = "initial";
	document.getElementById("message003").style.top = "-140px";
	document.getElementById("message006").style.top = "-140px";
	document.getElementById("message004").style.top = "-140px";
        document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "20px";
	document.getElementById("player002").style.top = "-2px";
	document.getElementById("score001").style.top = "-65px";
	document.getElementById("score002").style.top = "-102px";
	document.getElementById("twitter001").style.top = "-135px";
	document.getElementById("twitter002").style.top = "-157px";
	document.getElementById("faction001").style.top = "-175px";
	document.getElementById("faction002").style.top = "-175px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-135px";
	   	document.getElementById("chart").style.visibility = "hidden";
	    	document.getElementById("JTE").style.display = "none";
	    	document.getElementById("time001").style.display = "none";
 		qu001.innerHTML = "";
                message001.innerHTML = "Click button to simulate opponents result.";
		message002.innerHTML = "";
                message004.innerHTML = "";
		message005.innerHTML = "";
if (spinners == "1"){
	    	message006.innerHTML = competitorlist[0].id + " spun Spinner's Choice and chose " +compcat[0].cat;
		document.getElementById("message003").style = "initial";
}
if (opponentspun == "1"){
	    	message006.innerHTML = "";
message002.innerHTML = competitorlist[0].id + " spun Opponent's Choice" + "<br/><br/>" + "Select which category you want to give " + competitorlist[0].id + "<br/></br>" + "<ul id=boxes class=aligner><li><input type=checkbox id=box1 value= /><label for=box1 id=label1>" + data[1] +"</label></li><li><input type=checkbox id=box2 value=/><label for=box2 id=label2>" +data[2] +"</label></li><li><input type=checkbox id=box3 value=/><label for=box3 id=label3>" + data[3] + "</label></li><li><input type=checkbox id=box4 value=/><label for=box4 id=label4>" + data[4] + "</label></li><li><input type=checkbox id=box5 value=/><label for=box5 id=label5>" + data[5] + "</label></li><li><input type=checkbox id=box6 value=/><label for=box6 id=label6>" + data[7] + "</label></li><li><input type=checkbox id=box7 value=/><label for=box7 id=label7>" + data[8] + "</label></li><li><input type=checkbox id=box8 value=/><label for=box8 id=label8>" + data[9] + "</label></li><li><input type=checkbox id=box9 value=/><label for=box9 id=label9>" + data[10] + "</label></li><li><input type=checkbox id=box10 value=/><label for=box10 id=label10>" + data[11] + "</label></li></ul>" + "<button class=buttons008 id=confirm onclick=confirmopp()>Confirm</button>";
document.getElementById("message003").style.visibility = "hidden";
document.getElementById("confirm").style.visibility= "hidden"; 
document.getElementById("box1").value = data[1];
document.getElementById("box2").value = data[2];
document.getElementById("box3").value = data[3];
document.getElementById("box4").value = data[4];
document.getElementById("box5").value = data[5];
document.getElementById("box6").value = data[7];
document.getElementById("box7").value = data[8];
document.getElementById("box8").value = data[9];
document.getElementById("box9").value = data[10];
document.getElementById("box10").value = data[11];
if (document.getElementById("box1").value == r2question001[0].cat) {
document.getElementById("box1").checked = true;
document.getElementById("box1").disabled = true;
}
if (document.getElementById("box2").value == r2question001[0].cat) {
document.getElementById("box2").checked = true;
document.getElementById("box2").disabled = true;
}
if (document.getElementById("box3").value == r2question001[0].cat) {
document.getElementById("box3").checked = true;
document.getElementById("box3").disabled = true;
}
if (document.getElementById("box4").value == r2question001[0].cat) {
document.getElementById("box4").checked = true;
document.getElementById("box4").disabled = true;
}
if (document.getElementById("box5").value == r2question001[0].cat) {
document.getElementById("box5").checked = true;
document.getElementById("box5").disabled = true;
}
if (document.getElementById("box6").value == r2question001[0].cat) {
document.getElementById("box6").checked = true;
document.getElementById("box6").disabled = true;
}
if (document.getElementById("box7").value == r2question001[0].cat) {
document.getElementById("box7").checked = true;
document.getElementById("box7").disabled = true;
}
if (document.getElementById("box8").value == r2question001[0].cat) {
document.getElementById("box8").checked = true;
document.getElementById("box8").disabled = true;
}
if (document.getElementById("box9").value == r2question001[0].cat) {
document.getElementById("box9").checked = true;
document.getElementById("box9").disabled = true;
}
if (document.getElementById("box10").value == r2question001[0].cat) {
document.getElementById("box10").checked = true;
document.getElementById("box10").disabled = true;
}
$('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > 2) {
        $(this).prop('checked', false);
    }
    if ($('input[type=checkbox]:checked').length == 2) {
	document.getElementById("confirm").style.visibility= "visible"; 
    }
    if ($('input[type=checkbox]:checked').length < 2) {
	document.getElementById("confirm").style.visibility= "hidden"; 
    }
});
}
if ((opponentspun != "1") && (spinners != "1")){
	    	message006.innerHTML =  "Opponent spun category " +compcat[0].cat;
		document.getElementById("message003").style = "initial";
}
            	message003.innerHTML = "<button id=nextbutton class=buttons002 onclick=simulate()>Simulate</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
	    	document.getElementById("chalacc").style.display = "none";
	    	document.getElementById("chalden").style.display = "none";
		document.getElementById("message004").style = "initial";
	    	document.getElementById("message006").style.top = "-140px";
	    	document.getElementById("message003").style.top = "-140px";
}
function simulatefinished () {
	   	document.getElementById("chart").style.visibility = "hidden";
	    	document.getElementById("JTE").style.display = "none";
	    	document.getElementById("time001").style.display = "none";
 		qu001.innerHTML = "";
if ((stealopp > 0) || (stealmc > 0)){
                message001.innerHTML = "Click Next to go to available steals.";
            	message004.innerHTML = "<button id=nextbutton class=buttons002 onclick=analyse()>Next</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button></br></br>The category is " +compcat[0].cat;
}
else if ((stealopp == 0) && (stealmc == 0)) {
		message001.innerHTML = "Click Next to proceed.";
            	message004.innerHTML = "<button id=nextbutton class=buttons002 onclick=analyse()>Next</button><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
		message002.innerHTML = "";
		message003.innerHTML = "One point steals available: " +stealmc;
	    	message006.innerHTML =  "Two points steals available: " +stealopp;
if (stealmc == 1) {
message006.innerHTML =  "Two points steals available: " + stealopp + "<br/><br/>" + competitorlist[0].id + "'s" + " multiple choice answer is marked red.";
}
if (stealmc > 1) {
message006.innerHTML =  "Two points steals available: " + stealopp + "<br/><br/>" + competitorlist[0].id + "'s" + " multiple choice answers are marked red.";
}
	    	document.getElementById("chalacc").style.display = "none";
	    	document.getElementById("chalden").style.display = "none";
		document.getElementById("message004").style.top = "-140px";
}
function simulate(){
simulateq1();
simulateq1();
simulateq1();
simulateq1();
simulateq1();
simulatefinished();
}
function simulateq1(){
quescountopp++;
posspointsopp+=2;
	percentage = competitorlist[0].percentage;
if ((competitorlist[0].strength1 == compcat[0].cat) || (competitorlist[0].strength2 == compcat[0].cat) || (competitorlist[0].strength3 == compcat[0].cat)){
percentage = competitorlist[0].strengthpercentage;
}
var chance = Math.random() * 100;
if (chance < 0.7 * percentage){
		score002.innerHTML = s+=2;
		quescoropp++;
		}
else if (chance < percentage){
		score002.innerHTML = s+=1;
		quescoropp++;
		}
else if (chance >= percentage){
		var chance = Math.random() * 100;
		if (chance < 60){
		stealmc++;
		}
		else {
		stealopp++;
		}
}
}
var stealopp = 0;
var stealmc = 0;
function analyse (){
if ((stealopp > 0) && (stealmc > 0)){
openquestion();
}
if ((stealopp > 0) && (stealmc == 0)){
openquestion();
}
if ((stealmc > 0) && (stealopp == 0)){
mcquestion();
}
else if ((stealmc == 0) && (stealopp == 0)){
next005();
}
}
function checkerq1(){
	    var stealer01 = document.getElementById("q1").value.toUpperCase();
	    var stealer1 = myTrim(stealer01);
	    stealer1 = myTrim(stealer1);
if (stealer1.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(stealer1, compcat[0].answ);
if (typeof(compcat[0].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(stealer1, compcat[0].answ3);
}
}
else if (stealer1.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
		document.getElementById("sub").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((stealer1 == compcat[0].answ) || (stealer1 == compcat[0].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
	}
            else if (stealer1 != compcat[0].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[0].answ2;
	    message006.innerHTML =  "";
	    message005.innerHTML = "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    incmusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=openquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}	   
}
function checkerq2(){
	    var stealer02 = document.getElementById("q1").value.toUpperCase();
	    var stealer2 = myTrim(stealer02);
	    stealer2 = myTrim(stealer2);
if (stealer2.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(stealer2, compcat[1].answ);
if (typeof(compcat[1].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(stealer2, compcat[1].answ3);
}
}
else if (stealer2.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
		document.getElementById("sub").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((stealer2 == compcat[1].answ) || (stealer2 == compcat[1].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
	}
            else if (stealer2 != compcat[1].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[1].answ2;
	    message006.innerHTML =  "";
	    message005.innerHTML = "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    incmusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=openquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}	   
}
function checkerq3(){
	    var stealer03 = document.getElementById("q1").value.toUpperCase();
	    var stealer3 = myTrim(stealer03);
	    stealer3 = myTrim(stealer3);
if (stealer3.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(stealer3, compcat[2].answ);
if (typeof(compcat[2].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(stealer3, compcat[2].answ3);
}
}
else if (stealer3.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
		document.getElementById("sub").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((stealer3 == compcat[2].answ) || (stealer3 == compcat[2].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
	}
            else if (stealer3 != compcat[2].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[2].answ2;
	    message006.innerHTML =  "";
	    message005.innerHTML = "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    incmusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=openquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}	   
}
function checkerq4(){
	    var stealer04 = document.getElementById("q1").value.toUpperCase();
	    var stealer4 = myTrim(stealer04);
	    stealer4 = myTrim(stealer4);
if (stealer4.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(stealer4, compcat[3].answ);
if (typeof(compcat[3].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(stealer4, compcat[3].answ3);
}
}
else if (stealer4.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
		document.getElementById("sub").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((stealer4 == compcat[3].answ) || (stealer4 == compcat[3].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
            score001.innerHTML = b+=2;
quescor++;
	    cormusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
	}
            else if (stealer4 != compcat[3].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[3].answ2;
	    message006.innerHTML =  "";
	    message005.innerHTML = "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    incmusic.play();
stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=openquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}	   
}
function checkerq5(){
	    var stealer05 = document.getElementById("q1").value.toUpperCase();
	    var stealer5 = myTrim(stealer05);
	    stealer5 = myTrim(stealer5);
if (stealer5.length > 4){
similarity1 = stringSimilarity.compareTwoStrings(stealer5, compcat[4].answ);
if (typeof(compcat[4].answ3) != 'undefined'){
similarity2 = stringSimilarity.compareTwoStrings(stealer5, compcat[4].answ3);
}
}
else if (stealer5.length <= 4){
similarity1 = 0;
similarity2 = 0;
}
            window.clearInterval(update);
            c = "-";
	   quescount++;
	   posspoints+=2;
		document.getElementById("sub").style.display = "none";
	    document.getElementById("q1").disabled = true;
	if ((stealer5 == compcat[4].answ) || (stealer5 == compcat[4].answ3)|| (similarity1 >= 0.8) || (similarity2 >= 0.8)) {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Correct!";
	    message006.innerHTML =  "";
            score001.innerHTML = b+=2;
quescor++;
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    cormusic.play();
stealopp--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
	}
            else if (stealer5 != compcat[4].answ)  {
	    document.getElementById("JTE").style.visibility = "hidden";
            message003.innerHTML = "Incorrect. The correct answer is " +compcat[4].answ2;
	    message006.innerHTML =  "";
	    message005.innerHTML = "";
		document.getElementById("message003").style.top = "-190px";
		document.getElementById("message004").style.top = "-190px";
		document.getElementById("message006").style.top = "-190px";
	    incmusic.play();
stealopp--;
if (stealmc > 0){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button id=chal class=buttons006 onclick=Challenge()>Challenge</button> <br /><br /><button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}	   
}
function openquestion(){
	document.getElementById("message003").style.top = "-140px";
        document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "20px";
	document.getElementById("player002").style.top = "-2px";
	document.getElementById("score001").style.top = "-65px";
	document.getElementById("score002").style.top = "-102px";
	document.getElementById("twitter001").style.top = "-135px";
	document.getElementById("twitter002").style.top = "-157px";
	document.getElementById("faction001").style.top = "-175px";
	document.getElementById("faction002").style.top = "-175px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-135px";
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[0].ques;
                message002.innerHTML = input + compcat[0].option + buttons;
if (compcat[0].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("mc").style.display = "none";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message004.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
		open++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
function openquestion2(){
if (s - b > 18){
loseKO();
}
else if (b -s > 18){
winKO();
}
else{
        document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "20px";
	document.getElementById("player002").style.top = "-2px";
	document.getElementById("score001").style.top = "-65px";
	document.getElementById("score002").style.top = "-102px";
	document.getElementById("twitter001").style.top = "-135px";
	document.getElementById("twitter002").style.top = "-157px";
	document.getElementById("faction001").style.top = "-175px";
	document.getElementById("faction002").style.top = "-175px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-135px";
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[1].ques;
                message002.innerHTML = input + compcat[1].option + buttons;
if (compcat[1].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("mc").style.display = "none";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message004.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
		open++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
}
function openquestion3(){
if (s - b > 16){
loseKO();
}
else if (b -s > 16){
winKO();
}
else{
        document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "20px";
	document.getElementById("player002").style.top = "-2px";
	document.getElementById("score001").style.top = "-65px";
	document.getElementById("score002").style.top = "-102px";
	document.getElementById("twitter001").style.top = "-135px";
	document.getElementById("twitter002").style.top = "-157px";
	document.getElementById("faction001").style.top = "-175px";
	document.getElementById("faction002").style.top = "-175px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-135px";
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[2].ques;
                message002.innerHTML = input + compcat[2].option + buttons;
if (compcat[2].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("mc").style.display = "none";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message004.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
		open++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
}
function openquestion4(){
if (s - b > 14){
loseKO();
}
else if (b -s > 14){
winKO();
}
else{
        document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "20px";
	document.getElementById("player002").style.top = "-2px";
	document.getElementById("score001").style.top = "-65px";
	document.getElementById("score002").style.top = "-102px";
	document.getElementById("twitter001").style.top = "-135px";
	document.getElementById("twitter002").style.top = "-157px";
	document.getElementById("faction001").style.top = "-175px";
	document.getElementById("faction002").style.top = "-175px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-135px";
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[3].ques;
                message002.innerHTML = input + compcat[3].option + buttons;
if (compcat[3].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("mc").style.display = "none";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message004.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
		open++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealopp--;
if (stealopp > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=openquestion5()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
}
function openquestion5(){
if (s - b > 12){
loseKO();
}
else if (b -s > 12){
winKO();
}
else{
        document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "20px";
	document.getElementById("player002").style.top = "-2px";
	document.getElementById("score001").style.top = "-65px";
	document.getElementById("score002").style.top = "-102px";
	document.getElementById("twitter001").style.top = "-135px";
	document.getElementById("twitter002").style.top = "-157px";
	document.getElementById("faction001").style.top = "-175px";
	document.getElementById("faction002").style.top = "-175px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-135px";
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[4].ques;
                message002.innerHTML = input + compcat[4].option + buttons;
if (compcat[4].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "none";
if (typeof(element1) != 'undefined' && element1 != null)
{document.getElementById("incop1").style.display = "none";}
if (typeof(element2) != 'undefined' && element2 != null)
{document.getElementById("incop2").style.display = "none";}
if (typeof(element3) != 'undefined' && element3 != null)
{document.getElementById("incop3").style.display = "none";}
if (typeof(element4) != 'undefined' && element4 != null)
{document.getElementById("incop4").style.display = "none";}
		document.getElementById("mc").style.display = "none";
		document.getElementById("q1").focus();
                message003.innerHTML = "";
                message004.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
		open++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealopp--;
if ((stealopp == 0) && (stealmc > 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if ((stealmc == 0) && (stealopp == 0)){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
}
function mcquestion(){
	document.getElementById("message003").style.top = "-140px";
        document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "20px";
	document.getElementById("player002").style.top = "-2px";
	document.getElementById("score001").style.top = "-65px";
	document.getElementById("score002").style.top = "-102px";
	document.getElementById("twitter001").style.top = "-135px";
	document.getElementById("twitter002").style.top = "-157px";
	document.getElementById("faction001").style.top = "-175px";
	document.getElementById("faction002").style.top = "-175px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-135px";
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[5].ques;
                message002.innerHTML = input + compcat[5].option;
if (compcat[5].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "initial";
hidechance = Math.random() *100;
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop3').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                message004.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
		open = 0;
		mc++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion2()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
function mcquestion2(){
if (s - b > 14){
loseKO();
}
else if (b -s > 14){
winKO();
}
else{
        document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "20px";
	document.getElementById("player002").style.top = "-2px";
	document.getElementById("score001").style.top = "-65px";
	document.getElementById("score002").style.top = "-102px";
	document.getElementById("twitter001").style.top = "-135px";
	document.getElementById("twitter002").style.top = "-157px";
	document.getElementById("faction001").style.top = "-175px";
	document.getElementById("faction002").style.top = "-175px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-135px";
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[6].ques;
                message002.innerHTML = input + compcat[6].option;
if (compcat[6].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "initial";
hidechance = Math.random() *100;
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop3').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                message004.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
		mc++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion3()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
}
function mcquestion3(){
if (s - b > 13){
loseKO();
}
else if (b -s > 13){
winKO();
}
else{
        document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "20px";
	document.getElementById("player002").style.top = "-2px";
	document.getElementById("score001").style.top = "-65px";
	document.getElementById("score002").style.top = "-102px";
	document.getElementById("twitter001").style.top = "-135px";
	document.getElementById("twitter002").style.top = "-157px";
	document.getElementById("faction001").style.top = "-175px";
	document.getElementById("faction002").style.top = "-175px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-135px";
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[7].ques;
                message002.innerHTML = input + compcat[7].option;
if (compcat[7].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "initial";
hidechance = Math.random() *100;
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop3').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                message004.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
		mc++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion4()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
}
function mcquestion4(){
if (s - b > 12){
loseKO();
}
else if (b -s > 12){
winKO();
}
else{
        document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "20px";
	document.getElementById("player002").style.top = "-2px";
	document.getElementById("score001").style.top = "-65px";
	document.getElementById("score002").style.top = "-102px";
	document.getElementById("twitter001").style.top = "-135px";
	document.getElementById("twitter002").style.top = "-157px";
	document.getElementById("faction001").style.top = "-175px";
	document.getElementById("faction002").style.top = "-175px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-135px";
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[8].ques;
                message002.innerHTML = input + compcat[8].option;
if (compcat[8].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "initial";
hidechance = Math.random() *100;
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop3').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                message004.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
		mc++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=mcquestion5()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
}
function mcquestion5(){
if (s - b > 11){
loseKO();
}
else if (b -s > 11){
winKO();
}
else{
        document.getElementById("message001").style.fontSize = "90%";
	document.getElementById("player001").style.top = "20px";
	document.getElementById("player002").style.top = "-2px";
	document.getElementById("score001").style.top = "-65px";
	document.getElementById("score002").style.top = "-102px";
	document.getElementById("twitter001").style.top = "-135px";
	document.getElementById("twitter002").style.top = "-157px";
	document.getElementById("faction001").style.top = "-175px";
	document.getElementById("faction002").style.top = "-175px";
	document.getElementById("record001").style.top = "-40px";
	document.getElementById("record002").style.top = "-60px";
	document.getElementById("round002").style.top = "-135px";
	    	document.getElementById("JTE").style.display = "initial";
		document.getElementById("JTE").style.visibility = "visible";
	    	document.getElementById("time001").style.display = "initial";
		document.getElementById("time001").style.fontSize = "200%";
		document.getElementById("time001").style.fontWeight = "bold";
	document.getElementById("time001").style.top = "-140px";
                update = setInterval("timer001()", 1000);
                c = 20;
                time001.innerHTML = 20;
                message001.innerHTML = compcat[9].ques;
                message002.innerHTML = input + compcat[9].option;
if (compcat[9].ques.length > 125){
		document.getElementById("message001").style.fontSize = "70%";
	document.getElementById("player001").style.top = "32px";
	document.getElementById("player002").style.top = "10px";
	document.getElementById("score001").style.top = "-53px";
	document.getElementById("score002").style.top = "-90px";
	document.getElementById("twitter001").style.top = "-123px";
	document.getElementById("twitter002").style.top = "-145px";
	document.getElementById("faction001").style.top = "-163px";
	document.getElementById("faction002").style.top = "-163px";
	document.getElementById("record001").style.top = "-28px";
	document.getElementById("record002").style.top = "-48px";
	document.getElementById("round002").style.top = "-123px";
	document.getElementById("time001").style.top = "-130px";
}
		document.getElementById("q1").style.display = "none";
var element1 =  document.getElementById('incop1');
var element2 =  document.getElementById('incop2');
var element3 =  document.getElementById('incop3');
var element4 =  document.getElementById('incop4');
document.getElementById("corop").style.display = "initial";
hidechance = Math.random() *100;
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null))
{		
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop3').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element2) != 'undefined' && element2 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element1) != 'undefined' && element1 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop1").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop1').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
if ((typeof(element2) != 'undefined' && element2 != null) && (typeof(element3) != 'undefined' && element3 != null) && (typeof(element4) != 'undefined' && element4 != null))
{
document.getElementById("incop2").style.display = "initial";
document.getElementById("incop3").style.display = "initial";
document.getElementById("incop4").style.display = "initial";
if (hidechance < 33.33){document.getElementById('incop2').style.backgroundColor = "crimson"}
else if (hidechance < 66.66){document.getElementById('incop3').style.backgroundColor = "crimson"}
else if (hidechance < 100){document.getElementById('incop4').style.backgroundColor = "crimson"}
}
                message003.innerHTML = "";
                message005.innerHTML = "";
                message006.innerHTML = "";
                message004.innerHTML = "";
		document.getElementById("qu002").style.display = "none";
 		qu001.innerHTML = "STEAL";
		mc++;
                if (c < 1) {
                    window.clearInterval(update);
                    message001.innerHTML = "Time's up";
                    message002.innerHTML = "";
                    message003.innerHTML = "";
		    stealmc--;
if (stealmc > 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
else if (stealmc == 0){
            	    message004.innerHTML = "<button class=buttons002 onclick=next005()>Next</button><br /><br /><button id=chalacc class=buttons004 onclick=ChallengeAccepted()>Win Challenge</button><button id=chalden class=buttons005 onclick=ChallengeDenied()>Lose Challenge</button>";
}
}
}
}
