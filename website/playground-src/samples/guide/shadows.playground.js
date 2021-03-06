function run(G3D, canvas) {

    // this feature is on developing and unstable

    // create 3d engine
    const engine = new G3D.Engine(canvas);

    // create a scene
    const scene = new G3D.Scene(engine);

    const camera = new G3D.ArcRotateCamera(scene);
    camera.alpha = 25;
    camera.beta = 0;
    camera.radius = 4;
    camera.far = 50;

    const light = new G3D.PointLight(scene);
    light.position = {x: 0, y: 0, z: 10};
    light.radius = 10;
    light.intensity = 1;

    light.castShadow = true;

    const m1 = G3D.MeshBuilder.createGround(scene, 6, 4);
    m1.position.z = -1;
    decorateMaterial(m1.materials.default);

    const m2 = G3D.MeshBuilder.createCube(scene, 0.5);
    m2.position.z = 1;
    decorateMaterial(m2.materials.default);

    function decorateMaterial(material){
        material.ambientColor.r = 200;
        material.ambientColor.g = 100;
        material.ambientColor.b = 100;
        material.diffuseColor.r = 200;
        material.diffuseColor.g = 100;
        material.diffuseColor.b = 100;
        material.specularColor.r = 200;
        material.specularColor.g = 100;
        material.specularColor.b = 100;
        material.glossiness = 10;
    }

    return function(){
        camera.alpha = 25 + Math.sin(Date.now()/1000)*10;
        m2.rotation.z += 1;
        m2.rotation.x += 1;
        m2.rotation.y += 1;
        scene.render();
    }
}