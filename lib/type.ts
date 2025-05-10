export interface User {
  city: string | null;
  code: string | null;
  createdAt: Date;
  email: string;
  familyname: string | null;
  id: number;
  name: string | null;
  password: string;
  phonenumber: string | null;
  profilepicture: string | null;
  role: string;
  state: string | null;
  updatedAt: Date;
  username: string;
}

export interface doctorServices {
  id: number;
  doctorId: number;
  name: string;
}

export interface clinicfeature {
  id: number;
  doctorId: number;
  featureName: string;
}

export interface Doctor {
  id: number;
  name: string;
  profilePicture: string;
  address: string;
  doctorServices: doctorServices[];
  expertise: string;
  bookingmethod: 'Phoneconsultation' | 'Onlinemeeting' | 'Inperson';
  description?: string | undefined | null;
  location: string;
  phonenum: string;
  registrationnumber: string;
  clinicfeature: clinicfeature[];
}
