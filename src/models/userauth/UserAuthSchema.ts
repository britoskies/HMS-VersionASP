import { AxiosHeaders } from './../../../node_modules/axios/index.d';

interface iUserDataInfo {
    hasError: boolean
    message: string
}

interface iUserData {
    address: string
    dateBorn: string
    email: string
    emergencyContact: string
    firstName: string
    gender: number
    id: string
    identification: string
    imgProfile: string
    info: iUserDataInfo
    isVerified: boolean
    jwToken: string
    lastName: string
    phoneNumber: string
    roles: string[]
    typeIdentification: number
    userName: string
}

export interface iUserAuth { 
    config: Object
    data: iUserData
    headers: AxiosHeaders
    request: XMLHttpRequest
    status: number
    statusText: string
}