import "../css/SidebarActions.css";

const SidebarActions = () => {
  return (
    <aside className="sidebar">
      <button className="btn btn-message">Message Instructor</button>
      <button className="btn btn-save">❤ Save</button>

      <div className="price">
        $25 <span>per lesson</span>
      </div>

      <div className="availability">
        <strong>Availability</strong>
        <p>Most weekdays after 5pm.</p>
      </div>
    </aside>
  );
};

export default SidebarActions;