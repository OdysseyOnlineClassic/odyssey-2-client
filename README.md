# Odyssey Online 2 Client

## Code Structure
Since the client consists of both a GUI and underlying libraries the code is divided as such.  
The `/lib` folder holds the TypeScript code that makes up the libraries.  
The `/src` folder holds the GUI based code.  

Library code is compiled into `/src/bin` to be accessible to the GUI.