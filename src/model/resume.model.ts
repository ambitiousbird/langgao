export interface SocialNetworks {
    link: string;
    icon: string;
}

export interface Education {
    university: string;
    degree: string;
    period: string;
    subject: string;
}

export interface Skills {
    category: string;
    icons: string[];
}

export interface Experience {
    company: string;
    location: string;
    period: string;
    title: string;
    responsibilities: string[];
}

export interface SideProjects {
    tag: string;
    name: string;
    date: string;
    description: string;
    achievements: string[];
}

export interface Publications {
    link: string;
    title: string;
    authors: string;
    journalLink: string;
    journalName: string;
    publishYear: string;
    database: string;
    databaseLink: string;
}