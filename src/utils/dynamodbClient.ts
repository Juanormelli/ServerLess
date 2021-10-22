import {DynamoDB} from "aws-sdk"

const option= {
    region:"localhost",
    endpoint:"http://localhost:8000"

}

const isOffline = ()=>{
    return process.env.IS_OFFLINE;
}


const document = isOffline() ? new DynamoDB.DocumentClient(option): new DynamoDB.DocumentClient()


export {document}