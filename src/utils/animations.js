
// export const animations = {

    
//   fadeInLeft: {
//     initial: { x: -100, opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   },

//   fadeInRight: {
//     initial: { x: 100, opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   },
  
// };

export const animations = {
  fadeInLeft: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
fadeInRight: {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
},
  heroImage: {
    initial: { x: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      y: [0, -17, 0],
       
    },
    transition: {
      x: {
        duration: 0.8,
        ease: "easeOut",
      },
      opacity: {
        duration: 0.8,
      },
      y: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },

  fadeInUp: {
    initial: {
      opacity: 0,
      y: 50,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: false,
      amount: 0.2,
    },
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },

  // 👇 Add this
  zoomIn: {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
    },
    viewport: {
      once: false,
      amount: 0.2,
    },
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
  fadeInLeftOnScroll: {
  initial: { x: -100, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: {
    once: false,
    amount: 0.2,
  },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
},
fadeInRightOnScroll: {
  initial: { x: 100, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: {
    once: false,
    amount: 0.2,
  },
  transition: {
    duration: 0.8,
    ease: "easeOut",
  },
},

};
