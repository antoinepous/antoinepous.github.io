var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        
    }
};


request.onload = function() {
    var data = request.response;  
};

const inputIso = document.getElementById("fps");
    const inputFps = document.getElementById("iso")
    const fps = ""
    const iso = ""

    inputIso.addEventListener('input', updateValue);

    function updateValue(e) {
    iso = e.target.value;
    }

    inputFps.addEventListener('input', updateValue);

    function updateValue(e) {
    fps = e.target.value;
    }



</script>