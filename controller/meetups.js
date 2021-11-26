import { executeQuery } from "../config/db";

//add new meetup
const addMeetup = async (req, res) => {
    const { title, image, address, description } = req.body;    
    try {
        console.log(req.body);
        let meetupData = await executeQuery(
            "INSERT INTO meetup(title, image, address, description) VALUES(?,?,?,?)",
            [title, image, address, description]
        );
        res.status(201).json(meetupData);
    }
    catch (err) {
        res.status(400).json(err);
    }
}
//get all meetup
const getMeetup = async (req, res) => {
    try {
        let allmeetup = await executeQuery(
            "SELECT * FROM meetup"
        );
        res.status(200).json(allmeetup);
    }
    catch (err) {
        res.status(400).json(err);
    }
    //res.send("This is get all meetup API!");
}
//get by id
const getMeetupByid = async (req, res) => {
    let id = req.query.id;
    try{
        let singleMeetup = await executeQuery(
            "SELECT * FROM meetup WHERE id=?", [id]
        )
        if(singleMeetup.length > 0){
            res.status(200).json(singleMeetup);
        }
        else{
            res.status(400).json("No data found");
        }
        
    }
    catch(err){
        res.status(400).json(err);
    }
}

//update meetup
const updateMeetup = async (req, res) => {
    let id = req.query.id;    
    const { title, image, address, description } = req.body;
    try {
        let selectedmeetup = await executeQuery(
            "SELECT * FROM meetup WHERE id=?", [id]
        )        
        if (selectedmeetup.length > 0) {
            selectedmeetup = await executeQuery(
                "UPDATE meetup SET title=?,image=?,address=?,description=? WHERE id=?",
                [title, image, address, description, id]
            );
            res.status(200).json("Meetup updated Successfully!");
        }else{
            res.status(400).json("Sorry no Meetup found!");
        }
    }
    catch (err) {
        res.status(400).json(err);
    }
    res.send("For update");
}
//delete meetup
const deleteMeetup = async (req, res) => {
    let id = req.query.id;
    try{
        let deletedmeetup = await executeQuery(
            "SELECT * FROM meetup WHERE id=?", [id]
        ) 
        if(deletedmeetup.length > 0){
            deletedmeetup = await executeQuery(
                "DELETE FROM meetup WHERE id=?", [id]
            );        
            res.status(200).json("Meetup deleted successfully!")
        }else{
            res.status(400).json("No Meetup found!")
        }        
    }
    catch(err){
        res.status(400).json(err);
    }
}


export { addMeetup, getMeetup, getMeetupByid, updateMeetup, deleteMeetup }