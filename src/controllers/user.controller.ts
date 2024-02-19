import{ Request, Response } from "express";
import { users } from "../data/user.data";
import { User } from "../types/user.type";
import { v4 as uuidv4 } from 'uuid';

export const getUsers = (req: Request, res: Response) => {
    res.status(200).json(users);
}

export const getUserById = (req: Request, res: Response) => {
    const id = req.params.id;
    const userFound = users.find(user => user.id === req.params.id);
    if(userFound){
    res.status(200).json(userFound);
} else {
    res.status(400).json({ message: "User not Found" });
    throw new Error ("User not found");
}};

export const addUserHandler = (req: Request, res: Response) =>{
    const user: User = req.body;
    //*users.push({id: Date.now().toString()  });
    users.push({...user, id: uuidv4() });
    res.status(200).json(users);
};

export const deleteUserHandler = (req: Request, res: Response) =>{
    const id = req.params.id;
    const indexUserFound = users.findIndex(user => user.id === req.params.id);
    if(indexUserFound !== -1){
        users.splice(indexUserFound, 1);
    res.status(200).json({
        message: "User deleted successfully",
        user:users[indexUserFound]
    });
} else {
    res.status(400).json({ message: "User not Found" });
    throw new Error ("User not found");
}}

export const updateUserHandler = (req: Request, res: Response) =>{
    const body = req.params.body;
    const indexUserFound = users.findIndex(user => user.id === req.params.id);
    if(indexUserFound !== -1){
        Object.assign(users[indexUserFound], req, body);
        res.status(200).json({
            message: "User deleted successfully",
            user:users[indexUserFound]
    });

} else {
    res.status(400).json({ message: "User not Found" });
    throw new Error ("User not found");
}}

