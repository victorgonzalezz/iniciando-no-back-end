import { getRepository } from "typeorm";
import path from "path";
import fs from "fs";
import uploadConfig from "../config/upload";

import AppError from "../errors/AppError";

import User from "../models/User";

interface Request {
    user_id: string;
    avatarFilename: string;
}

class UddateUserAvatarService {
    public async execute({ user_id, avatarFilename }: Request): Promise<User> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne(user_id);

        if (!user) {
            throw new AppError(
                "Only authenticated users can change avatar.",
                401
            );
        }

        if (user.avatar) {
            const userAvatarFilePath = path.join(
                uploadConfig.directory,
                user.avatar
            );
            const userAvatarFilesExists = await fs.promises.stat(
                userAvatarFilePath
            );
            if (userAvatarFilesExists) {
                await fs.promises.unlink(userAvatarFilePath);
            }
        }

        user.avatar = avatarFilename;

        await usersRepository.save(user);
        return user;
    }
}

export default UddateUserAvatarService;
