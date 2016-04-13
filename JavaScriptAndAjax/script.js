$.getJSON('data.json', function(data) {
    var output = '<ul>';
    $.each(data, function(key, val) {
       output += '<li>' + val.name + '</li>';
    });
        output += '</ul>';
    $('#update').append(output);
});
//var mybutton = document.getElementById('loadbutton');
//mybutton.onclick = function() {
//    var request;
//    if(window.XMLHttpRequest) {
//        request = new XMLHttpRequest();
//    } else {
//        request = new ActiveXObject("Microsoft.XMLHTTP");
//    }
//
////request.open('GET', 'data.xml');
////request.onreadystatechange = function() {
////    if((request.readyState ===4) && (request.status ===200)) {
////        var items = request.responseXML.getElementsByTagName('name');
////        var output = '<ul>';
////        for(var i = 0; i < items.length; i++) {
////            output += '<li>' + items[i].firstChild.nodeValue + '</li>';
////        }
////        output += '</ul>';
////        document.getElementById('update').innerHTML = output;
////
////    }
////}
//
//    request.open('GET', 'data.json');
//    request.onreadystatechange = function() {
//        if((request.readyState ===4) && (request.status ===200)) {
//            var items = JSON.parse(request.responseText);
//
//            var output = '<ul>';
//            for(var key in items) {
//                output += '<li>' + items[key].name + '</li>';
//            }
//            output += '</ul>';
//            document.getElementById('update').innerHTML = output;
//        }
//    }
//
//    request.send();
//} // load AJAX

