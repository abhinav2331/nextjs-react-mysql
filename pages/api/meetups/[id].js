import nc from "next-connect";
import { updateMeetup, deleteMeetup, getMeetupByid } from "../../../controller/meetups";

const handler = nc({});

handler.put(updateMeetup);
handler.delete(deleteMeetup);
handler.get(getMeetupByid);

export default handler;