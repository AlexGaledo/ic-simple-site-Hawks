require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs' }});  

let editor;

require(['vs/editor/editor.main'], function () {
    monaco.editor.defineTheme('neon', {
        base: 'vs-dark',
        inherit: true,
        rules: [
            { token: 'keyword', foreground: 'FFD700' },
            { token: 'variable', foreground: '00FF00' },
            { token: 'comment', foreground: 'A9A9A9', fontStyle: 'italic' },
            { token: 'string', foreground: '00FFFF' },
            { token: 'number', foreground: 'FF6347' },
            { token: 'operator', foreground: 'FF4500' },
        ],
        colors: {
            'editor.background': '#1d1d1d',
            'editorCursor.foreground': '#FF6347',
            'editor.lineHighlightBackground': '#2A2A2A',
            'editorLineNumber.foreground': '#B0B0B0',
            'editor.selectionBackground': '#3D3D3D',
            'editorWhitespace.foreground': '#D1D1D1'
        }
    });

    monaco.editor.setTheme('neon');
    
    editor = monaco.editor.create(document.getElementById('editor'), {
        value: '// Start coding...',
        language: 'javascript',
        theme: 'neon'
    });

});


function downloadCode() {
    const userCode = editor ? editor.getValue() : 'console.log("Hello, world!")';
    const blob = new Blob([userCode], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'code-snippet.js';
    link.click();
}

function runCode() {
    const userCode = editor ? editor.getValue() : document.getElementById('codeInput').value;
    try {
        const result = new Function(userCode)();
        document.getElementById('outputText').innerText = result;
    } catch (error) {
        document.getElementById('outputText').innerText = 'Error: ' + error.message;
    }
}

async function fetchData() {
    try {
        const response = await fetch("/api/data");
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        document.getElementById("outputText").innerText = JSON.stringify(data);
    } catch (error) {
        document.getElementById("outputText").innerText = 'Error fetching data: ' + error.message;
    }
}
