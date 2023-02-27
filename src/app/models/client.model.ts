export interface Client {
    isSelected?: boolean;
    email: string;
    gender: string;
    id: {
        name: string;
        value: string;
    };
    location: {
        city: string;
        coordinates: {
            latitude: string;
            longitude: string;
        };
        country: string;
        postcode: string;
        state: string;
        street: {};
        timezone: {};
    };
    name: {
        first: string;
        last: string;
        title: string;
    };
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}
