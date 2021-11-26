import MeetupDetail from "../../components/meetups/MeetupDetail";

export const getStaticPaths = async () => {
    //fetch data from api
    const response = await fetch('http://localhost:3000/api/meetups/');
    const data = await response.json();

    const paths = data.map(meetup => {
        return {
            params: { meetupId: meetup.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.meetupId;    
    const res = await fetch('http://localhost:3000/api/meetups/' + id);
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            meetups: data
        }
    }
}

function Detailpage(props) {    
    const resdata = props.meetups[0];
    return <MeetupDetail
        title={resdata.title}
        image={resdata.image}
        address={resdata.address}
        description={resdata.description}    
    />
}

export default Detailpage;