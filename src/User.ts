import faker from '@faker-js/faker'

export class User {
  name: string;
  location: {
    lat: number;
    long: number;
  };
  constructor(){
    this.name= faker.faker.person.firstName('male'),
    this.location={
      lat: faker.faker.location.latitude(),
      long: faker.faker.location.longitude(),
    }
  }
}
