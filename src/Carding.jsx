import React from "react";

const Carding = (proms) => {
        return (
                <>
                        <div className="col">
                                <div className="card">
                                        <img
                                                
                                                src={proms.imgsrc}
                                                className={proms.clas}
                                                alt={proms.alt}
                                                height={proms.height}
                                        />
                                        <div className="card-body">
                                                <h5 className="card-title">
                                                        Card title
                                                </h5>
                                                <p className="card-text">
                                                        {proms.textcard}
                                                </p>
                                                <a
                                                        href="#"
                                                        className="btn btn-primary"
                                                >
                                                        Go somewhere
                                                </a>
                                        </div>
                                </div>
                        </div>
                </>
        );
};
export default Carding;