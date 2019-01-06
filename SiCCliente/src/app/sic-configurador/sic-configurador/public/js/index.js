import * as THREE from 'three';
import * as TWEEN from 'tween';
import { OrbitControls } from 'three-orbitcontrols-ts';
import * as Constants from './constants';
import { Armario } from './armario';
import * as Partes from './partes';
import * as Modulos from './modulos';
import * as Utils from './utils';
import { Modulo } from './modulo';
import { Parte } from './parte';

var scene, camera, controls, renderer, light, armarioGroup, selectedMaterial, container, porta1, porta2, INTERSECTED, raycaster, leftLight, rightLight, topLight, jsonObj;
var mouse = new THREE.Vector2();
var mouseClick = new THREE.Vector2();
var portaAberta1 = false;
var portaAberta2 = false;
var gavetasAbertas = 0;
var _selected;
var plane = new THREE.Plane();
var _offset = new THREE.Vector3();
var _intersection = new THREE.Vector3();
var timer = null;
var animacaoDecorrer = false;
var armarioY = 0;
var listaModulos = [];
var canvasTile;
var rect;

var armario;

//init();
//importJson('json/shelves.json', 2);
//carregarModulos();
//carregarPartes();
//criarListas();
//animate();

export function init() {

	canvasTile = document.getElementById('canvasTile');

	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xffffff);
	camera = new THREE.PerspectiveCamera(75, canvasTile.offsetWidth / canvasTile.offsetHeight, 0.1, 1000);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(canvasTile.offsetWidth, canvasTile.offsetHeight);
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	document.getElementById('rendererContainer').appendChild(renderer.domElement);

	light = new THREE.PointLight(0xffffff, 0.7, 0, 1); // soft white light
	light.castShadow = true;

	leftLight = new THREE.PointLight(0xffffff, 0.7, 0, 1);
	leftLight.position.x = -Constants.LIGHT_OFFSET;
	leftLight.castShadow = true;

	rightLight = new THREE.PointLight(0xffffff, 0.7, 0, 1);
	rightLight.position.x = Constants.LIGHT_OFFSET;
	rightLight.castShadow = true;

	topLight = new THREE.PointLight(0xffffff, 0.7, 0, 1);
	topLight.position.y = Constants.LIGHT_OFFSET * 2;
	topLight.castShadow = true;

	//mudarLuzes();

	scene.add(light);
	controls = new OrbitControls(camera, renderer.domElement);
	controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
	controls.dampingFactor = 0.25;
	controls.screenSpacePanning = false;
	
	controls.minDistance = 0.1;
	controls.maxDistance = Constants.CAMERA_INITIAL_Z;
	controls.maxPolarAngle = Math.PI / 2;
	controls.minAzimuthAngle = - Math.PI / 2;
	controls.maxAzimuthAngle = Math.PI / 2;
	controls.enablePan = false;

	armario = new Armario(0, 0, 0);

	//let textura = new THREE.TextureLoader().load('../texturas/madeira.jpg');
	//selectedMaterial = new THREE.MeshStandardMaterial({ map: textura, color: 0x703600 });

	//desenhaChao();
	//desenhaArmario(armario);

	camera.position.z = Constants.CAMERA_INITIAL_Z;

	raycaster = new THREE.Raycaster();

	rect = canvasTile.getBoundingClientRect();

	window.addEventListener("resize", onWindowResize, false);
	window.addEventListener("mousemove", onDocumentMouseMove, false);
	window.addEventListener("click", onDocumentClick, false);
	window.addEventListener("mousedown", onDocumentMouseDown, false);
	window.addEventListener("mouseup", onDocumentMouseUp, false);

	desenhaSala();
}

export function animate() {

	requestAnimationFrame(animate);

	TWEEN.update();
	/* *
	raycaster.setFromCamera(mouse, camera);
	var intersects = raycaster.intersectObjects(scene.children, true);
  
	if (intersects.length > 0) {
	  if (INTERSECTED != intersects[0].object) {
		if (INTERSECTED)
		  INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
  
		INTERSECTED = intersects[0].object;
		INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
		INTERSECTED.material.emissive.setHex(COLORS.pink);
	  }
	} else {
	  if (INTERSECTED)
		INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
  
	  INTERSECTED = null;
	}
	/* */
	controls.update();
	light.position.set(camera.position.x + 1, camera.position.y + 1, camera.position.z + 1);

	renderer.render(scene, camera);
}

function normalize(val, max, min) {

	return (val - min) / (max - min);

}

