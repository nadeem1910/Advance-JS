async function getData(){
    // get request -> async
    let response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
    // parse json -> async
    let data = await response.json()
    console.log(data);
}
getData();
