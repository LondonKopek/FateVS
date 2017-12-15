var imgID;
var chara;
var charaID;
var charIdstr;
var turnmove = 0;
var turnc;
var color = 1;
var prediction = false;
var x;
var y;
var attack;
var defense;
var enemyHP;
var dmgcount;
var canTarget = false;
var enemy = "";
var toggle = false;
var BAssassinpsp = "A1";
var BLancerpsp = "A2";
var BRiderpsp = "A3";
var BSaberpsp = "A4";
var BRulerpsp = "A5";
var BArcherpsp = "A6";
var BCasterpsp = "A7";
var BBerserkerpsp = "A8";

var RAssassinpsp = "H8";
var RLancerpsp = "H7";
var RRiderpsp = "H6";
var RSaberpsp = "H5";
var RRulerpsp = "H4";
var RArcherpsp = "H3";
var RCasterpsp = "H2";
var RBerserkerpsp = "H1";
var pos0, pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10, pos11;

var BAssassinA = ["A2","A3","B1","B2","C1","0","0","0","0","0","0","0"];
var BLancerA = ["A1","A3","A4","B1","B2","B3","C2", "0", "0", "0", "0","0"];
var BRiderA = ["A1","A2","A4","A5","B2","B3","B4","C3","0","0","0","0"];
var BSaberA = ["A2","A3","A5","A6","B3","B4","B5","C4","0","0","0","0"];
var BRulerA = ["A3","A4","A6","A7","B4","B5","B6","C5","0","0","0","0"];
var BArcherA = ["A4","A5","A7","A8","B5","B6","B7","C6","0","0","0","0"];
var BCasterA = ["A5","A6","A8","B6","B7","B8","C7","0","0","0","0","0"];
var BBerserkerA = ["A6","A7","B7","B8","C8","0","0","0","0","0","0","0"];
var RAssassinA =["H6","H7","G7","G8","F8","0","0","0","0","0","0","0"];
var RLancerA=["H5","H6","H8","G6","G7","G8","F7","0","0","0","0","0"];
var RRiderA=["H4","H5","H7","H8","G5","G6","G7","F6","0","0","0","0"];
var RSaberA=["H3","H4","H6","H7","G4","G5","G6","F5","0","0","0","0"];
var RRulerA=["H2","H3","H5","H6","G3","G4","G5","F4","0","0","0","0"];
var RArcherA=["H1","H2","H4","H5","G2","G3","G4","F3","0","0","0","0"];
var RCasterA=["H1","H3","H4","G1","G2","G3","F2","0","0","0","0","0"];
var RBerserkerA = ["H2","H3","G1","G2","F1","0","0","0","0","0","0","0"];

var BLancerB,BRiderB,BSaberB,BRulerB,BBerserkerB,RLancerB,RRiderB,RSaberB,RRulerB,RBerserkerB = ["0","0","0","0"];
var BAssassinB,BCasterB,BArcherB,RAssassinB,RCasterB,RArcherB = ["0","0","0","0","0","0","0","0"];

var spaceBoard = ["A1","A2","A3","A4","A5","A6","A7","A8","B1","B2","B3","B4","B5","B6","B7","B8","C1","C2","C3","C4","C5","C6","C7","C8","D1","D2","D3","D4","D5","D6","D7","D8","E1","E2","E3","E4","E5","E6","E7","E8","F1","F2","F3","F4","F5","F6","F7","F8","G1","G2","G3","G4","G5","G6","G7","G8","H1","H2","H3","H4","H5","H6","H7","H8"];
var colorBoard = ["white","black","white","black","white","black","white","black","black","white","black","white","black","white","black","white","white","black","white","black","white","black","white","black","black","white","black","white","black","white","black","white","white","black","white","black","white","black","white","black","black","white","black","white","black","white","black","white","white","black","white","black","white","black","white","black","black","white","black","white","black","white","black","white"];
var pickup = new Audio("audio/pickup.mp3");
var drop = new Audio("audio/drop.mp3");
var arrowsfx = new Audio("audio/archerassassin.mp3");
var swordsfx = new Audio("audio/saberruler.mp3");
var impactsfx = new Audio("audio/lancerberserkerrider.mp3");
var magicsfx = new Audio("audio/caster.mp3");
var BGM = new Audio("audio/emiya.mp3");

function _(id){
   return document.getElementById(id);	
}
function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}
function next2Char(c) {
    return String.fromCharCode(c.charCodeAt(0) + 2);
}

function rightnum(n) {
	return n + 1;
}
function right2Num(n) {
	return n + 2;
}
function prevChar(c) {
    return String.fromCharCode(c.charCodeAt(0) - 1);
}
function prev2Char(c) {
    return String.fromCharCode(c.charCodeAt(0) - 2);
}

function leftnum(n) {
	return n - 1;
}
function left2Num(n) {
	return n - 2;
}
function removeImg() {
document.getElementById("turn").style.display = "none";
}

function getLegalSpaces(x , y) {
xx = parseInt(x);
pos0 =  nextChar(y) + String(x);
pos1 =  next2Char(y) + String(x);
pos2 = String(y) + rightnum(xx);
pos3 = String(y) + right2Num(xx);
pos4 =  prevChar(y) + String(x);
pos5 =  prev2Char(y) + String(x);
pos6 = String(y) + leftnum(xx);
pos7 = String(y) + left2Num(xx);
pos8 = String(nextChar(y) + rightnum(xx));
pos9 = String(nextChar(y) + leftnum(xx));
pos10 = String(prevChar(y) + rightnum(xx)); 
pos11 = String(prevChar(y) + leftnum(xx));
putInProperArray();
}

function getLegalSpaceswithoutplacement(x , y) {
xx = parseInt(x);
pos0 =  nextChar(y) + String(x);
pos1 =  next2Char(y) + String(x);
pos2 = String(y) + rightnum(xx);
pos3 = String(y) + right2Num(xx);
pos4 =  prevChar(y) + String(x);
pos5 =  prev2Char(y) + String(x);
pos6 = String(y) + leftnum(xx);
pos7 = String(y) + left2Num(xx);
pos8 = String(nextChar(y) + rightnum(xx));
pos9 = String(nextChar(y) + leftnum(xx));
pos10 = String(prevChar(y) + rightnum(xx)); 
pos11 = String(prevChar(y) + leftnum(xx));
}

function BattleAnimation() {
bbox = $('#battlebox');
lbox = $('#leftunit');
rbox = $('#rightunit');
lunit = $('#Lunit');
runit = $('#Runit');
gifbox = $('#atkanim');
dmgbox = $('#damagestat');
document.getElementById('damagestat').innerHTML = dmgcount;
	if(turnc === "black") {
	document.getElementById('damagestat').style.left = "32%";
	}
	if(turnc === "red") {
	document.getElementById('damagestat').style.left = "65%";
	}
document.getElementById('battlebox').style.display = 'block';
bbox.addClass('openright');
var charaSRC = "images/"+ chara +".png";
var enemySRC = "images/"+ enemy +".png";

if(chara === "RAssassin" || chara === "RRider" || chara === "RLancer" || chara === "RArcher" || chara === "RSaber" || chara === "RRuler" || chara === "RCaster" || chara === "RBerserker") {
$('#Lunit').attr('src', charaSRC).attr('height', '40%').attr('width','40%');
	if(chara === "RAssassin") {
		$('#Lunit').attr('height', '45%').attr('width','45%');
		document.getElementById("leftunit").style.top = "8%";
	}
	if(chara === "RLancer") {
		document.getElementById("leftunit").style.top = "13%";
	}
	if(chara === "RArcher") {
		document.getElementById("leftunit").style.top = "9%";
	}
	if(chara === "RRider") {
		$('#Lunit').attr('height', '35%').attr('width','35%');
		document.getElementById("leftunit").style.top = "11%";
	}
	if(chara === "RSaber" || chara === "RRuler" || chara === "RBerserker" || chara === "RCaster") {
		document.getElementById("leftunit").style.top = "10%";
	}
$('#Lunit').load('#leftunit');
}
if(chara === "BAssassin" || chara === "BRider" || chara === "BLancer" || chara === "BArcher" || chara === "BSaber" || chara === "BRuler" || chara === "BCaster" || chara === "BBerserker") {
$('#Runit').attr('src', charaSRC).attr('height', '40%').attr('width','40%');
	if(chara === "BLancer") {
		document.getElementById("rightunit").style.top = "14%";
	}
	if(chara === "BRider") {
		$('#Runit').attr('height', '35%').attr('width','35%');
		document.getElementById("rightunit").style.top = "12%";
	}
	if(chara === "BSaber" || chara === "BRuler" || chara === "BArcher" || chara === "BCaster" || chara === "BAssassin" || chara === "BBerserker") {
		document.getElementById("rightunit").style.top = "10%";
	}
$('#Runit').load('#rightunit');
}
if(enemy === "RAssassin" || enemy === "RRider" || enemy === "RLancer" || enemy === "RArcher" || enemy === "RSaber" || enemy === "RRuler" || enemy === "RCaster" || enemy === "RBerserker") {
$('#Lunit').attr('src', enemySRC).attr('height', '40%').attr('width','40%');
	if(enemy === "RAssassin") {
		$('#Lunit').attr('height', '45%').attr('width','45%');
		document.getElementById("leftunit").style.top = "8%";
	}
	if(enemy === "RLancer") {
		document.getElementById("leftunit").style.top = "13%";
	}
	if(enemy === "RArcher") {
		document.getElementById("leftunit").style.top = "9%";
	}
	if(enemy === "RRider") {
		$('#Lunit').attr('height', '35%').attr('width','35%');
		document.getElementById("leftunit").style.top = "11%";
	}
	if(enemy === "RSaber" || enemy === "RRuler" || enemy === "RBerserker" || enemy === "RCaster") {
		document.getElementById("leftunit").style.top = "10%";
	}
$('#Lunit').load('#leftunit');
}
if(enemy === "BAssassin" || enemy === "BRider" || enemy === "BLancer" || enemy === "BArcher" || enemy === "BSaber" || enemy === "BRuler" || enemy === "BCaster" || enemy === "BBerserker") {
$('#Runit').attr('src', enemySRC).attr('height', '40%').attr('width','40%');
	if(enemy === "BLancer") {
		document.getElementById("rightunit").style.top = "14%";
	}
	if(enemy === "BRider") {
		$('#Runit').attr('height', '35%').attr('width','35%');
		document.getElementById("rightunit").style.top = "12%";
	}
	if(enemy === "BSaber" || enemy === "BRuler" || enemy === "BArcher" || enemy === "BCaster" || enemy === "BAssassin" || enemy === "BBerserker") {
		document.getElementById("rightunit").style.top = "10%";
	}
$('#Runit').load('#rightunit');
}
setTimeout(function() {
	if(turnc === "black") {
		if(chara === "BLancer" || chara === "BRider" || chara === "BBerserker") {
		document.getElementById('attack').style.left = "5%";
		gifbox.attr('src', 'attacks/-t4.gif').attr('height', '150%').attr('width','150%');
		impactsound();
		}
		if(chara === "BArcher" || chara === "BAssassin") {
		document.getElementById('attack').style.left = "5%";
		gifbox.attr('src', 'attacks/-t1.gif').attr('height', '150%').attr('width','150%');
		arrowsound();
		}
		if(chara === "BRuler" || chara === "BSaber") {
		document.getElementById('attack').style.left = "5%";
		gifbox.attr('src', 'attacks/-t3.gif').attr('height', '150%').attr('width','150%');
		swordsound();
		}
		if(chara === "BCaster") {
		document.getElementById('attack').style.left = "5%";
		gifbox.attr('src', 'attacks/-t2.gif').attr('height', '150%').attr('width','150%');
		magicsound();
		}
	}
	if(turnc === "red") {
		if(chara === "RLancer" || chara === "RRider" || chara === "RBerserker") {
		document.getElementById('attack').style.left = "35%";
		gifbox.attr('src', 'attacks/t4-.gif').attr('height', '150%').attr('width','150%');
		impactsound();
		}
		if(chara === "RArcher" || chara === "RAssassin") {
		document.getElementById('attack').style.left = "10%";
		gifbox.attr('src', 'attacks/t1-.gif').attr('height', '150%').attr('width','150%');
		arrowsound();
		}
		if(chara === "RRuler" || chara === "RSaber") {
		document.getElementById('attack').style.left = "35%";
		gifbox.attr('src', 'attacks/t3-.gif').attr('height', '150%').attr('width','150%');
		swordsound();
		}
		if(chara === "RCaster") {
		document.getElementById('attack').style.left = "35%";
		gifbox.attr('src', 'attacks/t2-.gif').attr('height', '150%').attr('width','150%');
		magicsound();
		}
	}
}, 1000);

setTimeout(function() {
	gifbox.attr('src', '');
}, 1500);

setTimeout(function() {
	if(turnc === "black") {
	lbox.addClass('shake');
	}
	if(turnc === "red") {
	rbox.addClass('shake');
	}
}, 1300);

setTimeout(function() {
	if(turnc === "black") {
	lbox.removeClass('shake');
	}
	if(turnc === "red") {
	rbox.removeClass('shake');
	}
}, 2000);

setTimeout(function() {
	if(turnc === "black") {
	//document.getElementById('damagestat').style.display = "block";
	dmgbox.addClass('risingaction');
	// dmgbox.load('#damagestat');
	}
	if(turnc === "red") {
	//document.getElementById('damagestat').style.display = "block";
	dmgbox.addClass('risingaction');
	// dmgbox.load('#damagestat');
	}
}, 1500);

bbox.load('#battlebox');

}

function removeAnimation() {
	bbox2 = $('#battlebox');
	setTimeout(function() {
		bbox2.removeClass('openright');
		
				document.getElementById('battlebox').style.display = 'none';
				dmgbox.removeClass('risingaction');
				dmgcount = 0;
				
				
				$('#battlebox').load();
			}, 2500);
}

