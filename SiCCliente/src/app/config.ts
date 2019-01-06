export class Config {

    //static sicGcUrl = 'https://3da-arqsi-g1-sic.azurewebsites.net';
    //static sicEncomendasUrl = 'https://sic-encomendas.herokuapp.com/';
    //static sicClient = 'https://arqsi-g1-sic-client.herokuapp.com/';
    
    static sicGcUrl = process.env.SIC_GC_URL
    static sicEncomendasUrl = process.env.SIC_ENC_URL
    static sicEntregasUrl = process.env.SIC_ENTREGAS_URL
}