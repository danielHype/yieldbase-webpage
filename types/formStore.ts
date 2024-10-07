
export type StepOneData = {
    quality: string;
    color: string;
    withPrint: string;
    howDoYouSend: string;
    whatDoYouSend: string | undefined;
};

export type StepTwoData = {
    length_in_mm: number;
    width_in_mm: number;
    height_in_mm: number;
};

export type StepThreeData = {
    companyName: string | undefined;
    name: string;
    street: string;
    houseNumber: number;
    zip: number;
    city: string;
    email: string;
    specialWishes: string | undefined;
};

export type FormData = StepOneData & StepTwoData & StepThreeData;

export type LatLong = {
    lat: number;
    lng: number;
};
