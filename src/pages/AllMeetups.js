import MeetupList from '../components/meetups/MeetupList';
import { useState, useEffect } from 'react';



function AllMeetupsPage() {

    const [isLoading, setIsLoading] = useState(false);
    const [loadedMeetups, setLoadedMeetups] = useState([]);


    useEffect(() => {
      setIsLoading(true);
      fetch(
      "https://react-project-fea92-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup);
        }


        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
    }, []);


    if (isLoading) {
      return (
        <section>
          <p> loading...</p>
        </section>
      );
    }

    return (
    <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups}/>
        </section>
    )
}


export default AllMeetupsPage;
