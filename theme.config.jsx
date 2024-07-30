export default {
    useNextSeoProps(){
        return {
            titleTemplate: "Trace Manual On Nextra - %s"
        }
    },
    logo: (
        <div>
            <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Trace</p>
            <p style={{ fontSize: '1em' }}>Orbiwise Server Logs Analyzer and Viewer Tool Reference Manual</p>
        </div>
    ),
    search: false,
    project: {
        link: 'https://orbiwise.com',
        icon: (
            <img 
                src="/images/logo.png"
                alt="Orbiwise Logo" 
                style={{ width: '50px', height: 'auto' }} 
            />
        )
    },
    feedback: {
        content: null, 
    },
    editLink: {
        component: null
    },
    navigation: {
        prev: false,
        next: false
    }
}
