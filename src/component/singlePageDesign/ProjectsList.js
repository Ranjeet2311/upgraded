import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import { useTranslation } from "react-i18next";
import arrowback from "../../images/arrow-back.svg";
import arrowNext from "../../images/arrow-forward.svg";

export default function ProjectsList() {
  const { filteredProjects } = useSelector((state) => state.projects);
  const { t } = useTranslation();
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProjects]);

  return (
    <div className="mt-4 pt-1 pt-mg-4">
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 pt-1 pt-mg-4">
        {currentProjects &&
          currentProjects.map((item, index) => (
            <div
              className={`col-12 col-md-6 col-lg-3 ${
                currentProjects.length <= 2 && "col-lg-4"
              } `}
              key={index}
            >
              <Card
                key={index}
                img={item.img}
                title={t(item.title)}
                code={item.code}
                demo={item.demo}
                tags={item.tags}
                description={item.description}
                createdAt={item.createdAt}
                pageLink={`/repositories/${item.title}`}
                showBtn={true}
                primeBtnText={t("Click for more details")}
                secBtnText={`${t("Click for more details")}`}
                type="project"
              />
            </div>
          ))}
      </div>
      <div className="row">
        <div className="col-12 py-4 my-4 d-flex justify-content-center aling-items-center">
          <button
            className={`btn me-4 btn-bg px-4 mt-2 ${
              currentPage === 1 && "opacity-25"
            } `}
            onClick={handleBack}
            disabled={currentPage === 1}
          >
            <img
              style={{ filter: "invert(1)", width: "30px" }}
              src={arrowback}
              alt=""
            />
            <span>Back</span>
          </button>
          <button
            className={`btn btn-bg px-4 mt-2 ${
              currentPage === totalPages && "opacity-25"
            } `}
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
            <span>
              <img
                style={{ filter: "invert(1)", width: "30px" }}
                src={arrowNext}
                alt=""
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
