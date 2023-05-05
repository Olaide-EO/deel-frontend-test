# Deel frontend test - Autocomplete Component

AutoComplete is a React component that provides a search box with suggestions for the user to choose from.

## Installation

You can run this project by running

```
npm install or yarn install
```

followed by

```
npm start or yarn start
```


for production run

```
npm run build
```

## Usage

You can use the component by importing it and passing in the necessary props:

```import AutoComplete from '@yourorg/autocomplete';

const options = [
  { id: 1, name: 'John Smith', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
];

function handleSelect(option) {
  console.log(option);
}

function MyComponent() {
  return (
    <AutoComplete
      options={options}
      onSelect={handleSelect}
      placeholder="Search for a user..."
      keysToSearch={['name', 'email']}
      keysToShow={['name']}
      debounceTime={500}
    />
  );
}

```
## Props
The following props are available for the AutoComplete component:

* options: An array of objects representing the available options for the   user to choose from.
* onSelect: A function that is called when the user selects an option from the suggestions list.
* placeholder _(optional)_: The placeholder text to display in the search box.
* keysToSearch: An array of strings representing the keys in the options array to search for matches.
* keysToShow: An array of strings representing the keys in the options array to display in the suggestions list.
* debounceTime _(optional)_: The amount of time in milliseconds to delay the API call for filtering suggestions.


## Branches

- master -> React with classes, using create-react-app
- develop -> Implemented components
