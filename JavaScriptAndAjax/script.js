$('#search').keyup(function() {
    var searchField = $('#search').val();
    var myExp = new RegExp(searchField, "i");

    $.getJSON('data.json', function(data) {
        var output = '<ul class="searchresults">';
        $.each(data, function (key, val) {
            if((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
                output += '<li>';
                output += '<h2>' + val.name + '</h2>';
                output += '<img src="images/' + val.shortname + '_tn.jpg" alt="" />';
                output += '<p>' + val.bio + '</p>';
                output += '</li>';
            }
        });
        output += '</ul>';
        $('#update').html(output);
    });
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

