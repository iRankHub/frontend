import { Metadata } from "grpc-web";
import { AuthServiceClient } from "../lib/grpc/proto/AuthServiceClientPb";
import { LoginRequest, SignUpRequest } from "@/lib/grpc/proto/auth_pb";

const ENVOY_PROXY_URL = 'http://192.168.1.73:10000';
const client = new AuthServiceClient(ENVOY_PROXY_URL, null, null);

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

        client.signUp(request, {}, (err, response) => {
            if (err) {
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