function desenhaArmario(armario) {
	armarioGroup = new THREE.Group();

	let altura = armario.altura;
	let largura = armario.largura;
	let profundidade = armario.profundidade;
	let espessura = Constants.ESPESSURA_PAREDES;

	let geometry;

	//armario.material = selectedMaterial;

	// Traseira
	geometry = new THREE.BoxGeometry(largura - espessura, altura - espessura, espessura);
	let part1 = new THREE.Mesh(geometry, armario.material);
	part1.position.set(0, 0, -(profundidade - espessura) / 2);
	part1.name = "Traseira";
	part1.castShadow = true;

	// Direita
	geometry = new THREE.BoxGeometry(espessura, altura - espessura, profundidade);
	let part2 = new THREE.Mesh(geometry, armario.material);
	part2.position.set(largura / 2, 0, 0);
	part2.name = "Parede Direita";
	part2.castShadow = true;

	// Esquerda
	geometry = new THREE.BoxGeometry(espessura, altura - espessura, profundidade);
	let part3 = new THREE.Mesh(geometry, armario.material);
	part3.position.set(-largura / 2, 0, 0);
	part3.name = "Parede Esquerda";
	part3.castShadow = true;

	// Baixo
	geometry = new THREE.BoxGeometry(largura + espessura, espessura, profundidade);
	let part4 = new THREE.Mesh(geometry, armario.material);
	part4.position.set(0, -altura / 2, 0);
	part4.name = "Base";
	part4.castShadow = true;

	// Cima
	geometry = new THREE.BoxGeometry(largura + espessura, espessura, profundidade);
	let part5 = new THREE.Mesh(geometry, armario.material);
	part5.position.set(0, altura / 2, 0);
	part5.name = "Teto";
	part5.castShadow = true;

	armarioGroup.add(part1);
	armarioGroup.add(part2);
	armarioGroup.add(part3);
	armarioGroup.add(part4);
	armarioGroup.add(part5);

	// Portas armário
	var portasGroup = new THREE.Group();

	geometry = new THREE.BoxGeometry((largura / 2) - (espessura / 2), altura - espessura, espessura);
	geometry.applyMatrix(new THREE.Matrix4().makeTranslation((((largura / 2) - (espessura / 2)) / 2), 0, -espessura / 2));
	porta1 = new THREE.Mesh(geometry, armario.material);
	porta1.position.set((-largura + espessura) * 2 / 4, 0, profundidade / 2);
	porta1.name = "Porta1";
	porta1.castShadow = true;

	geometry = new THREE.SphereGeometry(Constants.RAIO_SPHERE, 32, 32);
	let puxador1 = new THREE.Mesh(geometry, armario.material);
	puxador1.position.set((largura - espessura) * 2 / 5, 0, Constants.RAIO_SPHERE);
	puxador1.name = "Puxador1";
	puxador1.castShadow = true;
	porta1.add(puxador1);

	geometry = new THREE.BoxGeometry((largura / 2) - (espessura / 2), altura - espessura, espessura);
	geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-(((largura / 2) - (espessura / 2)) / 2), 0, -espessura / 2));
	porta2 = new THREE.Mesh(geometry, armario.material);
	porta2.position.set((largura - espessura) * 2 / 4, 0, profundidade / 2);
	porta2.name = "Porta2";
	porta2.castShadow = true;

	geometry = new THREE.SphereGeometry(Constants.RAIO_SPHERE, 32, 32);
	let puxador2 = new THREE.Mesh(geometry, armario.material);
	puxador2.position.set((-largura - espessura) * 2 / 5, 0, Constants.RAIO_SPHERE);
	puxador2.name = "Puxador2";
	puxador2.castShadow = true;
	porta2.add(puxador2);

	if (portaAberta1) {
		var targetAngle = porta1.rotation.y === Constants.ANGULO_PORTAS * Constants.DEG_TO_RAD ? 0 : Constants.ANGULO_PORTAS * Constants.DEG_TO_RAD;
		porta1.rotation.y = targetAngle;
	}

	if (portaAberta2) {
		var targetAngle = porta2.rotation.y === Constants.ANGULO_PORTAS * -Constants.DEG_TO_RAD ? 0 : Constants.ANGULO_PORTAS * -Constants.DEG_TO_RAD;
		porta2.rotation.y = targetAngle;
	}

	portasGroup.add(porta1);
	portasGroup.add(porta2);
	armarioGroup.add(portasGroup);

	let rui = new THREE.Group();

	for (var i = 0; i < armario.modulos.length; i++) {
		var modulo = armario.modulos[i].modulo;

		var moduloMesh = new THREE.Mesh();

		for (var j = 0; j < modulo.produtos.length; j++) {
			let produto = modulo.produtos[j];

			let produtoMesh = Partes.partes[produto.tipo](produto);

			moduloMesh.add(desenhaProduto(modulo, produtoMesh, produto, j));
		}

		moduloMesh.position.set(0, espessura / 2, 0);

		var larguraModulo = armario.modulos[i].modulo.largura;

		let translateDist = -armario.largura / 2
			+ larguraModulo / 2
			+ armario.larguraOcupada(i);
		moduloMesh.translateX(translateDist);

		let produtoSeparador = new Parte(modulo.altura + espessura, modulo.largura, modulo.profundidade - espessura, espessura, armario.material);
		let separadorMesh = Partes.desenhaTabuaVertical(produtoSeparador);
		separadorMesh.translateY(-espessura / 2);
		separadorMesh.translateZ(-espessura);

		if (armario.modulos.length > 2) {

			if (i === 0) {
				moduloMesh.scale.set((modulo.largura - espessura / 4) / modulo.largura, 1, 1);
				moduloMesh.translateX(-espessura / 2);
				separadorMesh.scale.set(1.2, 1, 1);
				separadorMesh.translateX(modulo.largura / 2 + espessura / 2);
				moduloMesh.add(separadorMesh);
			} else if (i === armario.modulos.length - 1) {
				moduloMesh.scale.set((modulo.largura - espessura / 4) / modulo.largura, 1, 1);
				moduloMesh.translateX(espessura / 2);
				separadorMesh.translateX(-modulo.largura / 2 - espessura / 2);
				moduloMesh.add(separadorMesh);
			} else {
				moduloMesh.scale.set((modulo.largura - espessura) / modulo.largura, 1, 1);
				if (i != armario.modulos.length - 2) {
					separadorMesh.translateX(modulo.largura / 2 + espessura / 2);
					moduloMesh.add(separadorMesh);

				}
			}

		} else if (armario.modulos.length == 2) {

			if (i === 0) {
				moduloMesh.scale.set((modulo.largura - espessura / 4) / modulo.largura, 1, 1);
				moduloMesh.translateX(-espessura / 2);
				separadorMesh.scale.set(1.2, 1, 1);
				separadorMesh.translateX((modulo.largura - espessura) / 2 + espessura * 1.15);
				moduloMesh.add(separadorMesh);
			} else {
				moduloMesh.scale.set((modulo.largura - espessura / 4) / modulo.largura, 1, 1);
				moduloMesh.translateX(espessura / 2);
			}

		}

		rui.add(moduloMesh);
	}

	rui.scale.set((largura - espessura) / largura, 1, 1);
	armarioGroup.add(rui);

	armarioGroup.translateY(armarioY / 2);
	scene.add(armarioGroup);
	//criarListas();
}

