import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { ClientModule } from './client/client.module';
import { ProjectModule } from './project/project.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [EmployeeModule, ClientModule, ProjectModule],
})
export class AppModule {}
