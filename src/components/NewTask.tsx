import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'
import { InfoTask } from './InfoTask'
import { Tasks } from './Tasks'
import { useState, ChangeEvent, FormEvent } from 'react';
interface TaskType {
    id: string;
    content: string;
}

export function NewTask() {
    const [countCheck, setCountCheck] = useState(0);  

    

    const [comments, setComments] = useState<TaskType[]>([]);
    const [newComentText, setNewComent] = useState('');
    const [concluidos,setConcluidos]=useState(0);
    const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({});
    function handleNewComentChange(event:ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewComent(event.target.value);
    }
    function deleteComent(commentDelete: string, wasChecked: boolean) {
        setComments(prev => prev.filter(comment => comment.id !== commentDelete));
        setConcluidos(prev => prev - 1);
        if (wasChecked) {
            setCountCheck(prev => prev - 1);  
        }
        setCheckedTasks(prev => {
            const newTasks = { ...prev };
            delete newTasks[commentDelete];
            return newTasks;
        });
    }
    function handleCreateNewComment(event:FormEvent){
        event.preventDefault()
        const newId = (comments.length + 1).toString();
        setComments(prev => [...prev, { id: newId, content: newComentText }]);
        setConcluidos(prev => prev + 1);
        setNewComent('');
    }
    function handleCheckChange(content: string, isChecked: boolean) {
        setCheckedTasks(prev => ({ ...prev, [content]: isChecked }));
        setCountCheck(prev => isChecked ? prev + 1 : prev - 1);
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
                    required
                    >

                </textarea>
                <button type="submit" className={styles.button}>
                    <PlusCircle size={20} />
                    <p>Criar</p>
                </button>
            </form>
            <div className={styles.tomagap}>
            </div>

            <InfoTask  countCheck={countCheck} count={concluidos}></InfoTask>
            <div className={styles.space}>

            </div>
            <div>
                {comments.map(comment => {
                    return <Tasks  id={comment.id}  onCheckChange={handleCheckChange} key={comment.id} content={comment.content} deleteComent={deleteComent} />
                })}

            </div>
        </div>
    )
}