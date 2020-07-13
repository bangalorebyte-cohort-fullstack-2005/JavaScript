// AJAX - Asynchronous JavaScript and XML
// It is not a language, its not a framework or library,
// its just a set of web technologies to send and recieve
// data from a clinet to server asynchronously.
// This sending and recieving of data is done behind the scenes 
// without the need of reloading the web page.

// XML - XML is a lightweight format which a lot of people use to 
// send information from server to a browser or another server. 

// Even though there is XML in the name, JSON is more popular
// for the same.

// AJAX just uses a combination of:

// A browser built-in XMLHttpRequest object (to request data from a web server)
// JavaScript and HTML DOM (to display or use the data)

// How this works is by making an AJAX call to the server.
// This can be done by basic JS and also with the help of 
// certain libraries like: jQuery, Axios, Superagent,
// Fetch API,  Node Http.


// Common Request & Response:
//     When me make a common request to a api server/ web server,
//     we recieve a lot of data, our page gets reloaded, and it takes a
//     lot of time.
//     If we want to fetch some info for a particular section of 
//     our web page we can make use of ajax. Ajax helps us send and
//     recieve JSON/XML data asynchronously in the background without
//     having to reload the page.
//     For this we make use of the XmlHttpRequest object in Javascript.


// XmlHttpRequest(XHR) Object:
//     This object has methods which allow data transfer between client/server.
//     Can be used with protocols other than Http.
//     Can work with data like XML, JSON and Plain text.


// 1.New method 
const btn = document.getElementById('button')
const h2 = document.getElementById('h2')
btn.addEventListener('click',load_text)

// function load_text(){
//     // create XHR object
//     const xhr = new XMLHttpRequest()
//         // open(type of request, file/URL, async)
//     xhr.open('GET','sample.txt',true)

//     xhr.onload = function(){
//         if(this.status == 200){
//             h2.innerHTML = this.responseText
//         }
//         else if (this.status == 404){
//             h2.innerHTML = '404: Not Found'
//         }

//     }
//     // send request
//     xhr.send()
// }


// 2. old way

    // onreadystatechange(type of request, url/file, async)
    // When we use this function we also need to check for ready state.
    // readyState values:
    // 0 : request not initialized  
    // 1 : server connection established
    // 2 : request recieved
    // 3 : processing request
    // 4 : request finished and response is ready

    // diff between onload and onreadystatechange:
    //     onload wont run unless the readyState is 4.
    // onreadystatechange will run everytime the readyState changes

    function load_text(){
        // create XHR object
        const xhr = new XMLHttpRequest()
            // open(type of request, file/URL, async)
        xhr.open('GET','sample.txt',true)


        xhr.onreadystatechange = function(){
            if (this.readyState == 2){
                console.log(this.readyState, 'request recieved')
            }
            else if (this.readyState==4)
                console.log(this.readyState,'its completed')
                h2.innerHTML = this.responseText
        }
    xhr.send()
    }