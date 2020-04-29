chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	console.log('messsage caught');
	switch(request.message)
	{
		case 'setText':
			window.seltext = request.data.text
		break;
		
		default:
			sendResponse({data: 'Invalid arguments'});
		break;
	}
	console.log(request);
	var jax = new XMLHttpRequest();
	jax.open("POST","http://localhost:5000/text");
	jax.setRequestHeader("Content-Type","application/json;charset=UTF-8");
	jax.send(JSON.stringify({'url': request.data.url, 
                   			'text': window.seltext}
                            ));
});

