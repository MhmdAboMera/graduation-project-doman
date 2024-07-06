import React from 'react';
import './Tabs.css';  // Optional: for styling

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <div className="tabs">
            <div className="tab-headers">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`tab-header ${activeTab === index ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tab-content p-0">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default Tabs;
