
const users=[

    {
    id:1,
    unmame:"guru",
    age:20
    },
    {
    id:2,
    unmame:"siddhadnt",
    age:20
    },
    {
    id:3,
    unmame:"ravi",
    age:20
    },
    {
    id:4,
    unmame:"manju",
    age:20
    }
]

const requrestHandler = (request,response)=>{

    if(request.url===""){
        response.end("home page")
    }
    else if(request.url==="/login"){
        response.end("<h1>Login page</h1>")
    }
    else if(request.url === "/user"){
        const userData = JSON.stringify(user);
        repsonse.end(userData)
    }
}

module.exports={
    requrestHandler,
};

