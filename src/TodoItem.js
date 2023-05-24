import './TodoItem.css'

function TodoItem({text, completed}) {
    return (
      <li className='TodoItem'>
        <div className='task-container'>
            <div className='Circle-check'> 
              <span className={`Icon Icon-check material-symbols-outlined ${completed && 'Icon-check--active'}`}>
                check
              </span>
            </div>
          <p className={`TodoItem-p ${completed && 'TodoItem-p--completed'}`}>
            {text}
          </p>
        </div>
          <span className="Icon Icon-delete material-symbols-outlined">
            close
          </span>
      </li>
    );
};

export {TodoItem};