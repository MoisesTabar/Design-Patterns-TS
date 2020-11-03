import * as fetch from './node_modules/node-fetch';
/*
* The user we will declare, uses common operations for the real subject
* and the proxy
*/
interface IUser{
    request(): any
}

/**
* The realUser contains the main bussiness logic.
*/
class realUser implements IUser{
    public api: string;
    public async request(): Promise<void>{
        const url = await fetch(this.api);
        const response = await url.json();

        console.log(response);
    }
}

/**
 * The proxy has an inteface identical to the RealSubject
 */
class proxy implements IUser{   
    private realUser: realUser;

    constructor(realUser: realUser){
        this.realUser = realUser;
    }

    /**
     * As explained in the readme file
     * The most common applications of the Proxy pattern are lazy loading,
     * caching, controlling the access, logging, etc. A Proxy can perform one of
     * these things and then, depending on the result, pass the execution to the
     * same method in a linked RealSubject object.
     */

    public request(): void{
        if(this.checkAccess()){
            this.realUser.request();
        }
     }

     private checkAccess(): string{
        if(this.realUser.api){
            return 'Success!'
        }
        else
        {
            return 'Error'
        }
     }
}

/**
 * The client code is supposed to work with all objects (both subjects and
 * proxies) via the Subject interface in order to support both real subjects and
 * proxies. 
 */

 const clientCode = (user: IUser) => {
     user.request();
 }

 //client executing the code with a real user
 const newUser = new realUser();
 newUser.api = 'https://jsonplaceholder.typicode.com/users/1';
 clientCode(newUser);
 console.log(`User requested the api ${newUser.api} as a real user`);

 console.log('-------------------------------------------------------')

 //client executing the code with a proxy
 const newProxy = new proxy(newUser);
 clientCode(newProxy);
 console.log(`User requested the api ${newUser.api} using a proxy`);

 