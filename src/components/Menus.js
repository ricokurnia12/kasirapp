import React from "react";
import { numberWithCommas } from "../utils/utils";

const Menus = ({ menu }) => {
    return (
        <>
            <div className="col col-md-4 col-xs-6 mb-4">
                <div className="card" style={{ width: "18rem" }}>
                    <img
                        src={
                            "assets/images/" +
                            menu.category.nama.toLowerCase() +
                            "/" +
                            menu.gambar
                        }
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">{menu.nama}</h5>
                        <p className="card-text">
                            Rp. {numberWithCommas(menu.harga)}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menus;
