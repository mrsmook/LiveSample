var data = {
    idPost: '10155872958359035',
    appId: '704184503126201',
    access_token: "EAAKAc7sqSLkBAAg3QxvPKLZAMccrkIZCLP8VYZCj1gx8hXZBXZAzz0UVRiC9MIc9RkscKHvPB8Sue2VC2a697FbzTZCj1lZAQMDZC5oZCcEyhZBXiFhMTmXzlFwp0MbZAR2u8sCrcXxxk6f1ZCGXz3htUPpzEBeRLfketg6S11fbcZBvF9PWkcDT5dNuR"
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