function checkForEnemy() {
if(turnc === "black") {
if(chara === "BLancer") {
	if(BLancerB[0] === RCasterpsp || BLancerB[1] === RCasterpsp || BLancerB[2] === RCasterpsp || BLancerB[3] === RCasterpsp) {
		canTarget = true;
		RCaster.canTarget = true;
	}
	if(BLancerB[0] === RBerserkerpsp || BLancerB[1] === RBerserkerpsp || BLancerB[2] === RBerserkerpsp || BLancerB[3] === RBerserkerpsp) {
		canTarget = true;
		RBerserker.canTarget = true; 
	}
	if(BLancerB[0] === RArcherpsp || BLancerB[1] === RArcherpsp || BLancerB[2] === RArcherpsp || BLancerB[3] === RArcherpsp) {
		canTarget = true;
		RArcher.canTarget = true; 
	}
	if(BLancerB[0] === RRulerpsp || BLancerB[1] === RRulerpsp || BLancerB[2] === RRulerpsp || BLancerB[3] === RRulerpsp) {
		canTarget = true;
		RRuler.canTarget = true; 
	}
	if(BLancerB[0] === RSaberpsp || BLancerB[1] === RSaberpsp || BLancerB[2] === RSaberpsp || BLancerB[3] === RSaberpsp) {
		canTarget = true;
		RSaber.canTarget = true; 
	}
	if(BLancerB[0] === RRiderpsp || BLancerB[1] === RRiderpsp || BLancerB[2] === RRiderpsp || BLancerB[3] === RRiderpsp) {
		canTarget = true;
		RRider.canTarget = true; 
	}
	if(BLancerB[0] === RLancerpsp || BLancerB[1] === RLancerpsp || BLancerB[2] === RLancerpsp || BLancerB[3] === RLancerpsp) {
		canTarget = true;
		RLancer.canTarget = true; 
	}
	if(BLancerB[0] === RAssassinpsp || BLancerB[1] === RAssassinpsp || BLancerB[2] === RAssassinpsp || BLancerB[3] === RAssassinpsp) {
		canTarget = true;
		RAssassin.canTarget = true; 
	}
}
if(chara === "BAssassin") {
	if(BAssassinB[0] === RCasterpsp || BAssassinB[1] === RCasterpsp || BAssassinB[2] === RCasterpsp || BAssassinB[3] === RCasterpsp || BAssassinB[4] === RCasterpsp || BAssassinB[5] === RCasterpsp || BAssassinB[6] === RCasterpsp || BAssassinB[7] === RCasterpsp) {
		canTarget = true;
		RCaster.canTarget = true; 
	}
	if(BAssassinB[0] === RBerserkerpsp || BAssassinB[1] === RBerserkerpsp || BAssassinB[2] === RBerserkerpsp || BAssassinB[3] === RBerserkerpsp || BAssassinB[4] === RBerserkerpsp || BAssassinB[5] === RBerserkerpsp || BAssassinB[6] === RBerserkerpsp || BAssassinB[7] === RBerserkerpsp) {
		canTarget = true;
		RBerserker.canTarget = true; 
	}
	if(BAssassinB[0] === RArcherpsp || BAssassinB[1] === RArcherpsp || BAssassinB[2] === RArcherpsp || BAssassinB[3] === RArcherpsp || BAssassinB[4] === RArcherpsp || BAssassinB[5] === RArcherpsp || BAssassinB[6] === RArcherpsp || BAssassinB[7] === RArcherpsp) {
		canTarget = true;
		RArcher.canTarget = true; 
	}
	if(BAssassinB[0] === RRulerpsp || BAssassinB[1] === RRulerpsp || BAssassinB[2] === RRulerpsp || BAssassinB[3] === RRulerpsp || BAssassinB[4] === RRulerpsp || BAssassinB[5] === RRulerpsp || BAssassinB[6] === RRulerpsp || BAssassinB[7] === RRulerpsp) {
		canTarget = true;
		RRuler.canTarget = true; 
	}
	if(BAssassinB[0] === RSaberpsp || BAssassinB[1] === RSaberpsp || BAssassinB[2] === RSaberpsp || BAssassinB[3] === RSaberpsp || BAssassinB[4] === RSaberpsp || BAssassinB[5] === RSaberpsp || BAssassinB[6] === RSaberpsp || BAssassinB[7] === RSaberpsp) {
		canTarget = true;
		RSaber.canTarget = true; 
	}
	if(BAssassinB[0] === RRiderpsp || BAssassinB[1] === RRiderpsp || BAssassinB[2] === RRiderpsp || BAssassinB[3] === RRiderpsp || BAssassinB[4] === RRiderpsp || BAssassinB[5] === RRiderpsp || BAssassinB[6] === RRiderpsp || BAssassinB[7] === RRiderpsp) {
		canTarget = true;
		RRider.canTarget = true; 
	}
	if(BAssassinB[0] === RLancerpsp || BAssassinB[1] === RLancerpsp || BAssassinB[2] === RLancerpsp || BAssassinB[3] === RLancerpsp || BAssassinB[4] === RLancerpsp || BAssassinB[5] === RLancerpsp || BAssassinB[6] === RLancerpsp || BAssassinB[7] === RLancerpsp) {
		canTarget = true;
		RLancer.canTarget = true; 
	}
	if(BAssassinB[0] === RAssassinpsp || BAssassinB[1] === RAssassinpsp || BAssassinB[2] === RAssassinpsp || BAssassinB[3] === RAssassinpsp || BAssassinB[4] === RAssassinpsp || BAssassinB[5] === RAssassinpsp || BAssassinB[6] === RAssassinpsp || BAssassinB[7] === RAssassinpsp) {
		canTarget = true;
		RAssassin.canTarget = true; 
	}
}
if(chara === "BRider") {
	if(BRiderB[0] === RCasterpsp || BRiderB[1] === RCasterpsp || BRiderB[2] === RCasterpsp || BRiderB[3] === RCasterpsp) {
		canTarget = true;
		RCaster.canTarget = true; 
	}
	if(BRiderB[0] === RBerserkerpsp || BRiderB[1] === RBerserkerpsp || BRiderB[2] === RBerserkerpsp || BRiderB[3] === RBerserkerpsp) {
		canTarget = true;
		RBerserker.canTarget = true; 
	}
	if(BRiderB[0] === RArcherpsp || BRiderB[1] === RArcherpsp || BRiderB[2] === RArcherpsp || BRiderB[3] === RArcherpsp) {
		canTarget = true;
		RArcher.canTarget = true; 
	}
	if(BRiderB[0] === RRulerpsp || BRiderB[1] === RRulerpsp || BRiderB[2] === RRulerpsp || BRiderB[3] === RRulerpsp) {
		canTarget = true;
		RRuler.canTarget = true; 
	}
	if(BRiderB[0] === RSaberpsp || BRiderB[1] === RSaberpsp || BRiderB[2] === RSaberpsp || BRiderB[3] === RSaberpsp) {
		canTarget = true;
		RSaber.canTarget = true; 
	}
	if(BRiderB[0] === RRiderpsp || BRiderB[1] === RRiderpsp || BRiderB[2] === RRiderpsp || BRiderB[3] === RRiderpsp) {
		canTarget = true;
		RRider.canTarget = true; 
	}
	if(BRiderB[0] === RLancerpsp || BRiderB[1] === RLancerpsp || BRiderB[2] === RLancerpsp || BRiderB[3] === RLancerpsp) {
		canTarget = true;
		RLancer.canTarget = true; 
	}
	if(BRiderB[0] === RAssassinpsp || BRiderB[1] === RAssassinpsp || BRiderB[2] === RAssassinpsp || BRiderB[3] === RAssassinpsp) {
		canTarget = true;
		RAssassin.canTarget = true; 
	}
}
if(chara === "BSaber") {
	if(BSaberB[0] === RCasterpsp || BSaberB[1] === RCasterpsp || BSaberB[2] === RCasterpsp || BSaberB[3] === RCasterpsp) {
		canTarget = true;
		RCaster.canTarget = true; 
	}
	if(BSaberB[0] === RBerserkerpsp || BSaberB[1] === RBerserkerpsp || BSaberB[2] === RBerserkerpsp || BSaberB[3] === RBerserkerpsp) {
		canTarget = true;
		RBerserker.canTarget = true; 
	}
	if(BSaberB[0] === RArcherpsp || BSaberB[1] === RArcherpsp || BSaberB[2] === RArcherpsp || BSaberB[3] === RArcherpsp) {
		canTarget = true;
		RArcher.canTarget = true; 
	}
	if(BSaberB[0] === RRulerpsp || BSaberB[1] === RRulerpsp || BSaberB[2] === RRulerpsp || BSaberB[3] === RRulerpsp) {
		canTarget = true;
		RRuler.canTarget = true; 
	}
	if(BSaberB[0] === RSaberpsp || BSaberB[1] === RSaberpsp || BSaberB[2] === RSaberpsp || BSaberB[3] === RSaberpsp) {
		canTarget = true;
		RSaber.canTarget = true; 
	}
	if(BSaberB[0] === RRiderpsp || BSaberB[1] === RRiderpsp || BSaberB[2] === RRiderpsp || BSaberB[3] === RRiderpsp) {
		canTarget = true;
		RRider.canTarget = true; 
	}
	if(BSaberB[0] === RLancerpsp || BSaberB[1] === RLancerpsp || BSaberB[2] === RLancerpsp || BSaberB[3] === RLancerpsp) {
		canTarget = true;
		RLancer.canTarget = true; 
	}
	if(BSaberB[0] === RAssassinpsp || BSaberB[1] === RAssassinpsp || BSaberB[2] === RAssassinpsp || BSaberB[3] === RAssassinpsp) {
		canTarget = true;
		RAssassin.canTarget = true; 
	}
}
if(chara === "BRuler") {
	if(BRulerB[0] === RCasterpsp || BRulerB[1] === RCasterpsp || BRulerB[2] === RCasterpsp || BRulerB[3] === RCasterpsp) {
		canTarget = true;
		RCaster.canTarget = true; 
	}
	if(BRulerB[0] === RBerserkerpsp || BRulerB[1] === RBerserkerpsp || BRulerB[2] === RBerserkerpsp || BRulerB[3] === RBerserkerpsp) {
		canTarget = true;
		RBerserker.canTarget = true; 
	}
	if(BRulerB[0] === RArcherpsp || BRulerB[1] === RArcherpsp || BRulerB[2] === RArcherpsp || BRulerB[3] === RArcherpsp) {
		canTarget = true;
		RArcher.canTarget = true; 
	}
	if(BRulerB[0] === RRulerpsp || BRulerB[1] === RRulerpsp || BRulerB[2] === RRulerpsp || BRulerB[3] === RRulerpsp) {
		canTarget = true;
		RRuler.canTarget = true; 
	}
	if(BRulerB[0] === RSaberpsp || BRulerB[1] === RSaberpsp || BRulerB[2] === RSaberpsp || BRulerB[3] === RSaberpsp) {
		canTarget = true;
		RSaber.canTarget = true; 
	}
	if(BRulerB[0] === RRiderpsp || BRulerB[1] === RRiderpsp || BRulerB[2] === RRiderpsp || BRulerB[3] === RRiderpsp) {
		canTarget = true;
		RRider.canTarget = true; 
	}
	if(BRulerB[0] === RLancerpsp || BRulerB[1] === RLancerpsp || BRulerB[2] === RLancerpsp || BRulerB[3] === RLancerpsp) {
		canTarget = true;
		RLancer.canTarget = true; 
	}
	if(BRulerB[0] === RAssassinpsp || BRulerB[1] === RAssassinpsp || BRulerB[2] === RAssassinpsp || BRulerB[3] === RAssassinpsp) {
		canTarget = true;
		RAssassin.canTarget = true; 
	}
}
if(chara === "BArcher") {
	if(BArcherB[0] === RCasterpsp || BArcherB[1] === RCasterpsp || BArcherB[2] === RCasterpsp || BArcherB[3] === RCasterpsp || BArcherB[4] === RCasterpsp || BArcherB[5] === RCasterpsp || BArcherB[6] === RCasterpsp || BArcherB[7] === RCasterpsp) {
		canTarget = true;
		RCaster.canTarget = true; 
	}
	if(BArcherB[0] === RBerserkerpsp || BArcherB[1] === RBerserkerpsp || BArcherB[2] === RBerserkerpsp || BArcherB[3] === RBerserkerpsp || BArcherB[4] === RBerserkerpsp || BArcherB[5] === RBerserkerpsp || BArcherB[6] === RBerserkerpsp || BArcherB[7] === RBerserkerpsp) {
		canTarget = true;
		RBerserker.canTarget = true; 
	}
	if(BArcherB[0] === RArcherpsp || BArcherB[1] === RArcherpsp || BArcherB[2] === RArcherpsp || BArcherB[3] === RArcherpsp || BArcherB[4] === RArcherpsp || BArcherB[5] === RArcherpsp || BArcherB[6] === RArcherpsp || BArcherB[7] === RArcherpsp) {
		canTarget = true;
		RArcher.canTarget = true; 
	}
	if(BArcherB[0] === RRulerpsp || BArcherB[1] === RRulerpsp || BArcherB[2] === RRulerpsp || BArcherB[3] === RRulerpsp || BArcherB[4] === RRulerpsp || BArcherB[5] === RRulerpsp || BArcherB[6] === RRulerpsp || BArcherB[7] === RRulerpsp) {
		canTarget = true;
		RRuler.canTarget = true; 
	}
	if(BArcherB[0] === RSaberpsp || BArcherB[1] === RSaberpsp || BArcherB[2] === RSaberpsp || BArcherB[3] === RSaberpsp || BArcherB[4] === RSaberpsp || BArcherB[5] === RSaberpsp || BArcherB[6] === RSaberpsp || BArcherB[7] === RSaberpsp) {
		canTarget = true;
		RSaber.canTarget = true; 
	}
	if(BArcherB[0] === RRiderpsp || BArcherB[1] === RRiderpsp || BArcherB[2] === RRiderpsp || BArcherB[3] === RRiderpsp || BArcherB[4] === RRiderpsp || BArcherB[5] === RRiderpsp || BArcherB[6] === RRiderpsp || BArcherB[7] === RRiderpsp) {
		canTarget = true;
		RRider.canTarget = true; 
	}
	if(BArcherB[0] === RLancerpsp || BArcherB[1] === RLancerpsp || BArcherB[2] === RLancerpsp || BArcherB[3] === RLancerpsp || BArcherB[4] === RLancerpsp || BArcherB[5] === RLancerpsp || BArcherB[6] === RLancerpsp || BArcherB[7] === RLancerpsp) {
		canTarget = true;
		RLancer.canTarget = true; 
	}
	if(BArcherB[0] === RAssassinpsp || BArcherB[1] === RAssassinpsp || BArcherB[2] === RAssassinpsp || BArcherB[3] === RAssassinpsp || BArcherB[4] === RAssassinpsp || BArcherB[5] === RAssassinpsp || BArcherB[6] === RAssassinpsp || BArcherB[7] === RAssassinpsp) {
		canTarget = true;
		RAssassin.canTarget = true; 
	}
}
if(chara === "BCaster") {
	if(BCasterB[0] === RCasterpsp || BCasterB[1] === RCasterpsp || BCasterB[2] === RCasterpsp || BCasterB[3] === RCasterpsp || BCasterB[4] === RCasterpsp || BCasterB[5] === RCasterpsp || BCasterB[6] === RCasterpsp || BCasterB[7] === RCasterpsp) {
		canTarget = true;
		RCaster.canTarget = true; 
	}
	if(BCasterB[0] === RBerserkerpsp || BCasterB[1] === RBerserkerpsp || BCasterB[2] === RBerserkerpsp || BCasterB[3] === RBerserkerpsp || BCasterB[4] === RBerserkerpsp || BCasterB[5] === RBerserkerpsp || BCasterB[6] === RBerserkerpsp || BCasterB[7] === RBerserkerpsp) {
		canTarget = true;
		RBerserker.canTarget = true; 
	}
	if(BCasterB[0] === RArcherpsp || BCasterB[1] === RArcherpsp || BCasterB[2] === RArcherpsp || BCasterB[3] === RArcherpsp || BCasterB[4] === RArcherpsp || BCasterB[5] === RArcherpsp || BCasterB[6] === RArcherpsp || BCasterB[7] === RArcherpsp) {
		canTarget = true;
		RArcher.canTarget = true; 
	}
	if(BCasterB[0] === RRulerpsp || BCasterB[1] === RRulerpsp || BCasterB[2] === RRulerpsp || BCasterB[3] === RRulerpsp || BCasterB[4] === RRulerpsp || BCasterB[5] === RRulerpsp || BCasterB[6] === RRulerpsp || BCasterB[7] === RRulerpsp) {
		canTarget = true;
		RRuler.canTarget = true; 
	}
	if(BCasterB[0] === RSaberpsp || BCasterB[1] === RSaberpsp || BCasterB[2] === RSaberpsp || BCasterB[3] === RSaberpsp || BCasterB[4] === RSaberpsp || BCasterB[5] === RSaberpsp || BCasterB[6] === RSaberpsp || BCasterB[7] === RSaberpsp) {
		canTarget = true;
		RSaber.canTarget = true; 
	}
	if(BCasterB[0] === RRiderpsp || BCasterB[1] === RRiderpsp || BCasterB[2] === RRiderpsp || BCasterB[3] === RRiderpsp || BCasterB[4] === RRiderpsp || BCasterB[5] === RRiderpsp || BCasterB[6] === RRiderpsp || BCasterB[7] === RRiderpsp) {
		canTarget = true;
		RRider.canTarget = true; 
	}
	if(BCasterB[0] === RLancerpsp || BCasterB[1] === RLancerpsp || BCasterB[2] === RLancerpsp || BCasterB[3] === RLancerpsp || BCasterB[4] === RLancerpsp || BCasterB[5] === RLancerpsp || BCasterB[6] === RLancerpsp || BCasterB[7] === RLancerpsp) {
		canTarget = true;
		RLancer.canTarget = true; 
	}
	if(BCasterB[0] === RAssassinpsp || BCasterB[1] === RAssassinpsp || BCasterB[2] === RAssassinpsp || BCasterB[3] === RAssassinpsp || BCasterB[4] === RAssassinpsp || BCasterB[5] === RAssassinpsp || BCasterB[6] === RAssassinpsp || BCasterB[7] === RAssassinpsp) {
		canTarget = true;
		RAssassin.canTarget = true; 
	}
}
if(chara === "BBerserker") {
	if(BBerserkerB[0] === RCasterpsp || BBerserkerB[1] === RCasterpsp || BBerserkerB[2] === RCasterpsp || BBerserkerB[3] === RCasterpsp) {
		canTarget = true;
		RCaster.canTarget = true; 
	}
	if(BBerserkerB[0] === RBerserkerpsp || BBerserkerB[1] === RBerserkerpsp || BBerserkerB[2] === RBerserkerpsp || BBerserkerB[3] === RBerserkerpsp) {
		canTarget = true;
		RBerserker.canTarget = true; 
	}
	if(BBerserkerB[0] === RArcherpsp || BBerserkerB[1] === RArcherpsp || BBerserkerB[2] === RArcherpsp || BBerserkerB[3] === RArcherpsp) {
		canTarget = true;
		RArcher.canTarget = true; 
	}
	if(BBerserkerB[0] === RRulerpsp || BBerserkerB[1] === RRulerpsp || BBerserkerB[2] === RRulerpsp || BBerserkerB[3] === RRulerpsp) {
		canTarget = true;
		RRuler.canTarget = true; 
	}
	if(BBerserkerB[0] === RSaberpsp || BBerserkerB[1] === RSaberpsp || BBerserkerB[2] === RSaberpsp || BBerserkerB[3] === RSaberpsp) {
		canTarget = true;
		RSaber.canTarget = true; 
	}
	if(BBerserkerB[0] === RRiderpsp || BBerserkerB[1] === RRiderpsp || BBerserkerB[2] === RRiderpsp || BBerserkerB[3] === RRiderpsp) {
		canTarget = true;
		RRider.canTarget = true; 
	}
	if(BBerserkerB[0] === RLancerpsp || BBerserkerB[1] === RLancerpsp || BBerserkerB[2] === RLancerpsp || BBerserkerB[3] === RLancerpsp) {
		canTarget = true;
		RLancer.canTarget = true; 
	}
	if(BBerserkerB[0] === RAssassinpsp || BBerserkerB[1] === RAssassinpsp || BBerserkerB[2] === RAssassinpsp || BBerserkerB[3] === RAssassinpsp) {
		canTarget = true;
		RAssassin.canTarget = true; 
	}
}
}
if(turnc === "red") {
if(chara === "RLancer") {
	if(RLancerB[0] === BCasterpsp || RLancerB[1] === BCasterpsp || RLancerB[2] === BCasterpsp || RLancerB[3] === BCasterpsp) {
		canTarget = true;
		BCaster.canTarget = true; 
	}
	if(RLancerB[0] === BBerserkerpsp || RLancerB[1] === BBerserkerpsp || RLancerB[2] === BBerserkerpsp || RLancerB[3] === BBerserkerpsp) {
		canTarget = true;
		BBerserker.canTarget = true; 
	}
	if(RLancerB[0] === BArcherpsp || RLancerB[1] === BArcherpsp || RLancerB[2] === BArcherpsp || RLancerB[3] === BArcherpsp) {
		canTarget = true;
		BArcher.canTarget = true; 
	}
	if(RLancerB[0] === BRulerpsp || RLancerB[1] === BRulerpsp || RLancerB[2] === BRulerpsp || RLancerB[3] === BRulerpsp) {
		canTarget = true;
		BRuler.canTarget = true; 
	}
	if(RLancerB[0] === BSaberpsp || RLancerB[1] === BSaberpsp || RLancerB[2] === BSaberpsp || RLancerB[3] === BSaberpsp) {
		canTarget = true;
		BSaber.canTarget = true; 
	}
	if(RLancerB[0] === BRiderpsp || RLancerB[1] === BRiderpsp || RLancerB[2] === BRiderpsp || RLancerB[3] === BRiderpsp) {
		canTarget = true;
		BRider.canTarget = true; 
	}
	if(RLancerB[0] === BLancerpsp || RLancerB[1] === BLancerpsp || RLancerB[2] === BLancerpsp || RLancerB[3] === BLancerpsp) {
		canTarget = true;
		BLancer.canTarget = true; 
	}
	if(RLancerB[0] === BAssassinpsp || RLancerB[1] === BAssassinpsp || RLancerB[2] === BAssassinpsp || RLancerB[3] === BAssassinpsp) {
		canTarget = true;
		BAssassin.canTarget = true; 
	}
}
if(chara === "RAssassin") {
	if(RAssassinB[0] === BCasterpsp || RAssassinB[1] === BCasterpsp || RAssassinB[2] === BCasterpsp || RAssassinB[3] === BCasterpsp || RAssassinB[4] === BCasterpsp || RAssassinB[5] === BCasterpsp || RAssassinB[6] === BCasterpsp || RAssassinB[7] === BCasterpsp) {
		canTarget = true;
		BCaster.canTarget = true; 
	}
	if(RAssassinB[0] === BBerserkerpsp || RAssassinB[1] === BBerserkerpsp || RAssassinB[2] === BBerserkerpsp || RAssassinB[3] === BBerserkerpsp || RAssassinB[4] === BBerserkerpsp || RAssassinB[5] === BBerserkerpsp || RAssassinB[6] === BBerserkerpsp || RAssassinB[7] === BBerserkerpsp) {
		canTarget = true;
		BBerserker.canTarget = true; 
	}
	if(RAssassinB[0] === BArcherpsp || RAssassinB[1] === BArcherpsp || RAssassinB[2] === BArcherpsp || RAssassinB[3] === BArcherpsp || RAssassinB[4] === BArcherpsp || RAssassinB[5] === BArcherpsp || RAssassinB[6] === BArcherpsp || RAssassinB[7] === BArcherpsp) {
		canTarget = true;
		BArcher.canTarget = true; 
	}
	if(RAssassinB[0] === BRulerpsp || RAssassinB[1] === BRulerpsp || RAssassinB[2] === BRulerpsp || RAssassinB[3] === BRulerpsp || RAssassinB[4] === BRulerpsp || RAssassinB[5] === BRulerpsp || RAssassinB[6] === BRulerpsp || RAssassinB[7] === BRulerpsp) {
		canTarget = true;
		BRuler.canTarget = true; 
	}
	if(RAssassinB[0] === BSaberpsp || RAssassinB[1] === BSaberpsp || RAssassinB[2] === BSaberpsp || RAssassinB[3] === BSaberpsp || RAssassinB[4] === BSaberpsp || RAssassinB[5] === BSaberpsp || RAssassinB[6] === BSaberpsp || RAssassinB[7] === BSaberpsp) {
		canTarget = true;
		BSaber.canTarget = true; 
	}
	if(RAssassinB[0] === BRiderpsp || RAssassinB[1] === BRiderpsp || RAssassinB[2] === BRiderpsp || RAssassinB[3] === BRiderpsp || RAssassinB[4] === BRiderpsp || RRAssassinB[5] === BRiderpsp || RAssassinB[6] === BRiderpsp || RAssassinB[7] === BRiderpsp) {
		canTarget = true;
		BRider.canTarget = true; 
	}
	if(RAssassinB[0] === BLancerpsp || RAssassinB[1] === BLancerpsp || RAssassinB[2] === BLancerpsp || RAssassinB[3] === BLancerpsp || RAssassinB[4] === BLancerpsp || RAssassinB[5] === BLancerpsp || RAssassinB[6] === BLancerpsp || RAssassinB[7] === BLancerpsp) {
		canTarget = true;
		BLancer.canTarget = true; 
	}
	if(RAssassinB[0] === BAssassinpsp || RAssassinB[1] === BAssassinpsp || RAssassinB[2] === BAssassinpsp || RAssassinB[3] === BAssassinpsp || RAssassinB[4] === BAssassinpsp || RAssassinB[5] === BAssassinpsp || RAssassinB[6] === BAssassinpsp || RAssassinB[7] === BAssassinpsp) {
		canTarget = true;
		BAssassin.canTarget = true; 
	}
}
if(chara === "RRider") {
	if(RRiderB[0] === BCasterpsp || RRiderB[1] === BCasterpsp || RRiderB[2] === BCasterpsp || RRiderB[3] === BCasterpsp) {
		canTarget = true;
		BCaster.canTarget = true; 
	}
	if(RRiderB[0] === BBerserkerpsp || RRiderB[1] === BBerserkerpsp || RRiderB[2] === BBerserkerpsp || RRiderB[3] === BBerserkerpsp) {
		canTarget = true;
		BBerserker.canTarget = true; 
	}
	if(RRiderB[0] === BArcherpsp || RRiderB[1] === BArcherpsp || RRiderB[2] === BArcherpsp || RRiderB[3] === BArcherpsp) {
		canTarget = true;
		BArcher.canTarget = true; 
	}
	if(RRiderB[0] === BRulerpsp || RRiderB[1] === BRulerpsp || RRiderB[2] === BRulerpsp || RRiderB[3] === BRulerpsp) {
		canTarget = true;
		BRuler.canTarget = true; 
	}
	if(RRiderB[0] === BSaberpsp || RRiderB[1] === BSaberpsp || RRiderB[2] === BSaberpsp || RRiderB[3] === BSaberpsp) {
		canTarget = true;
		BSaber.canTarget = true; 
	}
	if(RRiderB[0] === BRiderpsp || RRiderB[1] === BRiderpsp || RRiderB[2] === BRiderpsp || RRiderB[3] === BRiderpsp) {
		canTarget = true;
		BRider.canTarget = true; 
	}
	if(RRiderB[0] === BLancerpsp || RRiderB[1] === BLancerpsp || RRiderB[2] === BLancerpsp || RRiderB[3] === BLancerpsp) {
		canTarget = true;
		BLancer.canTarget = true; 
	}
	if(RRiderB[0] === BAssassinpsp || RRiderB[1] === BAssassinpsp || RRiderB[2] === BAssassinpsp || RRiderB[3] === BAssassinpsp) {
		canTarget = true;
		BAssassin.canTarget = true; 
	}
}
if(chara === "RSaber") {
	if(RSaberB[0] === BCasterpsp || RSaberB[1] === BCasterpsp || RSaberB[2] === BCasterpsp || RSaberB[3] === BCasterpsp) {
		canTarget = true;
		BCaster.canTarget = true; 
	}
	if(RSaberB[0] === BBerserkerpsp || RSaberB[1] === BBerserkerpsp || RSaberB[2] === BBerserkerpsp || RSaberB[3] === BBerserkerpsp) {
		canTarget = true;
		BBerserker.canTarget = true; 
	}
	if(RSaberB[0] === BArcherpsp || RSaberB[1] === BArcherpsp || RSaberB[2] === BArcherpsp || RSaberB[3] === BArcherpsp) {
		canTarget = true;
		BArcher.canTarget = true; 
	}
	if(RSaberB[0] === BRulerpsp || RSaberB[1] === BRulerpsp || RSaberB[2] === BRulerpsp || RSaberB[3] === BRulerpsp) {
		canTarget = true;
		BRuler.canTarget = true; 
	}
	if(RSaberB[0] === BSaberpsp || RSaberB[1] === BSaberpsp || RSaberB[2] === BSaberpsp || RSaberB[3] === BSaberpsp) {
		canTarget = true;
		BSaber.canTarget = true; 
	}
	if(RSaberB[0] === BRiderpsp || RSaberB[1] === BRiderpsp || RSaberB[2] === BRiderpsp || RSaberB[3] === BRiderpsp) {
		canTarget = true;
		BRider.canTarget = true; 
	}
	if(RSaberB[0] === BLancerpsp || RSaberB[1] === BLancerpsp || RSaberB[2] === BLancerpsp || RSaberB[3] === BLancerpsp) {
		canTarget = true;
		BLancer.canTarget = true; 
	}
	if(RSaberB[0] === BAssassinpsp || RSaberB[1] === BAssassinpsp || RSaberB[2] === BAssassinpsp || RSaberB[3] === BAssassinpsp) {
		canTarget = true;
		BAssassin.canTarget = true; 
	}
}
if(chara === "RRuler") {
	if(RRulerB[0] === BCasterpsp || RRulerB[1] === BCasterpsp || RRulerB[2] === BCasterpsp || RRulerB[3] === BCasterpsp) {
		canTarget = true;
		BCaster.canTarget = true; 
	}
	if(RRulerB[0] === BBerserkerpsp || RRulerB[1] === BBerserkerpsp || RRulerB[2] === BBerserkerpsp || RRulerB[3] === BBerserkerpsp) {
		canTarget = true;
		BBerserker.canTarget = true; 
	}
	if(RRulerB[0] === BArcherpsp || RRulerB[1] === BArcherpsp || RRulerB[2] === BArcherpsp || RRulerB[3] === BArcherpsp) {
		canTarget = true;
		BArcher.canTarget = true; 
	}
	if(RRulerB[0] === BRulerpsp || RRulerB[1] === BRulerpsp || RRulerB[2] === BRulerpsp || RRulerB[3] === BRulerpsp) {
		canTarget = true;
		BRuler.canTarget = true; 
	}
	if(RRulerB[0] === BSaberpsp || RRulerB[1] === BSaberpsp || RRulerB[2] === BSaberpsp || RRulerB[3] === BSaberpsp) {
		canTarget = true;
		BSaber.canTarget = true; 
	}
	if(RRulerB[0] === BRiderpsp || RRulerB[1] === BRiderpsp || RRulerB[2] === BRiderpsp || RRulerB[3] === BRiderpsp) {
		canTarget = true;
		BRider.canTarget = true; 
	}
	if(RRulerB[0] === BLancerpsp || RRulerB[1] === BLancerpsp || RRulerB[2] === BLancerpsp || RRulerB[3] === BLancerpsp) {
		canTarget = true;
		BLancer.canTarget = true; 
	}
	if(RRulerB[0] === BAssassinpsp || RRulerB[1] === BAssassinpsp || RRulerB[2] === BAssassinpsp || RRulerB[3] === BAssassinpsp) {
		canTarget = true;
		BAssassin.canTarget = true; 
	}
}
if(chara === "RArcher") {
	if(RArcherB[0] === BCasterpsp || RArcherB[1] === BCasterpsp || RArcherB[2] === BCasterpsp || RArcherB[3] === BCasterpsp || RArcherB[4] === BCasterpsp || RArcherB[5] === BCasterpsp || RArcherB[6] === BCasterpsp || RArcherB[7] === BCasterpsp) {
		canTarget = true;
		BCaster.canTarget = true; 
	}
	if(RArcherB[0] === BBerserkerpsp || RArcherB[1] === BBerserkerpsp || RArcherB[2] === BBerserkerpsp || RArcherB[3] === BBerserkerpsp || RArcherB[4] === BBerserkerpsp || RArcherB[5] === BBerserkerpsp || RArcherB[6] === BBerserkerpsp || RArcherB[7] === BBerserkerpsp) {
		canTarget = true;
		BBerserker.canTarget = true; 
	}
	if(RArcherB[0] === BArcherpsp || RArcherB[1] === BArcherpsp || RArcherB[2] === BArcherpsp || RArcherB[3] === BArcherpsp || RArcherB[4] === BArcherpsp || RArcherB[5] === BArcherpsp || RArcherB[6] === BArcherpsp || RArcherB[7] === BArcherpsp) {
		canTarget = true;
		BArcher.canTarget = true; 
	}
	if(RArcherB[0] === BRulerpsp || RArcherB[1] === BRulerpsp || RArcherB[2] === BRulerpsp || RArcherB[3] === BRulerpsp || RArcherB[4] === BRulerpsp || RArcherB[5] === BRulerpsp || RArcherB[6] === BRulerpsp || RArcherB[7] === BRulerpsp) {
		canTarget = true;
		BRuler.canTarget = true; 
	}
	if(RArcherB[0] === BSaberpsp || RArcherB[1] === BSaberpsp || RArcherB[2] === BSaberpsp || RArcherB[3] === BSaberpsp || RArcherB[4] === BSaberpsp || RArcherB[5] === BSaberpsp || RArcherB[6] === BSaberpsp || RArcherB[7] === BSaberpsp) {
		canTarget = true;
		BSaber.canTarget = true; 
	}
	if(RArcherB[0] === BRiderpsp || RArcherB[1] === BRiderpsp || RArcherB[2] === BRiderpsp || RArcherB[3] === BRiderpsp || RArcherB[4] === BRiderpsp || RArcherB[5] === BRiderpsp || RArcherB[6] === BRiderpsp || RArcherB[7] === BRiderpsp) {
		canTarget = true;
		BRider.canTarget = true; 
	}
	if(RArcherB[0] === BLancerpsp || RArcherB[1] === BLancerpsp || RArcherB[2] === BLancerpsp || RArcherB[3] === BLancerpsp || RArcherB[4] === BLancerpsp || RArcherB[5] === BLancerpsp || RArcherB[6] === BLancerpsp || RArcherB[7] === BLancerpsp) {
		canTarget = true;
		BLancer.canTarget = true; 
	}
	if(RArcherB[0] === BAssassinpsp || RArcherB[1] === BAssassinpsp || RArcherB[2] === BAssassinpsp || RArcherB[3] === BAssassinpsp || RArcherB[4] === BAssassinpsp || RArcherB[5] === BAssassinpsp || RArcherB[6] === BAssassinpsp || RArcherB[7] === BAssassinpsp) {
		canTarget = true;
		BAssassin.canTarget = true; 
	}
}
if(chara === "RCaster") {
	if(RCasterB[0] === BCasterpsp || RCasterB[1] === BCasterpsp || RCasterB[2] === BCasterpsp || RCasterB[3] === BCasterpsp || RCasterB[4] === BCasterpsp || RCasterB[5] === BCasterpsp || RCasterB[6] === BCasterpsp || RCasterB[7] === BCasterpsp) {
		canTarget = true;
		BCaster.canTarget = true; 
	}
	if(RCasterB[0] === BBerserkerpsp || RCasterB[1] === BBerserkerpsp || RCasterB[2] === BBerserkerpsp || RCasterB[3] === BBerserkerpsp || RCasterB[4] === BBerserkerpsp || RCasterB[5] === BBerserkerpsp || RCasterB[6] === BBerserkerpsp || RCasterB[7] === BBerserkerpsp) {
		canTarget = true;
		BBerserker.canTarget = true; 
	}
	if(RCasterB[0] === BArcherpsp || RCasterB[1] === BArcherpsp || RCasterB[2] === BArcherpsp || RCasterB[3] === BArcherpsp || RCasterB[4] === BArcherpsp || RCasterB[5] === BArcherpsp || RCasterB[6] === BArcherpsp || RCasterB[7] === BArcherpsp) {
		canTarget = true;
		BArcher.canTarget = true; 
	}
	if(RCasterB[0] === BRulerpsp || RCasterB[1] === BRulerpsp || RCasterB[2] === BRulerpsp || RCasterB[3] === BRulerpsp || RCasterB[4] === BRulerpsp || RCasterB[5] === BRulerpsp || RCasterB[6] === BRulerpsp || RCasterB[7] === BRulerpsp) {
		canTarget = true;
		BRuler.canTarget = true; 
	}
	if(RCasterB[0] === BSaberpsp || RCasterB[1] === BSaberpsp || RCasterB[2] === BSaberpsp || RCasterB[3] === BSaberpsp || RCasterB[4] === BSaberpsp || RCasterB[5] === BSaberpsp || RCasterB[6] === BSaberpsp || RCasterB[7] === BSaberpsp) {
		canTarget = true;
		BSaber.canTarget = true; 
	}
	if(RCasterB[0] === BRiderpsp || RCasterB[1] === BRiderpsp || RCasterB[2] === BRiderpsp || RCasterB[3] === BRiderpsp || RCasterB[4] === BRiderpsp || RCasterB[5] === BRiderpsp || RCasterB[6] === BRiderpsp || RCasterB[7] === BRiderpsp) {
		canTarget = true;
		BRider.canTarget = true; 
	}
	if(RCasterB[0] === BLancerpsp || RCasterB[1] === BLancerpsp || RCasterB[2] === BLancerpsp || RCasterB[3] === BLancerpsp || RCasterB[4] === BLancerpsp || RCasterB[5] === BLancerpsp || RCasterB[6] === BLancerpsp || RCasterB[7] === BLancerpsp) {
		canTarget = true;
		BLancer.canTarget = true; 
	}
	if(RCasterB[0] === BAssassinpsp || RCasterB[1] === BAssassinpsp || RCasterB[2] === BAssassinpsp || RCasterB[3] === BAssassinpsp || RCasterB[4] === BAssassinpsp || RCasterB[5] === BAssassinpsp || RCasterB[6] === BAssassinpsp || RCasterB[7] === BAssassinpsp) {
		canTarget = true;
		BAssassin.canTarget = true; 
	}
}
if(chara === "RBerserker") {
	if(RBerserkerB[0] === BCasterpsp || RBerserkerB[1] === BCasterpsp || RBerserkerB[2] === BCasterpsp || RBerserkerB[3] === BCasterpsp) {
		canTarget = true;
		BCaster.canTarget = true; 
	}
	if(RBerserkerB[0] === BBerserkerpsp || RBerserkerB[1] === BBerserkerpsp || RBerserkerB[2] === BBerserkerpsp || RBerserkerB[3] === BBerserkerpsp) {
		canTarget = true;
		BBerserker.canTarget = true; 
	}
	if(RBerserkerB[0] === BArcherpsp || RBerserkerB[1] === BArcherpsp || RBerserkerB[2] === BArcherpsp || RBerserkerB[3] === BArcherpsp) {
		canTarget = true;
		BArcher.canTarget = true; 
	}
	if(RBerserkerB[0] === BRulerpsp || RBerserkerB[1] === BRulerpsp || RBerserkerB[2] === BRulerpsp || RBerserkerB[3] === BRulerpsp) {
		canTarget = true;
		BRuler.canTarget = true; 
	}
	if(RBerserkerB[0] === BSaberpsp || RBerserkerB[1] === BSaberpsp || RBerserkerB[2] === BSaberpsp || RBerserkerB[3] === BSaberpsp) {
		canTarget = true;
		BSaber.canTarget = true; 
	}
	if(RBerserkerB[0] === BRiderpsp || RBerserkerB[1] === BRiderpsp || RBerserkerB[2] === BRiderpsp || RBerserkerB[3] === BRiderpsp) {
		canTarget = true;
		BRider.canTarget = true; 
	}
	if(RBerserkerB[0] === BLancerpsp || RBerserkerB[1] === BLancerpsp || RBerserkerB[2] === BLancerpsp || RBerserkerB[3] === BLancerpsp) {
		canTarget = true;
		BLancer.canTarget = true; 
	}
	if(RBerserkerB[0] === BAssassinpsp || RBerserkerB[1] === BAssassinpsp || RBerserkerB[2] === BAssassinpsp || RBerserkerB[3] === BAssassinpsp) {
		canTarget = true;
		BAssassin.canTarget = true; 
	}
}
}
}

