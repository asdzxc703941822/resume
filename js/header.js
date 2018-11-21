(function() {
    var search = document.forms[0].children[0];
    search.onfocus = function () {
        this.parentNode.children[2].className = "focus";
    }
    search.onblur = function () {
        this.parentNode.children[2].className = "";
    }
})()