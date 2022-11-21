import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUtensils,
    faCoffee,
    faCheese,
} from "@fortawesome/free-solid-svg-icons";

const ListCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios
            .get(API_URL + "categories")
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const Icon = ({ nama }) => {
        if (nama === "Makanan")
            return (
                <FontAwesomeIcon icon={faUtensils} className="me-2 ms-1" />
            );
        if (nama === "Minuman")
            return (
                <FontAwesomeIcon icon={faCoffee} className="me-1" />
            );
        if (nama === "Cemilan")
            return (
                <FontAwesomeIcon icon={faCheese} className="me-2" />
            );
        return <FontAwesomeIcon icon={faUtensils} />;
    };

    return (
        <div className="col col-2 ">
            <h4>
                <strong>Daftar Kategori</strong>
            </h4>
            <hr />
            <ul className="list-group">
                {categories &&
                    categories.map((category) => (
                        <li
                            className="list-group-item"
                            key={category.id}
                    >
                            <h5>
                                <Icon nama={category.nama} />

                                {category.nama}
                            </h5>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default ListCategories;
