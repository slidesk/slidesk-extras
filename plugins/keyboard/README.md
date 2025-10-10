# SliDesk Plugin: keyboard

This plugin allows you to control the navigation with a keyboard.

Per default, arrows left and right control next() and previous(), they can't be override.

You can override it with a `mapping.json` file in the root directory of the presentation.

Example:

```json
{
  "a": "next",
  "b": "previous",
  "c": "previous"
}
```

Keys correspond to the keyboard's key and values correspond to action ("next", "previous", "fullscreen", ...).

WARNING: `keyboard` does not be loaded with `keyboard-notes`

Example: This my configuration to use with a 8BitDo Micro:

```json
{
	"k": "next",
	",": "previous",
	"c": "next",
	"d": "previous",
	"j": "webcam"
}
```
