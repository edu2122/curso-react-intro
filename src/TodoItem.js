import './TodoItem.css'

function TodoItem({text, completed, onComplete, onDelete}) {
    return (
      <li className='TodoItem'>
        <div className='task-container'>
            <div 
              className='Circle-check'
              onClick={onComplete}
            > 
              <span 
                className={`Icon Icon-check material-symbols-outlined ${completed && 'Icon-check--active'}`}
                
              >
                check
              </span>
            </div>
          <p className={`TodoItem-p ${completed && 'TodoItem-p--completed'}`}>
            {text}
          </p>
        </div>
          <span 
            className="Icon Icon-delete material-symbols-outlined"
            onClick={onDelete}
          >
            close
          </span>
      </li>
    );
};

export {TodoItem};