import React, { Component } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "./App.css";
import events from "./events";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { Modal, Button } from "react-bootstrap";

const localizer = momentLocalizer(moment);
const CalComponent = withDragAndDrop(Calendar);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { events, isModalShow: false, title: "", currentEvent: null };
  }

  moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const { events } = this.state;

    const idx = events.indexOf(event);
    let allDay = event.allDay;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const updatedEvent = { ...event, start, end, allDay };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    this.setState({
      events: nextEvents,
    });

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  };

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state;

    const nextEvents = events.map((existingEvent) => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    this.setState({
      events: nextEvents,
    });

    //alert(`${event.title} was resized to ${start}-${end}`)
  };

  newEvent = (event) => {
    this.setState({ isModalShow: true, currentEvent: event });
  };

  addNewEvent = () => {
    const { title, currentEvent } = this.state;
    const event = currentEvent;
    if (title !== "" && event !== null) {
      let idList = this.state.events.map((a) => a.id);
      let newId = Math.max(...idList) + 1;
      let hour = {
        id: newId,
        title,
        allDay: event.slots.length === 1,
        start: event.start,
        end: event.end,
      };
      this.setState({
        events: this.state.events.concat([hour]),
        currentEvent: null,
        isModalShow: false,
        title: "",
      });
    } else {
      alert("Title is required!");
    }
  };

  componentWillUnmount() {
    this.setState({ title: "", isModalShow: false, currentEvent: null });
  }

  render() {
    return (
      <div className="App">
        <div
          style={{
            height: 50,
            backgroundColor: "#eee",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
          <h3>Calendar</h3>
        </div>
        <CalComponent
          style={{ height: "100vh" }}
          selectable
          localizer={localizer}
          events={this.state.events}
          onEventDrop={this.moveEvent}
          resizable
          onSelectSlot={this.newEvent}
          onDragStart={console.log}
          defaultView={Views.MONTH}
          // defaultDate={new Date(2020, 3, 12)}
          defaultDate={moment().toDate()}
        />
        <div
          style={{
            height: 50,
            backgroundColor: "#bebeae",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Developed with{" "}
          <span style={{ color: "red", marginRight: 5, marginLeft: 5 }}>
            {" "}
            &#10084;
          </span>{" "}
          by
          <a
            href="https://mohitbaghel.com"
            target="blank"
            style={{ marginLeft: 5 }}
          >
            {" "}
            Mohit Singh Baghel
          </a>
        </div>
        <Modal
          show={this.state.isModalShow}
          size="md"
          bsSize="medium"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => this.setState({ isModalShow: false })}
          dialogClassName="modal-90w"
          animation={false}
          backdrop={false}
          backdropStyle={{ backgroundColor: "rgba(252,247,245, 0.75)" }}
          onBackdropClick={() => this.setState({ isModalShow: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h4 style={{ position: "absolute" }}>Add New Event</h4>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ backgroundColor: "#fff" }}>
            <div className="form-field">
              <label>Title</label>
              <input
                className="form-control"
                onChange={(e) => this.setState({ title: e.target.value })}
                value={this.state.title}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              active={true}
              variant={"danger"}
              onClick={() => this.setState({ isModalShow: false })}
              bsSize={"small"}
            >
              Cancel
            </Button>

            <Button
              active={true}
              variant={"success"}
              onClick={() => this.addNewEvent()}
              bsSize={"sm"}
              type={"button"}
              // block
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
