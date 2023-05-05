## 1. What is the difference between Component and PureComponent? Give an example where it might break my app.

The main difference between them is that PureComponent automatically implements a function called `shouldComponentUpdate` for us, which helps to prevent unnecessary re-renders.

The `shouldComponentUpdate` function checks if the previous state or props are equal to the current state or props. If they are equal, then the component will not re-render, which can be helpful in some cases.

However, if your state or props contain nexted objects or arrays, then the PureComponent might not work as expected. This is because it uses a shallow comparison, which only checks the reference of the object or array, and not the contents. So, if the contents of the object or array change, the component won't re-render even though it should

## 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

Using `Context` with `shouldComponentUpdate` might be dangerous because `shouldComponent` method only gets called when the component props or states change. So if the context changes but the props or states don't, the component will not rerender causing context to be out of sync with the component's rendering

### 3. Describe 3 ways to pass information from a component to its PARENT.

1. Using callbacks. Parent components send via props a function (without being executed) to the Child component which will execute the function to send the data back to his parent.

```
const Parent = () => {
  const getChildData(val) {
    console.log(val)
  }

  return (
    <Child {...{getChildData}} />
  )
}

const Child = ({getchildData}) => {
  return (
    <button onClick={() => getChildData('Send data to parent')}>Submit data</button>
  )
}
```

2. Using events. This can be achieved by listening to child events. And Child can dispatch events to notify the parent of changes

3. Using centralised state management like `redux` and `context`. Child components can dispactch actions that updates a centralized state, and this can be consumed directly by the parent component by accessing the centralised state. 


## 4. Give 2 ways to prevent components from re-rendering.
 1. Using memo hook. the React.memo hook prevents unneccessary rerendering of a functional component by allowing rerendering only when there is a change in the component props

 2. In a class component, `shouldComponentUpdate` can be used to prevent rerender

## 5. What is a fragment and why do we need it? Give an example where it might break my app.

A `fragment` is like a wrapper for multiple elements, but it doesn't create any extra HTML element. It's really helpful when we want to group a list of items or elements, and we don't want to create an extra div or span tag that we don't need.

For example, if we want to render a list of items, we might want to wrap each item in a container element like a div or a span. But using a fragment, we can do that without creating any extra element.

Wrong code:

```
function Aa() {
  return (
    <Bb />
    <Bb />
  )
}
```

Correct code:

```
function Aa() {
  return (
    <>
      <Bb />
      <Bb />
    </>
  )
}
```

## 6. Give 3 examples of the HOC pattern.

HOC are higher order components are components that accept a component as an argument and return a new or updated component

Some usecases I remembr are the old redux `connect`, the old `withRouter` 

## 7. what's the difference in handling exceptions in promises, callbacks and async...await.

In promises and async...await we use try/catch block. While callbacks use don't make use of try/catch block. Callbacks are mostly used in old api pattern and are no longer encouraged


### 8. How many arguments does setState take and why is it async.

Setstate takes two arguments. First one is the object to update, the second one is an optional callback function to be called after the state has been updated. setState is asynchronous because React batches the changes that needs to be made for performance reasons

```
setState(v, (v) => {
  ...
})
```


### 9. List the steps needed to migrate a Class to Function Component.

1. Replace this.props with props.
2. Remove the render() method from the class component.
3. Replace this.state with useState hook and its initial value.
4. Replace any lifecycle methods with equivalent hooks.
5. Remove the constructor and any super() calls.
6. If the class component is using refs, replace them with useRef hook.
7. Replace any custom methods with functions.

### 10. List a few ways styles can be used with components.

1. Inline styles: Styles can be added directly to the component's JSX using the style attribute, like this:

```
<div style={{ backgroundColor: 'red', color: 'white' }}>Hello World!</div>
```

2. import style sheet in component 

```
import './styles.css';

<div className="my-component">Hello World!</div>
```

2. CSS preprocessor like SASS, Less 
3. CSS modules. Styles are defined in a separate CSS file with the .module.css
4. CSS-in-JS libraries: These are third-party libraries that allow styles to be defined as JavaScript objects or functions within the component's code. 

```
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
`;

<StyledDiv bgColor="red" textColor="white">Hello World!</StyledDiv>
```
### 11. How to render an HTML string coming from the server.

To render an HTML string coming from the server in a React component, one can use the `dangerouslySetInnerHTML` attribute along with a state variable that holds the HTML string.