document.addEventListener('mouseup',function(event)
{
    var sel = window.getSelection().toString();
    console.log(event.target.baseURI);
    var current_tab = event.target.baseURI;
    if(sel.length)
        chrome.runtime.sendMessage({'message':'setText',
                                    'data' : {'text': sel,
                                            'url': current_tab}});
})