function setTargetFalse() {
BAssassin.canTarget = false;
BLancer.canTarget = false;
BRider.canTarget = false;
BSaber.canTarget = false;
BRuler.canTarget = false;
BArcher.canTarget = false;
BCaster.canTarget = false;
BBerserker.canTarget = false;
RAssassin.canTarget = false;
RLancer.canTarget = false;
RRider.canTarget = false;
RSaber.canTarget = false;
RRuler.canTarget = false;
RArcher.canTarget = false;
RCaster.canTarget = false;
RBerserker.canTarget = false;
}


function Battle() {
if(turnc === "black") {

//unit
	if(chara === "BAssassin") {
		attack = BAssassin.atk;
	}
	if(chara === "BLancer") {
		attack = BLancer.atk;
	}
	if(chara === "BRider") {
		attack = BRider.atk;
	}
	if(chara === "BSaber") {
		attack = BSaber.atk;
	}
	if(chara === "BRuler") {
		attack = BRuler.atk;
	}
	if(chara === "BArcher") {
		attack = BArcher.atk;
	}
	if(chara === "BCaster") {
		attack = BCaster.atk;
	}
	if(chara === "BBerserker") {
		attack = BBerserker.atk;
	}

//enemy

	if(enemy === "RAssassin") {
		defense = RAssassin.def;
		enemyHP = RAssassin.hp;
	}
	if(enemy === "RLancer") {
		defense = RLancer.def;
		enemyHP = RLancer.hp;
	}
	if(enemy === "RRider") {
		defense = RRider.def;
		enemyHP = RRider.hp;
	}
	if(enemy === "RSaber") {
		defense = RSaber.def;
		enemyHP = RSaber.hp;
	}
	if(enemy === "RRuler") {
		defense = RRuler.def;
		enemyHP = RRuler.hp;
	}
	if(enemy === "RArcher") {
		defense = RArcher.def;
		enemyHP = RArcher.hp;
	}
	if(enemy === "RCaster") {
		defense = RCaster.def;
		enemyHP = RCaster.hp;
	}
	if(enemy === "RBerserker") {
		defense = RBerserker.def;
		enemyHP = RBerserker.hp;
	}

//damage calculations
	if(attack < defense) {
	var damage = 0;
	dmgcount = String(damage);
	}
	if(attack > defense) {
	var damage = attack - defense;
	dmgcount = String(damage);
	}
	if(attack === defense) {
	var damage = 0;
	dmgcount = String(damage);
	}
	if(attack === undefined) {
	var damage = 0;
	dmgcount = String(damage);
	}
	enemyHP = enemyHP - damage;
if(prediction === false) {
	if(enemyHP === 0 || enemyHP < 0) {
		// red enemies
		var IDenemy = "#" + enemy;
		var deleteenemy = enemy;
		if(deleteenemy === "RCaster") { RCaster.exists = false; RCasterpsp = "0"; }
		if(deleteenemy === "RAssassin") { RAssassin.exists = false; RAssassinpsp = "0"; }
		if(deleteenemy === "RBerserker") { RBerserker.exists = false; RBerserkerpsp = "0"; }
		if(deleteenemy === "RSaber") { RSaber.exists = false; RSaberpsp = "0"; }
		if(deleteenemy === "RRuler") { RRuler.exists = false; RRulerpsp = "0"; DisplayWinner("BlackWins"); }
		if(deleteenemy === "RLancer") { RLancer.exists = false; RLancerpsp = "0"; }
		if(deleteenemy === "RRider") { RRider.exists = false; RRiderpsp = "0"; }
		if(deleteenemy === "RArcher") { RArcher.exists = false; RArcherpsp = "0"; }
		document.getElementById(enemy).remove(IDenemy);
		//document.getElementById('left').remove('src');
		document.getElementById('leftstats').innerHTML = "";
		//document.getElementById('leftf').remove('src');
		document.getElementById('leftNamebox').innerHTML = "";
		document.getElementById('leftPredict').innerHTML = "";
		document.getElementById('rightPredict').innerHTML = "";
		setTargetFalse();
		enemy = "";
		
	}
}
}
if(turnc === "red") {
//unit
	if(chara === "RAssassin") {
		attack = RAssassin.atk;
	}
	if(chara === "RLancer") {
		attack = RLancer.atk;
	}
	if(chara === "RRider") {
		attack = RRider.atk;
	}
	if(chara === "RSaber") {
		attack = RSaber.atk;
	}
	if(chara === "RRuler") {
		attack = RRuler.atk;
	}
	if(chara === "RArcher") {
		attack = RArcher.atk;
	}
	if(chara === "RCaster") {
		attack = RCaster.atk;
	}
	if(chara === "RBerserker") {
		attack = RBerserker.atk;
	}

//enemy

	if(enemy === "BAssassin") {
		defense = BAssassin.def;
		enemyHP = BAssassin.hp;
	}
	if(enemy === "BLancer") {
		defense = BLancer.def;
		enemyHP = BLancer.hp;
	}
	if(enemy === "BRider") {
		defense = BRider.def;
		enemyHP = BRider.hp;
	}
	if(enemy === "BSaber") {
		defense = BSaber.def;
		enemyHP = BSaber.hp;
	}
	if(enemy === "BRuler") {
		defense = BRuler.def;
		enemyHP = BRuler.hp;
	}
	if(enemy === "BArcher") {
		defense = BArcher.def;
		enemyHP = BArcher.hp;
	}
	if(enemy === "BCaster") {
		defense = BCaster.def;
		enemyHP = BCaster.hp;
	}
	if(enemy === "BBerserker") {
		defense = BBerserker.def;
		enemyHP = BBerserker.hp;
	}

//damage calculations
	if(attack < defense) {
	var damage = 0;
	dmgcount = String(damage);
	}
	if(attack > defense) {
	var damage = attack - defense;
	dmgcount = String(damage);
	}
	if(attack === defense) {
	var damage = 0;
	dmgcount = String(damage);
	}
	if(attack === undefined) {
	var damage = 0;
	dmgcount = String(damage);
	}
	enemyHP = enemyHP - damage;
if(prediction === false) {
	if(enemyHP === 0 || enemyHP < 0) {
		// black enemies
		var IDenemy = "#" + enemy;
		var deleteenemy = enemy;
		if(deleteenemy === "BCaster") { BCaster.exists = false; BCasterpsp = "0"; }
		if(deleteenemy === "BAssassin") { BAssassin.exists = false; BAssassinpsp = "0"; }
		if(deleteenemy === "BBerserker") { BBerserker.exists = false; BBerserkerpsp = "0"; }
		if(deleteenemy === "BSaber") { BSaber.exists = false; BSaberpsp = "0"; }
		if(deleteenemy === "BRuler") { BRuler.exists = false; BRulerpsp = "0"; DisplayWinner("RedWins"); }
		if(deleteenemy === "BLancer") { BLancer.exists = false; BLancerpsp = "0"; }
		if(deleteenemy === "BRider") { BRider.exists = false; BRiderpsp = "0"; }
		if(deleteenemy === "BArcher") { BArcher.exists = false; BArcherpsp = "0"; }
		document.getElementById(enemy).remove(IDenemy);
		//document.getElementById('right').remove('src');
		document.getElementById('rightstats').innerHTML = "";
		//document.getElementById('rightf').remove('src');
		document.getElementById('rightNamebox').innerHTML = "";
		document.getElementById('rightPredict').innerHTML = "";
		document.getElementById('leftPredict').innerHTML = "";
		setTargetFalse();
		enemy = "";
		
		
	}
}
}
prediction = false;
}

