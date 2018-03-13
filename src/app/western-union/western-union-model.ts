
    // toAccount: {}; /* Account */
    // toAccounts: [{}]; /* Account[]*/
    // amount = '';
    // currencySelected = '';
    // currencyList: [''];
    // mtcn = '';

export interface User {
    name: string;
    account: {
        email: string;
        confirmEmail: string;
    },
    mtcn:number
}