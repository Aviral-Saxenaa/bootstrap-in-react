import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Carding from "./Carding";
import Source from "./Source";

const App = () => {
        return (
                <>
                        <h1 className="text-center text-danger text-capitalize">
                                heading
                        </h1>

                        <div className="container text-center">
                                <div className="row">
                                        {Source.map((val) => {
                                                return (
                                                        <Carding
                                                                key={val.id}
                                                                imgsrc={
                                                                        val.imgsrc
                                                                }
                                                                clas={val.clas}
                                                                alt={val.alt}
                                                                height={
                                                                        val.height
                                                                }
                                                                textcard={
                                                                        val.textcard
                                                                }
                                                        />
                                                );
                                        })}
                                </div>
                        </div>
                </>
        );
};
export default App;
