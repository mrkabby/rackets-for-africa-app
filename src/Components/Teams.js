import React from 'react';
import Franny from '../images/Franny.jpg';
import Duke from '../images/george.jpg';
import FTE from '../images/FTE.jpg';
import Frank from '../images/Frank.jpg';

const TeamGrid = () => {
  const teamMembers = [
    {
      name: 'Francisca Nyarko',
      role: 'CEO',
      description:
        'Francisca leads the organization with vision and strategic direction, ensuring sustainable growth and impactful outcomes.',
      image: Franny,
    },
    {
      name: 'George Duke Nyarko',
      role: 'Operations Manager',
      description:
        'George ensures the smooth execution of day-to-day operations, optimizing processes for maximum efficiency and success.',
      image: Duke,
    },
    {
      name: 'Frank Tony Eshun',
      role: 'Advisor',
      description:
        'Frank offers strategic advice and insights, helping the organization navigate challenges and achieve its goals.',
      image: FTE,
    },
    {
      name: 'Frank Eshun',
      role: 'Trustee',
      description:
        'Frank serves as a trustee, overseeing governance and ensuring the organization’s mission aligns with its practices.',
      image: Frank,
    },
  ];

  return (
    <div className="bg-background p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-primary">Our Team</h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
          Meet the dedicated individuals who drive our mission forward with passion, expertise, and commitment to excellence.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden"
          >
            <img
              className="w-full h-60 object-cover"
              src={member.image}
              alt={`${member.name} Portrait`}
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
