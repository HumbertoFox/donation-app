'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface TitleValue {
    title: string;
    value: string;
};

export default function FormFull({ title, value }: TitleValue) {
    const router = useRouter();
    const [ispassword, setIspassword] = useState<boolean>(false);
    const [ispasswordchecked, setIspasswordchecked] = useState(false);
    const handlePassword = () => setIspassword(!ispassword);
    const handlePasswordChecked = () => setIspasswordchecked(!ispasswordchecked);
    
    return (
        <form>
            {title === 'Cadastrar Veículo' && <div className='flex flex-col gap-[0.313rem]'>
                <input type='text' id='chassi' placeholder='Chassi' className='rounded py-0.5' />
                <input type='text' id='plate' placeholder='Placa' className='rounded py-0.5' />
                <input type='number' id='km' placeholder='Km' className='rounded py-0.5' />
            </div>
            }
            {title !== 'Cadastrar Veículo' && <fieldset className='flex flex-col gap-[0.313rem]'>
                <input type='text' id='name' placeholder={title === 'Cadastrar Veículo' ? 'Modelo' : 'Nome'} className='rounded py-0.5' />
                <input type='text' placeholder='CPF' className='rounded py-0.5' />
                {title === 'Cadastrar Motorista' && <input type='number' id='cnh' placeholder='CNH' className='rounded py-0.5' />}
                <input type='number' id='zipcode' placeholder='CEP' className='rounded py-0.5' />
                <input type='text' id='street' placeholder='Logradouro: Av/Rua/Trav' className='rounded py-0.5' />
                <input type='text' id='nunresidence' placeholder='Nº Casa/Edifício' className='rounded py-0.5' />
                <div className='flex gap-5 justify-center p-1'>
                    <label htmlFor='house' className='flex items-center cursor-pointer'>
                        <input type='radio' name='residence' id='house' value='house' className='mr-1.5' />
                        Casa</label>
                    <label htmlFor='buildings' className='flex items-center cursor-pointer'>
                        <input type='radio' name='residence' id='buildings' value='building' className='mr-1.5' />
                        Edifício</label>
                </div>
                <div className='flex flex-col gap-[0.313rem]'>
                    <input type='text' id='building' placeholder='Nome do Edifício' className='rounded py-0.5' />
                    <input type='text' id='block' placeholder='Bloco' className='rounded py-0.5' />
                    <input type='text' id='livingapartmentroom' placeholder='Apartamento/Sala' className='rounded py-0.5' />
                </div>
                <input type='text' id='neighborhod' placeholder='Bairro/Distrito' className='rounded py-0.5' />
                <input type='text' id='city' placeholder='Cidade' className='rounded py-0.5' />
                {(title === 'Entrar' || title === 'Cadastrar Usuário') && <div>
                    <input type={ispassword ? 'text' : 'password'} id='password' placeholder='Senha' className='rounded py-0.5' />
                    <button type='button' onClick={handlePassword} className='relative'>
                        {!ispassword && <FontAwesomeIcon icon={faEye} className='absolute bottom-[-1px] left-0.5 text-[grey]' />}
                        {ispassword && <FontAwesomeIcon icon={faEyeSlash} className='absolute bottom-[-1px] left-0.5 text-[grey]' />}
                    </button>
                </div>
                }
                {title === 'Cadastrar Usuário' && <div>
                    <input type={ispasswordchecked ? 'text' : 'password'} id='passwordcheck' placeholder='Confirmar Senha' className='rounded py-0.5' />
                    <button type='button' onClick={handlePasswordChecked} className='relative'>
                        {!ispasswordchecked && <FontAwesomeIcon icon={faEye} className='absolute bottom-[-1px] left-0.5 text-[grey]' />}
                        {ispasswordchecked && <FontAwesomeIcon icon={faEyeSlash} className='absolute bottom-[-1px] left-0.5 text-[grey]' />}
                    </button>
                </div>
                }
            </fieldset>
            }
            <div className='flex'>
                <input title={title} type='submit' value={value} className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3' />
                <button type='button' title='Voltar ao Menu' onClick={() => router.push('/menu')} className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3'>Menu</button>
            </div>
        </form>
    );
};