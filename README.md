# Notes

## PropTypes

* you can use propTypes to run typechecking on the props for a component
* you have to install the package manually
** npm i prop-types
* in our Link.js file, we're passing in 2 props: title & content
** say we know what type we always want these props to be, that's where we can set propTypes
*** ex:

```js
ComponentName.propTypes = {
  propertyName: PropTypes.string
}
```

## Default Props

* you can assign default values for your props by assigning the defaultProps property

```js
ComponentName.defaultProps = {
  propertyName: 'Default Name'
}
```

* even if you assign default props, if they aren't the appropriate type as defined in your propTypes object, you'll still see the errors/warnings
* you can make a prop required with the .isRequired addon

```js
ComponentName.propTypes = {
  propertyName: PropTypes.string.isRequired,
}
```

* it's good practice, if you set a property as required, set a default property value for it