function setHealth() {
//adjusting health after battle step
	if(enemy === "RAssassin" && RAssassin.exists === true) {
		RAssassin.hp = enemyHP;
	}
	if(enemy === "RLancer" && RLancer.exists === true) {
		RLancer.hp = enemyHP;
	}
	if(enemy === "RRider" && RRider.exists === true) {
		RRider.hp = enemyHP;
	}
	if(enemy === "RSaber" && RSaber.exists === true) {
		RSaber.hp = enemyHP;
	}
	if(enemy === "RRuler" && RRuler.exists === true) {
		RRuler.hp = enemyHP;
	}
	if(enemy === "RArcher" && RArcher.exists === true) {
		RArcher.hp = enemyHP;
	}
	if(enemy === "RCaster" && RCaster.exists === true) {
		RCaster.hp = enemyHP;
	}
	if(enemy === "RBerserker" && RBerserker.exists === true) {
		RBerserker.hp = enemyHP;
	}
	if(enemy === "BAssassin" && BAssassin.exists === true) {
		BAssassin.hp = enemyHP;
	}
	if(enemy === "BLancer" && BLancer.exists === true) {
		BLancer.hp = enemyHP;
	}
	if(enemy === "BRider" && BRider.exists === true) {
		BRider.hp = enemyHP;
	}
	if(enemy === "BSaber" && BSaber.exists === true) {
		BSaber.hp = enemyHP;
	}
	if(enemy === "BRuler" && BRuler.exists === true) {
		BRuler.hp = enemyHP;
	}
	if(enemy === "BArcher" && BArcher.exists === true) {
		BArcher.hp = enemyHP;
	}
	if(enemy === "BCaster" && BCaster.exists === true) {
		BCaster.hp = enemyHP;
	}
	if(enemy === "BBerserker" && BBerserker.exists === true) {
		BBerserker.hp = enemyHP;
	}

}

