/**
 * @typedef {Object} Menu
 * @property {number} id
 * @property {string} title
 * @property {string} [path]
 * @property {boolean} newTab
 * @property {Menu[]}
 */

const MenuData = [
  
    {
      id: 1,
      title: "About",
      path: "/about",
      newTab: false,
    },
    {
      id: 2,
      title: "Our Services",
      path: "/Services",
      newTab: false,
    },
    {
      id: 3,
      title: "FAQ",
      path: "/Faq",
      newTab: false,
    },
    {
        id: 4,
        title: "Support",
        path: "/support",
        newTab: false,
      },
    {
        id: 5,
        title: "Book a Ride",
        path: "/support",
        newTab: false, 
    },
  ];
  
  export default MenuData;
  