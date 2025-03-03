import { twilioClient, twilioPhone } from "../../utils/twilio";


class SendMessageService {
    async execute(phone: any, message: any) {
        const data = await twilioClient.messages.create({
            from: twilioPhone,
            to: '+55' + phone,
            body: message
        });

        return data;
    }
}

export default SendMessageService;