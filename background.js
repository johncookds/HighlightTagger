var label = "Default"

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{

	var jax = new XMLHttpRequest();
	jax.open("POST","http://localhost:5000/text");
	jax.setRequestHeader("Content-Type","application/json;charset=UTF-8");
	jax.send(JSON.stringify({'text' : request.data.selection_text,
                             'location' : request.data.location,
                             'section_outertext' : request.data.section_outertext,
                             'section_outerhtml' : request.data.section_outerhtml,
                             'document_outertext' : request.data.document_outertext,
                             'document_outerhtml' : request.data.document_outerhtml,
                             'document_title' : request.data.document_title,
                             'document_text' : request.data.document_text,
                             'label' : label
                             }
                            ));
});


chrome.browserAction.onClicked.addListener(function(tab) { 
	var new_label = prompt("Please provide a label with which you would like to tag content?", label);
	if (new_label!=null){
		label = new_label
		x="Name changed to: " + label;
		alert(x);
	}
});