const modulos = gerarListaModulos(); // Lista de módulos disponíveis (functions)
export const nomesModulos = gerarListaNomes() // Nomes dos módulos para seleção

function moduloVazio(altura, largura, profundidade, espessura, material) {

    let moduloGroup = new THREE.Group();

    let modulo = new Modulo(altura, largura, profundidade, material, 'Módulo Vazio');

    return {
        modulo: modulo,
        group: moduloGroup
    };
}

function modulo1(altura, largura, profundidade, espessura, material) {

    let moduloGroup = new THREE.Group();

    let alturaGavetas=1;
    let nGavetas=5;
    let gaveta = new Produto(altura*alturaGavetas, largura, profundidade, espessura, material);
    let gavetaMesh = desenha5Gavetas(gaveta);
    gavetaMesh.translateY(-altura*0.5+altura*alturaGavetas/2);
    moduloGroup.add(gavetaMesh);

    let modulo = new Modulo(altura, largura, profundidade, material, 'Módulo 1');

    return {
        modulo: modulo,
        group: moduloGroup
    };
}

function modulo2(altura, largura, profundidade, espessura, material) {

    let moduloGroup = new THREE.Group();

    let prateleira = new Produto(altura, largura, profundidade, espessura, material);

    let dist = 1;

    let mesh1 = desenhaPrateleira(prateleira);
    mesh1.translateY(altura / 4);

    let mesh2 = desenhaPrateleira(prateleira);
    mesh2.translateY(altura / 4 + dist);

    let mesh3 = desenhaPrateleira(prateleira);
    mesh3.translateY(-altura / 4);

    let mesh4 = desenhaPrateleira(prateleira);
    mesh4.translateY(-altura / 4 - dist);

    moduloGroup.add(mesh1);
    moduloGroup.add(mesh2);
    moduloGroup.add(mesh3);
    moduloGroup.add(mesh4);

    let modulo = new Modulo(altura, largura, profundidade, material, 'Módulo 2');

    return {
        modulo: modulo,
        group: moduloGroup
    };
}

function modulo100(altura, largura, profundidade, espessura, material) {

    let moduloGroup = new THREE.Group();

    let prateleira = new Produto(altura, largura, profundidade, espessura, material);

    let prateleiraMesh = desenhaPrateleira(prateleira);

    prateleiraMesh.translateY(altura / 3);

    let cabide = new Produto(altura, largura, profundidade, espessura, material);
    let cabideMesh = desenhaCabide(cabide);
    cabideMesh.translateX(altura / 4);
    cabideMesh.translateY(1.25);

    let gaveta = new Produto(altura / 8, largura, profundidade, espessura, material);
    let gavetaMesh = desenhaGaveta(gaveta);
    gavetaMesh.translateY(- altura / 2 + gaveta.altura / 2);
    let gavetaMesh2 = desenhaGaveta(gaveta);
    gavetaMesh2.translateY(- altura / 2 + gaveta.altura / 2 + (gaveta.altura));

    moduloGroup.add(prateleiraMesh);
    moduloGroup.add(cabideMesh);
    moduloGroup.add(gavetaMesh);
    moduloGroup.add(gavetaMesh2);

    let modulo = new Modulo(altura, largura, profundidade, material, 'Módulo 1');

    return {
        modulo: modulo,
        group: moduloGroup
    };
}

function gerarListaModulos() {

    let lista = [];

    lista.push(moduloVazio);

    return lista;
}

function gerarListaNomes() {

    let lista = [];

    lista.push('Módulo Vazio');

    return lista;
}