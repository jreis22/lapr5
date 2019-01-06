const materiais = listaMateriais();

function listaMateriais() {

    let mats = [];

    let madeira = new THREE.TextureLoader().load('../texturas/madeira.jpg');
    let material1 = new THREE.MeshLambertMaterial( { map: madeira, color: 0xffffff } );
    
    let madeira2 = new THREE.TextureLoader().load('../texturas/madeira2.jpg');
    let material2 = new THREE.MeshLambertMaterial( { map: madeira2, color: 0xffffff } );
    
    let madeira3 = new THREE.TextureLoader().load('../texturas/madeira3.jpg');
    let material3 = new THREE.MeshLambertMaterial( { map: madeira3, color: 0xffffff } );
    
    let madeira4 = new THREE.TextureLoader().load('../texturas/madeira4.jpg');
    let material4 = new THREE.MeshLambertMaterial( { map: madeira4, color: 0xffffff } );
    
    mats.push(material1);
    mats.push(material2);
    mats.push(material3);
    mats.push(material4);

    return mats;
}

function polirMaterial(material) {

    return new THREE.MeshPhongMaterial( {map: material.map, color: material.color} );
}