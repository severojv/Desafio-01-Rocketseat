import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'
import { InfoTask } from './InfoTask'
import { Tasks } from './Tasks'
import { useState, ChangeEvent, FormEvent } from 'react';


interface ComentProps {
    content: string;
}

export function NewTask() {

    function deleteComent(commentDelete: string) {
        const comentsWithOutDeleteOne = comments.filter(comment => comment !== commentDelete);
        setComments(comentsWithOutDeleteOne);
    }

    const [comments, setComments] = useState<string[]>(['post']);
    const [newComentText, setNewComent] = useState('');

    function handleNewComentChange(event:ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewComent(event.target.value);
    }

    function handleCreateNewComment(event:FormEvent){
        event.preventDefault()
        setComments([...comments,newComentText]);
        setNewComent('');
    }


    return (
        <div >

            <form onSubmit={handleCreateNewComment} className={styles.formulario}>
                <textarea
                    name="comment"
                    value={newComentText}
                    placeholder="Adicione uma nova tarefa"
                    className={styles.textarea}
                    onChange={handleNewComentChange}
                    >

                </textarea>
                <button type="submit" className={styles.button}>
                    <PlusCircle size={20} />
                    <p>Criar</p>
                </button>
            </form>
            <div className={styles.tomagap}>
            </div>

            <InfoTask></InfoTask>
            <div className={styles.space}>

            </div>
            <div>
                {comments.map(comment => {
                    return <Tasks  key={comment} content={comment} deleteComent={deleteComent} />
                })}

            </div>
        </div>
    )
}