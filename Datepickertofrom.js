import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal, Form } from "react-bootstrap";
import Calendar from 'react-calendar';
import "./DatepickerToFrom.css"; // Ensure to create this CSS file for styling
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

function Datepickertofrom() {
  const [disable, setDisable] = useState(true);
  const [todate, setTodate] = useState("");
  const [fromdate, setFromdate] = useState("");
  const [eventType, setEventType] = useState("");
  const [audience, setAudience] = useState("");
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [newEventData, setNewEventData] = useState({ title: "", imageUrl: "", time: "" });
  const [currentDate, setCurrentDate] = useState(new Date());
  const [eventList, setEventList] = useState([]); // List for custom added events

  // Update current date in real-time
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second
    return () => clearInterval(intervalId);
  }, []);

  // Initialize cards
  useEffect(() => {
    const initialCards = [
      {
        id: 1,
        title: "Couple Dancing Dandiya",
        imageUrl: "https://media.istockphoto.com/id/1421596859/vector/illustration-of-couple-playing-dandiya-in-disco-dandia-night-banner-poster-for-navratri.jpg?s=612x612&w=0&k=20&c=HFcBIqyr0pF4_cg7ytWEKxVKRlIN40OJesAuU9WsCBw=",
        date: new Date(),
        time: "10:00 AM"
      },
      {
        id: 2,
        title: "Live Tabla and Sitar Concert",
        imageUrl: "https://www.iimnagpur.ac.in/wp-content/uploads/2019/02/52441825_1999110353717412_7755445806714322944_o.jpg",
        date: new Date(),
        time: "11:00 AM"
      },
      {
        id: 3,
        title: "Yoga and Meditation retreat",
        imageUrl: "https://photos.tpn.to/er/tp/qh/np/653x490.jpg",
        date: new Date(),
        time: "12:00 PM"
      },
      {
        id: 4,
        title: "Bharatanatyam Recital",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASwkaGzZKzQP1CI-qWy7Sgu1WBCq2z6AssQ&s",
        date: new Date(),
        time: "1:00 PM"
      },
      {
        id: 5,
        title: "Bollywood Dance Night",
        imageUrl: "https://www.shutterstock.com/image-vector/bollywood-couple-dance-vector-illustration-600nw-1179538306.jpg",
        date: new Date(),
        time: "2:00 PM"
      },
      {
        id: 6,
        title: "Rangoli Workshop",
        imageUrl: "https://www.winni.in/celebrate-relations/wp-content/uploads/2019/10/Rangoli-Making-Lives-Colorful-e1571662144353.jpg",
        date: new Date(),
        time: "3:00 PM"
      },
    ];
    setCards(initialCards);
    setFilteredCards(initialCards);
  }, []);

  // Handle To Date change
  const handleToDate = (e) => {
    const getTodateValue = e.target.value;
    setTodate(getTodateValue);
    setDisable(false); // Enable from date when to date is selected
  };

  // Handle From Date change
  const handleFromDate = (e) => {
    const getFromdateValue = e.target.value;
    setFromdate(getFromdateValue);
  };

  // Handle Event Type change
  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
  };

  // Handle Audience change
  const handleAudienceChange = (e) => {
    setAudience(e.target.value);
  };

  // Handle form submission to filter cards
  const handleSubmit = (e) => {
    e.preventDefault();

    const toDate = new Date(todate);
    const fromDate = new Date(fromdate);

    if (toDate < fromDate) {
      alert("Please select a valid date.");
    } else {
      filterCards(fromDate, toDate);
    }
  };

  // Function to filter cards based on date range
  const filterCards = (fromDate, toDate) => {
    if (fromDate >= new Date('2023-09-30') && toDate <= new Date('2023-10-15')) {
      setFilteredCards([
        { id: 7, title: "Daandiya Nights", imageUrl: "https://t4.ftcdn.net/jpg/02/91/86/03/360_F_291860334_78srzTy8ltVSIUMYSZx169nWfPEWwnVt.jpg", date: fromDate, time: "10:00 AM" },
        { id: 8, title: "Kathak Dance Performance ", imageUrl: "https://thumbs.dreamstime.com/b/bengaluru-india-october-gorgeous-kathak-artist-performs-bengaluru-bengaluru-india-october-gorgeous-kathak-artist-186215079.jpg", date: fromDate, time: "11:00 AM" },
        { id: 9, title: "Bollywood Dance Night", imageUrl: "https://www.shutterstock.com/image-vector/bollywood-couple-dance-vector-illustration-600nw-1179538306.jpg", date: fromDate, time: "12:00 PM" },
        { id: 10, title: "Sufi Night ", imageUrl: "https://imgmedia.lbb.in/media/2022/06/62a72d867ce3232444b464be_1655123334390.jpg", date: fromDate, time: "1:00 PM" },
        { id: 11, title: "Street Food Festival", imageUrl: "https://c8.alamy.com/comp/2EHNRD5/street-food-festival-advertisement-poster-of-fastfood-burgers-sandwiches-or-snacks-and-dessert-meals-vector-design-of-donut-coffee-or-soda-drink-an-2EHNRD5.jpg", date: fromDate, time: "2:00 PM" },
      ]);
    } else {
      setFilteredCards([
        { id: 12, title: "Folk Music Festival", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJPtsY2DJrHc56SuTKfP76jQT7JzFYzIl9g&s", date: fromDate, time: "3:00 PM" },
        { id: 13, title: "Rangoli Workshop", imageUrl: "https://www.winni.in/celebrate-relations/wp-content/uploads/2019/10/Rangoli-Making-Lives-Colorful-e1571662144353.jpg", date: fromDate, time: "4:00 PM" },
        { id: 14, title: "Yoga and Meditation Retreat", imageUrl: "https://photos.tpn.to/er/tp/qh/np/653x490.jpg", date: fromDate, time: "5:00 PM" },
        { id: 15, title: "Live Tabla and Sitar Concert", imageUrl: "https://www.iimnagpur.ac.in/wp-content/uploads/2019/02/52441825_1999110353717412_7755445806714322944_o.jpg", date: fromDate, time: "6:00 PM" },
        { id: 16, title: "Bharatanatyam Recital ", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASwkaGzZKzQP1CI-qWy7Sgu1WBCq2z6AssQ&s", date: fromDate, time: "7:00 PM" },
        { id: 17, title: "Ayurvedic Wellness Talk", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSiCavsZmG-9e_Cjzc52MGJTz2nx86NaT0Zg&s", date: fromDate, time: "8:00 PM" },
        { id: 18, title: "Calligraphy Workshop", imageUrl: "https://creativeyatra.com/wp-content/uploads/2020/06/Calligraphy-Workshop.jpg", date: fromDate, time: "9:00 PM" },
        { id: 19, title: "Handloom and Textile Exhibition", imageUrl: "https://fashionvaluechain.com/wp-content/uploads/2023/08/NIFT-Mumbai-holds-%E2%80%98Hastavem-an-exhibition-of-Handloom-Textiles-.jpg", date: fromDate, time: "10:00 PM" },
        { id: 20, title: "Cultural Storytelling Session ", imageUrl: "https://english.onlinekhabar.com/wp-content/uploads/2021/04/storytelling-session-in-Banepa-scaled.jpg", date: fromDate, time: "11:00 PM" },
      ]);
    }
  };

  // Open Add Event Modal
  const handleAddEvent = () => {
    setShowAddEventModal(true);
  };

  // Handle Modal Submission to add a new event
  const handleModalSubmit = () => {
    const { title, imageUrl, time } = newEventData;

    if (!title || !imageUrl || !time) {
      alert("Please fill in all fields.");
      return;
    }

    const newCard = {
      id: cards.length + 1,
      title: title,
      imageUrl: imageUrl,
      date: new Date(), // Current date
      time: time,
    };
    setCards([newCard, ...cards]);
    setFilteredCards([newCard, ...filteredCards]);

    // Add the new event to eventList
    setEventList([{ id: newCard.id, title: newCard.title, date: newCard.date, time: newCard.time }, ...eventList]);

    setShowAddEventModal(false);
    setNewEventData({ title: "", imageUrl: "", time: "" });
  };

  // Handle deleting an event from the eventList and filteredCards
  const handleDeleteEvent = (id) => {
    setEventList(eventList.filter(event => event.id !== id));
    setFilteredCards(filteredCards.filter(card => card.id !== id));
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <React.Fragment>
      <Container fluid className="d-flex">
        {/* Left Side - Static Calendar Image */}
        <Col xs={12} md={4} lg={3} className="calendar-column pt-4"> {/* Added top padding */}
          <div className="calendar">
            <h4>Current Date</h4>
            <Calendar
              onChange={setCurrentDate}
              value={currentDate}
              tileClassName={({ date, view }) => {
                if (date.toDateString() === currentDate.toDateString()) {
                  return 'highlighted-date';
                }
                return null;
              }}
            />
            {/* Add some vertical padding between calendar and button */}
            <div className="mt-4">
              <Button variant="primary" onClick={handleAddEvent}>Add an Event</Button>
            </div>

            {/* Event List under "Add an Event" button */}
            <div className="event-list mt-4">
              <h5>Event List</h5>
              {eventList.length === 0 ? (
                <p>No events added.</p>
              ) : (
                <ul className="list-group">
                  {eventList.map(event => (
                    <li key={event.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <span>
                        <strong>{event.title}</strong> - {event.date.toLocaleDateString()} {event.time}
                      </span>
                      <Button variant="danger" size="sm" onClick={() => handleDeleteEvent(event.id)}>
                        Delete
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Col>

        {/* Right Side - Form and Cards */}
        <Col xs={12} md={8} lg={9} className="content-column">
          <Row className="fthight">
            <Col sm={12} md={10} className="mt-3 mx-auto">
              <h4 className="mb-4 text-center">Select Dates and Event Details</h4>

              <form onSubmit={handleSubmit}>
                {/* To Date Row */}
                <Row className="mb-4">
                  <Col sm={12} md={4}>
                    <label className="col-form-label">
                      To Date<span className="astriccolor">:-</span>
                    </label>
                  </Col>
                  <Col sm={12} md={8}>
                    <input
                      type="date"
                      className="form-control"
                      name="todate"
                      value={todate}
                      onChange={handleToDate}
                      required
                    />
                  </Col>
                </Row>

                {/* From Date Row */}
                <Row className="mb-4">
                  <Col sm={12} md={4}>
                    <label className="col-form-label">
                      From Date<span className="astriccolor">:-</span>
                    </label>
                  </Col>
                  <Col sm={12} md={8}>
                    <input
                      type="date"
                      className="form-control"
                      name="fromdate"
                      value={fromdate}
                      onChange={handleFromDate}
                      required
                      disabled={disable} // Disable until 'To Date' is selected
                    />
                  </Col>
                </Row>

                {/* Event Type Dropdown */}
                <Row className="mb-4">
                  <Col sm={12} md={4}>
                    <label className="col-form-label">
                      Event Type<span className="astriccolor">:-</span>
                    </label>
                  </Col>
                  <Col sm={12} md={8}>
                    <select
                      className="form-control"
                      value={eventType}
                      onChange={handleEventTypeChange}
                      required
                    >
                      <option value="">Select Event Type</option>
                      <option value="After Hours">After Hours</option>
                      <option value="Talks">Talks</option>
                      <option value="Fun for Kids">Fun for Kids</option>
                      <option value="Festivals">Festivals</option>
                      <option value="Guided Tours">Guided Tours</option>
                      <option value="Films">Films</option>
                      <option value="Performance">Performance</option>
                      <option value="Workshops">Workshops</option>
                    </select>
                  </Col>
                </Row>

                {/* Audience Dropdown */}
                <Row className="mb-4">
                  <Col sm={12} md={4}>
                    <label className="col-form-label">
                      Audience<span className="astriccolor">:- </span>
                    </label>
                  </Col>
                  <Col sm={12} md={8}>
                    <select
                      className="form-control"
                      value={audience}
                      onChange={handleAudienceChange}
                      required
                    >
                      <option value="">Select Audience</option>
                      <option value="Children and Family">Children and Family</option>
                      <option value="Teen">Teen</option>
                      <option value="Adult">Adult</option>
                      <option value="Accessible">Accessible</option>
                      <option value="Foreign-Language">Foreign-Language</option>
                    </select>
                  </Col>
                </Row>

                {/* Submit Button */}
                <Row className="mb-4">
                  <Col sm={12} md={4}></Col>
                  <Col sm={12} md={8}>
                    <button className="btn btn-success w-100">Submit</button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>

          {/* Cards Section */}
          <Row className="mt-5">
            <Col sm={12} md={10} className="mx-auto">
              <h5 className="mb-4 text-center">Filtered Events</h5>
              <Row>
                {filteredCards.length === 0 ? (
                  <Col>
                    <p className="text-center">No events found for the selected criteria.</p>
                  </Col>
                ) : (
                  filteredCards.map((card) => (
                    <Col xs={12} sm={6} md={4} key={card.id} className="mb-4">
                      <Card>
                        <Card.Img
                          variant="top"
                          src={card.imageUrl}  // Display the image from imageUrl
                          alt={card.title}
                        />
                        <Card.Body>
                          <Card.Title className="font-weight-bold">{card.title}</Card.Title>
                          <Card.Text>
                            <strong>Day, Date:</strong> {`${card.date.toLocaleDateString('en-US', { weekday: 'long' })}, ${card.date.toLocaleDateString()}`}<br />
                            <strong>Time:</strong> {card.time}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                )}
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>

      {/* Modal for Adding New Event */}
      <Modal show={showAddEventModal} onHide={() => setShowAddEventModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Event Title */}
            <Form.Group className="mb-3" controlId="eventTitle">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event title"
                value={newEventData.title}
                onChange={(e) => setNewEventData({ ...newEventData, title: e.target.value })}
                required
              />
            </Form.Group>

            {/* Event Image URL */}
            <Form.Group className="mb-3" controlId="eventImageUrl">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter image URL"
                value={newEventData.imageUrl}
                onChange={(e) => setNewEventData({ ...newEventData, imageUrl: e.target.value })}
                required
              />
              <Form.Text className="text-muted">
                Please provide a valid image URL.
              </Form.Text>
            </Form.Group>

            {/* Event Time */}
            <Form.Group className="mb-3" controlId="eventTime">
              <Form.Label>Event Time</Form.Label>
              <Form.Control
                type="time"
                value={newEventData.time}
                onChange={(e) => setNewEventData({ ...newEventData, time: e.target.value })}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddEventModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalSubmit}>
            Add Event
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default Datepickertofrom;
