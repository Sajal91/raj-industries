import '@google/model-viewer';
import model from "./assets/model.glb?url"

const About = () => {
    return (
        <div className="w-full h-dvh">
            <model-viewer
                className="mx-auto max-w-4xl w-full h-full"
                camera-controls alt="A 3D model of an astronaut"
                camera-orbit="133.4deg 90.74deg 19.74m"
                field-of-view="14.18deg"
                src={model}
            />
        </div>
    )
}

export default About