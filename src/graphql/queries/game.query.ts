export const game = `query MyGames($id: ID!) {
  game(id: $id) {
    title
    description
    id
    createdAt
    updatedAt
    __typename
    genres {
      title
    }
    platform {
      title
    }
    picture {
      size
      url
      formats
    }
  }
}
`