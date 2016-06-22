exports.index = function(req, res) {
    res.render('default', {
        title: 'Home',
        classname: 'home',
        users: ['Brett', 'Mark', 'John', 'Shawn']
    });
}

exports.about =  function(req, res) {
    res.render('default', {
        title: 'About us',
        classname: 'about'
    });
}