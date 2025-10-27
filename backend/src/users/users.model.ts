import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserCreationAttrs {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({ type: DataType.JSONB, allowNull: true, primaryKey: true })
  declare id: any;
  @Column({ type: DataType.STRING, allowNull: false })
  gender!: string;
  @Column({ type: DataType.JSONB, allowNull: false })
  name!: { title: string; first: string; last: string };
  @Column({ type: DataType.JSONB, allowNull: false })
  location!: any;
  @Column({ type: DataType.STRING, allowNull: false })
  email!: string;
  @Column({ type: DataType.JSONB, allowNull: false })
  login!: any;
  @Column({ type: DataType.JSONB, allowNull: false })
  dob!: any;
  @Column({ type: DataType.JSONB, allowNull: false })
  registered!: any;
  @Column({ type: DataType.STRING, allowNull: true })
  phone!: string;
  @Column({ type: DataType.STRING, allowNull: true })
  cell!: string;
  @Column({ type: DataType.JSONB, allowNull: true })
  picture!: any;
  @Column({ type: DataType.STRING, allowNull: true })
  nat!: string;
}
