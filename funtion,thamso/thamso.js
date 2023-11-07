function  writelog()
{
    var mystring='';
    for(var param of arguments)
    {
        mystring =mystring+`${param} - `
    }    
    console.log(mystring);
}
//`${param}` template string nối 
//arguments đối tượng
writelog('js', 'html','css')

//return
function cong(a,b)
{
    return a + b;
}
// không trả về sẽ hiện underfine
var result = cong(2, 8);
console.log(result);
//tham so
function code(message)
{
    console.log(message);
}
code('thang')

//function-declaration
function showmessage()
{
    var fullname='thangphan';
    console.log(fullname);
}
showmessage();
 
//function lồng nhau
function Showmessage()   
{
    function Showmessage2()
    {
        console.log('php');
    }
    Showmessage2();
}
Showmessage() 
//funciont-Expression
var Dev =function()
{

}
//funciont-Expression
setTimeout(function()
{});
//funciont-Expression-object
var object ={
    myFuntion: function()
    {

    }
}
//object
var ccode ='address'//tạo biến với chuỗi 
var Project={
    //trong này là các thuộc tính và có thêm phương thức getname
    name:'thang',
    age:'20',
    [ccode]:'phan',// bỏ biến vào object
    getName: function()
    {
        return this.name;//return Project.name
    },
    getage: function()
    {
        return this.age;
    }
};

// delete Project.name: xoás
Project.email='thang@123'// gán thêm biến mới vào biến object
console.log(Project);


//trả về Project và lấy giá trị name vaf age trong object
//console.log(Project.getName()); 
console.log(Project.getName(), Project.getage());

//example
const myobject={
    name:'Thang',
    age:20,
    email:'Thang@123',
    getname:  function()
    {
        return this.name
    }
}
myobject.address='Ngo Quyen'
console.log(myobject);
console.log(myobject.getname());



function code()
{
    var code1 ={
        name:thang
    }
}
console.log(code1);



