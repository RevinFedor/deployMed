import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store/slices/productSlice';

const UserProfile = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const dispatch = useDispatch();

    const toggleSubmenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };
    const handleLogout = (e) => {
        dispatch(logout());
    };

    return (
        <div className="w-full bg-white border-r border-gray-200 p-6 shadow-lg rounded-2xl">
            <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div className="text-sm">
                    <h3 className="text-lg font-semibold">Ревин Федор</h3>
                    <p className="text-gray-600">+7-953-123-12-34</p>
                </div>
            </div>
            <ul className="space-y-2 mb-20">
                <li>
                    <button
                        className="w-full text-left px-4 py-2 text-gray-800 bg-gray-100 rounded-lg"
                        onClick={() => toggleSubmenu('orders')}
                    >
                        Список заказов
                    </button>
                    {activeMenu === 'orders' && (
                        <ul className="pl-4 space-y-1 mt-1">
                            <li className="bg-gray-100 p-4 rounded-lg shadow mb-5">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs">№12378621</p>
                                        <img
                                            src="https://images.apteka.ru/medium_531431ab-2809-4f34-90b6-0413b6302c45.jpeg"
                                            alt=""
                                            className="w-[100px] rounded-2xl my-2"
                                        />
                                        <p className="text-sm">
                                            HYDRABIO Н2О МИЦЕЛЛЯРНАЯ ВОДА
                                        </p>
                                        <p className="text-green-500 text-sm">
                                            Оформлен
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs">18 июня 2024</p>
                                        <p className="text-sm font-semibold">
                                            631 P
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="bg-gray-100 p-4 rounded-lg shadow">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs">№432332321</p>
                                        <img
                                            src="https://images.apteka.ru/medium_fd0d7c64-2d04-4f7b-a3fc-f2d6226adddc.jpeg"
                                            alt=""
                                            className="w-[100px] rounded-2xl my-2"
                                        />
                                        <p className="text-sm">
                                            ТЕРМАЛЬНАЯ ВОДА МИНЕРАЛИЗИРУЮЩАЯ
                                        </p>
                                        <p className="text-green-500 text-sm">
                                            Оформлен
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs">17 июня 2024</p>
                                        <p className="text-sm font-semibold">
                                            541 P
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <button
                        className="w-full text-left px-4 py-2 text-gray-800 bg-gray-100 rounded-lg"
                        onClick={() => toggleSubmenu('discounts')}
                    >
                        Акции и скидки
                    </button>
                    {activeMenu === 'discounts' && (
                        <ul className="pl-4 space-y-1 mt-1">
                            <li className="py-1 text-gray-700">
                                Скидка 1: 10% на косметику
                            </li>
                            <li className="py-1 text-gray-700">
                                Скидка 2: 20% на витамины
                            </li>
                            <li className="py-1 text-gray-700">
                                Акция: 3 по цене 2 на шампуни
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <button
                        className="w-full text-left px-4 py-2 text-gray-800 bg-gray-100 rounded-lg"
                        onClick={() => toggleSubmenu('subscriptions')}
                    >
                        Подписки и рассылки
                    </button>
                    {activeMenu === 'subscriptions' && (
                        <ul className="pl-4 space-y-1 mt-1">
                            <li className="py-1 text-gray-700">
                                Подписка 1: Еженедельные новости
                            </li>
                            <li className="py-1 text-gray-700">
                                Подписка 2: Специальные предложения
                            </li>
                            <li className="py-1 text-gray-700">
                                Подписка 3: Советы по уходу за кожей
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <button
                        className="w-full text-left px-4 py-2 text-gray-800 bg-gray-100 rounded-lg"
                        onClick={() => toggleSubmenu('referral')}
                    >
                        Реферальная программа
                    </button>
                    {activeMenu === 'referral' && (
                        <ul className="pl-4 space-y-1 mt-1">
                            <li className="py-1 text-gray-700">
                                Реферал 1: Пригласите друга - получите скидку
                            </li>
                            <li className="py-1 text-gray-700">
                                Реферал 2: 5% от покупок друга
                            </li>
                            <li className="py-1 text-gray-700">
                                Реферал 3: Бесплатный пробник за каждого нового
                                клиента
                            </li>
                        </ul>
                    )}
                </li>
            </ul>

            <div className="flex justify-between">
                {' '}
                <Link
                    to="/adminpanel"
                    className=" bg-black text-white px-6 py-4 rounded-2xl"
                >
                    Панель администратора
                </Link>
                <Link
                    to="/authpage"
                    className='className=" bg-red-600 text-white px-10 py-4 rounded-2xl'
                    onClick={(e) => handleLogout()}
                >
                    Выйти
                </Link>
            </div>
        </div>
    );
};

export default UserProfile;
