

let frame = document.querySelector('.exec-frame iframe');

document.querySelector(".run-button").addEventListener("onclick",()=>{
    frame.reload()
    console.log("sifj")
})

frame.onload = ()=>{
    frame.contentWindow.postMessage(getEditorValue())
}