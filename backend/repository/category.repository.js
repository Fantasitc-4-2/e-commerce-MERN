import Category from "../model/category";

export const createCategory = async (category) => {
    return await Category.create(category);
}