function desenhaProduto(modulo, parte, produto, index) {
	parte.translateY(-armario.altura / 2 + produto.altura / 2);
	let alturaOcupada = modulo.alturaOcupada(index);
	parte.translateY(alturaOcupada);

	return parte;
}

export function updateDimensoes(altura, largura, profundidade) {

	if (largura < Constants.LARGURA_MIN || largura > Constants.LARGURA_MAX) {
		
		//erro.innerHTML = 'Largura inválida!';
		//alert.style.display = 'inline';
		return;
	}

	if (altura < Constants.ALTURA_MIN || altura > Constants.ALTURA_MAX) {

		//erro.innerHTML = 'Altura inválida!';
		//alert.style.display = 'inline';
		return;
	}


	if (profundidade < Constants.PROFUNDIDADE_MIN || profundidade > Constants.PROFUNDIDADE_MAX) {

		//erro.innerHTML = 'Profundidade inválida!';
		//alert.style.display = 'inline';
		return;
	}

	if (largura >= armario.larguraOcupadaTotal()) {
		if (altura >= armario.alturaMaximaDosModulos()) {
			armarioY += altura - armario.altura;
			armario.mudarDimensoes(altura, largura, profundidade);

			// Remove o armário da cena e redesenha-o
			scene.remove(armarioGroup);
			desenhaArmario(armario);

		}
		else {

			//erro.innerHTML = 'Não é possível diminuir a altura.';
			//alert.style.display = 'inline';
		}
	}
	else {

		//erro.innerHTML = 'Não é possível diminuir a largura. Por favor remova um módulo.';
		//alert.style.display = 'inline';
	}
}

function carregarModulos() {

	var select = document.getElementById('selectModulo');

	for (var i = 0; i < Modulos.nomesModulos.length; i++) {
		var opt = Modulos.nomesModulos[i];
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = i;
		select.appendChild(el);
	}

}

function criarListas() {
	criarListaModulos();
	criarListaProdutos();
}

function criarListaModulos() {
	let select = document.getElementById('listaModulos');
	let length = select.length;
	for (var j = 0; j < length; j++) {
		select.remove(0);
	}
	for (var i = 1; i <= armario.modulos.length + 1; i++) {
		let el = document.createElement("option");
		el.textContent = i;
		el.value = i;
		select.appendChild(el);
	}
}

function criarListaProdutos() {
	let selectModulo = document.getElementById('listaModulos');
	let indexModulo = selectModulo.selectedIndex;
	let select = document.getElementById('listaProdutos');
	let length = select.length
	for (var j = 0; j < length; j++) {
		select.remove(0);
	}
	if (armario.modulos.length == 0 || armario.modulos.length <= indexModulo) {
		length = 0;
	} else {
		length = armario.modulos[indexModulo].modulo.produtos.length;
	}
	for (var i = 1; i <= length + 1; i++) {
		let el = document.createElement("option");
		el.textContent = i;
		el.value = i;
		select.appendChild(el);
	}
}

