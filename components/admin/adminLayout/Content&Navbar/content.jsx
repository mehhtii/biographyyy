import "@/styles/admin/content.css";

const AdminContent = ({ children }) => {
  return (
    <>
      <div className="admin_content">
        <div class="app-content content">
          <div class="content-overlay"></div>
          <div class="content-wrapper">
            <div class="content-header row"></div>
            <div class="content-body py-5">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminContent;
