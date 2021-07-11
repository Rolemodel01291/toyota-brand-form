# Hardship-UI

Created 4/4/2020

Used React/React-Redux/Redux-form/Redux-thunk/Material UI/Styled-components

## Development environment

Running the app locally requires an initial setup step:
```
docker-compose run setup
```

After that the app can be started by run:

```
docker-compose up app
```

And can then be accessed at: http://localhost:3000

### Themes

To customise a theme without changing a provider theme, you will need to add
`test-theme` to your hosts file. Then by accessing http://test-theme:3000 you
can adjust the test theme without affecting the provider themes
