import { FiSearch } from "react-icons/fi";
function SearchHeader({ setGlobalFilter }) {
  return (
    <div>
      <div className="flex items-center gap-10 p-4 ">
        <h1 className="text-2xl text-black">Drivers List</h1>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            className="pl-10 pr-4 shadow-xl rounded-full border border-gray-100 outline-none py-3  text-gray-700 placeholder-gray-500"
            type="text"
            placeholder="Search by name"
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchHeader;
