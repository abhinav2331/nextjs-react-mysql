import MeetupList from "../components/meetups/MeetupList";

const DUMMT_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
        address: 'Dummy address 4747 ffh',
        description: "This is first meetup!"
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
        address: 'Dummy address 2D',
        description: "This is second meetup!"
    }
]

function HomePage(props){    
    return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps(){
    //fetch data from api
    const response = await fetch('http://localhost:3000/api/meetups');
    const data = await response.json();

    if (!data) {
        return {
          notFound: true,
        }
      }        

    return{
        props:{
            meetups: data
        },
        //revalidate: 10
    }
}

export default HomePage;