import * as Constants from './constants'
import * as THREE from 'three';

const ESPESSURA_CABIDE = 2;
const NUMERO_FATIAS_CABIDE = 25.0;

export const partes = gerarListaPartes();
export const nomesPartes = gerarListaNomes();

/*
 Cabide:
 - LARGURA
 - TEXTURA
*/

export function desenhaCabide(cabide) {

	let cabideGroup = new THREE.Group();

	let profundidade = cabide.profundidade;
	let espessura = cabide.espessura;
	let comprimento = cabide.largura;
	let raioSegmentos = NUMERO_FATIAS_CABIDE;

	var geometry;
	geometry = new THREE.CylinderGeometry(espessura, espessura, comprimento, raioSegmentos);
	var objectoCabide = new THREE.Mesh(geometry, cabide.material);
	//objectoCabide.position.set(-2, 1, 1);
	objectoCabide.position.set(0, 0, 0);
	objectoCabide.rotation.z = Math.PI / 2;

	geometry = new THREE.CylinderGeometry(espessura / 4, espessura, profundidade / 2, raioSegmentos);
	let textura = new THREE.TextureLoader().load('../texturas/aluminio.jpg');
	let cabideMaterial = new THREE.MeshPhysicalMaterial({ map: textura, color: Constants.COLORS.gray });
	var objectoSuporte = new THREE.Mesh(geometry, cabideMaterial);
	objectoSuporte.rotation.x = Math.PI / 2;
	objectoSuporte.position.set(0, 0, -profundidade/4);

	cabideGroup.add(objectoCabide);
	cabideGroup.add(objectoSuporte);

	return cabideGroup;
}

export function desenhaPrateleira(produto) {

	let largura = produto.largura;
	let profundidade = produto.profundidade;
	let espessura = produto.espessura;
	let material = produto.material;

	let geometry = new THREE.BoxGeometry(largura, espessura, profundidade - espessura);
	let prateleira = new THREE.Mesh(geometry, material);
	prateleira.position.set(0, 0, espessura / 2);

	return prateleira;
}

export function desenhaGaveta(produto) {

	let gavetaGroup = new THREE.Group();

	let largura = produto.largura;
	let altura = produto.altura;
	let profundidade = produto.profundidade;
	let espessura = produto.espessura;

	let geometry;
	let material = produto.material;

	// Traseira
	geometry = new THREE.BoxGeometry(largura, altura - espessura, espessura);
	let part1 = new THREE.Mesh(geometry, material);
	part1.position.set(0, espessura / 2, espessura - profundidade/2);

	// Frente
	geometry = new THREE.BoxGeometry(largura, altura - espessura, espessura);
	let part2 = new THREE.Mesh(geometry, material);
	part2.position.set(0, espessura / 2, profundidade/2 - espessura * 0.5 - Constants.RAIO_SPHERE * 2);
	part2.name = "FrenteGaveta";

	// Direita
	geometry = new THREE.BoxGeometry(espessura, altura - espessura, profundidade - Constants.RAIO_SPHERE * 2 - espessura * 2.5);
	let part3 = new THREE.Mesh(geometry, material);
	part3.translateX(largura * 0.5 - espessura / 2);
	part3.translateY(espessura * 0.5);
	part3.translateZ( - Constants.RAIO_SPHERE + espessura * 0.25);
	part3.name = "DireitaGaveta";

	// Esquerda
	geometry = new THREE.BoxGeometry(espessura, altura - espessura, profundidade - Constants.RAIO_SPHERE * 2 - espessura * 2.5);
	let part4 = new THREE.Mesh(geometry, material);
	part4.position.set(-largura * 0.5 + espessura * 0.5, espessura * 0.5, - Constants.RAIO_SPHERE + espessura * 0.25);
	part4.name = "EsquerdaGaveta";

	// Baixo
	geometry = new THREE.BoxGeometry(largura, espessura, profundidade - Constants.RAIO_SPHERE * 2 - espessura / 2);
	let part5 = new THREE.Mesh(geometry, material);
	part5.translateY(-altura / 2 + espessura / 2);
	part5.translateZ(profundidade * 0.5 - Constants.RAIO_SPHERE + espessura / 4);
	part5.position.set(0, -altura * 0.5 + espessura * 0.5, - Constants.RAIO_SPHERE + espessura / 4);
	part5.name = "BaixoGaveta";

	geometry = new THREE.SphereGeometry(Constants.RAIO_SPHERE, 32, 32);
	let sphere = new THREE.Mesh(geometry, material);
	sphere.position.set(0, 0, profundidade/2 - Constants.RAIO_SPHERE);
	sphere.name = "PuxadorGaveta";

	gavetaGroup.add(part1);
	gavetaGroup.add(part2);
	gavetaGroup.add(part3);
	gavetaGroup.add(part4);
	gavetaGroup.add(part5);
	gavetaGroup.add(sphere);

	gavetaGroup.position.set(0, 0, espessura / 2);

	return gavetaGroup;
}

