export default class UserEntity {
  constructor(
    readonly userId: number,
    readonly name: string | null,
    readonly pictureUrl: string | null,
    readonly email: string,
    readonly password: string,
    readonly createdAt: Date,
    readonly updatedAt: Date
  ) {}

  static create(email: string, password: string): UserEntity {
		return new UserEntity(
			0,
			null,
			null,
			email,
			password,
			new Date(),
			new Date()
		);
	}
}