export function addModulo(itemModulo) {
	/*
	let erro = document.getElementById('erro');
	let alert = document.getElementById('alertErro');
	alert.style.display = 'none';

	if (Number(document.getElementById('numberLarguraModulo').value) < Constants.LARGURA_MIN_MODULO) {

		erro.innerHTML = 'O módulo não deve ter largura inferior a ' + Constants.LARGURA_MIN_MODULO;
		alert.style.display = 'inline';
		return;
	}
	
	let nModulos = armario.modulos.length;
	let select = document.getElementById('selectModulo');
	let index = select.options[select.selectedIndex].value;
	let larguraModulo = Number(document.getElementById('numberLarguraModulo').value);
	*/
	
	let index = armario.modulos.length;
	
	let larguraModulo = itemModulo.largura;
	let moduloGroup = new THREE.Group();
	let moduloM = new Modulo(armario.altura - Constants.ESPESSURA_PAREDES,
		larguraModulo,
		armario.profundidade - Constants.ESPESSURA_PAREDES,
		armario.material, 'Modulo vazio');

	let modulo = {
        modulo: moduloM,
        group: moduloGroup
    }
	if (validarNovoModulo(larguraModulo)) {
		scene.remove(armarioGroup);
		armario.adicionarModulo(modulo, index);
		/*
		let larguraMinimaDoArmario = armario.larguraOcupadaTotal();
		if (larguraMinimaDoArmario > Constants.LARGURA_MIN) {
			document.getElementById('numberLargura').min = larguraMinimaDoArmario;
		} else {
			document.getElementById('numberLargura').min = Constants.LARGURA_MIN;
		}
		*/
		desenhaArmario(armario);
		//criarListas();

	}
	else {
		/*
		erro.innerHTML = 'Não é possível acrescentar mais módulos!';
		alert.style.display = 'inline';
		*/
		throw new Error("Não é possível acrescentar mais módulos!");
	}
}

export function validarNovoModulo(larguraModulo) {
	return armario.larguraOcupadaTotal() + larguraModulo <= armario.largura;
}

export function removerModulo(selectedIndex) {
/*
	let erro = document.getElementById('erro');
	let alert = document.getElementById('alertErro');
	alert.style.display = 'none';
	let selectModulo = document.getElementById('listaModulos');
	let selectedIndex = selectModulo.selectedIndex;
	*/
	if (armario.modulos.length == selectedIndex) {
		/*erro.innerHTML = 'O módulo selecionado não existe.';
		alert.style.display = 'inline';
		return;
		*/
		throw new Error('O módulo selecionado não existe.');
	}
	scene.remove(armarioGroup);
	armario.removerModulo(selectedIndex);
/*
	let larguraMinimaDoArmario = armario.larguraOcupadaTotal();
	if (larguraMinimaDoArmario > Constants.LARGURA_MIN) {
		document.getElementById('numberLargura').min = larguraMinimaDoArmario;
	} else {
		document.getElementById('numberLargura').min = Constants.LARGURA_MIN;
	}
*/
	desenhaArmario(armario);
}

export function addParte(indexModulo, selectParte, tipo, material, acabamento) {
/*
	let erro = document.getElementById('erro');
	let alert = document.getElementById('alertErro');
	alert.style.display = 'none';

	let selectModulo = document.getElementById('listaModulos');
	
	let indexModulo = selectModulo.selectedIndex;

	if (armario.modulos.length == indexModulo) {
		erro.innerHTML = 'O módulo selecionado não existe.';
		alert.style.display = 'inline';
		return;
	}
*/
	let modulo = armario.modulos[indexModulo].modulo;
	/*let select = document.getElementById('selectParte');
	let index = select.selectedIndex;

	//let selectParte = document.getElementById('listaProdutos');

	
	let altura = ((Number(document.getElementById('numberAlturaParte').value)) * modulo.altura) / armario.altura;
	altura = Number(altura.toFixed(2));
	*/
	let produto = new Parte(selectParte.altura, selectParte.largura, selectParte.profundidade, Constants.ESPESSURA_PAREDES, armario.material, tipo);
	let indexParte = modulo.produtos.length;
	/*let alturaLivre = modulo.altura - modulo.alturaOcupadaTotal();
	alturaLivre = alturaLivre.toFixed(2);*/


	if (validarNovaParte(produto, modulo)) {
		scene.remove(armarioGroup);
		
		updateMaterialParte(material, produto, function(parteComMaterial){
			updateAcabamentoParte(parteComMaterial, acabamento);
			armario.modulos[indexModulo].modulo.addProduto(parteComMaterial, indexParte);
			desenhaArmario(armario);
		});
		
		/*let alturaMaximaDosModulos = armario.alturaMaximaDosModulos();
		if (alturaMaximaDosModulos > Constants.ALTURA_MIN) {
			//document.getElementById('numberAltura').min = alturaMaximaDosModulos;
		} else {
			//document.getElementById('numberAltura').min = Constants.ALTURA_MIN; FIXME
		}*/
		
		
		//criarListaProdutos();
	} else {
		//erro.innerHTML = 'Não é possível inserir uma parte com essa altura.';
		//alert.style.display = 'inline';
		throw new Error('Não é possível inserir uma parte com essa altura.');
	}
}

