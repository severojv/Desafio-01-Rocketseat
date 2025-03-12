import styles from './Tasks.module.css'
import { Trash } from 'phosphor-react';
import { useState } from 'react';

interface ComentProps {
    content: string;
    deleteComent: (id: string, wasChecked: boolean) => void; 
    onCheckChange: (content: string, isChecked: boolean) => void;
    id: string;
}

export function Tasks({ content, deleteComent, onCheckChange, id }: ComentProps) {
    function handleDeleteComent() {
        deleteComent(id, isChecked);
    }



    const [isChecked, setIsChecked] = useState(false);


    function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
        const checked = event.target.checked;
        setIsChecked(checked);
        onCheckChange(content, checked);
    }
    
    return (
        <div className={styles.containerTasks}>
            <label className={styles.labelGap}>
                <input
                    type='checkbox'
                    checked={isChecked}  
                    onChange={handleCheckboxChange}  
                    
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