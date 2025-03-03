import { twilioClient, twilioPhone } from "../../utils/twilio";

class CreateCallService {
    async execute(phone: string) {
        const call = await twilioClient.calls.create({
            from: twilioPhone,
            to: "+55" + phone,
            url: "http://demo.twilio.com/docs/classic.mp3",
        });

        return call;
    }
}

export default CreateCallService;