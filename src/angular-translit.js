'use strict';

angular.module('translit',[])
	.filter("translit", function(){
    return function (text, translitMap) {
    	if (text === undefined || text == '') {
    		return '';
    	}
        var re = new RegExp(Object.keys(translitMap).join("|"),"gi");
        return text.replace(re, function(matched){
          return translitMap[matched];
        });
    }
});
