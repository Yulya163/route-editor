# Практическое задание для вакансии JS-разработчик

## [Demo](https://yulya163.github.io/route-editor/)

## Для реализации перетаскивания точек маршрута в списке в проекте использовалась библиотека [Frame Motion library](https://www.framer.com/motion/).

## Для создания карты я использовала [Yandex Maps API](https://yandex.ru/dev/maps/jsapi/doc/2.1/quick-start/index.html?from=techmapsmain).

### Task Description

Необходимо реализовать редактор маршрутов — одностраничное приложение, в котором пользователь в интерактивном режиме может создавать на карте маршрут,
указывая начальную, конечную и промежуточные точки движения. Для каждой точки маршрута можно посмотреть ее адрес. 

Приложение визуально состоит из:

- текстового поля ввода для новых точек маршрута;

- списка уже введенных точек маршрута;

- интерактивной карты.

На картинке ниже показан схематичный пример, итоговый внешний вид может быть любым, на ваше усмотрение. Приложение должно адекватно вести себя при
изменении размера окна браузера, взаимное расположение элементов не должно изменяться.

![2023-02-02_18-32-15](https://user-images.githubusercontent.com/69498488/216352762-07e70625-a18a-4566-b377-f47865133f2a.png)

### Task Functional Requirements

Новая точка маршрута добавляется с помощью ввода ее названия в текстовом поле и нажатия Enter. После этого:

- введенная точка маршрута отображается в конце списка уже добавленных точек;

- в текущем центре карты появляется маркер, обозначающий новую точку маршрута.

Напротив каждой точки маршрута в списке находится кнопка удаления, при ее нажатии точка маршрута пропадает из списка, а с карты пропадает ее маркер. 

Порядок точек маршрута в списке можно изменять перетаскиванием. Маркеры, соответствующие точкам маршрута, можно перемещать по карте перетаскиванием. 

Маркеры на карте соединены прямыми линиями в том порядке, в котором они находятся в списке. 

Полученная таким образом ломаная изображает маршрут, первая точка в списке — начало маршрута, последняя — конец маршрута. 

При изменении порядка точек в списке или их удалении, а также при перемещении маркеров маршрут на карте автоматически перерисовывается. 

При клике на маркер появляется балун, в балуне отображается название соответствующей ему точки.

### Task Technical Requirements

- Яндекс.Карты или Google Maps.

- React.js.

- Покрытие полученного кода тестами.

- Ссылка на страницу с результатом и git-репозиторий с исходниками.

- Инструкция для запуска проекта. 

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
