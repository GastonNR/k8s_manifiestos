# Guía de uso.
Los archivos yaml contenidos en el repositorio permiten desplegar un sitio web estático con html, css y js. desde una unidad de imagen nginx que monta su contenido desde un volumen persistente.
## La estructura de archivos es:
~~~
sitio-web
├── manifest/
│   ├── deployments/
│   │   └── web-deployment.yaml
│   ├── services/
│   │   └── web-service.yaml
│   ├── volumes/
│   │   ├── web-volume-claim.yaml
│   │   └── web-volume.yaml
│   └── README.md
└── static-website/
    ├── index.html
    ├── style.css
    └── script.js
    |__ Dockerfile
    |__ assets/
~~~
### Requisitos:

- Minikube
- Docker
- Git
- Bash 
- Contar con token de autenticación

### Crear directorio 
mkdir proyecto_static-web
Clonar los repositorios:
  
### Dentro del directorio proyecto_static-web:

Para la página web: Primero realiza un fork del repositorio original, luego clónalo con:
`git clone git@github.com:GastonNR/k8s_manifiestos.git`

Iniciar Minikube: Iniciar Minikube con un perfil personalizado y driver Docker.
~~~
minikube start -p proyecto_static-web --driver=docker
minikube profile proyecto_static-web
~~~

### Montar el sitio web:
Ejecuta el siguiente comando, para montar tu sitio web en la imagen:

`minikube mount "./static-website:/mnt/sitio-web"`

Aplicar los manifiestos: Desde otra terminal, y ubicado dentro de la carpeta de los manifiestos, ejecuta:
~~~
kubectl apply -f manifests/volumes/web-volume.yaml
kubectl apply -f manifests/deployments/web-deployment.yaml
kubectl apply -f manifests/services/web-service.yml
~~~
Comprueba que todo se creó correctamente:

`kubectl get pv,pvc,deploy,svc`

Acceder a la aplicación: Levanta el servicio en el navegador:

`minikube service web-service`

