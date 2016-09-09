#Start

    Open index.html

#Specification

    When the device is using a Retina display, the image will be replaced with a hd picture.

#Points

    [1]. window.devicePixelRatio
    When devicePixelRatio > 1, it shows a Retina display.
    devicePixelRatio = window.devicePixelRatio = physical pixels / dips.

    [2].     <Function>keepOrigionSize
    Keep image with its origin size.

    [3] using a virtual element as a cache to load hd picture.
