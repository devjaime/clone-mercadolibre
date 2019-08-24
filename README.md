Proyecto Clone de Mercado Libre

  Actividad Nº 2

    - Crear buscador de productos utilizando la api de Mercado Libre
    - usar Axios para hacer una llamada a https://api.mercadolibre.com/sites/MLC/search?q={query}
    - Donde query es obtenido por medio input de tipo text (componente controlado)
    - Tomar los items de los resultados de busqueda y guardar en el state items
    - Pintar los resultados de busqueda como una lista.
    - Utiliza como ejemplo el formato de los rows de los resultados de busqueda (https://listado.mercadolibre.cl/iphone)
    - Cada fila debe contener imagen del producto, titulo y precio
    - Agregar dentro del .nav-header el logo (https://http2.mlstatic.com/ui/navigation/4.5.0/mercadolibre/logo__large_plus@2x.png)
se debe instalar axios npm i axios
cambie material ui por https://getuikit.com/
semana 16-08-2019
semana 24-08-2019
usando como base el código de la actividad 2 para agregar las siguientes funcionalidades:
- Agregar react-router para separar en 2 vistas:
-Listado de búsqueda
-Detalle de producto, donde la vista recibe como parámetro el item id.
-Usar una transición para moverse entre las distintas vistas.
-En la vista de "Detallle de producto" debemos hacer una llamada a 
- http://api.mercadolibre.com/items/:ITEMID
- En la vista de detalle dejarla lo similar a la VIP de Mercado Libre
Al volver desde la vista de detalleal resultado de busqueda con la ´última búsqueda
-Algunas restricciones:
-No usuar componentes visuales de terceros
- Usar el maximo de componentes de tipo funcion.
- El proyecto debe tener un mínimo de Cobertura del 60 %.

se agregan 
npm install @material-ui/icons --save
npm install @material-ui/core --save
npm install moment --save
npm install react-fb-image-grid --save
npm i --save react-facebook-emoji
npm install react-fb-image-grid --save
npm audit fix 

![Tercera Versión en 3 columnas con gestos de FB incluidos ](https://github.com/devjaime/clone-mercadolibre/blob/master/img/3versionFBincluida.png)
![Segunda versión app sin gestos FB ](https://github.com/devjaime/clone-mercadolibre/blob/master/img/SegundaVersion.png)
![Home](https://github.com/devjaime/clone-mercadolibre/blob/master/img/homepage.png)
![Mobile](https://github.com/devjaime/clone-mercadolibre/blob/master/img/homepagemx.png)
## Proyecto Clone de Mercado Libre para aprender react.js

React es una libreria de javascript para construir interfaces web

React utiliza JSX que es una manera unir etiquetas con javascript

Este proyecto contempla la manipulación de estados
### `Experimiento de integración continua con AzureDevOps`
![Creación del proyecto en Azure DevOps ](https://github.com/devjaime/clone-mercadolibre/blob/master/img/AzureDevOpsPaso1.png)
![Tareas comprometidas en el proyecto](https://github.com/devjaime/clone-mercadolibre/blob/master/img/TareasenCurso.png)
![Clonando Repositorio para subirlo a AzureRepo](https://github.com/devjaime/clone-mercadolibre/blob/master/img/ClonandoRepositorio.png)

![Idea de producto final un solo código un solo producto](https://github.com/devjaime/clone-mercadolibre/blob/master/img/unsoloproductofinalunsolocodigofuente.png)

### `Instalaciones necesarias para proyectos React`
* Navegador Google Chrome
* Es necesario instalar la versión estable (LTS) de node.js (puedes revisar la versión de node ocupada con el comando node -v).
* Para el caso de windows recomiendo ocupar chocolatey https://chocolatey.org/
* Para el caso de mac pueden instalar homebrew https://brew.sh/index_es
* Para el caso de windows y mac pueden tambien tener instalado https://hyper.is/ 
* Editor de codigo utilizado Visual Studio Code https://code.visualstudio.com/


### `Extensiones`

* Extensiones de google chrome utilizadas:
    - React Developer Tools https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
* Extensiones de visual studio code utilizadas:
    - Debugger for chrome para poder depurar el codigo -> https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
    - React Extension Pack contenido https://marketplace.visualstudio.com/items?itemName=jawandarajbir.react-vscode-extension-pack:
            Reactjs code snippets : agrega snippets de código para el desarrollo de React en ES6.

            ES Lint : integra ESLint en el código VS.

            npm : ejecuta scripts npm desde el comando palatte y valida los módulos instalados definidos en package.json.

            JavaScript (ES6) Snippets  : agrega snippets de código para el desarrollo de JavaScript en la sintaxis de ES6.

            Search node_modules : busque rápidamente módulos de nodo en su proyecto.

            NPM IntelliSense : agrega IntelliSense para módulos npm en su código.

            Path IntelliSensee : autocompleta nombres de archivo en su código.

    - Auto Close tag -> permite que cada etiqueta html generada se cierre de forma automatica -> https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag
    - Prettier -> Es un formateador de codigo -> https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
    - brackert pair colorizer 2 ayuda con los colores de la identezación -> https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2
### `Creación de proyecto`

Comando de creación de proyecto
* npx create-react-app [Nombre del proyecto ejemplo clone-mercadolibre] (nota los proyectos no permiten letras mayusculas al crearlos)
* Una vez creado el proyecto debes abrir la carpeta CD clone-mercadolibre
* prueba la ejecución de la aplicación con npm start

