const EventList = ({events}) => {

  return ( 
    <div className="event-list">
        <div className="container">
          <h1 className="text-light pt-5">Events</h1>
          <div className="card-deck pt-5">
          {events.map((event)=>(
                  // create a card
                  <div className="col-4">
                  <div className="card bg-dark text-light">
                      <div className="event-preview"  key={event.id}>
                          <div className="card-title">
                              <h4>{event.title}</h4>
                          </div>
                          <div className="card-body">
                            <img  src={event.url} alt="" />  
                          </div>
                          <div className="card-footer">
                              <p>{event.date}</p> 
                              <button className="btn btn-outline-warning">See More</button> 
                          </div>    
                      </div>
                  </div>
                </div>           
              ))}
          </div>
        </div>
    </div>
   );
}
 
export default EventList;

