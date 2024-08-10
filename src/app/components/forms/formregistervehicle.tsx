import { useRouter } from 'next/navigation';
import styles from '@/app/components/style/forms.module.css';

export default function FormRegisterVehicle() {
    const router = useRouter();
    
    return (
        <form className={styles.formvehicle}>
            <input type='text' id='name' placeholder='Modelo' />
            <input type='text' id='chassi' placeholder='Chassi' />
            <input type='text' id='plate' placeholder='Placa' />
            <input type='number' id='km' placeholder='Km' />
            <div className={styles.divbtnvehicle}>
                <input type='submit' title='Cadastrar Motorista' value='Cadastrar' />
                <button type='button' title='Voltar ao Menu' onClick={() => router.push('/registermenu')}>Menu</button>
            </div>
        </form>
    );
};