```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    *{
      margin: 0;
      padding: 0;
    }
    html,body {
      height: 100%;
      width: 100%;
    }
  </style>
</head>
<body>
  <div style="background-color: red; width: 100%;height: 100%; position: relative;">
    <div 
    style="
    position: absolute; 
    top: 50%; transform: 
    translateY(-50%); 
    background-color: yellow; 
    margin: 0 10px; 
    width: calc(100vw - 20px); 
    height: calc(50vw - 10px);
    display: flex;
    justify-content: center;
    align-items: center;"
    >
    12</div>
  </div>
</body>
</html>
```