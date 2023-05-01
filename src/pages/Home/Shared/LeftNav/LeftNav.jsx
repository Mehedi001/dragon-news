/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className="mt-2">
            <h4 className="bg-light p-3">All Category</h4>
            <div className="ps-4 mt-4">
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to = {`/category/${category.id}`} className="text-decoration-none text-secondary">{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;