var playMap=[];
var stack=new Array();
window.onload=function(){
    playMap["rain"]=false;
    playMap["coffee"]=false;
}
function changeMood(vidElement){
    var videoMap={
	rain: "rainbg.mp4",
	coffee: "coffee.mp4"
    };
    var audioMap={
	rain: "playa",
	coffee: "playc"
    };
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
	if(vidId!=undefined){
	    document.getElementById(audioMap[vidId]).value="play";
	    document.getElementById(audioMap[vidId]).play();
	}
    }
    else{
	for(var key in audioMap){
	    if(audioMap.hasOwnProperty(key)){
		document.getElementById(audioMap[key]).value="play";
		document.getElementById(audioMap[key]).pause();
	    }
	}
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