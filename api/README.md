# Astrogram
A photo sharing app for astronomy photos


## Queries for each branch

#### vanilla_graphql

```
mutation{
  postPhoto(name:"fear", description:"fdsd"){
    id
    name
  }
}
```


```
query listPhotos{
  allPhotos{
    id
    description
    name
  }
}

```