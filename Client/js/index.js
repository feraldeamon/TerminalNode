//import Terminal from 'xterm';
let term = new Terminal();

var protocol,
    socketURL,
    socket,
    pid,
    charWidth,
    charHeight;

var terminal_container = document.getElementById("terminal");

term.open(terminal_container);

//createTerminal();
    
/*function createTerminal() {
    
  while (terminalContainer.children.length) {
    terminalContainer.removeChild(terminalContainer.children[0]);
  }
    
      term = new Terminal({
        cursorBlink: true 
      });
};
*/
// term.open(document.getElementById('terminal'));
term.write('Hello from \033[1;3;31mxterm.js\033[0m $ ');