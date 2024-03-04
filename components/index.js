import Download from "./Home/Download";
import DriverSection from "./Home/DriverSection";
import HeroSection from "./Home/HeroSection";
import PassengerSection from "./Home/PassengerSection";
import Service from "./Home/Service";
import Faq from "./Global/Faq";
import Footer from "./Global/Footer";
import Support from "./Support/Support";
import HeroAbout from "./About/HeroAbout";
import Vision from "./About/Vision";
import TeamSection from "./About/TeamSection";
import Value from "./About/Value";
import Team from "./About/Team";
import Navbar from "./Global/Navbar";
import Login from "./Auth/Login";
import Sidebar from "./dashboard/Sidebar";
import Clients from "./dashboard/Clients";
import Dashboard from "./dashboard/Dashboard";
import Drivers from "./dashboard/Drivers";
import Orders from "./dashboard/Orders";
import Rides from "./dashboard/Rides";
import Shift from "./dashboard/Shift";
import Settings from "./dashboard/Settings";
import Moderators from "./dashboard/Moderators";
import Branches from "./dashboard/Branches";
import CarClasses from "./dashboard/CarClasses";
import LiveMap from "./dashboard/LiveMap";
import Table from "./dashboard/pageDashboard/Table";
import KnowledgeBase from "./dashboard/pageDashboard/KnowledgeBase";
import TopDriver from "./dashboard/pageDashboard/TopDriver";
import MyChart from "./dashboard/pageDashboard/MyChart";
import Header from "./dashboard/header/Header";
import { faker } from "@faker-js/faker";

export {
  Navbar,
  Download,
  DriverSection,
  PassengerSection,
  Service,
  Faq,
  Footer,
  Support,
  HeroAbout,
  HeroSection,
  Vision,
  Value,
  TeamSection,
  Team,
  Login,
  Sidebar,
  Clients,
  Dashboard,
  Drivers,
  Orders,
  Rides,
  Shift,
  Settings,
  Moderators,
  Branches,
  CarClasses,
  LiveMap,
  Table,
  KnowledgeBase,
  TopDriver,
  MyChart,
  Header,
};

// Export the data from the index.js file
export const drivers = [
  {
    id: 1,
    name: "Driver 1",
    image:
      "https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
    number: "D123",
    earnings: 5000,
    details: {
      family: "Family 1",
      state: "State 1",
      city: "City 1",
      experience: "5 years",
    },
  },
  {
    id: 2,
    name: "Driver 2",
    image:
      "https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
    number: "D123",
    earnings: 5000,
    details: {
      family: "Family 2",
      state: "State 2",
      city: "City 4",
      experience: "5 years",
    },
  },
  {
    id: 3,
    name: "Driver 2",
    image:
      "https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
    number: "D123",
    earnings: 300,
    details: {
      family: "Family 2",
      state: "State 3",
      city: "City 2",
      experience: "5 years",
    },
  },
  {
    id: 4,
    name: "Driver 4",
    image:
      "https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
    number: "D123",
    earnings: 300,
    details: {
      family: "Family 2",
      state: "State 3",
      city: "City 2",
      experience: "5 years",
    },
  },
  {
    id: 5,
    name: "Driver 5",
    image:
      "https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
    number: "D123",
    earnings: 300,
    details: {
      family: "Family 2",
      state: "State 3",
      city: "City 2",
      experience: "5 years",
    },
  },
  {
    id: 6,
    name: "Driver 6",
    image:
      "https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
    number: "D123",
    earnings: 300,
    details: {
      family: "Family 2",
      state: "State 3",
      city: "City 2",
      experience: "5 years",
    },
  },
  // Add more drivers as needed
];

