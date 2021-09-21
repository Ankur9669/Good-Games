import React, { Component } from "react";
import Particles from "react-particles-js";

class BackgroundAnimationComponent extends Component {
  state = { width: "0px", height: "0px" };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`
    });
  };
  render() {
    const { width, height } = this.state;
    //console.log(width, height);
    return (
      <Particles
        {...this.state}
        params={{
          particles: {
            number: {
              value: 90,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#FF8303"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 5,
                color: "#000000"
              },
              image: {
                src: "",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.4,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 6,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable_auto: false,
              distance: 0,
              color: "#fff",
              opacity: 1,
              width: 1,
              condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600
              }
            },
            move: {
              enable: true,
              speed: 3,
              direction: "top-right",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false
              },
              onclick: {
                enable: false
              },
              resize: true
            }
          },
          retina_detect: true
        }}
      />
    );
  }
}

export default BackgroundAnimationComponent;
