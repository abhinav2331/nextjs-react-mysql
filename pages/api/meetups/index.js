import nc from "next-connect";
import { addMeetup, getMeetup } from "../../../controller/meetups";

const handler = nc({});

handler.post(addMeetup);
handler.get(getMeetup);


export default handler;