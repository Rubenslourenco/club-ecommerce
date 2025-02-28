import { useEffect, useState } from "react";
import axios from "axios";

import CategoryItem from "../category-item/category-item-component";

import Category from "../../types/category.types";
import env from "../../config/env.config";

import "./categories.styles.css";

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`);

      setCategories(data);
    } catch (error) {
      console.log({ error });
    }
  };

  console.log(categories);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="categories-container">
      <div className="categories-content">
        {categories.map((category) => (
          <div>
            {/* key={category.id} */}
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
