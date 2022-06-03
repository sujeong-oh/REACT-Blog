import React from 'react'
import { useState } from 'react';

function Modal({ addItem, modalOpen, handleModalOpen }) {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ name, image, content });
        handleModalOpen(false);
    };

    return (
        <div className='modal-background' hidden={!modalOpen}>
            <form className='modal' onSubmit={handleSubmit}>
                <div className='modalContainer'>
                    <span className='modal-close' onClick={() => handleModalOpen(false)}>X</span>
                    <label htmlFor="name" className='label'>이름</label>
                    <input
                        id="name"
                        text="text"
                        placeholder="막걸리"
                        className="input"
                        maxlength="10"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <p><label htmlFor='image' className='label'>이미지</label>
                        <input
                            id="img"
                            text="text"
                            placeholder="URL"
                            className="input"
                            required
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </p>
                    <label htmlFor='content' className='label'>내용</label>
                    <input
                        id="content"
                        text="text"
                        placeholder="저는 싫어해요"
                        className="input"
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button type='submit' className='submit-button'>저장</button>
                </div>
            </form>
        </div>
    );
}

export default Modal;