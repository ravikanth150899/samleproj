import pkg from "express";
import {v4 as uuidv4} from 'uuid';

const express=pkg;
const router=express.Router();
let users=[];
const getUsers=(req,res)=>{
    res.send(users);}

const createUser=(req,res)=>{
    const user=req.body;
    users.push({ ... user,id:uuidv4()});
    res.send(`uuvid is added to user name ${user.fname}`);
}
const getUser=(req,res)=>{
    const {id}= req.params;
    const fndUser=users.find((user)=>user.id===id);
    res.send(fndUser);
}
const delUser=(req,res)=>{
    const {id}= req.params;
    users=users.filter((user)=>user.id!==id);
    res.send(`user with id ${id} is deleted`);
}

router.get('/',getUsers);
router.post('/',createUser);
router.get('/:id',getUser);
router.delete('/:id',delUser);

export default router;