export function validarNovaParte(parte, modulo) {
	return modulo.alturaOcupadaTotal() + parte.altura <= modulo.altura 
		&& parte.largura <= modulo.largura
		&& parte.profundidade <= modulo.profundidade;
}

export function removerParte(indexModulo, indexParte) {
/*
	let selectModulo = document.getElementById('listaModulos');
	let indexModulo = selectModulo.selectedIndex;

	let selectParte = document.getElementById('listaProdutos');
	let indexParte = selectParte.selectedIndex;

	let erro = document.getElementById('erro');
	let alert = document.getElementById('alertErro');
	alert.style.display = 'none';
*/
	if (armario.modulos.length == indexModulo) {
		/*erro.innerHTML = 'O módulo selecionado não existe.';
		alert.style.display = 'inline';
		return;*/
		throw new Error('O módulo selecionado não existe.');
	}

	if (armario.modulos[indexModulo].modulo.produtos.length == indexParte) {
		/*erro.innerHTML = 'A parte selecionada não existe.';
		alert.style.display = 'inline';
		return;*/
		throw new Error('A parte selecionada não existe.');
	}

	let modulo = armario.modulos[indexModulo].modulo;
	if (modulo.alturaOcupadaTotal() > 0) {
		scene.remove(armarioGroup);

		armario.modulos[indexModulo].modulo.removerProduto(indexParte);

		/*let alturaMaximaDosModulos = armario.alturaMaximaDosModulos();
		if (alturaMaximaDosModulos > Constants.ALTURA_MIN) {
			//document.getElementById('numberAltura').min = alturaMaximaDosModulos; FIXME
		} else {
			//document.getElementById('numberAltura').min = Constants.ALTURA_MIN; FIXME
		}*/

		desenhaArmario(armario);
		//criarListaProdutos();
	}
}

function updateMaterialParte(material, parte, callback) {

	//scene.remove(armarioGroup);

	let buffer = Utils.base64ToArrayBuffer(material.textura);

	var imageBlob = new Blob([buffer], {type: "image/png"});

	var url = URL.createObjectURL(imageBlob);

	var manager = new THREE.LoadingManager();
	manager.onStart = function ( url, itemsLoaded, itemsTotal ) {

		console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );

	};

	manager.onLoad = function ( ) {

		console.log( 'Loading complete!');

	};

	manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {

		console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );

	};

	manager.onError = function ( url ) {

		console.log( 'There was an error loading ' + url );

	};

	var loader = new THREE.TextureLoader(manager);
	loader.setCrossOrigin('anonymous');

	loader.load(url, function(texture) {

		parte.material = new THREE.MeshStandardMaterial({ map: texture, color: 0xffffff });
		callback(parte);
		//desenhaArmario(armario);
	});
}

function updateAcabamentoParte(parte, acabamento) {

	parte.material.emissive = new THREE.Color(acabamento.emissividade);
	parte.material.emissiveIntensity = Constants.INTENSIDADE_COR_ACABAMENTO;
	parte.material.metalness = acabamento.metalicidade;
	parte.material.roughness = acabamento.rugosidade;
}

export function updateMaterial(material) {

	scene.remove(armarioGroup);

	let buffer = Utils.base64ToArrayBuffer(material.textura);

	var imageBlob = new Blob([buffer], {type: "image/png"});

	var url = URL.createObjectURL(imageBlob);

	var manager = new THREE.LoadingManager();
	manager.onStart = function ( url, itemsLoaded, itemsTotal ) {

		console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );

	};

	manager.onLoad = function ( ) {

		console.log( 'Loading complete!');

	};

	manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {

		console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );

	};

	manager.onError = function ( url ) {

		console.log( 'There was an error loading ' + url );

	};

	var loader = new THREE.TextureLoader(manager);
	loader.setCrossOrigin('anonymous');

	loader.load(url, function(texture) {

		armario.material = new THREE.MeshStandardMaterial({ map: texture, color: 0xffffff });
		desenhaArmario(armario);
	});
}

export function updateAcabamento(acabamento) {

	armario.material.emissive = new THREE.Color(acabamento.emissividade);
	armario.material.emissiveIntensity = Constants.INTENSIDADE_COR_ACABAMENTO;
	armario.material.metalness = acabamento.metalicidade;
	armario.material.roughness = acabamento.rugosidade;

	scene.remove(armarioGroup);
	desenhaArmario(armario);
}

