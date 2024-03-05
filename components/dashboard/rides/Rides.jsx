import Table from "../pageDashboard/Table";
import StepHeader from "./StepHeader";

const Rides = () => {
  return (
    <div className="p-4">
      <StepHeader />
      <div className="mt-6">
        <Table />
      </div>
    </div>
  );
};

export default Rides;
