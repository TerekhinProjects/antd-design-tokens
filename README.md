# Antd Design Tokens

Пример файла Figma (форм antd community):

https://www.figma.com/design/M87cxwSziOf0SpIyghb9XE/Ant-Design-System-for-Figma-(Free-version)-(Community)-(Copy)

## Процесс обновления темы

1. Вносим изменения в переменные фигмы `Local Variables`
2. Открываем в проекте фигмы плагин [Theme Buddy for Ant Design](https://www.figma.com/community/plugin/1306154519372265335/theme-buddy-for-ant-design)
3. Копируем сгенерированный плагином json-файл темы и вставляем содержимое в файл `src/app/theme/thene.json`

![image](https://github.com/user-attachments/assets/1ef0b362-db2b-46f9-9dae-662f76e67b0f)

Плагин `Theme Buddy for Ant Design` имеет community и платную версию. В community можно выгружать все переменные дизайн токенов только светлой темы.
Ссылка на плагин [https://www.antforfigma.com/theme-buddy-figma-plugin](https://www.antforfigma.com/theme-buddy-figma-plugin)

Плагин предоставляет два варианта выгрузки токенов в json: 
- весь набор дизайн токенов
- отдельно только измененыые значение, которые отличаются от исходной версии дизайн-системы в фигме

## Текущие проблемы
При использовании варианта темизации на основе [css variables](https://ant.design/docs/react/css-variables) нет синхронизации переменных темы с контекстом IDE

  ![image](https://github.com/user-attachments/assets/88e455a1-7d5b-4e1d-9783-de3d65883455)

Если не включать cssVar в конфиге темы, то доступ до переменных темы доступен из хука. 
https://ant.design/docs/react/customize-theme#consume-design-token
![image](https://github.com/user-attachments/assets/d5e1ad20-c573-4068-bf9e-63df5e0f087d)