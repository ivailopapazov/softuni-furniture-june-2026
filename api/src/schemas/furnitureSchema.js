import * as zod from 'zod';


export const createFurnitureSchema = zod.object({
    make: zod.string().min(4, 'Make must be at least 4 characters long'),
    model: zod.string().min(3, 'Model must be at least 3 characters long'),
    year: zod.coerce.number()
        .min(1950, 'Year must be at least 1950')
        .max(new Date().getFullYear(), `Year cannot be in the future`),
    description: zod.string().min(10, 'Description must be at least 10 characters long'),
    price: zod.coerce.number().min(0, 'Price must be a positive number'),
    img: zod.string().url('Image URL must be a valid URL'),
    material: zod.string().optional(),
});
