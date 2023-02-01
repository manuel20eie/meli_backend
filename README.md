<h1 align="center">Welcome to meli_backend 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/manuel20eie/meli_backend#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/manuel20eie/meli_backend/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/manuel20eie/meli_backend/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/manuel20eie/meli_backend" />
  </a>
</p>

> backend for meli challenge


## Consideraciones

- Implementé como era requerimiento un backend con NodeJS y Express.

- La definición de los endpoints la realicé considerando la estructura del servicio MercadolibreService, en lugar de una definición en función de las vistas del front. Esto para tener endpoints reutilizables, escalables y que permitieran siempre disponibilizar la información en el orden que fuera requerida. En mi experiencia prefiero este tipo de estructuras pero entiendo que el mejor tipo dependerá de cada proyecto. Actualmente me manejo mucho con GraphQL donde ya desde el front se tiene la posibilidad de pedir exactamente la información que se requiere en cada una de las vistas.

- La comunicación con el frontend la realicé usando jsonwebtoken, si requieren testear el backend directamente, para su facilidad agregué una variable en el .env para que puedan ignorar la comunicación codificada. Esto les permitirá probar el backend pasando los parámetros directamente en formato json.

### 🏠 [Homepage](https://github.com/manuel20eie/meli_backend#readme)

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Manuel Uzcátegui**

* Github: [@manuel20eie](https://github.com/manuel20eie)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/manuel20eie/meli_backend/issues). You can also take a look at the [contributing guide](https://github.com/manuel20eie/meli_backend/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [Manuel Uzcátegui](https://github.com/manuel20eie).<br />
This project is [ISC](https://github.com/manuel20eie/meli_backend/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_