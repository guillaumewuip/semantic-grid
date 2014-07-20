
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
                class="anelementof4columns max withmargins atleftof2columns"
                but for smartphones="hidden"
                >...</div>
        </div>
    </body>
</html>
```

*Work in progress ...*

### Documentation

- [Get started](#get-started)
- [Principles](#principles)
    - [Be semantic](#be-semantic)
    - [Flex-box based](#flex-box-based)
    - [Choose your version or build your own !](#choose-your-version-or-build-your-own-)
- [Grid system](#grid-system)
    - [Devices](#devices)
    - [Grid](#grid)
    - [Elements](#elements)
    - [Margins](#margins)
- [Build your own](#build-your-own)




# Get started

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

## Be semantic

We want the act of building a grid to be an act of language. Not an act of memory. Ie. to avoid this :

```html
<div class="row">
    <div class="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 ... col-lg-4"></div>
</div>
```

What would a common person say ? 
"I want a grid of 12 columns, with a centered element of 10 columns. But, on tablets, I want this element to be 8 columns wide, etc."

So, why can't we keep this when building html ?

```html
<div class="agridof12columns horizontallycentered">
    <div 
        class="anelementof10columns"
        tablets="anelementof8columns"
        mediumScreens="..."
        bigScreens="..."
        ></div>
</div>
```



## Flex-box based

semanticGrid is flex-box based.     
Flex-box css properties allow us to easily create grid elements, manage height and width, horizontal and vertical positions, white-space and so on.

Flex-box grids are not supported by old browsers. Yet semanticGrid play a real role at experiementing flex-box, learning grid logic, and building production-ready grids when compatibility is not a constraint.

Go further on flex-box with :    

- http://www.w3.org/TR/css3-flexbox/
- http://css-tricks.com/snippets/css/a-guide-to-flexbox/



## Choose your version or build your own !

semanticGrid is build with [SASS](http://sass-lang.com) and is fully customizable.

We already offer you differents versions (english, french, pro). [Download the one you prefer](https://github.com/guillaumewuip/semantic-grid/releases).

Please check [Build your own](#build-your-own) section to build your own grid system, with your own custom language.




# Grid system

semanticGrid works with html classes and attributes.

Default behavior is define by giving a class.
Custom device behavior is define by giving an attribute.

```html
<div 
    class="anelementof10columns max elementverticalyalignedtobottom"
    smartphones="anelementof12columns elementverticalyalignedtotop"
></div>
```


## Devices

By default, semanticGrid comes with this devices detection :

- **smartphones** : all and (max-width: 767px)
- **tablets** : all and (min-width: 767px) and (max-width: 991px)
- **mediumScreens** : all and (min-width: 992px) and (max-width: 1199px)
- **bigScreens** : all and (min-width: 1200px)

[You could add your own]().

## Grid

Define a grid. By default, semanticGrids comes with 10, 12 and 16 columns wide grids. [Add one](#build-your-own) if you need to !

```html
<div class="agridof10columns"></div>
<div class="agridof12columns" smartphones="agridof16columns"></div>
<div class="agridof16columns"></div>

<!-- If you added a 42 columns wide grid in sass files -->
<div class="agridof42columns"></div>
```

There is some optionnal classes you could add to the grid container :

### Order items

- `.firstelementatStart` (default) the elements start at the start of the grid
- `.firstelementatEnd` the elements start at the end of the grid. The last one is at the top.

### Horizontal alignement

- `.horizontallyalignedatleft` (default)
- `.horizontallyalignedatright`
- `.horizontallycentered`
- `.horizontallyjustified`
- `.horizontallyspaced`


### Vertical alignement

- `.gridverticallyalignedtotop` 
- `.gridverticallyalignedtobottom` 
- `.gridverticallycentered` 
- `.gridverticallyfullheight` (default)
- `.gridverticallyjustified` 
- `.gridverticallyspaced` 



## Elements

Define an element. An element can take be as many columns wide as his parent grid is.

```html
<div class="agridof10columns">
    <div class="anelementof1columns"></div>
    <div class="anelementof2columns"></div>
    <div class="anelementof3columns"></div>
    <div class="anelementof4columns"></div>
    <div class="anelementof5columns"></div>
    <div class="anelementof6columns"></div>
    <div class="anelementof7columns"></div>
    <div class="anelementof8columns"></div>
    <div class="anelementof9columns"></div>
    <div class="anelementof10columns"></div>
</div>
```

By default, an element will took the maximum columns he can. Add `.max` class to set his max width to the number of column given. Example :

```html
<div class="agridof16columns">
    <div class="anelementof10columns">
        This element will be 10 columns wide.
    </div>
    <div class="anelementof6columns">
        This element will be 6 columns wide.
    </div>
