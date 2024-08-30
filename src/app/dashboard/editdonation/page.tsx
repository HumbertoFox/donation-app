'use client';
import FormDonations from '@/components/forms/formdonat';
import FormSearch from '@/components/forms/formsearch';

export default function EditDonationPage() {
    return (
        <div className='flex flex-col duration-[400ms]'>
            <FormSearch search='Código da Doação' />
            <FormDonations title='Editar Doação' value='Editar' />
        </div>
    );
};