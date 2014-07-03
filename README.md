angular-translit
================

# Translit filter for [AngularJS](http://angularjs.org/)

***

Translit filter to convert strings containing special chars


This filter will look for all letters inside a translit map and exchange them in the given string

## Example: 
```JS
$scope.translit_pt_BR = {
    'á':'a',
    'é':'e',
    'í':'i',
    'ó':'o',
    'ú':'u',
    'à':'a',
    'è':'e',
    'ì':'i',
    'ò':'o',
    'ù':'u',
    'â':'a',
    'ê':'e',
    'î':'i',
    'ô':'o',
    'û':'u',
    'ä':'a',
    'ë':'e',
    'ï':'i',
    'ö':'o',
    'ü':'u',
    'ã':'a',
    'õ':'o',
    'ç':'c',
    'Á':'A',
    'É':'E',
    'Í':'I',
    'Ó':'O',
    'Ú':'U',
    'À':'A',
    'È':'E',
    'Ì':'I',
    'Ò':'O',
    'Ù':'U',
    'Â':'A',
    'Ê':'E',
    'Î':'I',
    'Ô':'O',
    'Û':'U',
    'Ä':'A',
    'Ë':'E',
    'Ï':'I',
    'Ö':'O',
    'Ü':'U',
    'Ã':'A',
    'Õ':'O',
    'Ç':'C'
};
```

```HTML
<div>{{str | translit : translit_pt_BR }}</div>
```


## Demo
Do you want to see this filter in action? Visit http://jsfiddle.net/B8GhK/3/