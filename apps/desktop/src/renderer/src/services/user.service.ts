import { injectable } from "inversify";
import { setUsername } from '~/store/user';

@injectable()
export class UserService {
  public setUsername(username: string): void {
    setUsername(username);
  }
}
