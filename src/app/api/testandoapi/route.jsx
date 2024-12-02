import {NextResponse} from 'next/server';

export async function GET(req){
    if(req.method === "GET"){
        /**
         * return NextResponse.json([{nome: 'reinaldo'},{nome: 'Rafael'}]);
         */
        const data = [{
            nome: 'Reinaldo',
            idade: '34',
            esporte: 'Futebol'
        },{
            nome: 'Rafael',
            idade: '22',
            esporte: 'corrida'
        }]
        return NextResponse.json(data);
        
    }else{
        console.log('algo errado.')
    }
    
}