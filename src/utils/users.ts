export interface User {
    createdAt: string,
    fullname: string,
    mobile: string,
    email: string,
    bvn: string,
    maritalStatus: string,
    children: string | number,
    residenceType: string,
    edLvl: string,
    employmentStatus:string,
    employmentSector: string,
    employmentDuration: string,
    officeMail: string,
    monthlyIncome: string,
    loanRepay: string,
    twitter: string,
    facebook: string,
    instagram: string,
    guarantorName: string,
    guarantorMobile: string,
    guarantorMail: string,
    guarantorRelationship: string,
    status: string,
    organization: string,
    id: string
}

async function fetchUsers(): Promise<User[]> {
    const url = 'https://6724c7c0c39fedae05b2b071.mockapi.io/lendsqr-fe-test/api/users'
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default fetchUsers;