import React from "react";
import './TodosLoading.css';

function TodosLoading () {
    return (
        <div className="loading-screen">
            <div className="loading-spinner"></div>
            <p>Loading...</p>
        </div>
    );
}

export { TodosLoading };