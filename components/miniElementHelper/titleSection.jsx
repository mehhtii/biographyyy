const TitleSection = ({ title,margin }) => {
  return (
    <div className="mx-md-5 ms-4 my-5 d-flex align-items-center pt-5">
      <div className={`${margin} d-flex ms-md-2 me-2`}>
        <h3 className="sharp_color">#</h3>
        <h3 className="text-light">{title}</h3>
      </div>
      <div className={`Line_about_me `}></div>
    </div>
  );
};

export default TitleSection;
