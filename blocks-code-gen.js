Blockly.Xdotool['programstart'] = function(block) {
  var statements_program = Blockly.Xdotool.statementToCode(block, 'program');
  return "#!/bin/bash \n" + statements_program;
};

Blockly.Xdotool['click'] = function(block) {
  var dropdown_button = block.getFieldValue('BUTTON');
  var number_delay = block.getFieldValue('DELAY');
  var number_repeat = block.getFieldValue('REPEAT');
  
  
  var code = 'click ';
  if (number_delay > 0 || number_delay != "0" ) {
  	code += "--delay " + number_delay + " ";
  }
  if (number_repeat > 0 || number_repeat != "0" ) {
  	code += "--repeat " + number_repeat + " ";
  }
  if (Blockly.Xdotool.inWindow) {
  	code += "--window " + Blockly.Xdotool.windowID + " ";
  }
  
  var num = 0;
  switch(dropdown_button) {
  	case "LEFT":
  		num = 1;
  	break;
  	case "MIDDLE":
  		num = 2;
  	break;
  	case "RIGHT":
  		num = 3;
  	break;
  }
  code += ("" + num);
  
  return code;
};

Blockly.Xdotool['movemouse'] = function(block) {
  var number_x = block.getFieldValue('X');
  var number_y = block.getFieldValue('Y');

  var code = 'mousemove ';  
  
  if(Blockly.Xdotool.inSync) {
	code += "--sync ";  
  }
  
  if(Blockly.Xdotool.inWindow) {
	code += "--window " + Blockly.Xdotool.windowID + " ";  
  }
  
  if(Blockly.Xdotool.inClearmods) {
  	code += "--clearmodifiers "; 
  }
  
  code += number_x + " " + number_y;
  return code;
};

Blockly.Xdotool['restoremouse'] = function(block) {
  var code = 'mousemove restore';
  return code;
};

Blockly.Xdotool['mousemovepolar'] = function(block) {
  var angle_direction = block.getFieldValue('DIRECTION');
  var number_distance = block.getFieldValue('DISTANCE');
  var code = 'mousemove --polar ';  
  
  
  
  if(Blockly.Xdotool.inWindow) {
	code += "--window " + Blockly.Xdotool.windowID + " ";  
  }
  
  if(Blockly.Xdotool.inSync) {
	code += "--sync ";  
  }
  
  if(Blockly.Xdotool.inClearmods) {
  	code += "--clearmodifiers "; 
  }
  
  code += angle_direction + " " + number_distance;
  return code;
};

Blockly.Xdotool['withwindow'] = function(block) {
	
  //This value will actually be treated as a statement, the value that is returned is actually a statement.
  var value_window = Blockly.Xdotool.valueToCode(block, 'WINDOW', Blockly.Xdotool.ORDER_ATOMIC);
    
  
  Blockly.Xdotool.inWindow = true;
  if (value_window.length > 0) {
  	Blockly.Xdotool.windowID = "$windowID";
  }
  else {
	return "%1";
  }
  var statements_commands = "windowID=`" + value_window + "`\n";
  statements_commands += Blockly.Xdotool.statementToCode(block, 'COMMANDS');
  
  
  Blockly.Xdotool.inWindow = false;
  Blockly.Xdotool.windowID = "%1";
  
  return statements_commands;
};

Blockly.Xdotool['getactivewindow'] = function(block) {
  var code = "xdotool getactivewindow";
  return [code, Blockly.Xdotool.ORDER_NONE];
};

Blockly.Xdotool['windowsearch'] = function(block) {
  var dropdown_matching = block.getFieldValue('MATCHING');
  var only_visible = block.getFieldValue('VISIBLE') == 'TRUE';
  var use_name = block.getFieldValue('USE_NAME') == 'TRUE';
  var text_name = block.getFieldValue('NAME');
  var use_class = block.getFieldValue('USE_CLASS') == 'TRUE';
  var text_class = block.getFieldValue('CLASS');
  var use_classname = block.getFieldValue('USE_CLASSNAME') == 'TRUE';
  var text_classname = block.getFieldValue('CLASSNAME');

  
  var code = "search ";
  if(Blockly.Xdotool.inSync) {
	code += "--sync ";  
  }
  if(only_visible) {
	code += "--onlyvisible ";  
  }
  
  if(dropdown_matching == "ANY") {
	code += "--any ";  
  }
  else {
	code += "--all ";  
  }
 
  if (use_name) {
  	code += "--name " + text_name + " ";
  } 
  
  if (use_class) {
  	code += "--class " + text_class + " ";
  } 
  
  if (use_classname) {
  	code += "--classname " + text_classname + " ";
  } 
  
  return [code, Blockly.Xdotool.ORDER_NONE];
};

Blockly.Xdotool['selectwindow'] = function(block) {
  var code = "xdotool selectwindow";
  return [code, Blockly.Xdotool.ORDER_NONE];
};

