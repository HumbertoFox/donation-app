'use client';

interface AlertMessage {
    message?: string;
    Error: boolean;
    title?: string;
    onClose?: () => void;
};

export default function AlertMessage({ message, Error, title, onClose }: AlertMessage) {
    return (
        <div className='fixed w-full h-full flex justify-center items-center top-0 left-0 bg-alert-blue z-10 duration-[400ms]'>
            <section className='flex flex-col gap-[5px] text-center bg-white p-5 rounded-[15px] shadow-3xm animate-[alertmsg_.7s_ease-in-out]'>
                <h2 className={Error === false ? 'text-lg text-blue-600' : 'text-lg text-rose-600'}>{Error === true ? 'Error' : 'Sucesso'}</h2>
                <span className='text-base'>{message}</span>
                {title !== 'Fechar Login' && <button type='button' title={title} onClick={onClose} className='bg-blue-600 text-white font-bold p-2 duration-[400ms] cursor-pointer mx-auto rounded hover:bg-green-600 active:bg-blue-600 active:text-black mt-3'>Fechar</button>}
            </section>
        </div>
    );
};