import styles from './Tasks.module.css'
import { Trash } from 'phosphor-react';
import { useState, ChangeEvent, FormEvent } from 'react';

interface ComentProps {
    content: string;
    deleteComent: (comment: string) => void;
}
export function Tasks({ content, deleteComent }: ComentProps) {
    function handleDeleteComent() {
        deleteComent(content);
    }



    const [isChecked, setIsChecked] = useState(false);


    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
        setIsChecked(event.target.checked);
        console.log(isChecked);
    }
    
    return (
        <div className={styles.containerTasks}>
            <label className={styles.labelGap}>
                <input
                    type='checkbox'
                    checked={isChecked}  // Controla o estado da checkbox
                    onChange={handleCheckboxChange}  // Captura a mudança de estado
                />
            </label>
            <p className={styles.content}>{content} </p>
            <button
                className={styles.trashButton}
                title='Deletar comentario'
                onClick={handleDeleteComent}>
                <Trash size={20}></Trash>
            </button>
        </div>

    )
}