import React, { useEffect, useState } from "react";
import { data } from "../../data/data";
import { FilterBar, List, SearchBar } from "../../components/Home";
import Pagination from "../../components/Pagination";

const Home = () => {
    const [jobs, setJobs] = useState(data);

    const [searchByAllInput, setSearchByAllInput] = useState("");
    const [locationSearch, setLocationSearch] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("all");
    const [jobTypes, setJobsType] = useState([
        { id: 1, name: "Full Time", status: false },
    ]);

    const [itemPerPage, setItemPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);

    const handleLocationSearchInput = (e) => {
        setLocationSearch(e.target.value);
    };

    const handleSelectLocation = (e) => {
        setSelectedLocation(e.target.value);
    };

    const handleChangeChecked = (id) => {
        const jobTypesList = jobTypes;
        const updated = jobTypesList.map((item) =>
            item.id === id ? { ...item, status: !item.status } : item
        );
        setJobsType(updated);
    };

    // simple pagination
    const lastIndexOfItem = currentPage * itemPerPage;
    const firstIndexOfItem = lastIndexOfItem - itemPerPage;
    const currentJobs = jobs.slice(firstIndexOfItem, lastIndexOfItem);

    const paginate = (no) => setCurrentPage(no);

    const applyFilter = () => {
        let filteredJobs = data;

        if (locationSearch) {
            filteredJobs = filteredJobs.filter(
                (item) => item.city.search(locationSearch.trim()) !== -1
            );
        }

        if (searchByAllInput) {
            // filteredJobs = filteredJobs.filter(item => item)
        }

        const fullTimeJobs = jobTypes.filter((item) => item.status);
        if (fullTimeJobs.length) {
            filteredJobs = filteredJobs.filter(
                (item) => Boolean(item.fulltime) === fullTimeJobs[0].status
            );
        }


        if (selectedLocation) {
            filteredJobs = filteredJobs.filter((item) => selectedLocation === 'all' ? item : item.city === selectedLocation)
        }





        setJobs(filteredJobs);
    };

    useEffect(() => {
        applyFilter();
    }, [searchByAllInput, locationSearch, selectedLocation, jobTypes]);

    return (
        <>
            <div className="bg-bgMain fixed w-full h-full -z-50"></div>
            <div className="bg-bgMain ">
                <div className="container mx-auto max-w-7xl px-6 sm:px-4 bg-bgMain py-8 space-y-10">
                    <div className="text-2xl text-cblack font-Poppins">
                        <span className="font-semibold">Github</span>
                        <span className="font-light">Jobs</span>
                    </div>
                    <div>
                        <SearchBar
                            searchInput={searchByAllInput}
                            setSearchInput={(e) =>
                                setSearchByAllInput(e.target.value)
                            }
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="basis-1/3">
                            <FilterBar
                                locationSearch={locationSearch}
                                selectedLocation={selectedLocation}
                                jobTypes={jobTypes}
                                handleLocationSearchInput={
                                    handleLocationSearchInput
                                }
                                handleSelectLocation={handleSelectLocation}
                                changeChecked={handleChangeChecked}
                            />
                        </div>
                        <div className="basis-5/6">
                            <List jobs={currentJobs} />
                            <Pagination
                                totalPage={jobs.length}
                                currentPage={currentPage}
                                itemPerPage={itemPerPage}
                                paginate={paginate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
