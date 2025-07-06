import "./Table.css";

function Table({ missionEntries }) {
  return (
    <>
      <div className="space-missions-container">
        <div className="mission-table-wrapper">
          {/* Header Section */}
          <div className="table-header">
            <div className="stars-background"></div>
            <h2 className="header-title">🚀 Active Space Missions</h2>
            <p className="header-subtitle">
              Exploring the cosmos, one mission at a time
            </p>
          </div>

          {/* Table Container */}
          <div className="table-scroll-container">
            <table className="mission-data-table">
              <thead className="table-headers">
                <tr className="header-row">
                  <th className="mission-name-header">Mission Name</th>
                  <th className="mission-category-header">Mission Category</th>
                  <th className="primary-objective-header">
                    Primary Objective
                  </th>
                  <th className="commander-name-header">Commander Name</th>
                  <th className="commander-email-header">Commander Email</th>
                  <th className="commander-contact-header">
                    Commander Contact
                  </th>
                </tr>
              </thead>
              <tbody className="mission-entries-body">
                {missionEntries.map((missionEntry, entryIndex) => (
                  <tr
                    key={entryIndex}
                    className="mission-entry-row"
                    style={{ animationDelay: `${entryIndex * 0.1}s` }}
                  >
                    <td className="mission-name-cell">
                      <div className="mission-name-content">
                        <div className="status-indicator"></div>
                        <span className="mission-name-text">
                          {missionEntry.name}
                        </span>
                      </div>
                    </td>
                    <td className="mission-category-cell">
                      <span className="category-badge">
                        {missionEntry.type}
                      </span>
                    </td>
                    <td className="primary-objective-cell">
                      {missionEntry.breed}
                    </td>
                    <td className="commander-name-cell">
                      {missionEntry.customer}
                    </td>
                    <td className="commander-email-cell">
                      <a
                        href={`mailto:${missionEntry.email}`}
                        className="email-link"
                      >
                        {missionEntry.email}
                      </a>
                    </td>
                    <td className="commander-contact-cell">
                      {missionEntry.number}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Section */}
          <div className="table-footer">
            <p className="footer-text">
              🌌 Total Active Missions: {missionEntries.length} | Last Updated:{" "}
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Table;
