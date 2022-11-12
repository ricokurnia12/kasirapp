import React, { useState, useEffect } from "react";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import ListCategories from "./components/ListCategories";
import Hasil from "./components/Hasil";
import { API_URL } from "./utils/constants";
import axios from "axios";
import Menuss from "./components/Menus";

function App() {
    const [Menus, setMenus] = useState([]);

    useEffect(() => {
        axios
            .get(API_URL + "products")
            .then((response) => {
                setMenus(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    // console.log(Menus);
    return (
        <>
            <NavbarComponent />
            <div className="container-fluid mt-4">
                <div className="row">
                    <ListCategories />
                    <div className="col">
                        <h4>
                            <strong>Daftar Produk</strong>
                        </h4>

                        <hr />
                        <div className="row">
                            {Menus &&
                                Menus.map((menu) => (
                                    <Menuss
                                        key={menu.id}
                                        menu={menu}
                                    />
                                ))}
                        </div>
                    </div>
                    <Hasil />
                </div>
            </div>
        </>
    );
}

export default App;
