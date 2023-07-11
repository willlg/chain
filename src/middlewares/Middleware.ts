export default abstract class Middleware{
    public next: Middleware;

    public linkWith(next: Middleware) : Middleware{
        this.next = next;
        return next;
    }

    public abstract check(email, password) : boolean;

    protected checkNext(email: string, password: string) : boolean{
        if(this.next === undefined){
            return true;
        }

        return this.next.check(email, password);
    }
}