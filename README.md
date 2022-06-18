# React Reusbale Button Library

# Button

`react-reusable-button-library` is a performant built, highly customizable, production-ready React Component that renders an animated set of 3D UI buttons.

## Installation

Install my-library with npm

npm i react-reusable-button-library

## Import

javascript import { Button } from 'react-reusable-button-library';

## Styling with plain CSS

javascript import { Button } from 'react-reusable-button-library';

function Button() { return <Button>Button</Button>; }

## Accessibility

-   Button has `role` of `button`.

-   When Button has `focus`, `Enter` or `Space` activates it.

## Button Sizes

Use the `size` prop to change the size of the button. You can set the `value` to `xs`, `sm`, `md`, or `lg`.

![Button sizes](https://i.ibb.co/7G2rpFj/buttonsize.jpg)

javascript

<Stack row wrap >
    <Button size="xs">Button</Button>
    <Button size="sm">Button</Button>
    <Button size="md">Button</Button>
    <Button size="lg">Button</Button>
</Stack>

## Button Variants

Use the `variant` prop to change the visual style of the Button. You can set the `value` to  `outlined`.

![Button variant](https://i.ibb.co/F6ws1HN/buttonvariant.jpg)

javascript

<Stack row >
    <Button>Button</Button>
    <Button variant="outlined">Button</Button>
</Stack>

## Button Colors

Use the `colorScheme` prop to change the color scheme of the Button. You can set the value to any of the color scales from your design system,like `gray`, `red`, `blue`, or your custom color.

![Button sizes](https://i.ibb.co/JdgJv7L/buttoncolor.jpg)

javascript

<Stack spacing={2} row wrap >
        <Button>Button</Button>
        <Button colorScheme="red" >Button</Button>
        <Button colorScheme="yellow" >Button</Button>
        <Button colorScheme="green" >Button</Button>
        <Button colorScheme="pink" >Button</Button>
        <Button colorScheme="blue" >Button</Button>
        <Button colorScheme="cyan" >Button</Button>
        <Button colorScheme="orange" >Button</Button>
        <Button colorScheme="purple" >Button</Button>
        <Button colorScheme="teal" >Button</Button>
        <Button colorScheme="linkdin" >Button</Button>
        <Button colorScheme="facebook" >Button</Button>
        <Button colorScheme="whatsapp" >Button</Button>
        <Button colorScheme="twitter" >Button</Button>
        <Button colorScheme="telegram" >Button</Button>
</Stack>

## Social Buttons

We've included the colors for common `social media` platforms, and you can simply use their buttons via the `colorScheme` prop.

![Social buttons](https://i.ibb.co/GHzpWtn/social.jpg)

javascript

<Stack row >
  <Button colorScheme="facebook">
    Facebook
  </Button>
            
  <Button colorScheme="twitter" 
    Twitter
  </Button>
            
  <Button colorScheme="telegram" 
    Telegram
   </Button>
           
  <Button colorScheme="whatsapp">
    Whatsapp
   </Button>     
</Stack>

## Button with Icons

We've included the left and right icons button.

![Social buttons](https://i.ibb.co/FXR4fdk/button-With-Icon.jpg)

javascript

<Stack>
    <Button leftIcon={<IoMdArrowBack />}Button></Button>
    <Button rightIcon={<IoMdArrowForward />} >Button</Button>
</Stack>

## License

MIT
