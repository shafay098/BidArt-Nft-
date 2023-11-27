import React from "react";

const Custom_Card = ({
  sockets,
  clasess,
  img,
  body_text,
  header_text,
  data,
}) => {
  const socket = sockets;
  console.log(socket);
  const headerclass = `${clasess.header} `;
  const bodyclass = `card-body ${clasess.body}`;
  return (
    <>
      {socket === "collection" ? (
        <>
          <div className="card card-custom rounded-4 p-2 card-lift-up">
            <div className={headerclass}>
              <div className="HedaerSection-group">
                <a className="profileimage" href="#/">
                  <img src={data.header.img1} alt="img1" />
                </a>
                <a className="userimage" href="/CollectionDetail">
                  <img src={data.header.img2} alt="img2" />
                  <div className={`${data.body.dot_icon}`}></div>
                </a>
              </div>
            </div>

            <div className={bodyclass}>
              <div className="bodyGroup1-text v-stack gap-3 ">
                <h1 className="text-center text-md mt-3 text-white">
                  {data.body.heading}
                </h1>
                <div className="d-flex align-items-center justify-content-center ">
                  <a className="d-flex gap-1 mt-2" href="#/">
                    <svg
                      className={`mr-2 ${data.body.checkicon}`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="20"
                      fill="green"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                    </svg>
                    <span>{data.body.row2_text}</span>
                  </a>
                </div>
              </div>

              <div className="bodyGroup2-text d-flex justify-content-around mt-3 gap-3">
                <a className="flex-column" href="#/">
                  <div className="d-flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      className="bi bi-list-ul pt-1"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                      />
                    </svg>
                    <div>{data.body.listicon_text}</div>
                  </div>
                </a>

                <a href="#/">
                  <div className="d-flex flex-row gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      className="bi bi-eye pt-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                    <div>{data.body.eyeicon_text}</div>
                  </div>
                </a>
              </div>
              <hr />
              <div className="bodygroup3-text d-flex flex-col justify-content-around">
                <div className="bodygroup3-item1">
                  <h4 className="text-white">
                    {data.body.third_row_col1_heading}
                  </h4>
                  <p className="text-white text-center">
                    {data.body.third_row_col1_text}
                  </p>
                </div>

                <div className="bodygroup3-item2">
                  <h4 className="text-white">
                    {data.body.third_row_col2_heading}
                  </h4>
                  <p className="text-white text-center">
                    {data.body.third_row_col2_text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : socket === "category" ? (
        <>
          <div
            className="card card-custom card-lift-up py-3"
            style={{ width: "100%", height: "auto", marginBottom: "25px" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <div className={headerclass}>
                <img className="card-img-top" src={img} alt="Card cap" />
              </div>
              <div className={bodyclass}>
                <h3 className="text-white">{header_text}</h3>
                <p className="text-white">{body_text}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <> </>
      )}
    </>
  );
};

export default Custom_Card;
