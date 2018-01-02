var data = {
    idPost: '',
    appId: '',
    access_token: ""
};



function usernameFormatter(name, max) {
    if (name.length > max) {
        return name.substr(0, max) + '...';
    } else {
        return name
    }
}

function kFormatter(num) {
    return num > 999 ? (num/1000).toFixed(1) + 'k' : num
}

$(document).on(
    'fbload',
    function(){
        window.setInterval(function(){
            refresh ();
        }, 10000);
    }
);
window.fbAsyncInit = function () {
    FB.init({
        appId      : data['appId'],
        xfbml: true,
        version: 'v2.8'
    });
    $(document).trigger('fbload');
}


function refresh () {
    FB.api('/' + data['idPost'] + '/comments',{
        "order":"reverse_chronological",
        "summary": "1",
        "limit":"1",
        'access_token': data['access_token']
    }, getPosts);
}

var getPosts = function (response){
    totalCount = response.summary.total_count;

    console.log(totalCount);
}
