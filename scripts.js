if("mediaDevices" in navigator){
    navigator.mediaDevices.getDisplayMedia()
    .then(function(s){
        document.querySelector("video").srcObject = s
    })
}