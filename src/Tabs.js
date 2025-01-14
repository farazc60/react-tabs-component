import React, { useState, useEffect } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    openTab('tab1'); // Set default tab
  }, []);

  return (
    <div className="tabs-container">
      <div className="tabs">
        <div 
          className={`tab-header ${activeTab === 'tab1' ? 'active' : ''}`} 
          onClick={() => openTab('tab1')}
        >
          Tab 1
        </div>
        <div 
          className={`tab-header ${activeTab === 'tab2' ? 'active' : ''}`} 
          onClick={() => openTab('tab2')}
        >
          Tab 2
        </div>
        <div 
          className={`tab-header ${activeTab === 'tab3' ? 'active' : ''}`} 
          onClick={() => openTab('tab3')}
        >
          Tab 3
        </div>
      </div>
      <div className="tab-content">
        <div id="tab1" className={`tab-pane ${activeTab === 'tab1' ? 'active' : ''}`}>
          <h2>Overview</h2>
          <p>Welcome to our product page. Here you can find detailed information about our product, including its features, pricing, and more. Our product is designed to meet your needs with the highest quality and performance.</p>
          <img src="https://www.codewithfaraz.com/tools/placeholder?size=800x400" alt="Product Overview" />
          <p>Our product has been developed with the latest technology to ensure reliability and efficiency. Explore the tabs to learn more about what makes our product stand out.</p>
        </div>
        <div id="tab2" className={`tab-pane ${activeTab === 'tab2' ? 'active' : ''}`}>
          <h2>Features</h2>
          <ul>
            <li>Feature 1: High performance and efficiency</li>
            <li>Feature 2: User-friendly interface</li>
            <li>Feature 3: Customizable options</li>
            <li>Feature 4: 24/7 customer support</li>
            <li>Feature 5: Regular updates and improvements</li>
          </ul>
          <img src="https://www.codewithfaraz.com/tools/placeholder?size=800x400" alt="Product Features" />
          <p>Discover the wide range of features that our product offers. Each feature is designed to provide you with the best experience and value.</p>
        </div>
        <div id="tab3" className={`tab-pane ${activeTab === 'tab3' ? 'active' : ''}`}>
          <h2>Pricing</h2>
          <table>
            <thead>
              <tr>
                <th>Plan</th>
                <th>Price</th>
                <th>Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic</td>
                <td>$19/month</td>
                <td>Basic features, email support</td>
              </tr>
              <tr>
                <td>Pro</td>
                <td>$49/month</td>
                <td>All features, priority support, advanced tools</td>
              </tr>
              <tr>
                <td>Enterprise</td>
                <td>$99/month</td>
                <td>All features, dedicated account manager, 24/7 support</td>
              </tr>
            </tbody>
          </table>
          <p>Choose the plan that best fits your needs. Each plan offers a range of features to suit different requirements and budgets.</p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
