```html
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>双飞翼布局</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    html,
    body {
      width: 100%;
      height: 100%;
    }

    .outer {
      height: 100%;
      display: flex;
    }

    .left {
      width: 200px;
      background-color: yellow;
    }

    .right {
      width: 200px;
      background-color: red;
    }

    .middle {
      flex-grow: 1;
      background-color: blue;
    }
  </style>
</head>

<body>
  <div class="outer">
    <div class="left">left</div>
    <div class="middle">middle</div>
    <div class="right">right</div>
  </div>
</body>

</html>
```