```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>实现sticky</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        .container {
            background: #000;
            width: 100%;
            /* height: 500px; */
            /* overflow: scroll; */
            /* height: 1000px; */
        }

        #sticky {
            position: sticky;
            width: 200px;
            height: 200px;
            top: 0px;
            background-color: red;
            flex: 1;
        }
    </style>
</head>

<body>
    <div id="container" class="container">
        <div>
            <p style="height: 500px;"></p>
            <p style="height: 500px;"></p>

            <div id="sticky">
                123
            </div>
            <p style="height: 500px; background-color: #fff;"></p>
            <p style="height: 500px;"></p>
        </div>



    </div>
    <script>
        var sticky = document.getElementById('sticky');
        var stickyTop = sticky.getBoundingClientRect().top;
        document.onscroll = function (e) {
            console.log(document.documentElement.scrollTop , stickyTop)
            if (stickyTop - document.documentElement.scrollTop <= 50) {
                sticky.style.position = 'fixed';
                sticky.style.top = '50px';
            } else {
                sticky.style.position = 'relative';
                sticky.style.top = '0';
            }
        }

    </script>
</body>

</html>
```