function carregarPartes() {

	var select = document.getElementById('selectParte');

	for (var i = 0; i < Partes.nomesPartes.length; i++) {
		var opt = Partes.nomesPartes[i];
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = i;
		select.appendChild(el);
	}

}

//Para abertura das portas

function onWindowResize() {
	camera.aspect = canvasTile.offsetWidth / canvasTile.offsetHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(canvasTile.offsetWidth, canvasTile.offsetHeight);
}

function onDocumentMouseMove(event) {
	mouse.x = (event.clientX - rect.left) / (rect.width - rect.left) * 2 - 1;
	mouse.y = -(event.clientY - rect.top) / (rect.bottom - rect.top) * 2 + 1;
	raycaster.setFromCamera(mouse, camera);
	if (_selected == null) { return; }
	//console.log(_selected.name);
	let dir = 1;
	let prev = _intersection.clone();
	if (_selected.name === "Parede Direita" || _selected.name === "Parede Esquerda") {
		if (_selected.name === "Parede Esquerda") dir = -1;
		if (raycaster.ray.intersectPlane(plane, _intersection)) {
			//plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(plane.normal), _selected.position);
			//plane.setFromNormalAndCoplanarPoint(new THREE.Vector3(0,1,0), _selected.position);
			let aux2 = _intersection.x - prev.x;
			let largura = Number((armario.largura + aux2 * dir * 2).toFixed(1));
			if (largura >= armario.larguraOcupadaTotal() && largura >= Constants.LARGURA_MIN && largura <= Constants.LARGURA_MAX) {
				gavetasAbertas = 0;
				document.getElementById('numberLargura').value = largura;
				armario.largura = largura;
				scene.remove(armarioGroup);
				desenhaArmario(armario);
			}
			//_selected.position.copy(aux).sub(_offset);
		}
	}
	if (_selected.name === "Base" || _selected.name === "Teto") {
		if (_selected.name === "Base") dir = -1;
		if (raycaster.ray.intersectPlane(plane, _intersection)) {
			let aux2 = _intersection.y - prev.y;
			let altura = Number((armario.altura + aux2 * dir).toFixed(1));
			if (altura >= Constants.ALTURA_MIN && altura <= Constants.ALTURA_MAX && altura >= armario.alturaMaximaDosModulos()) {
				gavetasAbertas = 0;
				//document.getElementById('numberAltura').value = altura; FIXME
				armarioY += altura - armario.altura;
				armario.altura = (altura);
				armario.updateAltura(altura);
				scene.remove(armarioGroup);
				desenhaArmario(armario);
			}
		}
	}

	if (_selected.name === "Traseira") {
		dir = -1;
		if (raycaster.ray.intersectPlane(plane, _intersection)) {
			let aux2 = _intersection.z - prev.z;
			let profundidade = Number((armario.profundidade + aux2 * dir * 2).toFixed(1));
			if (profundidade >= Constants.PROFUNDIDADE_MIN && profundidade <= Constants.PROFUNDIDADE_MAX) {
				gavetasAbertas = 0;
				document.getElementById('numberProfundidade').value = profundidade;
				armario.profundidade = profundidade;
				armario.updateProfundidade(profundidade);
				scene.remove(armarioGroup);
				desenhaArmario(armario);
			}
		}
	}
}

