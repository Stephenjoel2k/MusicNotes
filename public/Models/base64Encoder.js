let base64string = "";

function imageUploaded() {
    console.log("within converting image to base64")
    var file = document.querySelector(
        'input[type=file]')['files'][0];
    
    var reader = new FileReader();
    reader.onload = function() {
        base64string = reader.result.replace("data:", "")
        .replace(/^.+,/, "");

        imageBase64Stringsep = base64string;
        console.log(base64string);
    }
    reader.readAsDataURL(file);
    return base64string;
}

function callAPI(base64string) {

    console.log("within calling API");

    var url = "http://40.121.3.69/getnotes";

    var data = {
        image: base64string,
        secret_key: "NRkf3n6pjnwrzZDM9RzIRpWelljhGcWq",
        instrament: "tuba"
    };

    // var xhr = new XMLHttpRequest();
    // xhr.open("POST", url);

    // const postRequest = {
        // method: 'POST',
        // headers: {
            // 'Content-Type': 'application/json',
        // },
        // body: JSON.stringify(data)
    // };

    // xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4) {
    //         console.log(xhr.status);
    //         alert(xhr.responseText);
    //     }
    // };

    // const response = await fetch('http://40.121.3.69/getnotes', postRequest)
    // .then(response => response.json())
    // .then(data => {
    //     console.log('Success:', data);
    // }).catch(e => {
    //     console.error('Error:', e);
    // });

    // xhr.send(data);
    // const actualResponse = xhr.responseText.JSON();
    // return actualResponse;
}

function displayResultingImage(reponse) {
    const object = JSON.parse(response);
    var image = new Image();
    image.src = object.b64_overylayed_img;
    document.body.appendChild(image);
}

async function processInput() {
    base64string = imageUploaded();
    response = await callAPI(base64string);
    displayResultingImage(response);
}

function displayString() {
    console.log("Base64String about to be printed");
    alert(base64string);
}