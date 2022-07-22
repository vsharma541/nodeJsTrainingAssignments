const AWS = require('aws-sdk');
AWS.config.update({
    "region": "us-east-1"
})

const dynamo = new AWS.DynamoDB.DocumentClient();

/**
 * Demonstrates a simple HTTP endpoint using API Gateway. You have full
 * access to the request and response payload, including headers and
 * status code.
 *
 * To scan a DynamoDB table, make a GET request with the TableName as a
 * query string parameter. To put, update, or delete an item, make a POST,
 * PUT, or DELETE request respectively, passing in the payload to the
 * DynamoDB API as a JSON body.
 */
exports.handler = async (event, context) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    // console.log('method event:', event.httpMethod);
    let reqMethod = event.httpMethod;
    if(!reqMethod) {
        reqMethod = event.requestContext.http;
        if(reqMethod) {
            reqMethod = reqMethod.method;
        }else {
            reqMethod = event.requestContext.httpMethod;
        }
    }
    console.log('req method is - ', reqMethod);
    
    let body, eventBody;
    if(event.body) {
        eventBody = JSON.parse(event.body);
        console.log('body is - ', eventBody);
    }
    
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
    };

    let params = {};
    try {
        switch (reqMethod) {
            case 'DELETE':
                params = {
                    "TableName": event.queryStringParameters.TableName,
                    "Key": {
                      id: event.queryStringParameters.id
                    }
                }
                console.log(params);
                body = await dynamo.delete(params).promise();
                break;
            case 'GET':
                body = await dynamo.scan({ TableName: event.queryStringParameters.TableName }).promise();
                break;
            case 'POST':
                params = {
                    "TableName": eventBody.TableName,
                    "Item": eventBody.content
                }
                console.log(params);
                body = await dynamo.put(params).promise();
                break;
            case 'PUT':
                params = {
                    TableName: eventBody.TableName,
                    Key: {
                      id: eventBody.content.id,
                    },
                    UpdateExpression: `set firstName = :firstName`,
                    ExpressionAttributeValues: {
                      ":firstName": eventBody.content.firstName,
                    },
                }
                console.log(params);
                body = await dynamo.update(params).promise();
                break;
            default:
                throw new Error(`Unsupported method "${event.httpMethod}"`);
        }
    } catch (err) {
        statusCode = '400';
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    console.log(body);
    return {
        statusCode,
        body,
        headers,
    };
};