function onDocumentClick(event) {

	let alert = document.getElementById('alertErro');

	// event.preventDefault();
	mouse.x = (event.clientX - rect.left) / (rect.width - rect.left) * 2 - 1;
	mouse.y = -((event.clientY - rect.top) / (rect.bottom - rect.top)) * 2 + 1;

	// figure out which objects in the scene were clicked
	raycaster.setFromCamera(mouseClick, camera);
	let intersects = raycaster.intersectObjects(scene.children, true);

	// make clicked things open/close with a tweened animation
	if (intersects.length < 1) { return; }
	if (intersects[0].object.name === "Porta1" || intersects[0].object.name === "Puxador1") {
		if (gavetasAbertas == 0) {
			portaAberta1 = !portaAberta1;
			var targetAngle = porta1.rotation.y === Constants.ANGULO_PORTAS * Constants.DEG_TO_RAD ? 0 : Constants.ANGULO_PORTAS * Constants.DEG_TO_RAD;
			new TWEEN.Tween(porta1.rotation).easing(TWEEN.Easing.Circular.Out).to(
				{
					y: targetAngle
				},
				Constants.VELOCIDADE_PORTAS
			)
				.start();
		} else {
			erro.innerHTML = 'Todas as gavetas devem estar fechadas!';
			alert.style.display = 'inline';
		}
	}
	if (intersects[0].object.name === "Porta2" || intersects[0].object.name === "Puxador2") {
		if (gavetasAbertas == 0) {
			portaAberta2 = !portaAberta2;
			var targetAngle = porta2.rotation.y === Constants.ANGULO_PORTAS * -Constants.DEG_TO_RAD ? 0 : Constants.ANGULO_PORTAS * -Constants.DEG_TO_RAD;
			new TWEEN.Tween(porta2.rotation).easing(TWEEN.Easing.Circular.Out).to(
				{
					y: targetAngle
				},
				Constants.VELOCIDADE_GAVETAS
			)
				.start();
		} else {
			erro.innerHTML = 'Todas as gavetas devem estar fechadas!';
			alert.style.display = 'inline';
		}
	}
	if (intersects[0].object.name === "FrenteGaveta" || intersects[0].object.name === "PuxadorGaveta" || intersects[0].object.name === "EsquerdaGaveta"
		|| intersects[0].object.name === "DireitaGaveta" || intersects[0].object.name === "BaixoGaveta") {
		if (animacaoDecorrer) {
			return;
		}
		if (portaAberta1 && portaAberta2) {
			var gaveta = intersects[0].object.parent;
			var targetPosition = armario.profundidade / 1.5;
			if (gaveta.position.z === armario.profundidade / 1.5) {
				targetPosition = (Constants.ESPESSURA_PAREDES) / 2;
				gavetasAbertas--;
				console.log(gavetasAbertas);
			} else {
				targetPosition = armario.profundidade / 1.5;
				gavetasAbertas++;
				console.log(gavetasAbertas);
			}
			animacaoDecorrer = true;
			t1 = new TWEEN.Tween(gaveta.position).easing(TWEEN.Easing.Linear.None).to(
				{
					z: targetPosition
				},
				Constants.VELOCIDADE_GAVETAS
			)
				.start()
			t1.onComplete(function () {
				animacaoDecorrer = false;
			});
		} else {
			erro.innerHTML = 'Abra ambas as portas!';
			alert.style.display = 'inline';
		}
	}
}

function resetCamera() {
	controls.reset();
	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = Constants.CAMERA_INITIAL_Z;
	camera.target.x = 0;
	camera.target.y = 0;
	camera.target.z = 0;
}

function onDocumentMouseDown(event) {
	/* */
	// event.preventDefault();
	mouse.x = (event.clientX - rect.left) / (rect.width - rect.left) * 2 - 1;
	mouse.y = -(event.clientY - rect.top) / (rect.bottom - rect.top) * 2 + 1;

	// figure out which objects in the scene were clicked
	raycaster.setFromCamera(mouse, camera);

	let intersects = raycaster.intersectObjects(scene.children, true);
	var degToRad = Math.PI / 180;
	//checks if theres any intersection
	if (intersects.length > 0) {
		//console.log(intersects[0].object.name);
		_selected = intersects[0].object;
		if (_selected.name === "Parede Direita" || _selected.name === "Parede Esquerda"
			|| _selected.name === "Base" || _selected.name === "Teto" || _selected.name === "Traseira") {

			controls.enableRotate = false;
			let normalz = (_selected.name === "Traseira") ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 0, 1);

			plane.setFromNormalAndCoplanarPoint(normalz, _selected.position);

			if (_selected.name === "Parede Direita" || _selected.name === "Parede Esquerda") {
				if (raycaster.ray.intersectPlane(plane, _intersection)) {
					var aux = new THREE.Vector3(_intersection.x, 0, 0);

				}
			}
			if (_selected.name === "Base" || _selected.name === "Teto") {
				if (raycaster.ray.intersectPlane(plane, _intersection)) {
					var aux = new THREE.Vector3(0, _intersection.y, 0);
				}
			}
			if (_selected.name === "Traseira" || _selected.name === "Teto") {
				if (raycaster.ray.intersectPlane(plane, _intersection)) {
					var aux = new THREE.Vector3(0, 0, _intersection.z);
				}
			}
			_offset.copy(aux).sub(_selected.position);
		}
	}
	/* */
}

function onDocumentMouseUp(event) {

	// Enable the controls
	if (_selected != null) {
		controls.enableRotate = true;
		_selected = null;
	}
}

function mudarLuzes() {

	let chkLeftLight = document.getElementById('chkLeftLight');
	let chkRightLight = document.getElementById('chkRightLight');
	let chkTopLight = document.getElementById('chkTopLight');

	if (chkLeftLight.checked)
		scene.add(leftLight);
	else
		scene.remove(leftLight);

	if (chkRightLight.checked)
		scene.add(rightLight);
	else
		scene.remove(rightLight);

	if (chkTopLight.checked)
		scene.add(topLight);
	else
		scene.remove(topLight);
}