function Healthbar() {
unit = String(chara);
targetid = "#" + unit + "h";
if(unit === "BAssassin" && BAssassin.exists === true){ var percentage = BAssassin.hp / BAssassin.maxhp; }
if(unit === "RAssassin" && RAssassin.exists === true){ var percentage = RAssassin.hp / RAssassin.maxhp; }
if(unit === "BLancer" && BLancer.exists === true){ var percentage = BLancer.hp / BLancer.maxhp; }
if(unit === "RLancer" && RLancer.exists === true){ var percentage = RLancer.hp / RLancer.maxhp; }
if(unit === "BSaber" && BSaber.exists === true){ var percentage = BSaber.hp / BSaber.maxhp; }
if(unit === "RSaber" && RSaber.exists === true){ var percentage = RSaber.hp / RSaber.maxhp; }
if(unit === "BRuler" && BRuler.exists === true){ var percentage = BRuler.hp / BRuler.maxhp; }
if(unit === "RRuler" && RRuler.exists === true){ var percentage = RRuler.hp / RRuler.maxhp; }
if(unit === "BRider" && BRider.exists === true){ var percentage = BRider.hp / BRider.maxhp; }
if(unit === "RRider" && RRider.exists === true){ var percentage = RRider.hp / RRider.maxhp; }
if(unit === "BCaster" && BCaster.exists === true){ var percentage = BCaster.hp / BCaster.maxhp; }
if(unit === "RCaster" && RCaster.exists === true){ var percentage = RCaster.hp / RCaster.maxhp; }
if(unit === "BArcher" && BArcher.exists === true){ var percentage = BArcher.hp / BArcher.maxhp; }
if(unit === "RArcher" && RArcher.exists === true){ var percentage = RArcher.hp / RArcher.maxhp; }
if(unit === "BBerserker" && BBerserker.exists === true){ var percentage = BBerserker.hp / BBerserker.maxhp; }
if(unit === "RBerserker" && RBerserker.exists === true){ var percentage = RBerserker.hp / RBerserker.maxhp; }
var updatedwidth = 50 * percentage;
var updatestring = updatedwidth + "px";
$(targetid).remove('src');
$(targetid).attr('src', 'projectfiles/redrect.png').attr('height', '10px').attr('width', updatestring).attr('draggable', 'false');

unit2 = String(enemy);
targetid2 = "#" + unit2 + "h";
if(unit2 === "BAssassin" && BAssassin.exists === true){ var percentage2 = BAssassin.hp / BAssassin.maxhp; }
if(unit2 === "RAssassin" && RAssassin.exists === true){ var percentage2 = RAssassin.hp / RAssassin.maxhp; }
if(unit2 === "BLancer" && BLancer.exists === true){ var percentage2 = BLancer.hp / BLancer.maxhp; }
if(unit2 === "RLancer" && RLancer.exists === true){ var percentage2 = RLancer.hp / RLancer.maxhp; }
if(unit2 === "BSaber" && BSaber.exists === true){ var percentage2 = BSaber.hp / BSaber.maxhp; }
if(unit2 === "RSaber" && RSaber.exists === true){ var percentage2 = RSaber.hp / RSaber.maxhp; }
if(unit2 === "BRuler" && BRuler.exists === true){ var percentage2 = BRuler.hp / BRuler.maxhp; }
if(unit2 === "RRuler" && RRuler.exists === true){ var percentage2 = RRuler.hp / RRuler.maxhp; }
if(unit2 === "BRider" && BRider.exists === true){ var percentage2 = BRider.hp / BRider.maxhp; }
if(unit2 === "RRider" && RRider.exists === true){ var percentage2 = RRider.hp / RRider.maxhp; }
if(unit2 === "BCaster" && BCaster.exists === true){ var percentage2 = BCaster.hp / BCaster.maxhp; }
if(unit2 === "RCaster" && RCaster.exists === true){ var percentage2 = RCaster.hp / RCaster.maxhp; }
if(unit2 === "BArcher" && BArcher.exists === true){ var percentage2 = BArcher.hp / BArcher.maxhp; }
if(unit2 === "RArcher" && RArcher.exists === true){ var percentage2 = RArcher.hp / RArcher.maxhp; }
if(unit2 === "BBerserker" && BBerserker.exists === true){ var percentage2 = BBerserker.hp / BBerserker.maxhp; }
if(unit2 === "RBerserker" && RBerserker.exists === true){ var percentage2 = RBerserker.hp / RBerserker.maxhp; }
var updatedwidth2 = 50 * percentage2;
var updatestring2 = updatedwidth2 + "px";
$(targetid2).remove('src');
$(targetid2).attr('src', 'projectfiles/redrect.png').attr('height', '10px').attr('width', updatestring2).attr('draggable', 'false');
enemy = "";
targetid.load(targetid);
targetid2.load(targetid2);
}

function reloadHealth() {
BRulerhealth = String( BRuler.hp ) + "/" + String( BRuler.maxhp );
RRulerhealth = String( RRuler.hp ) + "/" + String( RRuler.maxhp );
BSaberhealth = String( BSaber.hp ) + "/" + String( BSaber.maxhp );
RSaberhealth = String( RSaber.hp ) + "/" + String( RSaber.maxhp );
BLancerhealth = String( BLancer.hp ) + "/" + String( BLancer.maxhp );
RLancerhealth = String( RLancer.hp ) + "/" + String( RLancer.maxhp );
BArcherhealth = String( BArcher.hp ) + "/" + String( BArcher.maxhp );
RArcherhealth = String( RArcher.hp ) + "/" + String( RArcher.maxhp );
BBerserkerhealth = String( BBerserker.hp ) + "/" + String( BBerserker.maxhp );
RBerserkerhealth = String( RBerserker.hp ) + "/" + String( RBerserker.maxhp );
BAssassinhealth = String( BAssassin.hp ) + "/" + String( BAssassin.maxhp );
RAssassinhealth = String( RAssassin.hp ) + "/" + String( RAssassin.maxhp );
BCasterhealth = String( BCaster.hp ) + "/" + String( BCaster.maxhp );
RCasterhealth = String( RCaster.hp ) + "/" + String( RCaster.maxhp );
BRiderhealth = String( BRider.hp ) + "/" + String( BRider.maxhp );
RRiderhealth = String( RRider.hp ) + "/" + String( RRider.maxhp );
}

function adjustHealthValues() {
if(BAssassin.exists === true) { document.getElementById("hpbar").innerHTML=BAssassinhealth; }
if(BLancer.exists === true) { document.getElementById("hpbar2").innerHTML=BLancerhealth; }
if(BArcher.exists === true) { document.getElementById("hpbar6").innerHTML=BArcherhealth; }
if(BRuler.exists === true) { document.getElementById("hpbar5").innerHTML=BRulerhealth; }
if(BSaber.exists === true) { document.getElementById("hpbar4").innerHTML=BSaberhealth; }
if(BCaster.exists === true) { document.getElementById("hpbar7").innerHTML=BCasterhealth; }
if(BBerserker.exists === true) { document.getElementById("hpbar8").innerHTML=BBerserkerhealth; }
if(BRider.exists === true) { document.getElementById("hpbar3").innerHTML=BRiderhealth; }
//red
if(RAssassin.exists === true) { document.getElementById("hpbar16").innerHTML=RAssassinhealth; }
if(RLancer.exists === true) { document.getElementById("hpbar15").innerHTML=RLancerhealth; }
if(RArcher.exists === true) { document.getElementById("hpbar11").innerHTML=RArcherhealth; }
if(RRuler.exists === true) { document.getElementById("hpbar12").innerHTML=RRulerhealth; }
if(RSaber.exists === true) { document.getElementById("hpbar13").innerHTML=RSaberhealth; }
if(RCaster.exists === true) { document.getElementById("hpbar10").innerHTML=RCasterhealth; }
if(RBerserker.exists === true) { document.getElementById("hpbar9").innerHTML=RBerserkerhealth; }
if(RRider.exists === true) { document.getElementById("hpbar14").innerHTML=RRiderhealth; }


}


function removeTargets() {

if(BAssassin.exists === true) { document.getElementById('BAssassintargetbox').style.backgroundImage = ""; }
if(BLancer.exists === true) { document.getElementById('BLancertargetbox').style.backgroundImage = ""; }
if(BRider.exists === true) { document.getElementById('BRidertargetbox').style.backgroundImage = ""; }
if(BSaber.exists === true) { document.getElementById('BSabertargetbox').style.backgroundImage = ""; }
if(BRuler.exists === true) { document.getElementById('BRulertargetbox').style.backgroundImage = ""; }
if(BCaster.exists === true) { document.getElementById('BCastertargetbox').style.backgroundImage = ""; }
if(BArcher.exists === true) { document.getElementById('BArchertargetbox').style.backgroundImage = ""; }
if(BBerserker.exists === true) { document.getElementById('BBerserkertargetbox').style.backgroundImage = ""; }
if(RAssassin.exists === true) { document.getElementById('RAssassintargetbox').style.backgroundImage = ""; }
if(RLancer.exists === true) { document.getElementById('RLancertargetbox').style.backgroundImage = ""; }
if(RRider.exists === true) { document.getElementById('RRidertargetbox').style.backgroundImage = ""; }
if(RSaber.exists === true) { document.getElementById('RSabertargetbox').style.backgroundImage = ""; }
if(RRuler.exists === true) { document.getElementById('RRulertargetbox').style.backgroundImage = ""; }
if(RArcher.exists === true) { document.getElementById('RArchertargetbox').style.backgroundImage = ""; }
if(RCaster.exists === true) { document.getElementById('RCastertargetbox').style.backgroundImage = ""; }
if(RBerserker.exists === true) { document.getElementById('RBerserkertargetbox').style.backgroundImage = ""; }
}



function BattleStep() {
	if(chara != "" && enemy != "") {
	BattleAnimation();
	removeAnimation();
	Battle();
	setHealth();
	reloadHealth();
	adjustHealthValues();
	canTarget = false;
	removeTargets();
	setTargetFalse();
	checkbattlebeforemove();
	document.getElementById('leftPredict').innerHTML = "";
	document.getElementById('rightPredict').innerHTML = "";
	Healthbar();
	}
	else {
		//do nothing
	}
	
}


function putInProperArray() {
if(chara === "BAssassin") {
BAssassinA = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11];
BAssassinB = [pos1,pos3,pos5,pos7,pos8,pos9,pos10,pos11];
}
if(chara === "RAssassin") {
RAssassinA = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11];
RAssassinB = [pos1,pos3,pos5,pos7,pos8,pos9,pos10,pos11];
}
if(chara === "BLancer") {
BLancerA = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11];
BLancerB = [pos0,pos2,pos4,pos6];
}
if(chara === "RLancer") {
RLancerA = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11];
RLancerB = [pos0,pos2,pos4,pos6];
}
if(chara === "BRider") {
BRiderA = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11];
BRiderB = [pos0,pos2,pos4,pos6];
}
if(chara === "RRider") {
RRiderA = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11];
RRiderB = [pos0,pos2,pos4,pos6];
}
if(chara === "BSaber") {
BSaberA = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11];
BSaberB = [pos0,pos2,pos4,pos6];
}
if(chara === "RSaber") {
RSaberA = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11];
RSaberB = [pos0,pos2,pos4,pos6];
}
if(chara === "BRuler") {
BRulerA = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11];
BRulerB = [pos0,pos2,pos4,pos6];
}
if(chara === "RRuler") {
RRulerA = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11];
RRulerB = [pos0,pos2,pos4,pos6];
}
if(chara === "BArcher") {
BArcherA = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11];
BArcherB = [pos1,pos3,pos5,pos7,pos8,pos9,pos10,pos11];
}
if(chara === "RArcher") {
RArcherA = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11];
RArcherB = [pos1,pos3,pos5,pos7,pos8,pos9,pos10,pos11];
}
if(chara === "BCaster") {
BCasterA = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11];
BCasterB = [pos1,pos3,pos5,pos7,pos8,pos9,pos10,pos11];
}
if(chara === "RCaster") {
RCasterA = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11];
RCasterB = [pos1,pos3,pos5,pos7,pos8,pos9,pos10,pos11];
}
if(chara === "BBerserker") {
BBerserkerA = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11];
BBerserkerB = [pos0,pos2,pos4,pos6];
}
if(chara === "RBerserker") {
RBerserkerA = [pos0,pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9,pos10,pos11];
RBerserkerB = [pos0,pos2,pos4,pos6];
}
}

