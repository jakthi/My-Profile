import '../style/MyProjects.css'

function MyProjects({ myProjects, setMyProjects }) {
    return (<>
        <div className="container-myprojects" style={{ 
            right: myProjects,
            visibility: myProjects === '0' ? 'visible' : 'hidden'
        }}>
            <h1
                onClick={() => {
                    setMyProjects('-1000px');
                }}
            >
                My Projects</h1>

            <ul className='list'>
                <li><a href="https://you-tube-clone-five-sand.vercel.app/">YouTube clone</a></li>
                <li><a href="https://3d-website-with-react.vercel.app/">3D Website with React</a></li>
                <li><a href="https://rgba-tools.vercel.app/">RGBA Tools</a></li>
                <li><a href="https://zebra-crossing.vercel.app/">Zebra crossing</a></li>
                <li><a href="https://jakthi.github.io/WhatsApp-clone/">WhatsApp clone</a></li>
                <li><a href="https://amazon-clone-topaz-beta.vercel.app/">Amazon clone</a></li>
                <li><a href="https://tic-tac-toe-react-hazel-ten.vercel.app/">Tic Tac Toe React</a></li>
                <li><a href="https://jakthi.github.io/Game-Suwit-Jawa/">Game Suwit Jawa</a></li>
                <li><a href="https://jakthi.github.io/Gallery/">Gallery</a></li>
                <li><a href="https://anime-app-henna-one.vercel.app/">Anime App</a></li>
                <li><a href="https://authentication-page-kappa.vercel.app/">Authentication page</a></li>
                <li><a href="https://jakthi.github.io/QR-Generate/">QR Generate</a></li>
                <li><a href="https://jakthi.github.io/Dashboard-responsive/">Dashboard responsive</a></li>
                <li><a href="https://multiple-control.vercel.app/">Multiple control</a></li>
            </ul>
        </div>

        <div className="blank"
            style={{
                visibility: myProjects === '0' ? 'visible' : 'hidden',
                opacity: myProjects === '0' ? '0.4' : '0',
            }}
            onClick={() => {
                setMyProjects('-500px');
            }}
        >
        </div>
    </>
    )
}

export default MyProjects
