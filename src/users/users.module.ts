import { Module } from "@nestjs/common";
import { usersProviders } from "./users.repository";

@Module({
    imports: [],
    providers: [...usersProviders]
}) 
export class UsersModule {}