/* eslint-disable react/prop-types */

const TabNavigation = ({ tabs, selectedTab, setSelectedTab }) => {
  return (
    <div className="flex space-x-4 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setSelectedTab(tab.id)}
          className={`px-4 py-2 rounded-lg ${
            selectedTab === tab.id
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-800 hover:bg-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
