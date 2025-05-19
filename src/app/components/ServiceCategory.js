"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

const ServiceCategory = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("servicecategory.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <>
      <div className="service-category-blk">
        <div className="container my-5">
          <div className="row">
            {events.map((event, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 text-center">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={200}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{event.title}</h5>
                    <a href="#" className="btn btn-primary">
                      {event.button}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceCategory;
