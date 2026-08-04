
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
};