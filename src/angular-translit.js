'use strict';

angular.module('translit',[])
    .filter("translit", function(){
    return function (text, translitMap) {
        if (typeof text === 'undefined' || text === '') {
            return '';
        }
        var re = new RegExp(Object.keys(translitMap).join("|"),"gi");
        return text.replace(re, function(matched){
            if(typeof translitMap[matched] === 'undefined') {
                return matched;
            }
          return translitMap[matched];
        });
    };
});
