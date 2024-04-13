import { Schema } from 'mongoose'

const taskDefinition = {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    dateInit: {
        type: Date,
        required: true,
    }
}

const taskSchema = new Schema(taskDefinition)

export default taskSchema;