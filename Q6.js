const studentdata=[
{id:1,name:"muskan",degree:"PYTHON"},
{id:1,name:"kumari",degree:"JAVASCRIPT"},
{id:1,name:"singh",degree:"HTML"},
];
const newdata=studentdata.map((cValue)=>{
    return `My name is ${cValue.name}`;
});
console.log(newdata);

//output:[ 'My name is muskan', 'My name is kumari', 'My name is singh' ]
