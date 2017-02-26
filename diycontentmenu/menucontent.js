window.onload = function () {
    var menuRef = document.getElementById('menu-ref'),
        menuWarp = document.getElementById('menu-warp');
    menuWarp.onclick = function(e) {
        e = e || event;
        e.cancelBubble = true;
    }
    menuWarp.oncontextmenu = function(event) {
        var clientX = event.clientX, 
            clientY = event.clientY;
        menuRef.style.display = 'block';
        menuRef.style.left = clientX+'px';
        menuRef.style.top = clientY+'px';
        return false;
    }
    menuRef.addEventListener('click', function(e){
        menuRef.style.display = 'none';
    }, false);
    document.addEventListener('click', function(e){
        menuRef.style.display = 'none';
    }, false);
}