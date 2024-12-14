const PageTitleHelp = ({title,description,ms}) => {
  return (
    <>
      <div className={`d-flex ps-5 mt-5 `}>
        <h3 className="sharp_color font_bold">/</h3>
        <h3 className="text-light">{title}</h3>
      </div>
      <p className="text-light ms-5">{description}</p>
    </>
  );
};

export default PageTitleHelp;
