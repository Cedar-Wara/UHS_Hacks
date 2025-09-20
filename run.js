

let frame = document.querySelector('.exec-frame iframe');

document.querySelector(".run-button", () => {
  frame.reload()
})

frame.onload = () => {
  frame.contentWindow.postMessage(getEditorValue())
}
