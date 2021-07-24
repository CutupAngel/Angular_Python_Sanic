export class User {
  username: string;
  type: string;
  id: string;
  country: string;
  city: string;
  mobile: number;

  constructor(args:any) {
    try{
      this.username = args.username;
      this.id = args.id;
      this.type = args.type;
      this.country = args.address.country;
      this.city = args.address.city;
      this.mobile = args.address.mobile;
    }catch (e) {

    }

  }

}
