(function () {
    var hasWindow = window ? true : false;
    var isRetina = hasWindow ? window.devicePixelRatio > 1 : false;

    var keepOrigionSize = function(image){
        if(image.offsetWidth === 0 && image.offsetHeight){
            image.setAttribute("width",image.naturalWidth);
            image.setAttribute("height",image.naturalHeight);
        }else{
            image.setAttribute("width",image.offsetWidth);
            image.setAttribute("height",image.offsetHeight);
        }
        return image;
    }
    
    var loadImage = function (image, src, hdsrc) {
        var isImage = image.nodeName.toLowerCase() === 'img';
        var virtualImage = document.createElement("img");
        virtualImage.addEventListener("load", function () {
            if (isImage) {
                keepOrigionSize(image).setAttribute("src", hdsrc);
            }
        });

        virtualImage.setAttribute("src",hdsrc);

        image.setAttribute("is-retina",true);
    };

    if(isRetina){
        var image = document.querySelector("img");

        loadImage(image,image.src,image.dataset.retina);

        document.querySelector('#app h1').innerHTML = "this picture is 3000*600";
    }

})();