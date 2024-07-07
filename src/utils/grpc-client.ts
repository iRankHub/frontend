import { Metadata } from "grpc-web";
import { LoginRequest, SignUpRequest } from "./auth_pb";
import { AuthServiceClient } from "./AuthServiceClientPb";
import { grpc } from '@improbable-eng/grpc-web';

const client = new AuthServiceClient('http://192.168.1.73:10000', null, null);

export const signUp = (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userRole: string;
}) => {
    return new Promise((resolve, reject) => {
        const request = new SignUpRequest();
        request.setFirstname(data.firstName);
        request.setLastname(data.lastName);
        request.setEmail(data.email);
        request.setPassword(data.password);
        request.setUserrole(data.userRole);
        // Set other fields as necessary

        // const metadata = new grpc.Metadata();

        // metadata.set('Access-Control-Allow-Credentials', 'true');
        // metadata.set('Access-Control-Allow-Origin', '*');
        // metadata.set('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
        // metadata.set('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

        // console.log(metadata);

        // const metadata: Metadata = {
        //     "ccess-Control-Allow-Credentials": 'true',
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
        //     'Access-Control-Allow-Headers': "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
        // }

        client.signUp(request, {}, (err, response) => {
            if (err) {
                console.log(err.message)
                reject(err);
            } else {
                resolve(response.toObject());
            }
        });
    });
};

export const login = (
    data: {
        email: string;
        password: string;
    }
) => {
    return new Promise((resolve, reject) => {
        const request = new LoginRequest();
        request.setEmail(data.email);
        request.setPassword(data.password)

        client.login(request, {}, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response.toObject())
            }
        })
    })
}