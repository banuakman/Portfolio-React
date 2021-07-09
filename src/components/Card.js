import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import "./styles/Card.css";

function ProjectCards() {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          {projects.map((card) => (
            <div className="col">
              <Card>
                <div className="card-title">{card.title}</div>
                <Image title={card.title} src={card.image} />
                <div className="card-body">
                  {card.github} | {card.deployed}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07, // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
      }}
    >
      {children}
    </animated.div>
  );
}

function Image({ title, src }) {
  return <img className="card-image" src={src} alt={title} />;
}

const projects = [
  {
    title: "Focal Local",
    github: (
      <a
        href="https://github.com/banuakman/focal-local"
        target="_blank"
        style={{ color: "#1A1A1A" }}
      >
        GitHub
      </a>
    ),
    deployed: (
      <a
        href="https://focal-local.herokuapp.com/"
        target="_blank"
        style={{ color: "#1A1A1A" }}
      >
        Deployment
      </a>
    ),
    image: "/images/focal-local.png",
  },
  {
    title: "Wine-Log",
    github: (
      <a
        href="https://github.com/banuakman/wine-log"
        target="_blank"
        style={{ color: "#1A1A1A" }}
      >
        GitHub
      </a>
    ),
    deployed: (
      <a
        href="https://project2-women-power.herokuapp.com/"
        target="_blank"
        style={{ color: "#1A1A1A" }}
      >
        Deployment
      </a>
    ),
    image: "/images/wine-log.png",
  },
  {
    title: "What's for Dinner?",
    github: (
      <a
        href="https://github.com/banuakman/Whats-For-Dinner"
        target="_blank"
        style={{ color: "#1A1A1A" }}
      >
        GitHub
      </a>
    ),
    deployed: (
      <a
        href="https://benrgross.github.io/Whats-For-Dinner/"
        target="_blank"
        style={{ color: "#1A1A1A" }}
      >
        Deployment
      </a>
    ),
    image: "/images/whats_for_dinner.png",
  },
  {
    title: "Eat-Da-Burger",
    github: (
      <a
        href="https://github.com/banuakman/Eat-Da-Burger"
        target="_blank"
        style={{ color: "#1A1A1A" }}
      >
        GitHub
      </a>
    ),
    deployed: (
      <a
        href="https://nextburger.herokuapp.com/"
        target="_blank"
        style={{ color: "#1A1A1A" }}
      >
        Deployment
      </a>
    ),
    image: "/images/eat-da-burger.png",
  },
  {
    title: "Budget Tracker",
    github: (
      <a
        href="https://github.com/banuakman/BudgetTracker"
        target="_blank"
        style={{ color: "#1A1A1A" }}
      >
        GitHub
      </a>
    ),
    deployed: (
      <a
        href="https://onoffbudgettracker.herokuapp.com/"
        target="_blank"
        style={{ color: "#1A1A1A" }}
      >
        Deployment
      </a>
    ),
    image: "/images/budget-tracker.png",
  },
  {
    title: "Fitness Tracker",
    github: (
      <a
        href="https://github.com/banuakman/FitnessTracker"
        target="_blank"
        style={{ color: "#1A1A1A" }}
      >
        GitHub
      </a>
    ),
    deployed: (
      <a
        href="https://newfitnesstracker.herokuapp.com/"
        target="_blank"
        style={{ color: "#1A1A1A" }}
      >
        Deployment
      </a>
    ),
    image: "/images/fitness-tracker.png",
  },
];

export default ProjectCards;
