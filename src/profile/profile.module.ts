import { Module } from "@nestjs/common";
import { ProfileController } from "./profile.controller";
import { ProfileService } from "./profile.service";
import { ProfileProviders } from "./providers/profile.providers";
import { DatabaseModule } from "../databse.module";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [DatabaseModule],
  controllers: [ProfileController],
  providers: [
    ConfigService,
    ProfileService,
    ...ProfileProviders
  ],
})
export class ProfileModule {}
