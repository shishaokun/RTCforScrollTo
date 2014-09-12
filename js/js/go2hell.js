/* go 2 hell*/
go2hell = {
    getNum : function(isUp){
        var range = Math.floor($('body').scrollTop()/$('.scroll-box').height());
       // console.log(isUp,range,$('.scroll-box').length - 1)
        if (!isUp && ( range < $('.scroll-box').length - 1)){
             // console.log('down',range + 1)
            return $('.scroll-box').get(range + 1);
         }else if (isUp &&( range > 0)) {
            // console.log('up',range - 1)
            // var range = Math.ceil($('body').scrollTop()/$('.scroll-box').height());
            return $('.scroll-box').get(range - 1);
         }
    },
}
go2hell.navigateDown = function(){
    console.log('down')
    var elm = go2hell.getNum(false);
    if(elm) $.scrollTo(elm, 800)
};
go2hell.navigateUp = function(){
    console.log('up')
     var elm = go2hell.getNum(true);
    if(elm) $.scrollTo(elm, 800)
};
go2hell.navigateLeft = go2hell.navigateUp
go2hell.navigateRight = go2hell.navigateDown
