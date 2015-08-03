function addPost()
{
    var postContent = '<p class= "message">'+document.getElementById('newPost').value + '</p>';
    var timeStamp = '<p class = "timeStamp">posted by Anonymous on ' +Date() + '</p>';
    var post = '<div class = "post">'+postContent+timeStamp+'</div>'
    document.getElementById('newsFeed').innerHTML += post;
    document.getElementById('newPost').focus();
    document.getElementById('newPost').value = "";
}

function post(event)
{
    var key = event.which || event.keycode;
    
    if(key == 13)
    {
	   addPost();
    }
}