export const tableData = [
  {
    id: 1,
    image:
      "https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
    age: 25,
    earnings: 500,
    year: 2020,
    salary: 3000,
    limit: 1000,
  },
  {
    id: 2,
    image:
      "https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
    age: 30,
    amount: 600,
    year: 2021,
    salary: 4000,
    limit: 1500,
  },
  {
    id: 3,
    image:
      "https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
    age: 35,
    amount: 700,
    year: 2022,
    salary: 5000,
    limit: 2000,
  },
  {
    id: 4,
    image:
      "https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
    age: 40,
    amount: 800,
    year: 2023,
    salary: 6000,
    limit: 2500,
  },
  {
    id: 5,
    image:
      "https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
    age: 45,
    amount: 900,
    year: 2024,
    salary: 7000,
    limit: 3000,
  },
  {
    id: 6,
    image:
      "https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
    age: 50,
    amount: 1000,
    year: 2025,
    salary: 8000,
    limit: 3500,
  },
  {
    id: 7,
    image:
      "https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
    age: 55,
    amount: 1100,
    year: 2026,
    salary: 9000,
    limit: 4000,
  },
  {
    id: 8,
    image:
      "https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
    age: 60,
    amount: 1200,
    year: 2027,
    salary: 10000,
    limit: 4500,
  },
  {
    id: 9,
    image:
      "https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
    age: 65,
    amount: 1300,
    year: 2028,
    salary: 11000,
    limit: 5000,
  },
  {
    id: 10,
    image:
      "https://images.freeimages.com/variants/4D1pn6Vd33yWxmL2qE5BHbph/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d",
    age: 70,
    amount: 1400,
    year: 2029,
    salary: 12000,
    limit: 5500,
  },
];

