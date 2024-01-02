# Plugin `banner`

Add a the code below :

```html
<div class="banner">
<span id="banner-content" class="banner-content"></span>
</div>
```

By default add the SliDesk logo at the bottom right corner.

The logo displayed can be changed be by over-writtng the CSS Class "banner-content".

```css
.banner-content {
  position: absolute;
  right: 0px;
  bottom: 0px;
  background: #FFFFFF;
  content: url("/assets/mylogo.png");
}
```
