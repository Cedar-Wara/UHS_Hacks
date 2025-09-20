let frame = document.querySelector('.exec-frame iframe');

document.querySelector(".run-button").addEventListener("click", () => {
  frame.contentDocument.location.reload(true);
})

frame.onload = () => {
  console.log(getEditorValue())
  frame.contentWindow.postMessage(getEditorValue())
}

window.addEventListener('message', e => {
  // console.log(e)
  logConsole(e.data.message, e.data.type)
})

function logConsole(output, type) {
  let newEl = document.createElement("div")
  newEl.innerHTML = `
<div class="console-log ${type}">
    <div class="output">${output}</div>
</div>
    `
  document.querySelector(".console").appendChild(newEl)
}

