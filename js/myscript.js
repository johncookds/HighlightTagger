document.addEventListener('mouseup',function(event)
{
    console.log(event);
    var selection_text = window.getSelection().toString();
    var location = window.location;
    var section_outertext = event.target.outerText;
    var section_outerhtml = event.target.outerHTML;
    var document_outertext = event.target.ownerDocument.body.outerText;
    var document_outerhtml = event.target.ownerDocument.body.outerHTML;
    var document_title = event.target.ownerDocument.body.title;
    var document_text = event.target.ownerDocument.body.text;
    if(selection_text.length)
        chrome.runtime.sendMessage({'message' : 'setText',
                                    'data' : {'text' : selection_text,
                                            'location' : location,
                                            'section_outertext' : section_outertext,
                                            'section_outerhtml' : section_outerhtml,
                                            'document_outertext' : document_outertext,
                                            'document_outerhtml' : document_outerhtml,
                                            'document_title' : document_title,
                                            'document_text' : document_text
                                        }});
})