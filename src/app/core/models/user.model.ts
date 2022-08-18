

export class User{
    constructor(
        public name: string,
        public email: string,
        public password?: string,
        public image?: string,
        public google?: boolean,
        public role?: 'ADMIN_ROLE' | 'USER_ROLE',
        public uid?: string,

    ){}
}