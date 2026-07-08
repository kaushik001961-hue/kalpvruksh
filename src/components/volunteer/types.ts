export type VolunteerFormData = {
  // Personal
  photo?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  gender?: string;
  dob?: string;
  bloodGroup?: string;
  maritalStatus?: string;
  nationality?: string;

  // Contact
  email: string;
  phone: string;
  alternatePhone?: string;
  whatsappNumber?: string;

  // Address
  address: string;
  city: string;
  district?: string;
  state: string;
  country: string;
  pincode: string;

  // Identity
  aadhaarNumber?: string;
  panNumber?: string;
  voterId?: string;
  drivingLicense?: string;
  passportNumber?: string;

  // Education
  education?: string;
  college?: string;
  course?: string;
  passingYear?: string;

  // Employment
  occupation?: string;
  organization?: string;
  designation?: string;
  experienceYears?: number;

  // Volunteer
  interest: string[];
  skills: string[];
  languages: string[];
  availability: string[];
  preferredLocation?: string;
  previousExperience?: string;
  message?: string;

  // Emergency
  emergencyName: string;
  emergencyRelation?: string;
  emergencyPhone: string;

  // Medical
  allergies?: string;
  medicalConditions?: string;
  medications?: string;

  // Social
  facebook?: string;
  instagram?: string;
  linkedin?: string;

  // Documents
  resume?: string;
  aadhaarFile?: string;
  panFile?: string;
  policeVerification?: string;

  // Declaration
  declaration: boolean;
};