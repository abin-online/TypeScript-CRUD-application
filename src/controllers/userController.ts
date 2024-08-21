import express, { response } from 'express'
import { employeeModel } from '../db/employee'

class userController{
    getAllUser = async(req: express.Request , res: express.Response) => {
        try {
            const users = await employeeModel.find({});
            return res.status(200).json({data:users})
        } catch (error) {
            return response.sendStatus(400)
        }
    }

    getUsers = async(req: express.Request, res: express.Response) => {
        try {
            const {id} = req.params;
            const user = await employeeModel.findById(id)
            if (!user) {
                return res.status(404).json({ message: "User not found" });
                console.log('not found'); 
            }
            return res.status(200).json({data:user})
        } catch (error) {
            return response.sendStatus(400)
        }
    }
    

    createUser = async (req: express.Request, res: express.Response) => {
        try {
            const { name, email, mobile, dob, doj } = req.body;
            
            // Create a new user instance with the provided data
            const user = new employeeModel({
                name,
                email,
                mobile,
                dob,
                doj
            });
    
            // Save the new user to the database
            await user.save();
            
            // Return a success response with the created user data
            return res.status(200).json({ msg: "User created", data: user });
        } catch (error) {
            console.error("Error creating user:", error); // Log the error for debugging purposes
            return res.status(400).json({ msg: "Failed to create user", message: error }); // Provide a more detailed error response
        }
    }
    

    updateUser = async (req: express.Request, res: express.Response) => {
        try {
            const { id } = req.params;  // Get the user ID from the route parameters
            const { name, email, mobile, dob, doj } = req.body;
    
            const user = await employeeModel.findById(id);  // Use the ID to find the user
    
            if (user) {
                user.name = name;
                user.email = email;
                user.mobile = mobile;
                user.dob = dob;
                user.doj = doj;
    
                await user.save();
    
                return res.status(200).json({ msg: 'User updated', data: user });  // Update message
            } else {
                return res.status(404).json({ msg: 'User not found' });  // Handle case where user is not found
            }
        } catch (error) {
            return res.sendStatus(400);  // Handle any other errors
        }
    }
    

    deleteUsers = async (req: express.Request, res: express.Response) => {
        try {
            const { id } = req.params;
    
            // Correct usage: Pass the id directly, not wrapped in an object
            const user = await employeeModel.findByIdAndDelete(id);
    
            if (user) {
                return res.status(200).json({ msg: 'User deleted' });
            } else {
                return res.status(404).json({ msg: 'User not found' });
            }
        } catch (error) {
            console.error("Error deleting user:", error);  // Log the error for debugging
            return res.status(400).json({ msg: "Failed to delete user", message: error });  // Provide a detailed error response
        }
    }
    

}

export default new userController()