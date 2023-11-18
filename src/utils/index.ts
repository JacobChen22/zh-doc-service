import {compareSync, hashSync} from "bcrypt";

const saltRounds = 5;

export function encrypt(plainText: string) {
    return hashSync(plainText, saltRounds);
}

export function compareEncryptPwd(plainPwd: string, encPwd: string) {
    return compareSync(plainPwd, encPwd)
}