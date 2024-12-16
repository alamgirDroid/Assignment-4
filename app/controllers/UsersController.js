import UsersModel from "../model/UsersModel.js";
import {TokenEncode} from "../utility/tokenUtility.js";


export const Registration=async(req,res)=>{
    try {
        let reqBody=req.body;
        await UsersModel.create(reqBody)
        return res.json({status:"success","Message":"User Registration successfully"})
    }catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
}



export const Login=async(req,res)=>{

    try {
        let reqBody=req.body;
        let data=await UsersModel.findOne(reqBody)
        if(data===null){
            return res.json({status:"fail","Message":"User not found"})
        }
        else {
            // Login Success Token Encode
            let token=TokenEncode(data['email'],data['_id'])
            return res.json({status:"success",Token:token,"Message":"User Login successfully"})
        }

    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
}


export const SingleProfileRead=async(req,res)=>{
    try {
        let user_id=req.headers['user_id'];
        let data=await UsersModel.findOne({"_id":user_id})
        return res.json({status:"success","Message":"User SingleProfileRead successfully",data:data})
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
}

export const AllProfileRead=async(req,res)=>{
    try {
        let reqBody=req.body;
        let user_id=req.headers['user_id'];
        await UsersModel.updateOne({"_id":user_id},reqBody)
        return res.json({status:"success","Message":"User AllProfileRead successfully"})
    } catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
}


export const ProfileUpdate=async(req,res)=>{
    try {
        let reqBody=req.body;
        let user_id=req.headers['user_id'];
        await UsersModel.updateOne({"_id":user_id},reqBody)
        return res.json({status:"success","Message":"User ProfileUpdate successfully"})
    } catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
}


export const ProfileDelete=async(req,res)=>{
    try {
        let id=req.params.id;
        let user_id=req.headers['user_id']
        await UsersModel.deleteOne({"_id":id,"user_id":user_id})
        return res.json({status:"success","Message":"User ProfileDelete successfully"})
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
}














