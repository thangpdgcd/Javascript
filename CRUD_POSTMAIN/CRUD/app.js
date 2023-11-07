

var courseapi ='http://localhost:3000/course'

///chạy api của file json-server
fetch(courseapi)
.then((response)=>
{
    return response.json()
})
.then((courseapi)=>
{
    console.log(courseapi);
})