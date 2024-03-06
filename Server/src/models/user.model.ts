import mongoose, { Schema, Document } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

interface IUser extends Document {
    username: string;
    email: string;
    fullName: string;
    avatar: string;
    coverImage?: string;
    watchHistory: Schema.Types.ObjectId[];
    password: string;
    refreshToken?: string;
}

const userSchema: Schema<IUser> = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        index: true,
        trim: true
    },
    avatar: {
        type: String,
        required: true
    },
    coverImage: {
        type: String
    },
    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: "Video"
    }],
    password: {
        type: String,
        required: [true, "password is required"]
    },
    refreshToken: {
        type: String
    }
}, { timestamps: true });

userSchema.pre<IUser>("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
    const AccessToken = jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN : 
        {
            expiresIn : process.env.ACCES_EXPIRY_TOKEN
        }
    );
    return AccessToken;
};

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
};

export const User = mongoose.model<IUser>("User", userSchema);
