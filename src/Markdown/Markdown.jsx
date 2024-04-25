import React, { useState } from 'react'; // Importing useState from React
import './Markdown.css';
import Markdown from 'react-markdown';

const MarkdownReact = () => {
    const [markDown, setMarkDown] = useState('Welcome to markdown');

    return (
        <div className='center-div'>
            <textarea value={markDown} onChange={(e) => setMarkDown(e.target.value)} className='left-side'></textarea>
            <div className='right-side'>
                <Markdown>{markDown}</Markdown>
            </div>
        </div>
    );
};

export default MarkdownReact;
