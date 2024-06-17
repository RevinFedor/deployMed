import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../store/slices/productSlice';

const LoginForm = ({ switchToRegister }) => {
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        dispatch(login());
    };

    return (
        <div className="max-w-sm mx-auto bg-gray-100 p-8 rounded-2xl shadow-lg">
            <h2 className="text-lg font-semibold mb-6">Вход в аккаунт</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Номер телефона"
                    className="w-full px-4 py-2 border rounded-lg bg-gray-200 placeholder-gray-600"
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    placeholder="Пароль"
                    className="w-full px-4 py-2 border rounded-lg bg-gray-200 placeholder-gray-600"
                />
            </div>
            <Link
                to="/userprofile"
                className="w-full py-2 bg-black text-white rounded-lg flex justify-center"
                onClick={(e) => handleLogin()}
            >
                Войти
            </Link>
            <p className="mt-4 text-center">
                Нет аккаунта?{' '}
                <button onClick={switchToRegister} className="text-[#43d854]">
                    Регистрация
                </button>
            </p>
        </div>
    );
};

const RegisterForm = ({ switchToLogin }) => {
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        dispatch(login());
    };
    return (
        <div className="max-w-sm mx-auto bg-gray-100 p-8 rounded-2xl shadow-lg">
            <h2 className="text-lg font-semibold mb-6">Регистрация</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Номер телефона"
                    className="w-full px-4 py-2 border rounded-lg bg-gray-200 placeholder-gray-600"
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    placeholder="Пароль"
                    className="w-full px-4 py-2 border rounded-lg bg-gray-200 placeholder-gray-600"
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    placeholder="Подтвердите пароль"
                    className="w-full px-4 py-2 border rounded-lg bg-gray-200 placeholder-gray-600"
                />
            </div>

            <Link
                to="/userprofile"
                className="w-full py-2 bg-black text-white rounded-lg flex justify-center"
                onClick={(e) => handleLogin()}
            >
                Зарегистрироваться
            </Link>
            <p className="mt-4 text-center">
                Уже есть аккаунт?{' '}
                <button onClick={switchToLogin} className="text-[#43d854]">
                    Войти
                </button>
            </p>
        </div>
    );
};

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const switchToRegister = () => {
        setIsLogin(false);
    };

    const switchToLogin = () => {
        setIsLogin(true);
    };

    return (
        <div>
            {isLogin ? (
                <LoginForm switchToRegister={switchToRegister} />
            ) : (
                <RegisterForm switchToLogin={switchToLogin} />
            )}
        </div>
    );
};

export default AuthPage;
