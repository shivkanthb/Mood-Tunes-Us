var playMap=[];
var stack=new Array();
var videoMap={
    rain: "rainbg.mp4",
    coffee: "coffee.mp4",
    train: "train.mp4",
    waves: "wavesV.mp4"
};
var audioMap={
    rain: "playa",
    coffee: "playc",
    train: "playa",
    waves: "playc"
};
window.onload=function(){
    playMap["rain"]=false;
    playMap["coffee"]=false;
    playMap["train"]=false;
    playMap["waves"]=false;
}
function changeVolume(slider){
    var audioId=slider.id.replace("slider-","");
    var audioElement=document.getElementById(audioMap[audioId]);
    audioElement.volume=(slider.value)/100;
}
function changeMood(vidElement){
    var header=document.getElementsByClassName("intro")[0];
    header.style.backgroundImage="none";
    var element=document.getElementsByClassName("intro-body")[0];
    var checkVideo=document.getElementById("bgvid");
    if(checkVideo!=undefined)
	checkVideo.parentNode.removeChild(checkVideo);
    var vidId=vidElement.id;
    if(playMap[vidId]){
	document.getElementById(audioMap[vidId]).value="play";
	document.getElementById(audioMap[vidId]).pause();
	var index=stack.indexOf(vidId);
	if(index>-1)
	    stack.splice(index,1);
	playMap[vidId]=false;
	vidId=stack[stack.length-1];
    }
    else{
	document.getElementById(audioMap[vidId]).value="pause";
	document.getElementById(audioMap[vidId]).play();
	playMap[vidId]=true;
	stack.push(vidId);
    }
    var firstChild=header.firstChild;
    var video=document.createElement("video");
    video.autoplay=true;
    video.loop=true;
    video.id="bgvid";
    var source=document.createElement("source");
    source.type="video/mp4";
    source.src=videoMap[vidId];
    if(vidId==undefined)
	document.getElementsByClassName("intro")[0].style.backgroundImage='url(img/waves.jpg)';
    else{
	video.appendChild(source);
	header.insertBefore(video,firstChild);
    }
}