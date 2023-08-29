import React from "react";

export const FilterBar = ({
    locationSearch,
    selectedLocation,
    jobTypes,
    handleLocationSearchInput,

    changeChecked,
    handleSelectLocation,
}) => {
    const locations = [
        { id: 1, name: "city", label: "London", value: "London" },
        { id: 2, name: "city", label: "Paris", value: "Paris" },
        { id: 3, name: "city", label: "New York", value: "New York" },
        { id: 4, name: "city", label: "San Francisco", value: "San Francisco" },
        { id: 5, name: "city", label: "all", value: "all" },
    ];
    return (
        <>
            <div className="font-Poppins">
                {jobTypes.map(type => {
                    const { id, status, name } = type;
                    return (
                        <div className="flex items-center gap-3 "    key={id}>
                            <input
                         
                                id="fulltime"
                                className="cursor-pointer"
                                type="checkbox"
                                checked={status}
                                onChange={()=>changeChecked(id)}
                            />
                            <label
                                htmlFor="fulltime"
                                className="font-semibold text-cdeepblue cursor-pointer"
                            >
                               {name}
                            </label>
                        </div>
                    )
                })}

                <div>
                    <h4 className="my-3 font-bold uppercase text-cgray">
                        Location{" "}
                    </h4>
                    <div className="my-3 px-4 max-w-[400px] rounded-md py-4 shadow-md flex items-center gap-2 text-cgray font-light whitespace-normal bg-white">
                        <i className="fa-solid fa-earth-europe"></i>
                        <input
                            value={locationSearch}
                            onChange={handleLocationSearchInput}
                            type="text"
                            className="bg-transparent outline-0 w-full text-sm px-4 "
                            placeholder="City,state,zip code or country"
                        />
                    </div>
                    <div className="mt-5">
                        {locations.map((location) => {
                            const { id, name, label, value } = location;
                            return (
                                <div
                                    key={id}
                                    className="my-2 font-medium flex items-center gap-3 text-cdeepblue "
                                >
                                    <input
                                        id={label}
                                        type="radio"
                                        className="cursor-pointer"
                                        name="location"
                                        value={value}
                                        checked={value == selectedLocation}
                                        onChange={handleSelectLocation}
                                    />
                                    <label
                                        htmlFor={label}
                                        className="cursor-pointer"
                                    >
                                        {label}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
