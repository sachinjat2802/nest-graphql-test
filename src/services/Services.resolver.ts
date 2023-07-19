/* eslint-disable */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ServicesService } from './Services.service';
import { Services} from './services.model';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateServicesInput } from './dto/Services.create.dto';
import { UpdateServicesInput } from './dto/Services.update.dto';


@Resolver()
export class ServicessResolver {
  constructor(private readonly ServicessService: ServicesService) {}

  @UseGuards(AuthGuard)
  @Query((returns) => Service || {})
  async Service(@Args('id') id: string) {
    return await this.ServicesService.getService(id);
  }

  @UseGuards(AuthGuard)
  @Query((returns) => [Service])
  async services() {
    return await this.ServicessService.getServices();
  }

  @UseGuards(AuthGuard)
  @Mutation((returns) => Services)
  async updateServices(
    @Args('id') id: string,
    @Args('input') input: UpdateServicesInput,
  ) {
    return await this.ServicesService.updateServices(id, input);
  }

  @UseGuards(AuthGuard)
  @Mutation((returns) => Services)
  async deleteServices(@Args('id') id: string) {
    return await this.ServicesService.deleteServices(id);
  }
}
