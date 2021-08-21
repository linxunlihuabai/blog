```html
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title></title>
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
      margin: 0 10px;
      height: 100%;
      display: flex;
      align-items: center;
    }

    .inner {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 50%;
    }

    .box {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: yellow;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
</head>

<body>
  <div class="outer">
    <div class="inner">
      <div class="box">123</div>
    </div>
  </div>
</body>

</html>
```

备注：
1. padding-bottom时相对于父元素的width
2. 绝对定位的元素的宽高时相对于父元素的 padding-box 。如果不是绝对定位则是相对于父元素的 content-box