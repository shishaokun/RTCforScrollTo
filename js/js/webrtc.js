$(document).ready(function(){
    navigator.getUserMedia || (navigator.getUserMedia = navigator.mozGetUserMedia ||  navigator.webkitGetUserMedia || navigator.msGetUserMedia);
    var onSuccess = function (stream){
        var video = $('#showCam');
        if(window.URL) {
            video.attr('src', window.URL.createObjectURL(stream));
        }else {
            video.attr('src', stream);
        }
        video.attr({
            "autoplay":true
        });
        video.attr({
            'width': $("#how .story").width(),
            "height": $("#how .story").height() - 50
        });
        video.onloadedmetadata = function(e) {
            console.log("Label: " + localMediaStream.label);
            console.log("AudioTracks" , localMediaStream.getAudioTracks());
            console.log("VideoTracks" , localMediaStream.getVideoTracks());
        };
    };
    var onError = function (code){
        switch(code){
            case 'PERMISSION_DENIED':
                console.log('admin not allow');
                break;
            case 'NOT_SUPPORTED_ERROR':
                console.log('browser not support');
                break;
            case 'MANDATORY_UNSATISHIED_ERROR':
                console.log('no media');
                break;
            default:
                break;
        }        
    };
    var showCam = function(){
        if(!$('#showCam').attr('src')) {
            if (navigator.getUserMedia) {
                navigator.getUserMedia({
                    video: true,
                    audio: true
                }, onSuccess, onError);
            } else {
                console.log('your browser not support getUserMedia');
            }
        }else {
            $('#showCam').attr('src','');
            navigator.getUserMedia();
        }
    }
    $('#setCam').click(showCam);
});