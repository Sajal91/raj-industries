import '@google/model-viewer'
import model from "./assets/model.glb?url"

const About = () => {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <model-viewer
                className="model-viewer w-full h-full"
                src={model}
                camera-controls
                alt="A 3D model of an astronaut"
                camera-orbit="133.4deg 90.74deg 19.74m"
                field-of-view="14.18deg"
            />
        </div>
    )
}

export default About