import { Message } from '@/model/User';

export interface AipResponse{
    success:boolean;
    message:string;
    isAcceptingMessage?:boolean;
    messages?:Array<Message>;
}