function desenhaSala() {

	let espessura = 1;
	let altura = 25 + espessura;
	let largura = 50 + espessura;
	let offset = 5;

	let geometry = new THREE.BoxGeometry(largura, altura, espessura);
	let material = new THREE.MeshLambertMaterial({ color: 0xbababa });
	let parede1 = new THREE.Mesh(geometry, material);
	parede1.position.z = - offset;
	parede1.position.y = altura / 2 - Constants.ALTURA_MIN / 2;
	parede1.receiveShadow = true;

	geometry = new THREE.BoxGeometry(espessura, altura, largura);
	let parede2 = new THREE.Mesh(geometry, material);
	parede2.position.x = largura / 2;
	parede2.position.y = altura / 2 - Constants.ALTURA_MIN / 2;
	parede2.position.z = largura / 2 - offset;
	parede2.receiveShadow = true;

	geometry = new THREE.BoxGeometry(espessura, altura, largura);
	let parede3 = new THREE.Mesh(geometry, material);
	parede3.position.x = -largura / 2;
	parede3.position.y = altura / 2 - Constants.ALTURA_MIN / 2;
	parede3.position.z = largura / 2 - offset;
	parede3.receiveShadow = true;

	geometry = new THREE.BoxGeometry(largura, altura, espessura);
	let parede4 = new THREE.Mesh(geometry, material);
	parede4.position.z = largura - offset;
	parede4.position.y = altura / 2 - Constants.ALTURA_MIN / 2;
	parede4.receiveShadow = true;

	geometry = new THREE.BoxGeometry(largura, espessura, largura);
	let chao = new THREE.Mesh(geometry, material);
	chao.position.y = -Constants.ALTURA_MIN / 2 - espessura / 2 - Constants.ESPESSURA_PAREDES;
	chao.position.z = largura / 2 - offset;
	chao.receiveShadow = true;

	geometry = new THREE.BoxGeometry(largura, espessura, largura);
	let teto = new THREE.Mesh(geometry, material);
	teto.position.y = normalize(Constants.ALTURA_MIN / 2, Constants.ALTURA_MAX, 0) + altura / 2 + offset;
	teto.position.z = largura / 2 - offset;
	teto.receiveShadow = true;

	scene.add(parede1);
	scene.add(parede2);
	scene.add(parede3);
	scene.add(parede4);
	scene.add(chao);
	scene.add(teto);
}

/**
 * 
 * @param {url} path: para a imagem (ex: 'json/exemplo.json') 
 * @param {mode} mode: 1 - para preencher o armário todo e 2 - para preencher apenas o espaço necessário para caber no armário
 */
function importJson(url, mode) {
	var loader = new THREE.ObjectLoader();

	loader.load(
		url,
		function (object) {
			var x, y, z, profundidadeArm, bbox;

			bbox = new THREE.Box3().setFromObject(object);
			x = bbox.max.x - bbox.min.x;
			y = bbox.max.y - bbox.min.y;
			z = bbox.max.z - bbox.min.z;

			//se der clipping façam espessura * 2 ;)
			larguraArm = armario.largura - Constants.ESPESSURA_PAREDES;
			alturaArm = armario.altura - Constants.ESPESSURA_PAREDES;
			profundidadeArm = armario.profundidade - Constants.ESPESSURA_PAREDES * 2;

			switch (mode) {
				case 1:
					object.scale.set(larguraArm / x, alturaArm / y, profundidadeArm / z);
					break;

				case 2:
					var difX = x - larguraArm;
					var difY = y - alturaArm;
					var difZ = z - profundidadeArm;

					if (difZ > difX && difZ > difY) {
						if (difZ > 0) {
							object.scale.set(profundidadeArm / z, profundidadeArm / z, profundidadeArm / z);
						}
					} else if (difY > difZ && difY > difX) {
						if (difY > 0) {
							object.scale.set(alturaArm / y, alturaArm / y, alturaArm / y);
						}
					} else if (difX > difZ && difX > difY) {
						if (difX > 0) {
							object.scale.set(larguraArm / x, larguraArm / x, larguraArm / x);
						}
					}

					object.scale.set(profundidadeArm / z, profundidadeArm / z, profundidadeArm / z);
					object.scale.set(alturaArm / y, alturaArm / y, alturaArm / y);
					object.scale.set(larguraArm / x, larguraArm / x, larguraArm / x);

					break;

				default:
					console.log("Opção escolhida inválida!");
			}

			bbox = new THREE.Box3().setFromObject(object);

			x = bbox.max.x - bbox.min.x;
			y = bbox.max.y - bbox.min.y;
			z = bbox.max.z - bbox.min.z;

			object.translateX(-bbox.min.x - (x * 0.5));
			object.translateY(-bbox.min.y - (y * 0.5));
			object.translateZ(-bbox.min.z - (z * 0.5));

			jsonObj = object;
			scene.add(jsonObj);
		},
		// called when loading is in progresses
		function (xhr) {

			console.log((xhr.loaded / xhr.total * 100) + '% loaded');

		},
		// called when loading has errors
		function (error) {

			console.log('An error happened');

		});
	
}