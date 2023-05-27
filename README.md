## Работа

##### Для разработки:

даем команду **npm run dev**

Получаем комфортную среду для отладки, есть карты кода (source maps)

---

##### Использования глобальных переменных ENV
переменные экспортируются в файле webpack.dev.conf.js

Например:

    APP_ENV: JSON.stringify(process.env.APP_ENV),
    API_KEY: JSON.stringify(process.env.API_KEY)

Использовать в коде можно например так:

    if (APP_ENV === "dev") {..код  для разработки..}

Или так, используя глобальную переменную process.env:

    if (process.env.NODE_ENV !== `production`) {..код только для разработки, в продакшен не попадет..}

---
###### использование плагина удаления блоков кода

удаление блоков кода в HTML:

  <!--deletestart-->
  <link rel="stylesheet" type="text/css" href="assets/scss/main.scss"/>
  <!--deleteend-->

все что находится между блоками deletestart ... deleteend будет удалено

---

##### Для продакшена:

если использовали глобальные переменные, то устанавливаем переменную **APP_ENV=prod**

даем команду **npm run prod**

Получаем папку dist содержащую минимизированный / сжатый код
