import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Server from "./server/Server";
import * as readline from "readline";

declare var process;
const server = new Server();

function setPromptQuestion(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite seu email: ", email =>{
        rl.question("Digite sua senha:", password =>{
            server.logIn(email, password);
            rl.close();
        })
    })

    rl.on("close", () => setPromptQuestion());
}

const middleware = new CheckUserMiddleware();
middleware.linkWith(new CheckPermissionMiddleware());
server.setMiddleware(middleware);
setPromptQuestion();