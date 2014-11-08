var playMap=[];
var stack=new Array();
window.onload=function(){
    playMap["rain"]=false;
    playMap["coffee"]=false;
}
function changeMood(vidId){
    var videoMap=[];
    videoMap["rain"]="rainbg.mp4";
    videoMap["coffee"]="Dramatic Chipmunk-a1Y73sPHKxw.mp4";
    var header=document.getElementsByClassName("intro")[0];
    header.style.backgroundImage="none";
    var element=document.getElementsByClassName("intro-body")[0];
    var checkVideo=document.getElementById("bgvid");
    if(checkVideo!=undefined)
	checkVideo.parentNode.removeChild(checkVideo);
    if(playMap[vidId]){
	var index=stack.indexOf(vidId);
	if(index>-1)
	    stack.splice(index,1);
	playMap[vidId]=false;
	vidId=stack[stack.length-1];
    }
    else{
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