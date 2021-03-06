export const myGames: string = `
  query MyGames {
    games(sort: "createdAt:desc") {
      title
      description
      id
      genres {
        title
      }
      platform {
        title
      }
      createdAt
      updatedAt
      __typename
      picture {
        size
        url
        formats
      }
    }
  }
`