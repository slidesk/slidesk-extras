# Spotlight

Add an effect to focus a part of your slide.

You can customize the color, inner radius and outer radius of the spotlight. Here is how you can use it:

```css
:root {
  --spotlight-color: #000000ee;
  --spotlight-innerRadius: 150px;
  --spotlight-outerRadius: 200px;
}
```

Per default, the mouse control the spotlight, but with the keyboard plugin, you can use some keys to move it around.

```json
{
	"z": "spotlightMoveTop",
	"q": "spotlightMoveLeft",
	"s": "spotlightMoveBottom",
	"d": "spotlightMoveRight",
	"e": "spotlightShow"
}
```