function checkbattlebeforemove() {
	if(chara === "BAssassin" && BAssassin.exists === true) {
		if(BAssassin.hasmoved === false) {
			BAssassin.hasmoved = true;
			document.getElementById('BAssassin').setAttribute('ondragstart', 'return false');
			document.getElementById('BAssassin').style.backgroundImage = "url('blankpiece/bassassinpieceX.png')";
			turnmove++;
			revertSpacesBack();
		}
	}
	if(chara === "BLancer" && BLancer.exists === true) {
		if(BLancer.hasmoved === false) {
			BLancer.hasmoved = true;
			document.getElementById('BLancer').setAttribute('ondragstart', 'return false');
			document.getElementById('BLancer').style.backgroundImage = "url('blankpiece/blancerpieceX.png')";
			turnmove++;
			revertSpacesBack();
		}
	}
	if(chara === "BRider" && BRider.exists === true) {
		if(BRider.hasmoved === false) {
			BRider.hasmoved = true;
			document.getElementById('BRider').setAttribute('ondragstart', 'return false');
			document.getElementById('BRider').style.backgroundImage = "url('blankpiece/briderpieceX.png')";
			turnmove++;
			revertSpacesBack();
		}
	}
	if(chara === "BSaber" && BSaber.exists === true) {
		if(BSaber.hasmoved === false) {
			BSaber.hasmoved = true;
			document.getElementById('BSaber').setAttribute('ondragstart', 'return false');
			document.getElementById('BSaber').style.backgroundImage = "url('blankpiece/bsaberpieceX.png')";
			turnmove++;
			revertSpacesBack();
		}
	}
	if(chara === "BRuler" && BRuler.exists === true) {
		if(BRuler.hasmoved === false) {
			BRuler.hasmoved = true;
			document.getElementById('BRuler').setAttribute('ondragstart', 'return false');
			document.getElementById('BRuler').style.backgroundImage = "url('blankpiece/brulerpieceX.png')";
			turnmove++;
			revertSpacesBack();
		}
	}
	if(chara === "BArcher" && BArcher.exists === true) {
		if(BArcher.hasmoved === false) {
			BArcher.hasmoved = true;
			document.getElementById('BArcher').setAttribute('ondragstart', 'return false');
			document.getElementById('BArcher').style.backgroundImage = "url('blankpiece/barcherpieceX.png')";
			turnmove++;
			revertSpacesBack();
		}
	}
	if(chara === "BCaster" && BCaster.exists === true) {
		if(BCaster.hasmoved === false) {
			BCaster.hasmoved = true;
			document.getElementById('BCaster').setAttribute('ondragstart', 'return false');
			document.getElementById('BCaster').style.backgroundImage = "url('blankpiece/bcasterpieceX.png')";
			turnmove++;
			revertSpacesBack();
		}
	}
	if(chara === "BBerserker" && BBerserker.exists === true) {
		if(BBerserker.hasmoved === false) {
			BBerserker.hasmoved = true;
			document.getElementById('BBerserker').setAttribute('ondragstart', 'return false');
			document.getElementById('BBerserker').style.backgroundImage = "url('blankpiece/bberserkerpieceX.png')";
			turnmove++;
			revertSpacesBack();
		}
	}
	
	///////////////
	
		if(chara === "RAssassin" && RAssassin.exists === true) {
		if(RAssassin.hasmoved === false) {
			RAssassin.hasmoved = true;
			document.getElementById('RAssassin').setAttribute('ondragstart', 'return false');
			document.getElementById('RAssassin').style.backgroundImage = "url('blankpiece/rassassinpieceX.png')";
			turnmove++;
			revertSpacesBack();
		}
	}
	if(chara === "RLancer" && RLancer.exists === true) {
		if(RLancer.hasmoved === false) {
			RLancer.hasmoved = true;
			document.getElementById('RLancer').setAttribute('ondragstart', 'return false');
			document.getElementById('RLancer').style.backgroundImage = "url('blankpiece/rlancerpieceX.png')";
			turnmove++;
			revertSpacesBack();
		}
	}
	if(chara === "RRider" && RRider.exists === true) {
		if(RRider.hasmoved === false) {
			RRider.hasmoved = true;
			document.getElementById('RRider').setAttribute('ondragstart', 'return false');
			document.getElementById('RRider').style.backgroundImage = "url('blankpiece/rriderpieceX.png')";
			turnmove++;
			revertSpacesBack();
		}
	}
	if(chara === "RSaber" && RSaber.exists === true) {
		if(RSaber.hasmoved === false) {
			RSaber.hasmoved = true;
			document.getElementById('RSaber').setAttribute('ondragstart', 'return false');
			document.getElementById('RSaber').style.backgroundImage = "url('blankpiece/rsaberpieceX.png')";
			turnmove++;
			revertSpacesBack();
		}
	}
	if(chara === "RRuler" && RRuler.exists === true) {
		if(RRuler.hasmoved === false) {
			RRuler.hasmoved = true;
			document.getElementById('RRuler').setAttribute('ondragstart', 'return false');
			document.getElementById('RRuler').style.backgroundImage = "url('blankpiece/rrulerpieceX.png')";
			turnmove++;
			revertSpacesBack();
		}
	}
	if(chara === "RArcher" && RArcher.exists === true) {
		if(RArcher.hasmoved === false) {
			RArcher.hasmoved = true;
			document.getElementById('RArcher').setAttribute('ondragstart', 'return false');
			document.getElementById('RArcher').style.backgroundImage = "url('blankpiece/rarcherpieceX.png')";
			turnmove++;
			revertSpacesBack();
		}
	}
	if(chara === "RCaster" && RCaster.exists === true) {
		if(RCaster.hasmoved === false) {
			RCaster.hasmoved = true;
			document.getElementById('RCaster').setAttribute('ondragstart', 'return false');
			document.getElementById('RCaster').style.backgroundImage = "url('blankpiece/rcasterpieceX.png')";
			turnmove++;
			revertSpacesBack();
		}
	}
	if(chara === "RBerserker" && RBerserker.exists === true) {
		if(RBerserker.hasmoved === false) {
			RBerserker.hasmoved = true;
			document.getElementById('RBerserker').setAttribute('ondragstart', 'return false');
			document.getElementById('RBerserker').style.backgroundImage = "url('blankpiece/rberserkerpieceX.png')";
			turnmove++;
			revertSpacesBack();
		}
	}
}





function DisplayLegalMoves() {
if(chara === "BAssassin") {
    	for(var i = 0; i < 12; i++) {
		var t = BAssassinA[i];
		document.getElementById(t).style.backgroundColor = "green";	
	}

}
if(chara === "BRider") {
	for(var i=0; i<12; i++) {
		var t = BRiderA[i];
		var space = document.getElementById(t).style.backgroundColor = "green";
		
	}
}
if(chara === "BLancer") {
	for(var i=0; i<12; i++) {
		var t = BLancerA[i];
		var space = document.getElementById(t).style.backgroundColor = "green";
		
	}
}
if(chara === "BSaber") {
	for(var i=0; i<12; i++) {
		var t = BSaberA[i];
		var space = document.getElementById(t).style.backgroundColor = "green";
		
	}
}
if(chara === "BRuler") {
	for(var i=0; i<12; i++) {
		var t = BRulerA[i];
		var space = document.getElementById(t).style.backgroundColor = "green";
		
	}
}
if(chara === "BArcher") {
	for(var i=0; i<12; i++) {
		var t = BArcherA[i];
		var space = document.getElementById(t).style.backgroundColor = "green";
		
	}
}
if(chara === "BCaster") {
	for(var i=0; i<12; i++) {
		var t = BCasterA[i];
		var space = document.getElementById(t).style.backgroundColor = "green";
		
	}
}
if(chara === "BBerserker") {
	for(var i=0; i<12; i++) {
		var t = BBerserkerA[i];
		var space = document.getElementById(t).style.backgroundColor = "green";
		
	}
}
if(chara === "RAssassin") {
	for(var i=0; i<12; i++) {
		var t = RAssassinA[i];
		var space = document.getElementById(t).style.backgroundColor = "green";
		
	}
}
if(chara === "RRider") {
	for(var i=0; i<12; i++) {
		var t = RRiderA[i];
		var space = document.getElementById(t).style.backgroundColor = "green";
		
	}
}
if(chara === "RLancer") {
	for(var i=0; i<12; i++) {
		var t = RLancerA[i];
		var space = document.getElementById(t).style.backgroundColor = "green";
		
	}
}
if(chara === "RSaber") {
	for(var i=0; i<12; i++) {
		var t = RSaberA[i];
		var space = document.getElementById(t).style.backgroundColor = "green";
		
	}
}
if(chara === "RRuler") {
	for(var i=0; i<12; i++) {
		var t = RRulerA[i];
		var space = document.getElementById(t).style.backgroundColor = "green";
		
	}
}
if(chara === "RArcher") {
	for(var i=0; i<12; i++) {
		var t = RArcherA[i];
		var space = document.getElementById(t).style.backgroundColor = "green";
		
	}
}
if(chara === "RCaster") {
	for(var i=0; i<12; i++) {
		var t = RCasterA[i];
		var space = document.getElementById(t).style.backgroundColor = "green";
		
	}
}
if(chara === "RBerserker") {
	for(var i=0; i<12; i++) {
		var t = RBerserkerA[i];
		var space = document.getElementById(t).style.backgroundColor = "green";
		
	}
}
}

function DisplayLegalAttacks() {
if(chara === "BAssassin") {
    	for(var i = 0; i < 8; i++) {
		var t = BAssassinB[i];
		document.getElementById(t).style.backgroundColor = "pink";	
	}

}
if(chara === "BRider") {
	for(var i=0; i<4; i++) {
		var t = BRiderB[i];
		var space = document.getElementById(t).style.backgroundColor = "pink";
		
	}
}
if(chara === "BLancer") {
	for(var i=0; i<4; i++) {
		var t = BLancerB[i];
		var space = document.getElementById(t).style.backgroundColor = "pink";
		
	}
}
if(chara === "BSaber") {
	for(var i=0; i<4; i++) {
		var t = BSaberB[i];
		var space = document.getElementById(t).style.backgroundColor = "pink";
		
	}
}
if(chara === "BRuler") {
	for(var i=0; i<4; i++) {
		var t = BRulerB[i];
		var space = document.getElementById(t).style.backgroundColor = "pink";
		
	}
}
if(chara === "BArcher") {
	for(var i=0; i<8; i++) {
		var t = BArcherB[i];
		var space = document.getElementById(t).style.backgroundColor = "pink";
		
	}
}
if(chara === "BCaster") {
	for(var i=0; i<8; i++) {
		var t = BCasterB[i];
		var space = document.getElementById(t).style.backgroundColor = "pink";
		
	}
}
if(chara === "BBerserker") {
	for(var i=0; i<4; i++) {
		var t = BBerserkerB[i];
		var space = document.getElementById(t).style.backgroundColor = "pink";
		
	}
}
if(chara === "RAssassin") {
	for(var i=0; i<8; i++) {
		var t = RAssassinB[i];
		var space = document.getElementById(t).style.backgroundColor = "pink";
		
	}
}
if(chara === "RRider") {
	for(var i=0; i<4; i++) {
		var t = RRiderB[i];
		var space = document.getElementById(t).style.backgroundColor = "pink";
		
	}
}
if(chara === "RLancer") {
	for(var i=0; i<4; i++) {
		var t = RLancerB[i];
		var space = document.getElementById(t).style.backgroundColor = "pink";
		
	}
}
if(chara === "RSaber") {
	for(var i=0; i<4; i++) {
		var t = RSaberB[i];
		var space = document.getElementById(t).style.backgroundColor = "pink";
		
	}
}
if(chara === "RRuler") {
	for(var i=0; i<4; i++) {
		var t = RRulerB[i];
		var space = document.getElementById(t).style.backgroundColor = "pink";
		
	}
}
if(chara === "RArcher") {
	for(var i=0; i<8; i++) {
		var t = RArcherB[i];
		var space = document.getElementById(t).style.backgroundColor = "pink";
		
	}
}
if(chara === "RCaster") {
	for(var i=0; i<8; i++) {
		var t = RCasterB[i];
		var space = document.getElementById(t).style.backgroundColor = "pink";
		
	}
}
if(chara === "RBerserker") {
	for(var i=0; i<4; i++) {
		var t = RBerserkerB[i];
		var space = document.getElementById(t).style.backgroundColor = "pink";
		
	}
}
}


function revertSpacesBack() {
for(var j=0; j<64; j++) {
	var q = spaceBoard[j];
	var p = colorBoard[j];
	document.getElementById(q).style.backgroundColor = p;
}
}
var droppedIn = false;
function drag_start(event) {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text", event.target.getAttribute('id') );
    chara = event.target.getAttribute('id');
    charaIDstr = "'" + charaID + "'";
	pickup.volume = 0.3;
	pickup.play();
	pickup.currentTime=0;
	DisplayLegalMoves();
	
	
	
	
}

function drag_enter(event) {
	document.getElementById('rightfighterbox').style.visibility ="hidden";
	document.getElementById('leftfighterbox').style.visibility ="hidden";
	
	
}
function drag_leave(event) {
	
}

function snddrop() {
drop.volume = 0.3;
drop.play();
drop.currentTime=0;
}

function swordsound() {
swordsfx.volume = 0.4;
swordsfx.play();
swordsfx.currentTime=0;
}

function magicsound() {
magicsfx.volume = 0.4;
magicsfx.play();
magicsfx.currentTime=0;
}

function arrowsound() {
arrowsfx.volume = 0.4;
arrowsfx.play();
arrowsfx.currentTime=0;
}

function impactsound() {
impactsfx.volume = 0.4;
impactsfx.play();
impactsfx.currentTime=0;
}

BGM.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();

function BGMusic() {
BGM.volume = 0.2;
BGM.play();
BGM.currentTime=0;
}

