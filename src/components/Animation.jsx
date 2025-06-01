import '../style/Animation.css'

function Animation() {
    return (
        <div className="scene">
            <div className="cube">
                <div className="face front" style={{fontSize: '60px'}}>HTML</div>
                <div className="face back">React</div>
                <div className="face right" style={{fontSize: '35px'}}>JavaScript</div>
                <div className="face left">CSS</div>
                <div className="face top">PHP</div>
                <div className="face bottom">C++</div>
            </div>
        </div>
    )
}

export default Animation