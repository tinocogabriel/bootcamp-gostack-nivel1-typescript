import {Request, Response} from "express";
import createUser from './services/CreateUser';


export default function helloWorld(request:Request, response:Response){
    const user = createUser({
        name: "Gabriel",
        email: "gabriel.teste@gmail.com",
        password: "123456",
        techs: ['Node.js', 'ReactJS', 'React Native',{title:"JavaScript", experience: 100}],
    });

    return response.json({message:'Helo World'})
}