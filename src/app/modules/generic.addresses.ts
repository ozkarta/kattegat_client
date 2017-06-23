
export class GenericAddresses{

    protected httpProtocol: string;
    protected httpsProtocol: string;
    protected wsProtocol: string;

    protected serverIP: string;
    protected serverPort: string;
    protected server: string;
    
    protected genericAPI_url: string;
    protected genericWS_url: string;     

    public constructor(){

        this.httpProtocol = 'http:';
        this.httpsProtocol = 'https:';
        this.wsProtocol = 'ws:';

        
        this.serverIP = "localhost"
        this.serverPort = '1992';

        this.server = this.serverIP + ':' + this.serverPort;

        this.genericAPI_url = this.httpProtocol+'//'+ this.server + '/api';

        this.genericWS_url = this.wsProtocol + '//' + this.server;
    }
}