export const graphOptions = {
  scales: {
    x: {
      title: {
        display: true,
        text: "Month",
      },
    },
    y: {
      title: {
        display: false,
        text: "Amount",
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
};

export const USERS = [
  {
    id: 1,
    profile: "https://robohash.org/odioetenim.png?size=50x50&set=set1",
    firstName: "Giacinta",
    lastName: "MacFadin",
    email: "gmacfadin0@imgur.com",
    age: 31,
    visit: 23,
    progress: "Bandage - Flexible Neon",
  },
  {
    id: 2,
    profile:
      "https://robohash.org/doloremlaudantiumreprehenderit.png?size=50x50&set=set1",
    firstName: "Skell",
    lastName: "Goolding",
    email: "sgoolding1@diigo.com",
    age: 83,
    visit: 61,
    progress: "Veal - Inside Round / Top, Lean",
  },
  {
    id: 3,
    profile: "https://robohash.org/doloresvoluptasest.png?size=50x50&set=set1",
    firstName: "Babb",
    lastName: "Karadzas",
    email: "bkaradzas2@feedburner.com",
    age: 37,
    visit: 87,
    progress: "Sea Bass - Fillets",
  },
  {
    id: 4,
    profile: "https://robohash.org/utrepellendusnobis.png?size=50x50&set=set1",
    firstName: "Ashby",
    lastName: "Fulbrook",
    email: "afulbrook3@bloglines.com",
    age: 54,
    visit: 40,
    progress: "Wine - Placido Pinot Grigo",
  },
  {
    id: 5,
    profile: "https://robohash.org/providentipsaquo.png?size=50x50&set=set1",
    firstName: "Cynthie",
    lastName: "Earlam",
    email: "cearlam4@sitemeter.com",
    age: 95,
    visit: 38,
    progress: "Thyme - Fresh",
  },
  {
    id: 6,
    profile: "https://robohash.org/sederrorcorrupti.png?size=50x50&set=set1",
    firstName: "Kirsteni",
    lastName: "Coogan",
    email: "kcoogan5@ucsd.edu",
    age: 71,
    visit: 26,
    progress: "Longos - Assorted Sandwich",
  },
  {
    id: 7,
    profile:
      "https://robohash.org/magniexpeditaperferendis.png?size=50x50&set=set1",
    firstName: "Rosalinde",
    lastName: "Eykel",
    email: "reykel6@biblegateway.com",
    age: 71,
    visit: 76,
    progress: "Brandy Apricot",
  },
  {
    id: 8,
    profile: "https://robohash.org/illumesterror.png?size=50x50&set=set1",
    firstName: "Alexei",
    lastName: "Rosendahl",
    email: "arosendahl7@geocities.com",
    age: 78,
    visit: 14,
    progress: "Soup - Knorr, Chicken Noodle",
  },
  {
    id: 9,
    profile: "https://robohash.org/oditomnisdicta.png?size=50x50&set=set1",
    firstName: "Lukas",
    lastName: "Sherer",
    email: "lsherer8@tinypic.com",
    age: 80,
    visit: 17,
    progress: "Compound - Orange",
  },
  {
    id: 10,
    profile:
      "https://robohash.org/exercitationemrepellatet.png?size=50x50&set=set1",
    firstName: "Marcia",
    lastName: "Maud",
    email: "mmaud9@ustream.tv",
    age: 51,
    visit: 13,
    progress: "Champagne - Brights, Dry",
  },
  {
    id: 11,
    profile: "https://robohash.org/etautcorporis.png?size=50x50&set=set1",
    firstName: "Hervey",
    lastName: "Jimmison",
    email: "hjimmisona@reference.com",
    age: 49,
    visit: 58,
    progress: "Oil - Olive",
  },
  {
    id: 12,
    profile: "https://robohash.org/doloribusbeataeest.png?size=50x50&set=set1",
    firstName: "Morena",
    lastName: "Elies",
    email: "meliesb@uiuc.edu",
    age: 36,
    visit: 61,
    progress: "Muffin Mix - Banana Nut",
  },
  {
    id: 13,
    profile: "https://robohash.org/quametveniam.png?size=50x50&set=set1",
    firstName: "Charmane",
    lastName: "Schindler",
    email: "cschindlerc@latimes.com",
    age: 54,
    visit: 63,
    progress: "Pail With Metal Handle 16l White",
  },
  {
    id: 14,
    profile: "https://robohash.org/illoautet.png?size=50x50&set=set1",
    firstName: "Grover",
    lastName: "Blose",
    email: "gblosed@miitbeian.gov.cn",
    age: 51,
    visit: 93,
    progress: "Steam Pan Full Lid",
  },
  {
    id: 15,
    profile:
      "https://robohash.org/dignissimosdoloremducimus.png?size=50x50&set=set1",
    firstName: "Cal",
    lastName: "Semrad",
    email: "csemrade@indiatimes.com",
    age: 25,
    visit: 86,
    progress: "Venison - Ground",
  },
  {
    id: 16,
    profile: "https://robohash.org/sequipraesentiumvel.png?size=50x50&set=set1",
    firstName: "Roddie",
    lastName: "Wayland",
    email: "rwaylandf@reference.com",
    age: 79,
    visit: 80,
    progress: "Mussels - Frozen",
  },
  {
    id: 17,
    profile:
      "https://robohash.org/praesentiumducimussint.png?size=50x50&set=set1",
    firstName: "Timmie",
    lastName: "Tathacott",
    email: "ttathacottg@instagram.com",
    age: 78,
    visit: 19,
    progress: "Wine - Taylors Reserve",
  },
  {
    id: 18,
    profile: "https://robohash.org/aperiamiureexpedita.png?size=50x50&set=set1",
    firstName: "Harriett",
    lastName: "Aimable",
    email: "haimableh@kickstarter.com",
    age: 30,
    visit: 25,
    progress: "Cranberries - Fresh",
  },
  {
    id: 19,
    profile: "https://robohash.org/sedsitid.png?size=50x50&set=set1",
    firstName: "Rosalynd",
    lastName: "Boc",
    email: "rboci@elpais.com",
    age: 60,
    visit: 33,
    progress: "Wine - Montecillo Rioja Crianza",
  },
  {
    id: 20,
    profile:
      "https://robohash.org/nobisdolorumvoluptatem.png?size=50x50&set=set1",
    firstName: "Donna",
    lastName: "McCaughren",
    email: "dmccaughrenj@go.com",
    age: 23,
    visit: 5,
    progress: "Radish",
  },
  {
    id: 21,
    profile: "https://robohash.org/doloremexet.png?size=50x50&set=set1",
    firstName: "Gerry",
    lastName: "Tummons",
    email: "gtummonsk@angelfire.com",
    age: 79,
    visit: 65,
    progress: "Chilli Paste, Hot Sambal Oelek",
  },
  {
    id: 22,
    profile: "https://robohash.org/doloresquoeos.png?size=50x50&set=set1",
    firstName: "Bee",
    lastName: "Handslip",
    email: "bhandslipl@tiny.cc",
    age: 66,
    visit: 87,
    progress: "Ocean Spray - Kiwi Strawberry",
  },
  {
    id: 23,
    profile: "https://robohash.org/adsedodit.png?size=50x50&set=set1",
    firstName: "Steven",
    lastName: "Koeppke",
    email: "skoeppkem@unicef.org",
    age: 95,
    visit: 84,
    progress: "Appetizer - Assorted Box",
  },
  {
    id: 24,
    profile: "https://robohash.org/commodiutlaborum.png?size=50x50&set=set1",
    firstName: "Blane",
    lastName: "Shannahan",
    email: "bshannahann@time.com",
    age: 47,
    visit: 86,
    progress: "Olives - Green, Pitted",
  },
  {
    id: 25,
    profile: "https://robohash.org/totamquasienim.png?size=50x50&set=set1",
    firstName: "Ogdon",
    lastName: "Bernardotti",
    email: "obernardottio@ucoz.com",
    age: 79,
    visit: 50,
    progress: "Pear - Prickly",
  },
  {
    id: 26,
    profile:
      "https://robohash.org/consequuntursuntfuga.png?size=50x50&set=set1",
    firstName: "Saunderson",
    lastName: "Guswell",
    email: "sguswellp@whitehouse.gov",
    age: 38,
    visit: 33,
    progress: "Wine - Chablis J Moreau Et Fils",
  },
  {
    id: 27,
    profile: "https://robohash.org/sednemolaborum.png?size=50x50&set=set1",
    firstName: "Mina",
    lastName: "Sawley",
    email: "msawleyq@123-reg.co.uk",
    age: 65,
    visit: 66,
    progress: "Sauce - Marinara",
  },
  {
    id: 28,
    profile: "https://robohash.org/laborumharumipsam.png?size=50x50&set=set1",
    firstName: "Isacco",
    lastName: "Cuddy",
    email: "icuddyr@istockphoto.com",
    age: 86,
    visit: 74,
    progress: "Cassis",
  },
  {
    id: 29,
    profile: "https://robohash.org/natusdoloribustotam.png?size=50x50&set=set1",
    firstName: "Laura",
    lastName: "Cargenven",
    email: "lcargenvens@deliciousdays.com",
    age: 28,
    visit: 97,
    progress: "Sterno - Chafing Dish Fuel",
  },
  {
    id: 30,
    profile:
      "https://robohash.org/namconsequunturdolorem.png?size=50x50&set=set1",
    firstName: "Jarrid",
    lastName: "Westhoff",
    email: "jwesthofft@miitbeian.gov.cn",
    age: 62,
    visit: 97,
    progress: "Pasta - Fett Alfredo, Single Serve",
  },
];

export const Data = [
  {
    id: 0,
    firstName: "Tanner",
    lastName: "Linsley",
    age: 33,
    visits: 100,
    progress: 50,
    status: "Married",
    homeLocation: "London",
    workLocation: "Texas",
    BranchName: "Ikered",
    freeKm: "lorem fd ej ememdimfe vrmfmfm",
    perKreeKm: 200,
    walkingTime: "dummy walking time",
    OutofBrach: "dummy out of branch",
    StartingVal: "dummy starting value",
  },
  // ... Add 30 more objects here ...
];

// Add 30 more objects
for (let i = 1; i <= 30; i++) {
  Data.push({
    id: i,
    firstName: `FirstName${i}`,
    lastName: `LastName${i}`,
    age: 25 + i,
    visits: 50 + i,
    progress: 25 + i,
    status: i % 2 === 0 ? "Single" : "Married",
    homeLocation: `City${i}`,
    workLocation: `State${i}`,
    BranchName: `Branch${i}`,
    perKreeKm: `perKreeKm ${i}`,
    freeKm: `FreeKm${i}`,
    walkingTime: `WalkingTime${i}`,
    OutofBrach: `OutOfBranch${i}`,
    StartingVal: `StartingValue${i}`,
  });
}
