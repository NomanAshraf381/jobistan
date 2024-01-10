// send email 
let subButton = document.querySelector('#subscribeButton');
subButton.addEventListener('click', function (event) {
    let data = document.getElementById("subscribe").value;
    event.preventDefault();
    fetch("https://formspree.io/f/mrgwkoer", {
        method: 'POST',
        body: JSON.stringify({
            Subject: "Subscribe to Jobistan.net",
            Address: data,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(() => {
        document.getElementById('subscribe').value = ''
        alert("Message Sent Successfully")
    })
})
