// inline, external, framework - bootstrap

import { styles } from "./style"

const App = () => {
    return <div >
        {/* <h1 style={styles.header}>Hello World</h1>
        <p style={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur temporibus in fuga placeat magnam aperiam. Ipsum dolores voluptates vitae. Dignissimos corporis officiis porro sunt ab dolor, soluta aliquam doloremque aut.</p> */}
        <div className="container">
            <h3 className="text-red">SAMPLE HEADING</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci id laborum velit repudiandae labore sapiente, non totam sunt quo, impedit voluptate! Nostrum, maxime! Consequatur itaque nobis nesciunt numquam, corporis aut.</p>
        </div>
    </div>
}

export default App