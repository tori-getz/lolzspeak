import { ServerService } from "~/services";
import { useInjection } from "inversify-react";
import { SERVER_SERVICE, USER_SERVICE } from "~/common/di";
import { UserService } from "~/services/user.service";

interface IUseService {
  server: ServerService,
  user: UserService
}

export const useService = (): IUseService => ({
  server: useInjection<ServerService>(SERVER_SERVICE),
  user: useInjection<UserService>(USER_SERVICE),
})