</div>

<div class="agridof16columns">
    <div class="anelementof10columns">
        This element will be 16 columns wide (and not 10 !) because there is some space on the row.
    </div>
    <div class="anelementof16columns"></div>
</div>

<div class="agridof16columns">
    <div class="anelementof10columns max">
        This element will be 10 columns wide (and not 16 !). There will be a 6 columns gap.
    </div>
    <div class="anelementof16columns"></div>
</div>
```


There is some optionnal classes you could add to the element :

### Vertical alignement

Use these classes to override the default grid vertical alignement for the element.

- `.elementverticallyalignedtotop` 
- `.elementverticallyalignedtobottom` 
- `.elementverticallycentered` 
- `.elementverticallyfullheight` (default)
- `.elementverticallyjustified` 
- `.elementverticallyspaced` 


## Margins

Elements can have left and right margins. Margins are at least one column wide.

There is two ways to specify margins :

- add `.withmargins` class.
    - add left margin with `.atleftof2columns` by example
    - add right margin with `.atrightof4columns` by example
- add `.widthmarginsof2columns` to add 2 columns right and left margin at once.


```html
 <div class="agridof16columns">
    <div class="anelementof8columns withmargins atleftof2columns"></div>
    <div class="anelementof4columns withmargins atleftof2columns"></div>
</div>

 <div class="agridof10columns">
    <div class="anelementof3columns max withmargins atleftof2columns atrightof3columns"></div>
</div>

 <div class="agridof16columns g">
    <div class="anelementof8columns withmarginsof4columns ">
        It's centered 
        (same as .horizontallycentered > .anelementof8columns.max.)
    </div>
</div>
```





# Build your own

semanticGrid is built with [SASS](http://sass-lang.com). Here are scss files used to compile semanticGrid.css :

```
├── Gruntfile.js
├── css
│   └── semanticGrid.css
└── sass
    ├── _css-tools.scss
    ├── _elements.scss
    ├── _grids.scss
    ├── _margins.scss
    ├── _utils.scss
    ├── _variables.scss
    ├── languages
    │   ├── en.scss
    │   ├── fr.scss
    │   └── pro.scss
    └── semanticGrid.scss
```

In order to built semanticGrid with your own language, simply add `sass/languages/myLanguage.scss` and defines all these variables and add breakpoints if you need to :

```scss

// Default semanticGrid values in sass/languages/en.scss

//////////////
// Language //
//////////////

//English

$grid                   : grid;
$gridPrefix             : a;

$column                 : column;
$row                    : row;

$element                : element;
$elementPrefix          : an;

$margin                 : margin;
$marginPrefix           : a;

$pluralPrefix           : "";
$pluralSuffix           : s;

$at                     : at;
$of                     : of;
$with                   : with;
$from                   : from;
$to                     : to;
$in                     : in;

$top                    : top;
$bottom                 : bottom;
$left                   : left;
$right                  : right;

$horizontally           : horizontally;
$vertically             : vertically;

$atStart                : atstart;
$atEnd                  : atend;

$onBaseline             : onbaseline;

$aligned                : aligned;
$centered               : centered;
$justified              : justified;
$spaced                 : spaced;

$max                    : max;
$full                   : full;

$height                 : height;

$first                  : first;

$displayed              : displayed; 
$hidden                 : hidden; 


/////////////////
// Breakpoints //
/////////////////

$gridBreakpoints : (

    "smartphones"   : "all and (max-width: 767px)",
    "tablets"       : "all and (min-width: 767px) and (max-width: 991px)",
    "mediumScreens" : "all and (min-width: 992px) and (max-width: 1199px)",
    "bigScreens"    : "all and (min-width: 1200px)"

);

```


In `sass/semanticGrid.scss`, simply udpate the language import with `@import 'languages/myLanguage';` and add your custom grid by adding `$grids` variable.

```scss
//sass/semantic.scss

//////////////////
// SemanticGrid //
//////////////////



/**
 * SemanticGrid
 *
 * First grid to be semantic, fully customizable and flex-box based.
 * 
 * @see https://github.com/guillaumewuip/semantic-grid
 */



// 1. Import language
@import 'languages/en';

// 2. OPTIONNAL. Add your custom $grids list
//$grids : (2, 10, 16, 42); //default to (10, 12, 16)

// 3. Import semanticGrid partials
@import 'variables';
@import 'utils';
@import 'css-tools';
@import 'elements';
@import 'margins';
@import 'grids';
```

Then, [compile SASS](http://sass-lang.com/install) with the command `npm install; grunt` if you have node and npm installed.

That's it ! You've built your own grid system !
