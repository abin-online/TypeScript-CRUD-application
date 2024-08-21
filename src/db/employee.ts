import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true,
        unique: true
    },
    mobile: {
        type : String,
        required : true
    },
    dob: {
        type : String,

    },
    doj: {
        type : String,

    },

},{
    timestamps: true
})

export const employeeModel = mongoose.model('Employee', employeeSchema)