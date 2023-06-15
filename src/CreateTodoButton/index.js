import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
        <button className='CreateTodoButton'
        onClick={(event) => {
            console.log('Click');
            console.log(event.target);
        }}>
            <span className="material-symbols-outlined">
            add
            </span>
        </button>
    );
};

export {CreateTodoButton};