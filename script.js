
function getHelloWorldPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 1000); 
    });
}


getHelloWorldPromise().then(message => {
    document.getElementById('output').innerText = message;
});

