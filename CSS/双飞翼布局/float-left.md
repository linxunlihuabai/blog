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
      padding: 0 200px;
    }

    .outer div{
      position: relative;
      float: left;
    }

    .left {
      width: 200px;
      background-color: yellow;
      margin-left: -100%;
      height: 100%;
      left: -200px;
    }

    .right {
      margin-left: -200px;
      right: -200px;
      width: 200px;
      background-color: red;
      height: 100%;
    }

    .middle {
      background-color: blue;
      width: 100%;
      height: 100%;
    }
  </style>
</head>

<body>
  <div class="outer">
    <div class="middle">middle</div>
    <div class="left">left</div>
    <div class="right">right</div>
  </div>
</body>

</html>
```