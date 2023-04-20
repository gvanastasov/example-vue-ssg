# **Example VUE SSG**
 
This is a simple Vue SSG application project that demonstrates how to create a basic Vue application with Static Site Generation. The basic architecture involves webpack building, backend delivery server, frontend client and site generator. Backend is composed of expressjs web server, that only serves static html. The contents of those statically generated files is result of rendering and writing to distribution output, given a Vue SSG application as input. Once the client finished rendering, it runs the same Vue SSG application, this time on the client, to rehydrate the DOM and hook up all the events for reactivity to work. A couple of webpack loaders (compilers) are added for convenience, ex. sfc and babel. The project can be further evolved by introducing routing and code generation, just like any popular SSR framework would do.

## **Project Setup**

1. Clone this repository to your local machine using the command git clone https://github.com/gvanastasov/example-vue-ssr.git
2. Navigate to the project directory using the command cd vue-ssr-app
3. Install the dependencies using the command npm install

## **Getting Started**

To build the application, use the following command:
```ssh
npm run build
```

To generate the static markup, use the following commandÆ
```ssh
npm run generate
```

To run the application, use the following command:
```ssh
npm run start
```

This command will start the development server and you can access the application at http://localhost:8080.

## **License**

This project is licensed under the MIT License - see the LICENSE file for details.