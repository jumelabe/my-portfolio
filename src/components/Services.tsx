import React from 'react';

const Services: React.FC = () => {
  const services = [
    { title: 'Web Development', description: 'Building responsive and performant websites.' },
    { title: 'UI/UX Design', description: 'Creating intuitive and beautiful user interfaces.' },
    { title: 'Backend Solutions', description: 'Developing robust server-side logic and APIs.' },
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2>My Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
