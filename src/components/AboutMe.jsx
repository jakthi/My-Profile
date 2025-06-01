import { useEffect, useState } from 'react';
import '../style/AboutMe.css';

function AboutMe({ aboutMe, setAboutMe }) {
    const [paragraph, setParagraph] = useState('');

    useEffect(() => {
        fetch('/data/AboutMe_Eng.txt')
            .then((response) => response.text())
            .then((data) => setParagraph(data))
    }, []);

    return (
        <>
            <div className="close" 
            style={{
                left: aboutMe === '1' ? '5px' : '-50px'
            }}
            onClick={() => setAboutMe('0')}
                >x</div>

            <div className="container-aboutme"
            style={{
                opacity: aboutMe,
                visibility: aboutMe === '0' ? 'hidden' : 'visible'
            }}
            >
                <p className='paragraph'>
                    {paragraph}
                </p>
            </div>
        </>
    )
}

export default AboutMe