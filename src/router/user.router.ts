import { Router } from 'express';
import { UserMongoRepo } from '../repository/user/user.mongo.repo.js';
import { UsersController } from '../controller/user.controller.js';

// eslint-disable-next-line new-cap
export const userRouter = Router();
const userRepo = UserMongoRepo.getInstance();
const controller = new UsersController(userRepo);

userRouter.post('/register', controller.register.bind(controller));
userRouter.post('/login', controller.login.bind(controller));
