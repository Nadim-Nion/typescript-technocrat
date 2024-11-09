{
    // Union Types
    type FrontendDeveloper = 'Average Developer' | 'Pro Developer';
    type FullstackDeveloper = 'FrontEnd Developer' | 'Expert Developer';

    type WebDeveloper = FrontendDeveloper | FullstackDeveloper;

    const newDeveloper: FrontendDeveloper = 'Average Developer';

    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'female';
        bloodGroup: 'O+' | 'A+' | 'B+' | 'AB+';
    };

    const user1: User = {
        name: 'Nion',
        gender: 'male',
        bloodGroup: 'B+'
    }


    // Intersection Types

    type FrontendDeveloper2 = {
        skills: string[];
        designation1: 'FrontEnd Developer';
    }

    type BackendDeveloper2 = {
        skills: string[];
        designation2: 'BackEnd Developer';
    }

    type FullstackDeveloper2 = FrontendDeveloper2 & BackendDeveloper2;

    const fullstackDeveloper: FullstackDeveloper2 = {
        skills: ['HTML', 'CSS', 'React', 'Express.js'],
        designation1: 'FrontEnd Developer',
        designation2: 'BackEnd Developer'
    }
}