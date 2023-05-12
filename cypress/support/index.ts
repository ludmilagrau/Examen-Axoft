declare namespace Cypress{
    interface Chainable {
        dataId(value: string): Chainable<JQuery<HTMLElement>>
        codedamnLogin: (username:string, password:string) => void
    }
}