function drag_drop(event) {
    event.preventDefault(); /* Prevent undesirable default behavior while dropping */
    var elem_id = event.dataTransfer.getData("text");
    y = this[chara].yp = event.target.getAttribute("name");
    x = this[chara].xp = event.target.getAttribute("target");

    var nextspace = event.target.getAttribute('name')+event.target.getAttribute("target");
    _(elem_id).style.cursor = "move"; 
	if(chara === "BAssassin") {
	for(i=0; i<12; i++) {
		if(nextspace != BAssassinA[i]) {
			/document.getElementById(BAssassinpsp).appendChild(_(elem_id)); */
			
			revertSpacesBack();
			
			   
		}
		else {
			if(nextspace === BLancerpsp || nextspace === BRiderpsp || 				nextspace === BSaberpsp || nextspace === BRulerpsp || nextspace === BArcherpsp || nextspace 				=== BCasterpsp || nextspace === BBerserkerpsp || nextspace === RBerserkerpsp || nextspace === 				RCasterpsp || nextspace === RArcherpsp || nextspace === RRulerpsp || nextspace === RSaberpsp 				|| nextspace === RRiderpsp || nextspace === RLancerpsp || nextspace === RAssassinpsp) {
				/document.getElementById(BAssassinpsp).appendChild(_(elem_id)); */ 
				
				revertSpacesBack();
			}

			else {
		snddrop();
		event.target.appendChild( _(elem_id) );
		document.getElementById('BAssassin').setAttribute('ondragstart', 'return false');
		document.getElementById('BAssassin').style.backgroundImage = "url('blankpiece/bassassinpieceX.png')";
		BAssassin.hasmoved = true;
		turnmove++;
		BAssassinpsp = event.target.getAttribute('id');
		getLegalSpaces( x,y);
		putInProperArray();
		checkForEnemy();
		//alert(BAssassinA[0] + ' ' + BAssassinA[1] + ' ' + BAssassinA[2] + ' ' + BAssassinA[3] + ' ' + BAssassinA[4] + ' ' + BAssassinA[5] + ' ' + BAssassinA[6] + ' ' + BAssassinA[7] + ' ' + BAssassinA[8] + ' ' + BAssassinA[9] + ' ' + BAssassinA[10] + ' ' + BAssassinA[11]);
		revertSpacesBack();
		
		}
	}
}
}


	if(chara === "BLancer") {
	for(i=0; i<12; i++) {
		if(nextspace != BLancerA[i]) {
			/document.getElementById(BLancerpsp).appendChild(_(elem_id)); */
			
			revertSpacesBack();
			
			   
		}
		else {
			if(nextspace === BAssassinpsp || nextspace === BLancerpsp || nextspace === BRiderpsp || 				nextspace === BSaberpsp || nextspace === BRulerpsp || nextspace === BArcherpsp || nextspace 				=== BCasterpsp || nextspace === BBerserkerpsp || nextspace === RBerserkerpsp || nextspace === 				RCasterpsp || nextspace === RArcherpsp || nextspace === RRulerpsp || nextspace === RSaberpsp 				|| nextspace === RRiderpsp || nextspace === RLancerpsp || nextspace === RAssassinpsp) {
				/document.getElementById(BLancerpsp).appendChild(_(elem_id)); */
				
				revertSpacesBack();
			}
			else {
		snddrop();
		event.target.appendChild( _(elem_id) );
		document.getElementById('BLancer').setAttribute('ondragstart', 'return false');
		document.getElementById('BLancer').style.backgroundImage = "url('blankpiece/blancerpieceX.png')";
		BLancer.hasmoved=true;
		turnmove++;
		BLancerpsp = event.target.getAttribute('id');
		getLegalSpaces( x,y);
		putInProperArray();
		checkForEnemy();
		revertSpacesBack();
		}
	}
}
}
	if(chara === "BRider") {
	for(i=0; i<12; i++) {
		if(nextspace != BRiderA[i]) {
			/document.getElementById(BRiderpsp).appendChild(_(elem_id)); */
			
			revertSpacesBack();
			
			   
		}
		else {
			if(nextspace === BAssassinpsp || nextspace === BLancerpsp || nextspace === BRiderpsp || 				nextspace === BSaberpsp || nextspace === BRulerpsp || nextspace === BArcherpsp || nextspace 				=== BCasterpsp || nextspace === BBerserkerpsp || nextspace === RBerserkerpsp || nextspace === 				RCasterpsp || nextspace === RArcherpsp || nextspace === RRulerpsp || nextspace === RSaberpsp 				|| nextspace === RRiderpsp || nextspace === RLancerpsp || nextspace === RAssassinpsp) {
				/document.getElementById(BRiderpsp).appendChild(_(elem_id)); */
				
				revertSpacesBack();
			}
			else {
			snddrop();
			event.target.appendChild( _(elem_id) );
			document.getElementById('BRider').setAttribute('ondragstart', 'return false');
			document.getElementById('BRider').style.backgroundImage = "url('blankpiece/briderpieceX.png')";
			BRider.hasmoved = true;
			turnmove++;
			BRiderpsp = event.target.getAttribute('id');
			getLegalSpaces( x,y);
			putInProperArray();
			checkForEnemy();
			revertSpacesBack();
			}
		}
	}
}
	if(chara === "BSaber") {
	for(i=0; i<12; i++) {
		if(nextspace != BSaberA[i]) {
			/document.getElementById(BSaberpsp).appendChild(_(elem_id)); */
			
			revertSpacesBack();
			
			   
		}
		else {
			if(nextspace === BAssassinpsp || nextspace === BLancerpsp || nextspace === BRiderpsp || 				nextspace === BSaberpsp || nextspace === BRulerpsp || nextspace === BArcherpsp || nextspace 				=== BCasterpsp || nextspace === BBerserkerpsp || nextspace === RBerserkerpsp || nextspace === 				RCasterpsp || nextspace === RArcherpsp || nextspace === RRulerpsp || nextspace === RSaberpsp 				|| nextspace === RRiderpsp || nextspace === RLancerpsp || nextspace === RAssassinpsp) {
				/document.getElementById(BSaberpsp).appendChild(_(elem_id)); */
				
				revertSpacesBack();
			}
			else {
		snddrop();
		event.target.appendChild( _(elem_id) );
		document.getElementById('BSaber').setAttribute('ondragstart', 'return false');
		document.getElementById('BSaber').style.backgroundImage = "url('blankpiece/bsaberpieceX.png')";
		BSaber.hasmoved = true;
		turnmove++;
		BSaberpsp = event.target.getAttribute('id');
		getLegalSpaces( x,y);
		putInProperArray();
		checkForEnemy();
		revertSpacesBack();
		}
	}
}
}
	if(chara === "BRuler") {
	for(i=0; i<12; i++) {
		if(nextspace != BRulerA[i]) {
			/document.getElementById(BRulerpsp).appendChild(_(elem_id)); */
			
			revertSpacesBack();
			
			   
		}
		else {
			if(nextspace === BAssassinpsp || nextspace === BLancerpsp || nextspace === BRiderpsp || 				nextspace === BSaberpsp || nextspace === BRulerpsp || nextspace === BArcherpsp || nextspace 				=== BCasterpsp || nextspace === BBerserkerpsp || nextspace === RBerserkerpsp || nextspace === 				RCasterpsp || nextspace === RArcherpsp || nextspace === RRulerpsp || nextspace === RSaberpsp 				|| nextspace === RRiderpsp || nextspace === RLancerpsp || nextspace === RAssassinpsp) {
				/document.getElementById(BRulerpsp).appendChild(_(elem_id)); */
				
				revertSpacesBack();
			}
			else {
		snddrop();
		event.target.appendChild( _(elem_id) );
		document.getElementById('BRuler').setAttribute('ondragstart', 'return false');
		document.getElementById('BRuler').style.backgroundImage = "url('blankpiece/brulerpieceX.png')";
		BRuler.hasmoved = true;
		turnmove++;
		BRulerpsp = event.target.getAttribute('id');
		getLegalSpaces( x,y);
		putInProperArray();
		checkForEnemy();
		revertSpacesBack();
		}
	}
}
}
	if(chara === "BArcher") {
	for(i=0; i<12; i++) {
		if(nextspace != BArcherA[i]) {
			/document.getElementById(BArcherpsp).appendChild(_(elem_id)); */
			
			revertSpacesBack();
			
			   
		}
		else {
			if(nextspace === BAssassinpsp || nextspace === BLancerpsp || nextspace === BRiderpsp || 				nextspace === BSaberpsp || nextspace === BRulerpsp || nextspace === BArcherpsp || nextspace 				=== BCasterpsp || nextspace === BBerserkerpsp || nextspace === RBerserkerpsp || nextspace === 				RCasterpsp || nextspace === RArcherpsp || nextspace === RRulerpsp || nextspace === RSaberpsp 				|| nextspace === RRiderpsp || nextspace === RLancerpsp || nextspace === RAssassinpsp) {
				/document.getElementById(BArcherpsp).appendChild(_(elem_id)); */
				
				revertSpacesBack();
			}
			else {
		snddrop();
		event.target.appendChild( _(elem_id) );
		document.getElementById('BArcher').setAttribute('ondragstart', 'return false');
		document.getElementById('BArcher').style.backgroundImage = "url('blankpiece/barcherpieceX.png')";
		BArcher.hasmoved = true;
		turnmove++;
		BArcherpsp = event.target.getAttribute('id');
		getLegalSpaces( x,y);
		putInProperArray();
		checkForEnemy();
		revertSpacesBack();
		}
	}
}
}
	if(chara === "BCaster") {
	for(i=0; i<12; i++) {
		if(nextspace != BCasterA[i]) {
			/document.getElementById(BCasterpsp).appendChild(_(elem_id)); */
			
			revertSpacesBack();
			
			   
		}
		else {
			if(nextspace === BAssassinpsp || nextspace === BLancerpsp || nextspace === BRiderpsp || 				nextspace === BSaberpsp || nextspace === BRulerpsp || nextspace === BArcherpsp || nextspace 				=== BCasterpsp || nextspace === BBerserkerpsp || nextspace === RBerserkerpsp || nextspace === 				RCasterpsp || nextspace === RArcherpsp || nextspace === RRulerpsp || nextspace === RSaberpsp 				|| nextspace === RRiderpsp || nextspace === RLancerpsp || nextspace === RAssassinpsp) {
				/document.getElementById(BCasterpsp).appendChild(_(elem_id)); */
				
				revertSpacesBack();
			}
			else {
		snddrop();
		event.target.appendChild( _(elem_id) );
		document.getElementById('BCaster').setAttribute('ondragstart', 'return false');
		document.getElementById('BCaster').style.backgroundImage = "url('blankpiece/bcasterpieceX.png')";
		BCaster.hasmoved = true;
		turnmove++;
		BCasterpsp = event.target.getAttribute('id');
		getLegalSpaces( x,y);
		putInProperArray();
		checkForEnemy();
		revertSpacesBack();
		}
	}
}
}
	if(chara === "BBerserker") {
	for(i=0; i<12; i++) {
		if(nextspace != BBerserkerA[i]) {
			/document.getElementById(BBerserkerpsp).appendChild(_(elem_id)); */
			
			revertSpacesBack();
			
			   
		}
		else {
			if(nextspace === BAssassinpsp || nextspace === BLancerpsp || nextspace === BRiderpsp || 				nextspace === BSaberpsp || nextspace === BRulerpsp || nextspace === BArcherpsp || nextspace 				=== BCasterpsp || nextspace === BBerserkerpsp || nextspace === RBerserkerpsp || nextspace === 				RCasterpsp || nextspace === RArcherpsp || nextspace === RRulerpsp || nextspace === RSaberpsp 				|| nextspace === RRiderpsp || nextspace === RLancerpsp || nextspace === RAssassinpsp) {
				/document.getElementById(BBerserkerpsp).appendChild(_(elem_id)); */
				
				revertSpacesBack();
			}
			else {
		snddrop();
		event.target.appendChild( _(elem_id) );
		document.getElementById('BBerserker').setAttribute('ondragstart', 'return false');
		document.getElementById('BBerserker').style.backgroundImage = "url('blankpiece/bberserkerpieceX.png')";
		BBerserker.hasmoved = true;
		turnmove++;
		BBerserkerpsp = event.target.getAttribute('id');
		getLegalSpaces( x,y);
		putInProperArray();
		checkForEnemy();
		revertSpacesBack();
		}
	}
}
}
	if(chara === "RAssassin") {
	for(i=0; i<12; i++) {
		if(nextspace != RAssassinA[i]) {
			/document.getElementById(RAssassinpsp).appendChild(_(elem_id)); */
			
			revertSpacesBack();
			
			   
		}
		else {
			if(nextspace === BAssassinpsp || nextspace === BLancerpsp || nextspace === BRiderpsp || 				nextspace === BSaberpsp || nextspace === BRulerpsp || nextspace === BArcherpsp || nextspace 				=== BCasterpsp || nextspace === BBerserkerpsp || nextspace === RBerserkerpsp || nextspace === 				RCasterpsp || nextspace === RArcherpsp || nextspace === RRulerpsp || nextspace === RSaberpsp 				|| nextspace === RRiderpsp || nextspace === RLancerpsp || nextspace === RAssassinpsp) {
				/document.getElementById(RAssassinpsp).appendChild(_(elem_id)); */
				
				revertSpacesBack();
			}
			else {
		snddrop();
		revertSpacesBack();
		event.target.appendChild( _(elem_id) );
		document.getElementById('RAssassin').setAttribute('ondragstart', 'return false');
		document.getElementById('RAssassin').style.backgroundImage = "url('blankpiece/rassassinpieceX.png')";
		RAssassin.hasmoved = true;
		turnmove++;
		RAssassinpsp = event.target.getAttribute('id');
		getLegalSpaces( x,y);
		putInProperArray();
		checkForEnemy();
		}
	}
}
}
	if(chara === "RLancer") {
	for(i=0; i<12; i++) {
		if(nextspace != RLancerA[i]) {
			/document.getElementById(RLancerpsp).appendChild(_(elem_id)); */
			
			revertSpacesBack();
			
			   
		}
		else {
			if(nextspace === BAssassinpsp || nextspace === BLancerpsp || nextspace === BRiderpsp || 				nextspace === BSaberpsp || nextspace === BRulerpsp || nextspace === BArcherpsp || nextspace 				=== BCasterpsp || nextspace === BBerserkerpsp || nextspace === RBerserkerpsp || nextspace === 				RCasterpsp || nextspace === RArcherpsp || nextspace === RRulerpsp || nextspace === RSaberpsp 				|| nextspace === RRiderpsp || nextspace === RLancerpsp || nextspace === RAssassinpsp) {
				/document.getElementById(RLancerpsp).appendChild(_(elem_id)); */
				
				revertSpacesBack();
			}
			else {
		snddrop();
		event.target.appendChild( _(elem_id) );
		document.getElementById('RLancer').setAttribute('ondragstart', 'return false');
		document.getElementById('RLancer').style.backgroundImage = "url('blankpiece/rlancerpieceX.png')";
		RLancer.hasmoved = true;
		turnmove++;
		RLancerpsp = event.target.getAttribute('id');
		getLegalSpaces( x,y);
		putInProperArray();
		checkForEnemy();
		revertSpacesBack();
		}
	}
}
}
	if(chara === "RRider") {
	for(i=0; i<12; i++) {
		if(nextspace != RRiderA[i]) {
			/document.getElementById(RRiderpsp).appendChild(_(elem_id)); */
			
			revertSpacesBack();
			
			   
		}
		else {
			if(nextspace === BAssassinpsp || nextspace === BLancerpsp || nextspace === BRiderpsp || 				nextspace === BSaberpsp || nextspace === BRulerpsp || nextspace === BArcherpsp || nextspace 				=== BCasterpsp || nextspace === BBerserkerpsp || nextspace === RBerserkerpsp || nextspace === 				RCasterpsp || nextspace === RArcherpsp || nextspace === RRulerpsp || nextspace === RSaberpsp 				|| nextspace === RRiderpsp || nextspace === RLancerpsp || nextspace === RAssassinpsp) {
				/document.getElementById(RRiderpsp).appendChild(_(elem_id)); */
				
				revertSpacesBack();
			}
			else {
		snddrop();
		event.target.appendChild( _(elem_id) );
		document.getElementById('RRider').setAttribute('ondragstart', 'return false');
		document.getElementById('RRider').style.backgroundImage = "url('blankpiece/rriderpieceX.png')";
		RRider.hasmoved = true;
		turnmove++;
		RRiderpsp = event.target.getAttribute('id');
		getLegalSpaces( x,y);
		putInProperArray();
		checkForEnemy();
		revertSpacesBack();
		}
	}
}
}
	if(chara === "RSaber") {
	for(i=0; i<12; i++) {
		if(nextspace != RSaberA[i]) {
			/document.getElementById(RSaberpsp).appendChild(_(elem_id)); */
			
			revertSpacesBack();
			
			   
		}
		else {
			if(nextspace === BAssassinpsp || nextspace === BLancerpsp || nextspace === BRiderpsp || 				nextspace === BSaberpsp || nextspace === BRulerpsp || nextspace === BArcherpsp || nextspace 				=== BCasterpsp || nextspace === BBerserkerpsp || nextspace === RBerserkerpsp || nextspace === 				RCasterpsp || nextspace === RArcherpsp || nextspace === RRulerpsp || nextspace === RSaberpsp 				|| nextspace === RRiderpsp || nextspace === RLancerpsp || nextspace === RAssassinpsp) {
				/document.getElementById(RSaberpsp).appendChild(_(elem_id)); */
				
				revertSpacesBack();
			}
			else {
		snddrop();
		event.target.appendChild( _(elem_id) );
		document.getElementById('RSaber').setAttribute('ondragstart', 'return false');
		document.getElementById('RSaber').style.backgroundImage = "url('blankpiece/rsaberpieceX.png')";
		RSaber.hasmoved = true;
		turnmove++;
		RSaberpsp = event.target.getAttribute('id');
		getLegalSpaces( x,y);
		putInProperArray();
		checkForEnemy();
		revertSpacesBack();
		}
	}
}
}
	if(chara === "RRuler") {
	for(i=0; i<12; i++) {
		if(nextspace != RRulerA[i]) {
			/document.getElementById(RRulerpsp).appendChild(_(elem_id)); */
			
			revertSpacesBack();
			
			   
		}
		else {
			if(nextspace === BAssassinpsp || nextspace === BLancerpsp || nextspace === BRiderpsp || 				nextspace === BSaberpsp || nextspace === BRulerpsp || nextspace === BArcherpsp || nextspace 				=== BCasterpsp || nextspace === BBerserkerpsp || nextspace === RBerserkerpsp || nextspace === 				RCasterpsp || nextspace === RArcherpsp || nextspace === RRulerpsp || nextspace === RSaberpsp 				|| nextspace === RRiderpsp || nextspace === RLancerpsp || nextspace === RAssassinpsp) {
				/document.getElementById(RRulerpsp).appendChild(_(elem_id)); */
				
				revertSpacesBack();
			}
			else {
		snddrop();
		event.target.appendChild( _(elem_id) );
		document.getElementById('RRuler').setAttribute('ondragstart', 'return false');
		document.getElementById('RRuler').style.backgroundImage = "url('blankpiece/rrulerpieceX.png')";
		RRuler.hasmoved = true;
		turnmove++;
		RRulerpsp = event.target.getAttribute('id');
		getLegalSpaces( x,y);
		putInProperArray();
		checkForEnemy();
		revertSpacesBack();
		}
	}
}
}
	if(chara === "RArcher") {
	for(i=0; i<12; i++) {
		if(nextspace != RArcherA[i]) {
			/document.getElementById(RArcherpsp).appendChild(_(elem_id)); */
			
			revertSpacesBack();
			
			   
		}
		else {
			if(nextspace === BAssassinpsp || nextspace === BLancerpsp || nextspace === BRiderpsp || 				nextspace === BSaberpsp || nextspace === BRulerpsp || nextspace === BArcherpsp || nextspace 				=== BCasterpsp || nextspace === BBerserkerpsp || nextspace === RBerserkerpsp || nextspace === 				RCasterpsp || nextspace === RArcherpsp || nextspace === RRulerpsp || nextspace === RSaberpsp 				|| nextspace === RRiderpsp || nextspace === RLancerpsp || nextspace === RAssassinpsp) {
				/document.getElementById(RArcherpsp).appendChild(_(elem_id)); */
				
				revertSpacesBack();
			}
			else {
		snddrop();
		event.target.appendChild( _(elem_id) );
		document.getElementById('RArcher').setAttribute('ondragstart', 'return false');
		document.getElementById('RArcher').style.backgroundImage = "url('blankpiece/rarcherpieceX.png')";
		RArcher.hasmoved = true;
		turnmove++;
		RArcherpsp = event.target.getAttribute('id');
		getLegalSpaces( x,y);
		putInProperArray();
		checkForEnemy();
		revertSpacesBack();
		}
	}
}
}
	if(chara === "RCaster") {
	for(i=0; i<12; i++) {
		if(nextspace != RCasterA[i]) {
			/document.getElementById(RCasterpsp).appendChild(_(elem_id)); */
			
			revertSpacesBack();
			
			   
		}
		else {
			if(nextspace === BAssassinpsp || nextspace === BLancerpsp || nextspace === BRiderpsp || 				nextspace === BSaberpsp || nextspace === BRulerpsp || nextspace === BArcherpsp || nextspace 				=== BCasterpsp || nextspace === BBerserkerpsp || nextspace === RBerserkerpsp || nextspace === 				RCasterpsp || nextspace === RArcherpsp || nextspace === RRulerpsp || nextspace === RSaberpsp 				|| nextspace === RRiderpsp || nextspace === RLancerpsp || nextspace === RAssassinpsp) {
				/document.getElementById(RCasterpsp).appendChild(_(elem_id)); */
				
				revertSpacesBack();
			}
			else {
		snddrop();
		event.target.appendChild( _(elem_id) );
		document.getElementById('RCaster').setAttribute('ondragstart', 'return false');
		document.getElementById('RCaster').style.backgroundImage = "url('blankpiece/rcasterpieceX.png')";
		RCaster.hasmoved = true;
		turnmove++;
		RCasterpsp = event.target.getAttribute('id');
		getLegalSpaces( x,y);
		putInProperArray();
		checkForEnemy();
		revertSpacesBack();
		}
	}
}
}
	if(chara === "RBerserker") {
	for(i=0; i<12; i++) {
		if(nextspace != RBerserkerA[i]) {
			/document.getElementById(RBerserkerpsp).appendChild(_(elem_id)); */
			
			revertSpacesBack();
			
			   
		}
		else {
			if(nextspace === BAssassinpsp || nextspace === BLancerpsp || nextspace === BRiderpsp || 				nextspace === BSaberpsp || nextspace === BRulerpsp || nextspace === BArcherpsp || nextspace 				=== BCasterpsp || nextspace === BBerserkerpsp || nextspace === RBerserkerpsp || nextspace === 				RCasterpsp || nextspace === RArcherpsp || nextspace === RRulerpsp || nextspace === RSaberpsp 				|| nextspace === RRiderpsp || nextspace === RLancerpsp || nextspace === RAssassinpsp) {
				/document.getElementById(RBerserkerpsp).appendChild(_(elem_id)); */
				
				revertSpacesBack();
			}
			else {
		snddrop();
		event.target.appendChild( _(elem_id) );
		document.getElementById('RBerserker').setAttribute('ondragstart', 'return false');
		document.getElementById('RBerserker').style.backgroundImage = "url('blankpiece/rberserkerpieceX.png')";
		RBerserker.hasmoved = true;
		turnmove++;
		RBerserkerpsp = event.target.getAttribute('id');
		getLegalSpaces( x,y);
		putInProperArray();
		checkForEnemy();
		revertSpacesBack();
		}
	}
}
}
    droppedIn = true;
	if(turnmove === 8) {
		if(color === 0) {
			color++;
			TurnHandler('red');
		}
		else {
			TurnHandler('black');
			color--;
		}
	}
	
}
function drag_end(event) {
    if(droppedIn == true){
        var elem_id = event.dataTransfer.getData("text");
		event.target.appendChild( _(elem_id) ); 
		
		
		
    }
	droppedIn = false;
	
}
function readDropZone(){
    for(var i=0; i < _("drop_zone").children.length; i++){
        
    }

    /* Run Ajax request to pass any data to your server */
}

