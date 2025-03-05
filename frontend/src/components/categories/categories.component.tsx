import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";

import CategoryItem from "../category-item/category-item-component";

import Category from "../../types/category.types";

import { collection } from "firebase/firestore";
import { db } from "../../config/firestore.config";
import { categoryConverter } from "../../converters/firebase.converters";
import { CategoriesContainer, CategoriesContent } from "./categories.styles";

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = [];

      const querySnapshot = await getDocs(
        collection(db, "categories").withConverter(categoryConverter)
      );

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data());
      });

      setCategories(categoriesFromFirestore);
    } catch (error) {
      console.log({ error });
    }
  };

  console.log(categories);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  );
}

export default Categories;
