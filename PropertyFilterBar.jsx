import { useState } from "react";
import { FaSearch, FaSearchPlus } from "react-icons/fa";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

export default function PropertyFilterBar() {
  const [filters, setFilters] = useState({
    status: "Any",
    location: "All Locations",
    type: "All Types",
  });

  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdowns = [
    {
      label: "Property Status",
      name: "status",
      type: "custom",
      options: ["Any", "For Sale", "For Rent"],
    },
    {
      label: "Location",
      name: "location",
      type: "custom",
      options: ["All Locations", "Karachi", "Lahore", "Islamabad"],
    },
    {
      label: "Property Type",
      name: "type",
      type: "custom",
      options: [
        "All Types",
        { group: "Commercial", items: ["Office", "Shop"] },
        {
          group: "Residential",
          items: [
            "Apartment",
            "Apartment Building",
            "Condominium",
            "Single Family",
            "Villa",
          ],
        },
      ],
    },
  ];

  const handleSelect = (name, value) => {
    setFilters({ ...filters, [name]: value });
    setOpenDropdown(null);
  };

  return (
    <div className="relative p-5">
      <div className="max-w-5xl mx-auto w-full h-full bg-white shadow-lg rounded-xl flex lg:flex-row flex-col gap-5 items-center justify-between px-6 py-4">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {dropdowns.map((item, i) => (
            <div
              key={i}
              className="flex flex-col relative min-w-[180px] lg:min-w-[220px]"
            >
              <span className="text-xs font-medium text-slate-500 mb-1">
                {item.label}
              </span>

              {item.type === "custom" ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                    className="flex items-center gap-2 w-full px-3 py-3 bg-slate-50 border border-slate-200 text-sm rounded-lg hover:border-teal-400 transition"
                  >
                    <span className="flex-1 text-left text-slate-700">
                      {filters[item.name]}
                    </span>
                    {openDropdown === item.name ? (
                      <VscTriangleUp className="text-teal-500" />
                    ) : (
                      <VscTriangleDown className="text-slate-500" />
                    )}
                  </button>

                  {openDropdown === item.name && (
                    <ul className="absolute top-full mt-1 left-0 w-full bg-white border border-slate-200 rounded-lg shadow-md z-10 animate-fadeIn">
                      {item.options.map((opt, j) => (
                        <li
                          key={j}
                          onClick={() => handleSelect(item.name, typeof opt === "string" ? opt : opt.group)}
                          className="px-4 py-2 text-sm text-slate-600 hover:bg-teal-500 hover:text-white cursor-pointer transition"
                        >
                          {typeof opt === "string" ? opt : opt.group}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-3">
                  <select
                    name={item.name}
                    value={filters[item.name]}
                    onChange={(e) => handleSelect(item.name, e.target.value)}
                    className="w-full bg-transparent outline-none text-sm text-slate-700"
                  >
                    {item.options.map((opt, j) =>
                      typeof opt === "string" ? (
                        <option key={j}>{opt}</option>
                      ) : (
                        <optgroup key={j} label={opt.group}>
                          {opt.items.map((sub, k) => (
                            <option key={k}>{sub}</option>
                          ))}
                        </optgroup>
                      )
                    )}
                  </select>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex lg:flex-row flex-col gap-3">
          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-teal-500 text-white text-sm font-medium hover:bg-teal-600 transition">
            <FaSearchPlus />
            Advanced
          </button>
          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-800 text-white text-sm font-medium hover:bg-slate-900 transition">
            <FaSearch />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
