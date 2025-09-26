import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        builder: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        features: [String],

        galleryImages: [
            {
                filename: { type: String, required: true },
                path: { type: String, required: true },
            },
        ],

        layouts: [
            {
                title: { type: String, required: true },
                area: { type: Number },
                price: { type: Number },
                image: { type: String, required: true },
            },
        ],

        status: {
            type: String,
            enum: ["upcoming", "ongoing", "completed"],
            default: "upcoming",
        },
    },
    { timestamps: true }
);


const projectModel = mongoose.model("Project", projectSchema);
export default projectModel;