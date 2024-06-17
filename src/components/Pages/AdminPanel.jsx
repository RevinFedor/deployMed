import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetProduct, deleteProduct } from '../../store/slices/productSlice';
import array from '../../store/apteka.products';

const AdminPanel = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({
        title: '',
        price: '',
        image: '',
        fabricator: '',
        genre: '',
        detail: [
            {
                header: '',
                description: '',
            },
        ],
    });

    useEffect(() => {
        dispatch(resetProduct(array));
        console.log('update');
    }, []);
    // console.log(products);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleDetailChange = (index, e) => {
        const { name, value } = e.target;
        const details = [...newProduct.detail];
        details[index][name] = value;
        setNewProduct((prev) => ({ ...prev, detail: details }));
    };

    const addNewProduct = () => {
        // dispatch(addProduct(newProduct));
        setNewProduct({
            title: '',
            price: '',
            image: '',
            fabricator: '',
            genre: '',
            detail: [
                {
                    header: '',
                    description: '',
                },
            ],
        });
        setSelectedProduct(null);
    };

    const updateExistingProduct = () => {
        setNewProduct({
            title: '',
            price: '',
            image: '',
            fabricator: '',
            genre: '',
            detail: [
                {
                    header: '',
                    description: '',
                },
            ],
        });
        // dispatch(updateProduct(selectedProduct));
        setSelectedProduct(null);
    };

    const removeProduct = (id) => {
        dispatch(deleteProduct(id.$oid));
    };

    // dffsfsdfssaf_______________

    const [totalPage, setTotalPage] = useState(0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Панель администратора</h1>
            <div className="bg-white shadow-md rounded-3xl p-4 mb-4">
                <h2 className="text-xl font-semibold mb-4">
                    {selectedProduct
                        ? 'Редактировать товар'
                        : 'Добавить новый товар'}
                </h2>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="title"
                            value={
                                selectedProduct
                                    ? selectedProduct.title
                                    : newProduct.title
                            }
                            onChange={handleInputChange}
                            placeholder="Наименование"
                            className="border p-2 rounded-2xl"
                        />
                        <input
                            type="text"
                            name="price"
                            value={
                                selectedProduct
                                    ? selectedProduct.price
                                    : newProduct.price
                            }
                            onChange={handleInputChange}
                            placeholder="Цена"
                            className="border p-2 rounded-2xl"
                        />
                        <input
                            type="text"
                            name="image"
                            value={
                                selectedProduct
                                    ? selectedProduct.image
                                    : newProduct.image
                            }
                            onChange={handleInputChange}
                            placeholder="URL изображения"
                            className="border p-2 rounded-2xl"
                        />
                        <input
                            type="text"
                            name="fabricator"
                            value={
                                selectedProduct
                                    ? selectedProduct.fabricator
                                    : newProduct.fabricator
                            }
                            onChange={handleInputChange}
                            placeholder="Производитель"
                            className="border p-2 rounded-2xl"
                        />
                        <input
                            type="text"
                            name="genre"
                            value={
                                selectedProduct
                                    ? selectedProduct.genre
                                    : newProduct.genre
                            }
                            onChange={handleInputChange}
                            placeholder="Жанр"
                            className="border p-2 rounded-2xl"
                        />
                    </div>
                    {newProduct.detail.map((detail, index) => (
                        <div key={index} className="mt-4">
                            <input
                                type="text"
                                name="header"
                                value={detail.header}
                                onChange={(e) => handleDetailChange(index, e)}
                                placeholder="Заголовок "
                                className="border p-2 rounded-2xl w-full mb-2"
                            />
                            <textarea
                                name="description"
                                value={detail.description}
                                onChange={(e) => handleDetailChange(index, e)}
                                placeholder="Описание "
                                className="border p-2 rounded-2xl w-full"
                            />
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={
                            selectedProduct
                                ? updateExistingProduct
                                : addNewProduct
                        }
                        className="mt-4 bg-black text-white px-6 py-4 rounded-2xl"
                    >
                        {selectedProduct ? 'Обновить товар' : 'Добавить товар'}
                    </button>
                </form>
            </div>
            <div className="bg-white shadow-md rounded-3xl p-4">
                <h2 className="text-xl font-semibold mb-4">Список товаров</h2>
                <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="bg-gray-500 text-white p-2 rounded-2xl"
                >
                    Отменить выбор
                </button>
                <div className="page__buttons">
                    <button
                        className="page__button_btn"
                        onClick={() => {
                            if (totalPage < 12) {
                                let total = products.length - 12;
                                setTotalPage(total);
                                return;
                            }
                            let total = totalPage - 12;
                            setTotalPage(total);
                        }}
                    >
                        Предыдущая страница
                    </button>
                    <div>
                        Страницы {totalPage} - {totalPage + 12} из{' '}
                        {products.length}
                    </div>
                    <button
                        className="page__button_btn"
                        onClick={() => {
                            if (totalPage > products.length - 13) {
                                let total = 0;
                                setTotalPage(total);
                                return;
                            }
                            let total = totalPage + 12;
                            setTotalPage(total);
                        }}
                    >
                        Следующая страница
                    </button>
                </div>
                <table className="w-full table-auto ">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Наименование</th>
                            <th className="px-4 py-2">Цена</th>
                            <th className="px-4 py-2">Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products
                            // .slice(totalPage, totalPage + 12)
                            .map((product) => (
                                <tr key={product._id}>
                                    <td className="border px-4 py-2">
                                        {product.title}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {product.price} руб
                                    </td>
                                    <td className="border px-4 py-2">
                                        <button
                                            onClick={() =>
                                                setSelectedProduct(product)
                                            }
                                            className="bg-yellow-500 text-white p-2 rounded mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() =>
                                                removeProduct(product._id)
                                            }
                                            className="bg-red-500 text-white p-2 rounded-2xl"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPanel;
