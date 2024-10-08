'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardUser } from '@fortawesome/free-solid-svg-icons';
import FormFull from '@/components/forms/form';
export default function RegisterHelperPage() {
    return (
        <section className='flex flex-col items-center gap-[50px]'>
            <h1 className='text-blue-600 font-bold text-xl'>Cadastrar Ajudante</h1>
            <FontAwesomeIcon icon={faClipboardUser} className='text-[75px] text-[green]' />
            <FormFull title='Cadastrar Ajudante' value='Cadastrar' page='Menu' subpage='Registerhelper' searchDonorCodTel={null} />
        </section>

    );
};