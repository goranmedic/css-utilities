**Avoid unnecessary rewrite of CSS classes every time you start a new project and maintain consistency between your projects with this small lib.**

# Installation #
`npm i --save @goranmedic/css-utilities`

# How to add styles to your project #

You can add everything by including `./node_modules/@goranmedic/css-utilities/dist/index.css`
or separate files by including the file you need - for example paddings: `./node_modules/@goranmedic/css-utilities/dist/paddings.css`

Includes:
    * margins from 0 to 50 in increments of 5
    * paddings from 0 to 50 in increments of 5
    * 9 variations of 11 colors
    * font sizes from 8 to 36 in increments of 2
    * flexbox classes (including order,grow and shrink attributes from 0 to 10 in increments of 1)
    * borders from 1 to 5 in increments of 1
    * border radiuses from 0 to 14 in increments of 2
    * colored borders 
    * colored backgrounds
    * colored text


# How to use #

All classes have `.mod-` prefix, followed by attribute and value
Some examples:
    * `margin-top: 20px` is `.mod-margin-top-20` 
    * `margin: 20px` is `.mod-margin-20` 
    * `padding-bottom: 10px` is `.mod-padding-bottom-10` 
    * `padding: 10px` is `.mod-padding-10` 
    * `border-color: #868e97` is `.mod-border-color-gray-6` 
    * `border: 5px solid #ced4db` is `.mod-border-5` 
    * `border-radius: 12px` is `.mod-border-radius-12` 
    * `background-color: #ff8788` is `.mod-background-color-red-4` 
    * `color: #dee2e7` is `.mod-color-gray-3` 
    * `font-size: 10px` is `.mod-font-10` 
    * `display: flex` is `.mod-display-flex` 
    * `justify-content: center` is `.mod-justify-content-center` 
    * `flex-direction: column-reverse` is `.mod-flex-direction-column-reverse` 
    * `flex-grow: 6` is `.mod-flex-grow-6` 

I'll try to add more classes in the following versions.




