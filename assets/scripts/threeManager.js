//>>>>>>>>>>>>>>>> THREE JS INIT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var THREE_MANAGER = {

    created: false,
    container3D: null,
    clock: null,

    camera: null,
    scene: null,
    renderer: null,

    mixers: [],
    model: null,

    init(){

        this.container3D = UTILS.elements.canvas3D;
        this.clock = new THREE.Clock();

        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATING THE MAIN CAMERA
        this.camera = new THREE.PerspectiveCamera( 45, window.innecamerarWidth / window.innerHeight, 1, 2000 );
        this.camera.position.set( 0, 100, 900);
        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATING THE MAIN SCENE 
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xa0a0a0);
        //TEMP FOR TESTING ===========//=====
        /*var grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
        this.scene.add( grid );*/
        //==========================//=======
        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> AMBIENT LIGHT
        var light = new THREE.AmbientLight( 0x404040, 5 );
        this.scene.add( light ); 

        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATING RENDERER 
        this.renderer = new THREE.WebGLRenderer({antialias: true});

        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.container3D.getBoundingClientRect().width,this.container3D.getBoundingClientRect().height);

        this.renderer.shadowMap.enabled = true;
        this.container3D.appendChild(this.renderer.domElement);

        window.addEventListener('resize', onWindowResize, false);
        animate();
        onWindowResize();

        this.created = true;
        console.log(">>>>>>>>>>>>>>>> THREE JS CREATED");

        this.loadModel();
    },
    loadModel(){
        var loader = new THREE.FBXLoader();
        loader.load("assets/models/Ali/Ali.fbx", (object)=> {
            
            this.model = object;
            this.model.mixer = new THREE.AnimationMixer( object );
            this.mixers.push( this.model.mixer );

            this.model.traverse(function(child){

            }); 

            this.model.position.set(0,0,0);
            this.model.rotation.set((Math.PI/180),0,0);
            this.scene.add(this.model);

            console.log(">>>>>>>>>>>>>>>> MODEL CREATED");
        });
    },
    update(){
        GLOBAL.delta = THREE_MANAGER.clock.getDelta();

        if ( THREE_MANAGER.mixers.length > 0 ) {
            for ( var i = 0; i < THREE_MANAGER.mixers.length; i ++ ) {
                THREE_MANAGER.mixers[ i ].update( GLOBAL.delta );
            }
        }   
        THREE_MANAGER.renderer.render( THREE_MANAGER.scene, THREE_MANAGER.camera );
    }
};

THREE_MANAGER.init();


function animate() {

    if (THREE_MANAGER.created){
        THREE_MANAGER.update();
    }

    requestAnimationFrame( animate );
}
function onWindowResize() {
    THREE_MANAGER.camera.aspect = THREE_MANAGER.container3D.getBoundingClientRect().width/THREE_MANAGER.container3D.getBoundingClientRect().height;
    THREE_MANAGER.camera.updateProjectionMatrix();
    THREE_MANAGER.renderer.setSize( THREE_MANAGER.container3D.getBoundingClientRect().width, THREE_MANAGER.container3D.getBoundingClientRect().height);
}