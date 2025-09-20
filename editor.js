require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.26.1/min/vs' } });

fetch('/themes/Rosepine.json')
  .then(data => data.json())
  .then(data => {
    monaco.editor.defineTheme('rosepine', data);
    monaco.editor.setTheme('rosepine');
  })

require(["vs/editor/editor.main"], () => {
  monaco.editor.create(document.querySelector('.code-section'), {
    value: `function x() {
          console.log("Hello world!");
        }`,
    language: 'javascript',
    theme: 'rosepine',
  });
});

