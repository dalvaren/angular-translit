'use strict';

angular.module('translit',[])
	.filter("translit", function(){
    return function (text, translitMap) {
        var re = new RegExp(Object.keys(translitMap).join("|"),"gi");
        return text.replace(re, function(matched){
          return translitMap[matched];
        });
    }
});
