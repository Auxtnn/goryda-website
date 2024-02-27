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

export function createRandomUser() {
  return {
    profile: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.person.lastName(),
    age: faker.number.int(40),
    visit: faker.number.int(1000),
    progress: faker.string.sample(),
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 30,
});

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
