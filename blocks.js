Blockly.Blocks['programstart'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Script Start");
    this.appendStatementInput("program")
        .setCheck("command");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
 this.setDeletable(false);
 this.command = false;
  }
};

Blockly.Blocks['click'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouse click")
        .appendField(new Blockly.FieldDropdown([["left","LEFT"], ["middle","MIDDLE"], ["right","RIGHT"]]), "BUTTON");
    this.appendDummyInput()
        .appendField("repeat:")
        .appendField(new Blockly.FieldNumber(1), "DELAY");
    this.appendDummyInput()
        .appendField("delay:")
        .appendField(new Blockly.FieldNumber(0), "REPEAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(230);
 this.setTooltip("Clicks the given button on the mouse \"repeat\" amount of times with \"delay\" milliseconds between each click.");
 this.setHelpUrl("");
 this.setMovable(true);
 this.command = true;
  }
};

Blockly.Blocks['movemouse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move mouse to  x:")
        .appendField(new Blockly.FieldNumber(0), "X");
    this.appendDummyInput()
        .appendField("y:")
        .appendField(new Blockly.FieldNumber(0), "Y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(230);
 this.setTooltip("Moves the mouse pointer to the given X and Y coordinates.");
 this.setHelpUrl("");
 
 this.command = true; }
};

Blockly.Blocks['restoremouse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("restore mouse");
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(230);
 this.setTooltip("Places the mouse cursor back to its location before the last issued \"mouse move\" command.");
 this.setHelpUrl("");

 this.command = true;
  }
};

Blockly.Blocks['mousemovepolar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move mouse polar; direction:")
        .appendField(new Blockly.FieldAngle(90), "DIRECTION");
    this.appendDummyInput()
        .appendField("distance:")
        .appendField(new Blockly.FieldNumber(0), "DISTANCE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(230);
 this.setTooltip("Moves the mouse to the given polar coordinates on the screen.");
 this.setHelpUrl("");
 
 this.command = true;
  }
};

Blockly.Blocks['withwindow'] = {
  init: function() {
    this.appendValueInput("WINDOW")
        .setCheck("window")
        .appendField("In Window:");
    this.appendStatementInput("COMMANDS")
        .setCheck("command");
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(30);
 this.setTooltip("All commands within this block will be executed within the specified window.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['getactivewindow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Active Window");
    this.setOutput(true, "window");
    this.setColour(120);
 this.setTooltip("Returns the ID of the currently active window");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['windowsearch'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Find Window; must match:")
        .appendField(new Blockly.FieldDropdown([["any","ANY"], ["all","ALL"]]), "MATCHING")
        .appendField(", must be visible:")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "VISIBLE");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldCheckbox("TRUE"), "USE_NAME")
        .appendField("name: ")
        .appendField(new Blockly.FieldTextInput(""), "NAME");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldCheckbox("FALSE"), "USE_CLASS")
        .appendField("class:")
        .appendField(new Blockly.FieldTextInput(""), "CLASS");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldCheckbox("FALSE"), "USE_CLASSNAME")
        .appendField("classname:")
        .appendField(new Blockly.FieldTextInput(""), "CLASSNAME");
    this.setInputsInline(false);
    this.setOutput(true, "window");
    this.setColour(120);
 this.setTooltip("Searches through current windows and returns the ID(s) of the window(s) that match the specified parameters.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['selectwindow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("User Select Window");
    this.setOutput(true, "window");
    this.setColour(120);
 this.setTooltip("Makes the user click on the window that will be acted upon. Returns the ID of the window the user clicked.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['resizewindow'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Resize Window");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("width:")
        .appendField(new Blockly.FieldNumber(100, 0), "WIDTH");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("height:")
        .appendField(new Blockly.FieldNumber(100, 0), "HEIGHT");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("use hints:")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "USE_HINTS");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
 this.command = true;
  }
};

Blockly.Blocks['sync'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sync");
    this.appendStatementInput("COMMANDS")
        .setCheck("command");
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(300);
 this.setTooltip("Waits until the command is actually completed. This adds on the --sync parameter to the shell command");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['clearmodifiers'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Clear Modifiers");
    this.appendStatementInput("COMMANDS")
        .setCheck("command");
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(40);
 this.setTooltip("Sets the clear modifiers flag for the following commands.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['windowmove'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Move Window");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("relative:")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "RELATIVE");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x:")
        .appendField(new Blockly.FieldNumber(0), "X");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y:")
        .appendField(new Blockly.FieldNumber(0), "Y");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
this.command = true;
  }
};

Blockly.Blocks['windowfocus'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Focus window");
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(230);
 this.setTooltip("Focuses the given window.");
 this.setHelpUrl("");
 this.command = true;
  }
};

Blockly.Blocks['mousemoverelative'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move mouse by, x:")
        .appendField(new Blockly.FieldNumber(0, 0), "X")
        .appendField(", y:")
        .appendField(new Blockly.FieldNumber(0, 0), "Y");
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(230);
 this.setTooltip("Moves the mouse by X pixels and Y pixels.");
 this.setHelpUrl("");
this.command = true;
  }
};

Blockly.Blocks['key'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("key stroke:")
        .appendField(new Blockly.FieldTextInput("A"), "KEY");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("delay:")
        .appendField(new Blockly.FieldNumber(0, 0), "DELAY");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
this.command = true;
  }
};

Blockly.Blocks['specialkey'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("keystroke:")
        .appendField(new Blockly.FieldDropdown([["Ctrl","CTRL"], ["Alt","ALT"], ["Shift","SHIFT"], ["Super","SUPER"]]), "MODIFIER")
        .appendField("+")
        .appendField(new Blockly.FieldTextInput("A"), "KEY");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("delay:")
        .appendField(new Blockly.FieldNumber(0, 0), "DELAY");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
this.command = true;
  }
};

Blockly.Blocks['type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("type in:")
        .appendField(new Blockly.FieldTextInput("Hello World!"), "STRING");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("delay:")
        .appendField(new Blockly.FieldNumber(0, 0), "DELAY");
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(230);
 this.setTooltip("Sends a series of given keystrokes with \"delay\" milliseconds between each one.");
 this.setHelpUrl("");
this.command = true;
  }
};

Blockly.Blocks['sleep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sleep for")
        .appendField(new Blockly.FieldNumber(0, 0), "TIME")
        .appendField("seconds");
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(240);
 this.setTooltip("Sleeps/waits for the given amount of seconds.");
 this.setHelpUrl("");
this.command = true;
  }
};

Blockly.Blocks['execute'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("execute:")
        .appendField(new Blockly.FieldTextInput("touch test.txt"), "VALUE");
    this.setPreviousStatement(true, "command");
    this.setNextStatement(true, "command");
    this.setColour(230);
 this.setTooltip("Executes the given command.");
 this.setHelpUrl("");
this.command = true;
  }
};