'use client';
import { SearchUser } from '@/app/api/actions/search_user';
import { SearchDonor } from '@/app/api/actions/search_donor';
import { SearchDriver } from '@/app/api/actions/search_driver';
import { SearchHelper } from '@/app/api/actions/search_helper';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormSearch, InputSearch } from '@/app/types/types';
import Swal from 'sweetalert2';
export default function FormSearchs({ search, searchDonorCodTel }: FormSearch) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [codTelSearch, setCodTelSearch] = useState<any>('');
    const onSubmit: SubmitHandler<InputSearch> = async (data: any) => {
        try {
            const formData = new FormData();
            Object.keys(data).forEach(key => {
                formData.append(key, data[key as keyof InputSearch]);
            });
            let response;
            switch (search) {
                case 'Pesquisar Doador':
                    response = await SearchDonor(formData);
                    break;
                case 'Pesquisar Usuário':
                    response = await SearchUser(formData);
                    break;
                case 'Pesquisar Motorista':
                    response = await SearchDriver(formData);
                    break;
                case 'Pesquisar Ajudante':
                    response = await SearchHelper(formData);
                    break;
            };
            if (response?.Error === false) {
                setCodTelSearch(response);
                Swal.fire({
                    icon: 'success',
                    title: 'Usuário Encontrado!',
                    text: response.message,
                    confirmButtonText: 'OK'
                });
            } else if (response?.Error === true) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro!',
                    text: response.message,
                    confirmButtonText: 'OK'
                });
            };
        } catch (error) {
            console.error('Erro ao Conectar ao Banco:', error);
            Swal.fire({
                icon: 'error',
                title: 'Erro!',
                text: 'Erro ao Conectar ao Banco!',
                confirmButtonText: 'OK'
            });
        };
    };
    useEffect(() => {
        if (codTelSearch) {
            const result = Object.values(codTelSearch);
            searchDonorCodTel(result[3]);
        };
    }, [codTelSearch, searchDonorCodTel]);
    return (
        <form className='flex flex-col p-1 w-[280px]' onSubmit={handleSubmit(onSubmit)}>
            <legend className='mx-auto py-1 duration-[400ms] drop-shadow-[1px_1px_0.5px_#AAF998]'>{search}</legend>
            {search === 'Pesquisar Doador' && (
                <div className='flex flex-col'>
                    <input
                        type='search'
                        placeholder={errors.codtel ? 'Campo Obrigatório' : 'Telefone/Código só números'}
                        className={errors.codtel ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'}
                        {...register('codtel', { required: true, maxLength: 11, pattern: /\d/g })}
                    />
                    <div className='flex'>
                        <input title={search}
                            type='submit'
                            value='Cód ou Tel'
                            className='bg-blue-600 text-white font-bold py-1 px-2 duration-[400ms] cursor-pointer mx-auto rounded drop-shadow-[1px_1px_0.5px_#AAF998] hover:bg-green-600 hover:drop-shadow-[1px_1px_0.5px_#79D1FF] active:bg-blue-600 active:text-black mt-3'
                        />
                    </div>
                </div>
            )}
            {search === 'Código da Doação' && (
                <div className='flex flex-col'>
                    <input
                        type='search'
                        placeholder={errors.coddonation ? 'Campo Obrigatório' : 'Código da Doação só número'}
                        className={errors.coddonation ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'}
                        {...register('coddonation', { required: true })}
                    />
                    <input
                        title={search}
                        type='submit'
                        value='Pesquisar'
                        className='bg-blue-600 text-white font-bold py-1 px-2 duration-[400ms] cursor-pointer mx-auto rounded drop-shadow-[1px_1px_0.5px_#AAF998] hover:bg-green-600 hover:drop-shadow-[1px_1px_0.5px_#79D1FF] active:bg-blue-600 active:text-black mt-3'
                    />
                </div>
            )}
            {search === 'Pesquisar Usuário' && (
                <div className='flex flex-col'>
                    <input
                        type='search'
                        placeholder={errors.cpf ? 'Campo Obrigatório' : 'CPF'}
                        className={errors.cpf ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'}
                        {...register('cpf', { required: true, maxLength: 11, pattern: /\d/g })}
                    />
                    <div className='flex'>
                        <input title={search}
                            type='submit'
                            value='Pesquisar'
                            className='bg-blue-600 text-white font-bold py-1 px-2 duration-[400ms] cursor-pointer mx-auto rounded drop-shadow-[1px_1px_0.5px_#AAF998] hover:bg-green-600 hover:drop-shadow-[1px_1px_0.5px_#79D1FF] active:bg-blue-600 active:text-black mt-3'
                        />
                    </div>
                </div>
            )}
            {search === 'Pesquisar Motorista' && (
                <div className='flex flex-col'>
                    <input
                        type='search'
                        placeholder={errors.cnh ? 'Campo Obrigatório' : 'CNH'}
                        className={errors.cnh ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'}
                        {...register('cnh', { required: true, maxLength: 11, pattern: /\d/g })}
                    />
                    <div className='flex'>
                        <input title={search}
                            type='submit'
                            value='Pesquisar'
                            className='bg-blue-600 text-white font-bold py-1 px-2 duration-[400ms] cursor-pointer mx-auto rounded drop-shadow-[1px_1px_0.5px_#AAF998] hover:bg-green-600 hover:drop-shadow-[1px_1px_0.5px_#79D1FF] active:bg-blue-600 active:text-black mt-3'
                        />
                    </div>
                </div>
            )}
            {search === 'Pesquisar Ajudante' && (
                <div className='flex flex-col'>
                    <input
                        type='search'
                        placeholder={errors.cpf ? 'Campo Obrigatório' : 'CPF'}
                        className={errors.cpf ? 'rounded py-0.5 border-red-600 placeholder-red-600' : 'rounded py-0.5'}
                        {...register('cpf', { required: true, maxLength: 11, pattern: /\d/g })}
                    />
                    <div className='flex'>
                        <input title={search}
                            type='submit'
                            value='Pesquisar'
                            className='bg-blue-600 text-white font-bold py-1 px-2 duration-[400ms] cursor-pointer mx-auto rounded drop-shadow-[1px_1px_0.5px_#AAF998] hover:bg-green-600 hover:drop-shadow-[1px_1px_0.5px_#79D1FF] active:bg-blue-600 active:text-black mt-3'
                        />
                    </div>
                </div>
            )}
        </form>
    );
};