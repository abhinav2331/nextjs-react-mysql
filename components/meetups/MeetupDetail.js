
import classes from './MeetupItem.module.css';

function MeetupDetail(props) {
    return <>
        <div className={classes.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
    </>
}

export default MeetupDetail;