function endTurn() {
	turnmove= 8; 
	if(color === 0) {
		color++;
		TurnHandler('red');
	}
	else {
		TurnHandler('black');
		color--;
	}
}

function redBGchange() {
	if(RAssassin.exists === true) {document.getElementById('RAssassin').style.backgroundImage = "url('projectfiles/rassassinpiece.png')"; }
	if(RArcher.exists === true) {document.getElementById('RArcher').style.backgroundImage = "url('projectfiles/rarcherpiece.png')"; }
	if(RBerserker.exists === true) {document.getElementById('RBerserker').style.backgroundImage = "url('projectfiles/rberserkerpiece.png')"; }
	if(RSaber.exists === true) {document.getElementById('RSaber').style.backgroundImage = "url('projectfiles/rsaberpiece.png')"; }
	if(RRuler.exists === true) {document.getElementById('RRuler').style.backgroundImage = "url('projectfiles/rrulerpiece.png')"; }
	if(RLancer.exists === true) {document.getElementById('RLancer').style.backgroundImage = "url('projectfiles/rlancerpiece.png')"; }
	if(RCaster.exists === true) {document.getElementById('RCaster').style.backgroundImage = "url('projectfiles/rcasterpiece.png')"; }
	if(RRider.exists === true) {document.getElementById('RRider').style.backgroundImage = "url('projectfiles/rriderpiece.png')"; }
	
}

function blackBGchange() {
	if(BAssassin.exists === true) {document.getElementById('BAssassin').style.backgroundImage = "url('projectfiles/bassassinpiece.png')"; }
	if(BArcher.exists === true) {document.getElementById('BArcher').style.backgroundImage = "url('projectfiles/barcherpiece.png')"; }
	if(BBerserker.exists === true) {document.getElementById('BBerserker').style.backgroundImage = "url('projectfiles/bberserkerpiece.png')"; }
	if(BSaber.exists === true) {document.getElementById('BSaber').style.backgroundImage = "url('projectfiles/bsaberpiece.png')"; }
	if(BRuler.exists === true) {document.getElementById('BRuler').style.backgroundImage = "url('projectfiles/brulerpiece.png')"; }
	if(BLancer.exists === true) {document.getElementById('BLancer').style.backgroundImage = "url('projectfiles/blancerpiece.png')"; }
	if(BCaster.exists === true) {document.getElementById('BCaster').style.backgroundImage = "url('projectfiles/bcasterpiece.png')"; }
	if(BRider.exists === true) {document.getElementById('BRider').style.backgroundImage = "url('projectfiles/briderpiece.png')"; }
}

function TurnHandler(turn) {

if(turn === "black") {
turnc = "black";
turnmove = 0;
document.getElementById("turndisplay").style.color = "black";
document.getElementById("turndisplay").innerHTML = turnc + " turn";
blackBGchange();
redBGchange();
cont = $('.turnanimation');
cont2 = $('#turnbox');
var newsrc = "projectfiles/BlackTurn.png";
$('#turn').remove('src');
$('#turn').attr('src', newsrc).attr('height', '100%').attr('width', '100%');
$('#turn').load('#turn');
cont.removeClass("turnanimation");
setTimeout(function() {
	cont.addClass("turnanimation");
}, 1);

removeTargets();
//set red pieces turn movement to false
BAssassin.hasmoved=false;
BLancer.hasmoved=false;
BRider.hasmoved=false;
BSaber.hasmoved=false;
BRuler.hasmoved=false;
BArcher.hasmoved=false;
BCaster.hasmoved=false;
BBerserker.hasmoved=false;
//turn reds undraggable 
if(RAssassin.exists === true) { document.getElementById('RAssassin').setAttribute('ondragstart', 'return false'); }
if(RLancer.exists === true) { document.getElementById('RLancer').setAttribute('ondragstart', 'return false'); }
if(RRider.exists === true) { document.getElementById('RRider').setAttribute('ondragstart', 'return false'); }
if(RSaber.exists === true) { document.getElementById('RSaber').setAttribute('ondragstart', 'return false'); }
if(RRuler.exists === true) { document.getElementById('RRuler').setAttribute('ondragstart', 'return false'); }
if(RArcher.exists === true) { document.getElementById('RArcher').setAttribute('ondragstart', 'return false'); }
if(RCaster.exists === true) { document.getElementById('RCaster').setAttribute('ondragstart', 'return false'); }
if(RBerserker.exists === true) { document.getElementById('RBerserker').setAttribute('ondragstart', 'return false'); }
//make blacks draggable
if(BAssassin.exists === true) { document.getElementById('BAssassin').setAttribute('ondragstart', 'drag_start(event)'); }
if(BLancer.exists === true) { document.getElementById('BLancer').setAttribute('ondragstart', 'drag_start(event)'); }
if(BRider.exists === true) { document.getElementById('BRider').setAttribute('ondragstart', 'drag_start(event)'); }
if(BSaber.exists === true) { document.getElementById('BSaber').setAttribute('ondragstart', 'drag_start(event)'); }
if(BRuler.exists === true) { document.getElementById('BRuler').setAttribute('ondragstart', 'drag_start(event)'); }
if(BArcher.exists === true) { document.getElementById('BArcher').setAttribute('ondragstart', 'drag_start(event)'); }
if(BCaster.exists === true) { document.getElementById('BCaster').setAttribute('ondragstart', 'drag_start(event)'); }
if(BBerserker.exists === true) { document.getElementById('BBerserker').setAttribute('ondragstart', 'drag_start(event)'); }

}

if(turn === "red") {
turnc = "red";
turnmove = 0;
document.getElementById("turndisplay").style.color = "red";
document.getElementById("turndisplay").innerHTML = turnc + " turn";
redBGchange();
blackBGchange();
cont = $('.turnanimation');
cont2 = $('#turnbox');
var newsrc = "projectfiles/RedTurn.png";
$('#turn').remove('src');
$('#turn').attr('src', newsrc).attr('height', '100%').attr('width', '100%');
$('#turn').load('#turn');
cont.removeClass("turnanimation");
setTimeout(function() {
	cont.addClass("turnanimation");
}, 1);

removeTargets();
//set red pieces turn movement to false
RAssassin.hasmoved=false;
RLancer.hasmoved=false;
RRider.hasmoved=false;
RSaber.hasmoved=false;
RRuler.hasmoved=false;
RArcher.hasmoved=false;
RCaster.hasmoved=false;
RBerserker.hasmoved=false;
//turn blacks undraggable
if(BAssassin.exists ===true) { document.getElementById('BAssassin').setAttribute('ondragstart', 'return false'); }
if(BLancer.exists ===true) { document.getElementById('BLancer').setAttribute('ondragstart', 'return false'); }
if(BRider.exists ===true) { document.getElementById('BRider').setAttribute('ondragstart', 'return false'); }
if(BSaber.exists ===true) { document.getElementById('BSaber').setAttribute('ondragstart', 'return false'); }
if(BRuler.exists ===true) { document.getElementById('BRuler').setAttribute('ondragstart', 'return false'); }
if(BArcher.exists ===true) { document.getElementById('BArcher').setAttribute('ondragstart', 'return false'); }
if(BCaster.exists ===true) { document.getElementById('BCaster').setAttribute('ondragstart', 'return false'); }
if(BBerserker.exists ===true) { document.getElementById('BBerserker').setAttribute('ondragstart', 'return false'); }
//make reds draggable
if(RAssassin.exists === true) { document.getElementById('RAssassin').setAttribute('ondragstart', 'drag_start(event)'); }
if(RLancer.exists === true) { document.getElementById('RLancer').setAttribute('ondragstart', 'drag_start(event)'); }
if(RRider.exists === true) { document.getElementById('RRider').setAttribute('ondragstart', 'drag_start(event)'); }
if(RSaber.exists === true) { document.getElementById('RSaber').setAttribute('ondragstart', 'drag_start(event)'); }
if(RRuler.exists === true) { document.getElementById('RRuler').setAttribute('ondragstart', 'drag_start(event)'); } 
if(RArcher.exists === true) { document.getElementById('RArcher').setAttribute('ondragstart', 'drag_start(event)'); }
if(RCaster.exists === true) { document.getElementById('RCaster').setAttribute('ondragstart', 'drag_start(event)'); }
if(RBerserker.exists === true) { document.getElementById('RBerserker').setAttribute('ondragstart', 'drag_start(event)'); }

}
}

function DisplayWinner(wins) {
	if(wins === "BlackWins") {
		document.getElementById("w").setAttribute('src', 'projectfiles/BlackWins.png');
	}
	if(wins === "RedWins") {
		document.getElementById("w").setAttribute('src', 'projectfiles/RedWins.png');
	}
	setTimeout(function() {
	document.getElementById('winner').style.display = "block";
}, 2000);

}

function ToggleMenuButton() {
	if(toggle === false) {
		buttonOn();
	}
	else {
		buttonOff();
	}
	
}

function buttonOn() {
	document.getElementById('display').style.display = "block";
	toggle = true;
}
function buttonOff() {
	document.getElementById('display').style.display = "none";
	toggle = false;
}





