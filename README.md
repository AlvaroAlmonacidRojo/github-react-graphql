# GITHUB REACT GRAPHQL

React App that display a list of react repositories from Github with Graphql

# GET GITHUB TOKEN

1. On any GitHub page, click your profile icon and then click Settings.
2. On the sidebar, click Personal access tokens.
3. Click Generate new token.
4. Add a token description and click Generate token.
5. Copy the token to a secure location or password management app.

# SET UP

1. Install dependencies

```npm install```  or  ```yarn```

2. Set env variables

Create .env file and set REACT_APP_GITHUB_TOKEN with the generated token.

```REACT_APP_GITHUB_TOKEN=```

3. Start

```npm start```   or ```yarn start```


# SET UP WITH DOCKER

1. Set env variables

Create .env file and set REACT_APP_GITHUB_TOKEN with the generated token.

```REACT_APP_GITHUB_TOKEN=```

2. ```docker build -t github-react-graphql .```
3. ```docker run -it -p 3000:3000 github-react-graphql```
