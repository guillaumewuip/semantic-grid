
semanticGrid
=============

*First grid to be semantic, fully customizable and flex-box based.*

Imagine if designers and developpers could speak the same language when creating a grid.

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles/semanticGrid.css">
    </head>
    <body>
        <div class="iwant agridof16columns">
            <div 
                class="anelementof6columns withmargins atleftof2columns"
                but for smartphones="anelementof12columns withmarginsof2columns"
                >...</div>
            <div 
                class="anelementof4columns maximum withmargins atleftof2columns"
                but for smartphones="hidden"
                >...</div>
        </div>
    </body>
</html>
```

*Work in progress ...*

# Get started
--------------

Include the `semanticGrid.css` file.
```html
<link rel="stylesheet" href="styles/semanticGrid.css">
```
(After [choosing your version](), or [building you own]().)

Create a grid.
```html
<div class="agridof16colums"></div>
```

Insert elements.
```html
<div class="agridof16colums">
    <div class="anelementsof8columns"></div>
</div>
```

Add margins.
```html
<div class="agridof16colums">
    <div class="anelementsof8columns withmarginsof4columns"></div>
</div>
```


# Principles
-------------

## Be semantic

We want the act of building a grid to be an act of language. Not an act of memory. Ie. to avoid this :

```html
<div class="row">
    <div class"col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 ... col-lg-4"></div>
</div>
```

What would a common person say ? 
"I want a grid of 12 columns, with a centered element of 10 columns. But, on tablets, I want this element to be 8 columns wide, etc."

So, why can't we keep this when building html ?

```html
<div class="agridof12columns horizontallycentered">
    <div 
        class"anelementof10columns"
        tablets="anelementof8columns"
        mediumScreens="..."
        bigScreens="..."
        ></div>
</div>
```




## Flex-blox based

semanticGrid is flex-box based.     
Flex-box allow us to easily create grid elements, manage height and width, horizontal and vertical positions, white-space and so on.

Flex-box grids are not supported by old browsers. Yet semanticGrid play a real role at experiementing flex-box, learning grid logic, and building production-ready grids when compatibility is not a constraint.

Go further on flex-box with :    

- http://www.w3.org/TR/css3-flexbox/
- http://css-tricks.com/snippets/css/a-guide-to-flexbox/



## Choose your version or build your own with SASS !

semanticGrid is build with [SASS](http://sass-lang.com) and is fully customizable.

We already offer you differents versions (english, french, pro). [Download the one you prefer]().

Please check [Build your own]() section to build your own grid system, with your own custon language.



# Classes
------------

## Grid
## Elements
## Margins

# Build your own
------------


