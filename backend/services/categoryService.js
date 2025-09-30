import { createCategory } from "../repository/category.repository";
import * as categoryRepository from "../repository/category.repository";
export const createCategory = async (category) => {
    return await categoryRepository.createCategory(category);
}