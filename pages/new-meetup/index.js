import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function MeetupPage() {
    const router = useRouter();

    async function addMeetupHandler(enteredmeetupdata) {
        const response = await fetch('api/meetups/', {
            method: 'POST',
            credentials: 'same-origin',
            body: JSON.stringify(enteredmeetupdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        router.replace('/');
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default MeetupPage;