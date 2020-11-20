import * as fetch from './node_modules/node-fetch';

interface IHandler{
    setNextHandler(handler: IHandler);
    handleRequest(request: any);
}

//the base code will be implemented in the abstract handler class
abstract class AbstractHandler implements IHandler{
    private nextHandler: IHandler;

    public setNextHandler(handler: IHandler): IHandler{
        //in this function the new handler will be proccessed
        this.nextHandler = handler;

        return handler
    }

    public handleRequest(request: any): any{
        //if a handler exists then process the request
        if(this.nextHandler){
            return this.nextHandler.handleRequest(request);
        }
    }
}

//now the concrete handlers

class ApiHandler extends AbstractHandler{
    public async handleRequest(url): Promise<any>{
        if(url){
            const request = await fetch(url);
            const response = await request.json();

            console.log(response);
        }
    }
}

class specificApiHandler extends AbstractHandler{
    public async handleRequest(url): Promise<any>{
        if(url){
            const request = await fetch(url + '/todos');
            const response = await request.json();

            console.log('This is an specific route');
            console.log(response);
        }
    }
}

const clientCode = () => {
    const api: any = 'https://jsonplaceholder.typicode.com/';

    const result = specificHandler.handleRequest(api).then(() => {
        //this will return an error intentionally
        apiHandler.handleRequest(api);
    });
    if(result){
        console.log('Api consumed');
    }
    else{
        console.log('Api was not consumed')
    }
}

const apiHandler = new ApiHandler();
const specificHandler = new specificApiHandler();

//we could continue adding handlers here
specificHandler.setNextHandler(apiHandler);

console.log('Chain begins, normal consumption > specific consumption');
clientCode();