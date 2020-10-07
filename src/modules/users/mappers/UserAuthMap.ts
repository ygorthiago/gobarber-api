import User from '../infra/typeorm/entities/User';

export default class UserAuthMap {
  public static toDTO(user: User): unknown {
    return {
      email: user.email,
    };
  }
}
