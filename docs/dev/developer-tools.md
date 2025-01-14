# Developer Tools

To enhance script development, CatScript provides built-in developer tools for efficient script writing.

## VS Code Extension

We provide an extension for the VS Code editor. You can search for "CatScript" in the VS Code Extension Marketplace and install it. For more information, please visit https://marketplace.visualstudio.com/items?itemName=catscript.catscript.

![](/dev/vscode.png)

## Type Hints

If you are using an editor like VSCode on your computer to write scripts, you can install the [catscript](https://pypi.org/project/catscript) library via pip to help you with type hints for CatScript's built-in modules. This library does not have actual functionality; it is only used to provide type hints for script developers when writing scripts on the computer.

```shell
pip install catscript
```

## Web Interface

Access the CatScript web interface by visiting http://deviceIP:5000 in your computer's browser. This interface mirrors the app's functionality, simplifying script creation and screen data inspection.

![](/dev/editor.png)

## Screen Inspection

Within the web interface, navigate to "CatScript -> Settings -> Inspect" to utilize various helpful features for coding with the screen module.

![](/dev/inspect.png)

### Refresh Functionality

Pull down and release to retrieve the current screen data.

### Coordinates and Colors Display

Hovering the mouse over the screen image reveals the coordinates and color of the mouse position in the top right corner.

### Records Management

Clicking on the screen image records the mouse position's coordinates and color. Access these records by clicking the <img src="/dev/records.png" style="display: inline; width: 24px"> button in the top right corner.

### Code Template Generation

After recording multiple coordinate colors, click the <img src="/dev/template.png" style="display: inline; width: 24px"> button in the top right corner. Select a code template name from the dropdown menu to automatically generate the corresponding script code.
