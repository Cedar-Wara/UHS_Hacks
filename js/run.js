

let frame = document.querySelector('.exec-frame iframe');

document.querySelector(".run-button").addEventListener("click",()=>{
    frame.contentDocument.location.reload(true);
})

frame.onload = ()=>{
    frame.contentWindow.postMessage(getEditorValue())
}