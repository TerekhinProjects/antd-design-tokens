# Antd Design Tokens

Пример файла Figma (форм antd community):

https://www.figma.com/design/hTufocql7lzwJzQoDs3yIM/Antd-Design-Tokens-Example

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
