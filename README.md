# Default Color Scheme


* backgrounds: #1c1c1c
## Button:
* default: #2d7a77  
* hover: #44b3ae
* clicked: #00fff4
## Text: 
  * active: #c7e7ff
  * inactive:  #3d3d3d
## Scroll Bar: #2d7a77
## Progress Bar
* gradient from #8a8a8a(low%) to #c7e7ff(high%)
  


## Stylistic Decisions
* basic shapes
* simple light on dark backgrounds
* nothing fancy, this is just an assignment

## Resources
https://stackoverflow.com/questions/19821450/how-to-center-text-in-the-rectangle-in-svg-js


## Button(string)
* passing in an optional string sets the label for the button with just default parameters
  * defaults string = 'button', size = 10, family = 'Helvetica'
* move(x,y)
    * set the x and y values to position the button
* onclick(event)
    * bind an action for when the button is clicked.
* label(string, size, family)
    * defaults: string = 'button', size = 10, family = 'Helvetica'

## CheckBox(text, qty)
* passing in an optional arguments(string, qty) sets the label for the check box with just default parameters
  * defaults string = 'checkbox', size = 10, family = 'Helvetica', qty = 1
* move(x,y)
  * set the x and y values to position the button
* label(string, size, family)
  * defaults: string = 'button', size = 10, family = 'Helvetica'

## RadioButton(text, qty)
* passing in an optional arguments(string, qty) sets the label for the check box with just default parameters
  * defaults string = 'radio', size = 10, family = 'Helvetica', qty = 1
* move(x,y)
  * set the x and y values to position the button
* label(string, size, family)
  * defaults: string = 'button', size = 10, family = 'Helvetica'


# Button
* Visually change for at least three states (e.g., color change on hover).
* Expose a custom label property to set the text on the button.
* Expose an event handler that notifies consuming code when the button is clicked.
* Expose an event handler that notifies consuming code when the widget state has changed.
# Check Box
* Visually support checked and unchecked states.
* Expose a custom label property to set the text that appears to the right of the check box.
* Expose an event handler that notifies consuming code when the checked state has changed.
* Expose an event handler that notifies consuming code when the widget state has changed.
# Radio Button
* Visually support checked and unchecked states.
*  Support 2 to n number of buttons, where n is set by the consuming code, with minimum of two, positioned vertically.
*  Ensure that only one button can be checked at a time.
*  Expose a custom label property to set the text that appears to the right of each button.
*  Expose an event handler that notifies consuming code when the checked state has changed and which n has been checked.
*  Expose an event handler that notifies consuming code when the widget state has changed.
# Text Box
* Visually support a caret | that informs the user about the position of the cursor. The caret should only be visually present when the widget has hover focus.
* Expose a custom property to get the text entered by the user.
* Expose an event handler that notifies consuming code when the text has changed.
* Expose an event handler that notifies consuming code when the widget state has changed.
# Scroll Bar
*  Expose a custom property to set the height of the scroll bar.
*  Expose a custom property to get the position of the scroll thumb.
*  Expose an event handler that notifies consuming code when the scroll thumb has moved and in which direction.
*  Expose an event handler that notifies consuming code when the widget state has changed.
# Progress Bar
* Expose a custom property to set the width of the progress bar.
* Expose a custom property to set the increment value of the progress bar.
* Expose a custom property to get the increment value of the progress bar.
* Expose a custom method to increment the value of the progress bar. The method should support an arbitrary numerical value from 0-100.
* Expose an event handler that notifies consuming code when the progress bar has incremented.
* Expose an event handler that notifies consuming code when the widget state has changed.
#Custom (your choice)
* There are no requirements for this widget. You are free to create anything you want. Model your custom widget after something that already exists or design something novel.
* In addition to the features listed above, ALL widgets should be positionable by consuming code (see the move function in the starter code). A programmer should be able to add your widget to a document and specify using X and Y coordinates where on the document it should be placed.