Blockly.Xdotool['resizewindow'] = function(block) {
  var number_width = block.getFieldValue('WIDTH');
  var number_height = block.getFieldValue('HEIGHT');
  var use_hints = block.getFieldValue('USE_HINTS') == 'TRUE';
  
  var code = 'windowsize ';
  if(use_hints) {
  	code += "--usehints ";
  }
  if(Blockly.Xdotool.inSync) {
	code += "--sync ";  
  }
  
  if(Blockly.Xdotool.inWindow) {
	code += Blockly.Xdotool.windowID + " ";  
  }
  else {
	code += "%1 "  
  }
  code += number_width + " " + number_height;
  return code;
};

Blockly.Xdotool['sync'] = function(block) {
  Blockly.Xdotool.inSync = true;
  var statements_commands = Blockly.Xdotool.statementToCode(block, 'COMMANDS');
  Blockly.Xdotool.inSync = false;
  
  return statements_commands;
};

Blockly.Xdotool['clearmodifiers'] = function(block) {
  Blockly.Xdotool.inClearmods = true;
  var statements_commands = Blockly.Xdotool.statementToCode(block, 'COMMANDS');
  Blockly.Xdotool.inClearmods = false;
  
  return statements_commands;
};

Blockly.Xdotool['windowmove'] = function(block) {
  var relative = block.getFieldValue('RELATIVE') == 'TRUE';
  var number_x = block.getFieldValue('X');
  var number_y = block.getFieldValue('Y');
  // TODO: Assemble Xdotool into code variable.
  var code = 'windowmove ';
  
  if(Blockly.Xdotool.inSync) {
	code += "--sync ";  
  }
  
  if(relative) {
	code += "--relative ";  
  }
  
  
  code += Blockly.Xdotool.windowID + " ";  
  
  
  code += number_x + " " + number_y;
  return code;
};

Blockly.Xdotool['windowfocus'] = function(block) {
  // TODO: Assemble Xdotool into code variable.
  var code = 'windowfocus ';
  
  if(Blockly.Xdotool.inSync) {
	code += "--sync ";  
  }
  
  code += Blockly.Xdotool.windowID;
  return code;
};

Blockly.Xdotool['mousemoverelative'] = function(block) {
  var number_x = block.getFieldValue('X');
  var number_y = block.getFieldValue('Y');
  
  var code = 'movemouse_relative ';
  
  if(Blockly.Xdotool.inSync) {
	code += "--sync ";  
  }
  
  if(Blockly.Xdotool.inClearmods) {
  	code += "--clearmodifiers "; 
  }
  
  code += number_x + " " + number_y;
  return code;
};

Blockly.Xdotool['key'] = function(block) {
  var text_key = block.getFieldValue('KEY');
  var number_delay = block.getFieldValue('DELAY');
  var code = 'key ';
  if (number_delay > 0 || number_delay != "0") {
  	code += "--delay " + number_delay + " ";
  }
  if(Blockly.Xdotool.inWindow) {
	code += "--window " + Blockly.Xdotool.windowID + " ";  
  }
  if(Blockly.Xdotool.inClearmods) {
   code += "--clearmodifiers ";  
  }
  code += text_key;
  return code;
};

Blockly.Xdotool['specialkey'] = function(block) {
  var dropdown_modifier = block.getFieldValue('MODIFIER');
  var text_key = block.getFieldValue('KEY');
  var number_delay = block.getFieldValue('DELAY');
  var code = 'key ';
  if (number_delay > 0 || number_delay != "0") {
  	code += "--delay " + number_delay + " ";
  }
  if(Blockly.Xdotool.inWindow) {
	code += "--window " + Blockly.Xdotool.windowID + " ";  
  }
  if(Blockly.Xdotool.inClearmods) {
   code += "--clearmodifiers ";  
  }
  code += dropdown_modifier + "+" + text_key;
  return code;
};

Blockly.Xdotool['type'] = function(block) {
  var text_string = block.getFieldValue('STRING');
  var number_delay = block.getFieldValue('DELAY');
  var code = 'type ';
  if (number_delay > 0 || number_delay != "0") {
  	code += "--delay " + number_delay + " ";
  }
  if(Blockly.Xdotool.inWindow) {
	code += "--window " + Blockly.Xdotool.windowID + " ";  
  }
  if(Blockly.Xdotool.inClearmods) {
   code += "--clearmodifiers ";  
  }
  code += "'" + text_string + "'";
  return code;
};

Blockly.Xdotool['sleep'] = function(block) {
  var number_time = block.getFieldValue('TIME');
  var code = 'sleep ' + number_time;
  return code;
};

Blockly.Xdotool['execute'] = function(block) {
  var text_value = block.getFieldValue('VALUE');
  // TODO: Assemble Xdotool into code variable.
  var code = 'exec ';
  if(Blockly.Xdotool.inSync) {
	code += "--sync ";  
  }
  code += text_value;
  return code;
};