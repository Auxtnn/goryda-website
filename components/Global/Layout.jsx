"use client";

import React, { useState } from "react";
import { CDataTable } from "@coreui/react";
import { BiRightArrow, BiFilter } from "react-icons/bi";
import Button from "./Button";
import Box from "./Box";
import NoInformation from "./NoInformation";
import SearchInput from "./SearchInput";

const PageLayout = ({
  pageTitle,
  isSearchPresent,
  isPrimaryFilterPresent,
  placeholder,
  tableData,
  tableHeader,
  currentPage,
  scopedSlots,
  totalPages,
  setCurrentPage,
  filterData,
  searchValue,
  onSearchChange,
  loading,
  setFilterValue,
  filterText,
  isSecondaryFilterPresent,
  secondaryFilter,
}) => {
  const [selected, setSelected] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filter, setFilter] = useState(null);
  const [selectedFilterValue, setSelectedFilterValue] = useState("");

  const buttonTypes = [
    {
      name: "Previous",
      onClick: currentPage !== 1 ? () => setCurrentPage(currentPage - 1) : null,
    },
    {
      name: "Next",
      onClick:
        totalPages !== currentPage
          ? () => setCurrentPage(currentPage + 1)
          : null,
    },
  ];

  const handleClick = (item) => {
    if (openDropdown) {
      setOpenDropdown(false);
      setSelected(null);
      setFilter(null);
    } else {
      setOpenDropdown(true);
      setSelected(item.title);
      setFilter(item);
    }
    setShowFilters(false);
  };

  return (
    <div className="flex flex-col gap-[24px] pb-10 pt-2">
      <h5 className="font-semibold text-[1.6rem] leading-[38px] text-black200 capitalize">
        {pageTitle}
      </h5>
      <Box className="flex flex-col gap-4 p-4">
        <div className="flex md:flex-row flex-col gap-4 md:gap-0 md:items-center justify-between">
          {isSearchPresent && (
            <SearchInput
              placeholder={placeholder}
              value={searchValue}
              onChange={onSearchChange}
              className="w-[400px]"
            />
          )}
          <div className="flex relative items-center gap-4">
            <div className="">
              {isPrimaryFilterPresent && (
                <Button
                  startIcon={<BiFilter />}
                  btnText={filterText || "Filter"}
                  type="button"
                  onClick={() => setShowFilters(!showFilters)}
                  width={100}
                  className="text-gray-700 flex items-center gap-[8px]"
                />
              )}
              {showFilters && filterData?.length > 0 && (
                <div className="absolute z-[1000] w-[186px] md:right-4 rounded-[8px] flex flex-col gap-[16px] border border-[#EAECF0] py-[11px] px-[16px] bg-white text-[14px] leading-[20px] text-black300">
                  {filterData?.map((item) => (
                    <div key={item.title} className="">
                      {item?.subFilter?.length > 0 ? (
                        <>
                          <div
                            onClick={() => handleClick(item)}
                            className="flex items-center justify-between cursor-pointer"
                          >
                            {item.title}
                            <BiRightArrow />
                          </div>
                        </>
                      ) : (
                        <div
                          className={`cursor-pointer ${
                            selectedFilterValue === item?.title
                              ? "text-primary"
                              : ""
                          }`}
                          onClick={() => {
                            setFilterValue(item);
                            setSelectedFilterValue(item?.value);
                          }}
                        >
                          {item.title}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {openDropdown && selected === filter.title && (
                <div className="absolute z-[1000] w-[186px] right-[20px] rounded-[8px] flex flex-col gap-[16px] border border-[#EAECF0] py-[11px] px-[16px] bg-white text-[14px] leading-[20px] text-black300">
                  {filter?.subFilter?.map((item) => (
                    <div
                      key={item.title}
                      onClick={() => {
                        setFilterValue(item, filter);
                        setSelectedFilterValue(item?.value);
                        setOpenDropdown(false);
                      }}
                      className={`cursor-pointer ${
                        selectedFilterValue === item?.value
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="">
              {isSecondaryFilterPresent && (
                <div className="">{secondaryFilter}</div>
              )}
            </div>
          </div>
        </div>
        <CDataTable
          items={tableData || []}
          fields={tableHeader}
          selectable
          responsive
          loading={loading}
          clickableRows
          activePage={currentPage}
          itemsPerPage={10}
          scopedSlots={scopedSlots || {}}
          noItemsViewSlot={<NoInformation />}
        />
        <div className="flex items-center justify-between md:flex-row flex-col gap-4 md:gap-0">
          <span className="font-medium text-[14px] leading-[20px] text-gray700">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex items-center gap-[12px]">
            {buttonTypes.map((btn, i) => (
              <Button
                key={i}
                btnText={btn.name}
                onClick={btn.onClick}
                type="button"
                width={100}
                className="text-gray-700 px-3 py-2 border border-[#D0D5DD] flex items-center gap-[8px]"
              />
            ))}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default PageLayout;