export function desenhaTabuaVertical(produto) {

	let altura = produto.altura;
	let largura = produto.largura;
	let profundidade = produto.profundidade;
	let espessura = produto.espessura;
	let material = produto.material;

	let geometry = new THREE.BoxGeometry(espessura, altura - espessura, profundidade);
	let tabua = new THREE.Mesh(geometry, material);
	tabua.position.set(0, 0, espessura / 2);

	return tabua;
}

function desenhaNGavetas(nGavetas, produto) {

	let altura = produto.altura;
	let largura = produto.largura;
	let profundidade = produto.profundidade - produto.espessura;
	let espessura = produto.espessura;
	let material = produto.material;

	let grupo = new THREE.Group();
	let alturaGaveta = (altura - espessura) / nGavetas;
	let larguraGaveta = (largura - espessura * 2);

	let produtoGaveta = new Produto(alturaGaveta, larguraGaveta, profundidade, espessura, material);

	for (i = 0; i < nGavetas; i++) {
		let gavetaMesh = desenhaGaveta(produtoGaveta);
		gavetaMesh.translateY(alturaGaveta * i);
		grupo.add(gavetaMesh);
	}
	//grupo.translateY(espessura/2);

	let produtoTabua = new Produto(altura, largura, profundidade - espessura / 2, espessura, material);
	let produtoPrateleira = new Produto(altura, largura, profundidade + espessura / 2, espessura, material);
	let tabuaDireita = desenhaTabuaVertical(produtoTabua);
	tabuaDireita.translateX(largura / 2 - espessura / 2);
	tabuaDireita.translateY(altura / 2 - alturaGaveta / 2 - espessura / 2);
	//tabuaDireita.translateZ(espessura / 2);

	let tabuaEsquerda = desenhaTabuaVertical(produtoTabua);
	tabuaEsquerda.translateX(-largura / 2 + espessura / 2);
	tabuaEsquerda.translateY(altura / 2 - alturaGaveta / 2 - espessura / 2);
	//tabuaEsquerda.translateZ(espessura / 2);

	let prateleira = desenhaPrateleira(produtoPrateleira);
	prateleira.translateY(alturaGaveta * (nGavetas - 0.5) + espessura / 2);

	grupo.add(prateleira);
	grupo.add(tabuaEsquerda);
	grupo.add(tabuaDireita);
	grupo.translateY(-(altura / 2) + alturaGaveta / 2);
	grupo.translateZ(-espessura);

	return grupo;
}

export function desenha3Gavetas(produto) {
	return desenhaNGavetas(3, produto);
}

function desenha4Gavetas(produto) {
	return desenhaNGavetas(4, produto);
}

function desenha5Gavetas(produto) {
	return desenhaNGavetas(5, produto);
}

function desenha6Gavetas(produto) {
	return desenhaNGavetas(6, produto);
}

function desenhaEspacoVazio(produto) {

	let mesh= new THREE.Mesh();

	return mesh;
}

function gerarListaPartes() {

	let lista = [];
	lista.push(desenhaGaveta);
	lista.push(desenhaCabide);
	lista.push(desenhaPrateleira);
	
	lista.push(desenha3Gavetas);
	lista.push(desenha4Gavetas);
	lista.push(desenha5Gavetas);
	lista.push(desenha6Gavetas);
	lista.push(desenhaEspacoVazio);
	return lista;
}

function gerarListaNomes() {

	let lista = [];

	lista.push('3 Gavetas');
	lista.push('4 Gavetas');
	lista.push('5 Gavetas');
	lista.push('6 Gavetas');
	lista.push('Espaço vazio');
	lista.push('Prateleira');
	lista.push('Cabide');

	return lista;
}